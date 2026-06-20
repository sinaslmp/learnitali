import {
  Controller, Get, Patch, Delete, Body, Param,
  Query, UseGuards, HttpCode, HttpStatus,
} from '@nestjs/common';
import {
  ApiTags, ApiBearerAuth, ApiOperation,
  ApiQuery, ApiParam,
} from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { UsersService } from './users.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { RolesGuard } from '@/common/guards/roles.guard';
import { CurrentUser } from '@/common/decorators/current-user.decorator';
import { Roles } from '@/common/decorators/roles.decorator';
import { PaginationDto } from '@/common/utils/pagination';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @ApiOperation({ summary: 'Get current user profile' })
  getMe(@CurrentUser('id') userId: string) {
    return this.usersService.getMe(userId);
  }

  @Patch('me/profile')
  @ApiOperation({ summary: 'Update my profile' })
  updateProfile(@CurrentUser('id') userId: string, @Body() dto: UpdateProfileDto) {
    return this.usersService.updateProfile(userId, dto);
  }

  @Patch('me/settings')
  @ApiOperation({ summary: 'Update my settings' })
  updateSettings(@CurrentUser('id') userId: string, @Body() dto: Record<string, unknown>) {
    return this.usersService.updateSettings(userId, dto);
  }

  @Delete('me')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete my account' })
  deleteAccount(@CurrentUser('id') userId: string) {
    return this.usersService.deleteAccount(userId);
  }

  // ─── Admin endpoints ──────────────────────────────────────────

  @Get()
  @Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Admin: list all users' })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'role', enum: UserRole, required: false })
  listUsers(
    @Query() pagination: PaginationDto,
    @Query('search') search?: string,
    @Query('role') role?: UserRole,
  ) {
    return this.usersService.listUsers(pagination, search, role);
  }

  @Get(':id')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Admin: get user by ID' })
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Patch(':id/role')
  @Roles(UserRole.SUPER_ADMIN)
  @ApiOperation({ summary: 'Super Admin: change user role' })
  updateRole(
    @CurrentUser('id') adminId: string,
    @Param('id') targetId: string,
    @Body('role') role: UserRole,
  ) {
    return this.usersService.updateUserRole(adminId, targetId, role);
  }

  @Patch(':id/status')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Admin: ban/activate user' })
  setStatus(
    @Param('id') targetId: string,
    @Body('status') status: 'ACTIVE' | 'BANNED' | 'INACTIVE',
  ) {
    return this.usersService.setUserStatus(targetId, status);
  }
}
