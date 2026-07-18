import {
  Controller, Get, Post, Delete,
  Body, Param, Query, UseGuards, UseInterceptors, UploadedFile,
  ParseFilePipe, MaxFileSizeValidator,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiConsumes } from '@nestjs/swagger';
import { ChatService } from './chat.service';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { CurrentUser } from '@/common/decorators/current-user.decorator';

const MAX_AUDIO_SIZE = 25 * 1024 * 1024; // 25MB — short voice messages only

@ApiTags('Chat')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get('conversations')
  @ApiOperation({ summary: 'List my chat conversations' })
  listConversations(@CurrentUser('id') userId: string, @Query('lessonId') lessonId?: string) {
    return this.chatService.listConversations(userId, lessonId);
  }

  @Post('conversations')
  @ApiOperation({ summary: 'Start a new conversation (general, or scoped to a lesson)' })
  createConversation(
    @CurrentUser('id') userId: string,
    @Body() body: { lessonId?: string; lessonTitle?: string; lessonContext?: string; title?: string },
  ) {
    return this.chatService.createConversation(userId, body);
  }

  @Get('conversations/:id')
  @ApiOperation({ summary: 'Get a conversation with its messages' })
  getConversation(@CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.chatService.getConversation(userId, id);
  }

  @Delete('conversations/:id')
  @ApiOperation({ summary: 'Delete a conversation' })
  deleteConversation(@CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.chatService.deleteConversation(userId, id);
  }

  @Post('conversations/:id/messages')
  @ApiOperation({ summary: 'Send a text message and get the AI reply' })
  sendMessage(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() body: { content: string },
  ) {
    return this.chatService.sendTextMessage(userId, id, body.content);
  }

  @Post('conversations/:id/voice')
  @UseInterceptors(FileInterceptor('audio'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Send a recorded voice message and get the AI reply (transcript + text)' })
  sendVoiceMessage(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @UploadedFile(new ParseFilePipe({ validators: [new MaxFileSizeValidator({ maxSize: MAX_AUDIO_SIZE })] }))
    file: Express.Multer.File,
  ) {
    return this.chatService.sendVoiceMessage(userId, id, file.buffer, file.mimetype);
  }

  @Post('conversations/:conversationId/messages/:messageId/speech')
  @ApiOperation({ summary: 'Synthesize speech audio for an existing message (not persisted)' })
  synthesizeSpeech(
    @CurrentUser('id') userId: string,
    @Param('conversationId') conversationId: string,
    @Param('messageId') messageId: string,
  ) {
    return this.chatService.synthesizeMessageAudio(userId, conversationId, messageId);
  }
}
