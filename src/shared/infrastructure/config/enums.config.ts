import { registerEnumType } from '@nestjs/graphql';
import { UserRole } from '@shared/domain/enums/user-role.enum';

export const registerEnums = () => {
  registerEnumType(UserRole, {
    name: 'Role',
  });
};
