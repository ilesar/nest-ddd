import { SetMetadata } from '@nestjs/common';
import { UserRole } from '@shared/domain/enums/user-role.enum';

export const ROLES_KEY = 'allowed_roles';
export const AllowedRoles = (...roles: UserRole[]) =>
  SetMetadata(ROLES_KEY, roles);
