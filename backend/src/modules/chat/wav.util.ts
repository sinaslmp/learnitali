// Gemini's TTS response is raw PCM with no container — 16-bit signed
// little-endian, mono, sample rate given in the mimeType (e.g.
// "audio/L16;rate=24000"). Browsers can't play raw PCM directly, so wrap it
// in a minimal 44-byte WAV header before sending it to the client.
export function wrapPcmAsWav(pcmBase64: string, mimeType: string): string {
  const pcm = Buffer.from(pcmBase64, 'base64');
  const rateMatch = /rate=(\d+)/.exec(mimeType);
  const sampleRate = rateMatch ? parseInt(rateMatch[1], 10) : 24000;
  const bitsPerSample = 16;
  const numChannels = 1;
  const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
  const blockAlign = numChannels * (bitsPerSample / 8);

  const header = Buffer.alloc(44);
  header.write('RIFF', 0, 'ascii');
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write('WAVE', 8, 'ascii');
  header.write('fmt ', 12, 'ascii');
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write('data', 36, 'ascii');
  header.writeUInt32LE(pcm.length, 40);

  return Buffer.concat([header, pcm]).toString('base64');
}
