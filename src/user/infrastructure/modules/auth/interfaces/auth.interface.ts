import { UserEntity } from '@shared/infrastructure/modules/database/entities/user.entity';

export type AuthenticatedUser = Pick<UserEntity, 'id'>;

export type UserContext = {
  req: {
    user: AuthenticatedUser;
  };
};
