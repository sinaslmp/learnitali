import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';
import { GeminiProvider } from './gemini.provider';

@Module({
  controllers: [ChatController],
  providers: [ChatService, GeminiProvider],
  exports: [ChatService],
})
export class ChatModule {}
