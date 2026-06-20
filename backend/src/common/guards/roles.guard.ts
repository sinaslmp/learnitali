import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '@prisma/client';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles || requiredRoles.length === 0) return true;

    const { user } = context.switchToHttp().getRequest();
    if (!user) throw new ForbiddenException('No user in request');

    const roleHierarchy: Record<UserRole, number> = {
      STUDENT: 1,
      TEACHER: 2,
      ADMIN: 3,
      SUPER_ADMIN: 4,
    };

    const userLevel = roleHierarchy[user.role as UserRole] ?? 0;
    const hasRole = requiredRoles.some((r) => userLevel >= roleHierarchy[r]);

    if (!hasRole) {
      throw new ForbiddenException(`Required roles: ${requiredRoles.join(', ')}`);
    }
    return true;
  }
}
