import { applyDecorators, UseGuards } from '@nestjs/common';
import { AllowedRoles } from '@shared/infrastructure/modules/auth/decorators/allowed-roles.decorator';
import { UserRole } from '@shared/domain/enums/user-role.enum';
import { JwtGuard } from '@shared/infrastructure/modules/auth/guards/jwt.guard';
import { AllowedRolesGuard } from '@shared/infrastructure/modules/auth/guards/allowed-roles.guard';

export function Protected(...roles: UserRole[]) {
  return applyDecorators(
    AllowedRoles(...roles),
    UseGuards(JwtGuard, AllowedRolesGuard),
  );
}
