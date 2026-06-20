import {
  Controller, Get, Post, Patch, Delete,
  Body, Param, Query, UseGuards, HttpCode, HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { CoursesService } from './courses.service';
import { CreateCourseDto, UpdateCourseDto } from './dto/create-course.dto';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { RolesGuard } from '@/common/guards/roles.guard';
import { CurrentUser } from '@/common/decorators/current-user.decorator';
import { Roles } from '@/common/decorators/roles.decorator';
import { Public } from '@/common/decorators/public.decorator';
import { PaginationDto } from '@/common/utils/pagination';

@ApiTags('Courses')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('courses')
export class CoursesController {
  constructor(private readonly service: CoursesService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'List all published courses' })
  findAll(@Query() pagination: PaginationDto) {
    return this.service.findAll(pagination, true);
  }

  @Public()
  @Get(':slug')
  @ApiOperation({ summary: 'Get course by slug with lessons' })
  findOne(@Param('slug') slug: string) {
    return this.service.findOne(slug);
  }

  @Post()
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Admin: create new course' })
  create(@CurrentUser('id') creatorId: string, @Body() dto: CreateCourseDto) {
    return this.service.create(creatorId, dto);
  }

  @Patch(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Admin: update course' })
  update(@Param('id') id: string, @Body() dto: UpdateCourseDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @Roles(UserRole.SUPER_ADMIN)
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Super Admin: delete course' })
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }

  @Post(':id/enroll')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Enroll in a course' })
  enroll(@CurrentUser('id') userId: string, @Param('id') courseId: string) {
    return this.service.enroll(userId, courseId);
  }

  @Delete(':id/enroll')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Unenroll from a course' })
  unenroll(@CurrentUser('id') userId: string, @Param('id') courseId: string) {
    return this.service.unenroll(userId, courseId);
  }

  @Get('me/enrollments')
  @ApiOperation({ summary: 'Get my enrolled courses' })
  getMyEnrollments(@CurrentUser('id') userId: string) {
    return this.service.getMyEnrollments(userId);
  }
}
