import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { LessonSectionType } from '@prisma/client';
import { PaginationDto, paginate, buildPaginatedResponse } from '@/common/utils/pagination';

interface CreateNoteDto {
  content: string;
  title?: string;
  lessonId?: string;
  courseId?: string;
  section?: LessonSectionType;
  tags?: string[];
  isPinned?: boolean;
}

@Injectable()
export class NotesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(userId: string, dto: CreateNoteDto) {
    return this.prisma.note.create({
      data: { userId, ...dto },
    });
  }

  async findAll(userId: string, pagination: PaginationDto, lessonId?: string) {
    const { skip, take } = paginate(pagination.page, pagination.limit);
    const where = { userId, ...(lessonId && { lessonId }) };

    const [notes, total] = await Promise.all([
      this.prisma.note.findMany({
        where,
        skip,
        take,
        orderBy: [{ isPinned: 'desc' }, { updatedAt: 'desc' }],
      }),
      this.prisma.note.count({ where }),
    ]);

    return buildPaginatedResponse(notes, total, pagination.page ?? 1, pagination.limit ?? 20);
  }

  async update(userId: string, noteId: string, data: Partial<CreateNoteDto>) {
    const note = await this.prisma.note.findUnique({ where: { id: noteId } });
    if (!note) throw new NotFoundException('Note not found');
    if (note.userId !== userId) throw new ForbiddenException('Not your note');

    return this.prisma.note.update({ where: { id: noteId }, data });
  }

  async delete(userId: string, noteId: string) {
    const note = await this.prisma.note.findUnique({ where: { id: noteId } });
    if (!note) throw new NotFoundException('Note not found');
    if (note.userId !== userId) throw new ForbiddenException('Not your note');

    return this.prisma.note.delete({ where: { id: noteId } });
  }
}
