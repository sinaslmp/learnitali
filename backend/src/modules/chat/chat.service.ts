import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { ChatRole } from '@prisma/client';
import { GeminiProvider, ChatTurn } from './gemini.provider';

const MAX_HISTORY_TURNS = 20;

const GENERAL_SYSTEM_PROMPT = `You are "Marco", a warm, patient Italian language tutor for a Persian-speaking (فارسی) student on the Learnitali app.

Rules:
- Reply primarily in Persian (فارسی), using Italian words or phrases as examples with their Persian translation in parentheses.
- If the student writes or speaks in Italian, gently correct mistakes and briefly explain why, in Persian.
- Keep answers short and conversational — this is a chat, not an essay.
- Encourage the student and adapt to their apparent level.
- Never break character or mention that you are an AI model.`;

function buildSystemInstruction(lessonTitle: string | null, lessonContext: string | null): string {
  if (!lessonTitle && !lessonContext) return GENERAL_SYSTEM_PROMPT;
  return `${GENERAL_SYSTEM_PROMPT}

You are currently helping the student with this specific lesson:
Title: ${lessonTitle ?? '(بدون عنوان)'}
Content summary:
${lessonContext ?? '(no summary provided)'}

Focus your answers on this lesson's vocabulary, grammar, and topics. If the student asks something unrelated, answer briefly and gently steer the conversation back to the lesson.`;
}

interface CreateConversationDto {
  lessonId?: string;
  lessonTitle?: string;
  lessonContext?: string;
  title?: string;
}

@Injectable()
export class ChatService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly gemini: GeminiProvider,
  ) {}

  async listConversations(userId: string, lessonId?: string) {
    return this.prisma.chatConversation.findMany({
      where: { userId, ...(lessonId && { lessonId }) },
      orderBy: { updatedAt: 'desc' },
      include: { _count: { select: { messages: true } } },
    });
  }

  async createConversation(userId: string, dto: CreateConversationDto) {
    return this.prisma.chatConversation.create({
      data: {
        userId,
        lessonId: dto.lessonId,
        lessonTitle: dto.lessonTitle,
        lessonContext: dto.lessonContext,
        title: dto.title ?? (dto.lessonTitle ? `گفتگو درباره‌ی ${dto.lessonTitle}` : 'گفتگوی عمومی'),
      },
    });
  }

  async getConversation(userId: string, id: string) {
    const conversation = await this.prisma.chatConversation.findUnique({
      where: { id },
      include: { messages: { orderBy: { createdAt: 'asc' } } },
    });
    if (!conversation) throw new NotFoundException('Conversation not found');
    if (conversation.userId !== userId) throw new ForbiddenException('Not your conversation');
    return conversation;
  }

  async deleteConversation(userId: string, id: string) {
    const conversation = await this.prisma.chatConversation.findUnique({ where: { id } });
    if (!conversation) throw new NotFoundException('Conversation not found');
    if (conversation.userId !== userId) throw new ForbiddenException('Not your conversation');
    await this.prisma.chatConversation.delete({ where: { id } });
    return { success: true };
  }

  async sendTextMessage(userId: string, conversationId: string, content: string) {
    const conversation = await this.getConversation(userId, conversationId);
    const history = this.buildHistory(conversation.messages);
    const systemInstruction = buildSystemInstruction(conversation.lessonTitle, conversation.lessonContext);

    const { reply } = await this.gemini.generateReply({ systemInstruction, history, userText: content });

    return this.persistExchange(conversationId, content, reply, false);
  }

  async sendVoiceMessage(userId: string, conversationId: string, audio: Buffer, mimeType: string) {
    const conversation = await this.getConversation(userId, conversationId);
    const history = this.buildHistory(conversation.messages);
    const systemInstruction = buildSystemInstruction(conversation.lessonTitle, conversation.lessonContext);

    const { transcript, reply } = await this.gemini.generateReply({
      systemInstruction,
      history,
      userAudio: { data: audio, mimeType },
    });

    return this.persistExchange(conversationId, transcript, reply, true);
  }

  async synthesizeMessageAudio(userId: string, conversationId: string, messageId: string) {
    const conversation = await this.getConversation(userId, conversationId);
    const message = conversation.messages.find((m) => m.id === messageId);
    if (!message) throw new NotFoundException('Message not found');
    return this.gemini.synthesizeSpeech(message.content);
  }

  private buildHistory(messages: { role: ChatRole; content: string }[]): ChatTurn[] {
    return messages.slice(-MAX_HISTORY_TURNS).map((m) => ({
      role: m.role === ChatRole.USER ? 'user' : 'model',
      text: m.content,
    }));
  }

  private async persistExchange(
    conversationId: string,
    userContent: string,
    assistantContent: string,
    isVoiceInput: boolean,
  ) {
    const [userMessage, assistantMessage] = await this.prisma.$transaction([
      this.prisma.chatMessage.create({
        data: { conversationId, role: ChatRole.USER, content: userContent, isVoiceInput },
      }),
      this.prisma.chatMessage.create({
        data: { conversationId, role: ChatRole.ASSISTANT, content: assistantContent },
      }),
    ]);
    await this.prisma.chatConversation.update({
      where: { id: conversationId },
      data: { updatedAt: new Date() },
    });
    return { userMessage, assistantMessage };
  }
}
