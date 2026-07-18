import { Injectable, Logger, ServiceUnavailableException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI, Modality, Type } from '@google/genai';
import { wrapPcmAsWav } from './wav.util';

export interface ChatTurn {
  role: 'user' | 'model';
  text: string;
}

export interface GenerateReplyInput {
  systemInstruction: string;
  history: ChatTurn[];
  userText?: string;
  userAudio?: { data: Buffer; mimeType: string };
}

export interface GenerateReplyResult {
  /** What the user said/typed — echoes userText, or a transcript for audio input. */
  transcript: string;
  reply: string;
}

const TRANSCRIPT_REPLY_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    transcript: {
      type: Type.STRING,
      description: 'Verbatim transcript of what the user said, in the language they spoke it in',
    },
    reply: {
      type: Type.STRING,
      description: "Your reply to the user, following the system instructions",
    },
  },
  required: ['transcript', 'reply'],
};

@Injectable()
export class GeminiProvider {
  private readonly logger = new Logger(GeminiProvider.name);
  private readonly client: GoogleGenAI | null;
  private readonly chatModel: string;
  private readonly ttsModel: string;

  constructor(private readonly config: ConfigService) {
    const apiKey = this.config.get<string>('gemini.apiKey');
    this.client = apiKey ? new GoogleGenAI({ apiKey }) : null;
    this.chatModel = this.config.get<string>('gemini.chatModel')!;
    this.ttsModel = this.config.get<string>('gemini.ttsModel')!;
    if (!apiKey) {
      this.logger.warn('GEMINI_API_KEY is not set — chat requests will fail until it is configured.');
    }
  }

  private requireClient(): GoogleGenAI {
    if (!this.client) {
      throw new ServiceUnavailableException(
        'AI chat is not configured yet. Set GEMINI_API_KEY in the backend environment.',
      );
    }
    return this.client;
  }

  async generateReply({
    systemInstruction,
    history,
    userText,
    userAudio,
  }: GenerateReplyInput): Promise<GenerateReplyResult> {
    const client = this.requireClient();

    const historyContents = history.map((turn) => ({
      role: turn.role,
      parts: [{ text: turn.text }],
    }));

    const userPart = userAudio
      ? { inlineData: { data: userAudio.data.toString('base64'), mimeType: userAudio.mimeType } }
      : { text: userText ?? '' };

    const contents = [...historyContents, { role: 'user' as const, parts: [userPart] }];

    try {
      // Audio input has no free transcript, so ask Gemini to return both a
      // verbatim transcript and its reply as structured JSON — this avoids
      // a separate speech-to-text call entirely.
      if (userAudio) {
        const response = await client.models.generateContent({
          model: this.chatModel,
          contents,
          config: {
            systemInstruction,
            responseMimeType: 'application/json',
            responseSchema: TRANSCRIPT_REPLY_SCHEMA,
          },
        });
        const text = response.text;
        if (!text) throw new ServiceUnavailableException('AI did not return a response');
        const parsed = JSON.parse(text) as { transcript: string; reply: string };
        return parsed;
      }

      const response = await client.models.generateContent({
        model: this.chatModel,
        contents,
        config: { systemInstruction },
      });
      const reply = response.text;
      if (!reply) throw new ServiceUnavailableException('AI did not return a response');
      return { transcript: userText ?? '', reply };
    } catch (err) {
      this.logger.error('Gemini generateContent failed', err instanceof Error ? err.stack : err);
      if (err instanceof ServiceUnavailableException) throw err;
      throw new ServiceUnavailableException('AI chat request failed. Please try again.');
    }
  }

  async synthesizeSpeech(text: string): Promise<{ audioBase64: string; mimeType: string }> {
    const client = this.requireClient();

    try {
      const response = await client.models.generateContent({
        model: this.ttsModel,
        contents: [{ role: 'user', parts: [{ text }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } },
          },
        },
      });

      const part = response.candidates?.[0]?.content?.parts?.[0];
      const audioData = part?.inlineData?.data;
      const mimeType = part?.inlineData?.mimeType ?? 'audio/L16;rate=24000';
      if (!audioData) throw new ServiceUnavailableException('AI did not return audio');

      return { audioBase64: wrapPcmAsWav(audioData, mimeType), mimeType: 'audio/wav' };
    } catch (err) {
      this.logger.error('Gemini TTS failed', err instanceof Error ? err.stack : err);
      if (err instanceof ServiceUnavailableException) throw err;
      throw new ServiceUnavailableException('Speech synthesis failed. Please try again.');
    }
  }
}
