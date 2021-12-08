import { Injectable } from '@nestjs/common';
import { FilterUtil } from '@root/core/utils/filter.util';
import { UserRole } from '@shared/domain/enums/user-role.enum';
import { Country } from '@shared/domain/models/country.model';
import { User } from '@shared/domain/models/user.model';

@Injectable()
export class UserManagementService {
  createUser(role: UserRole, country: Country): User {
    const user = new User();
    user.role = role;
    user.country = country;

    return user;
  }

  updateUser(
    user: User,
    {
      role,
      firstName,
      lastName,
      avatarUrl,
      email,
      country,
    }: {
      role?: UserRole;
      firstName?: string;
      lastName?: string;
      avatarUrl?: string;
      email?: string;
      country?: Country;
    },
  ): User {
    return FilterUtil.updateModel<User>(user, {
      role,
      country,
      firstName,
      lastName,
      avatarUrl,
      email,
    });
  }
}
