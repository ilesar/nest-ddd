import { UserType } from '@shared/domain/enums/user-type.enum';
import { UserRole } from '@shared/domain/enums/user-role.enum';

export const userSeed = [
  {
    id: '105c7adf-02c5-4ddb-8fd6-116c1d83936c',
    firstName: 'Admin',
    lastName: 'Adminović',
    role: UserRole.Admin,
    country: 'f37552e6-0c7f-445d-a208-3cdc2101fe5a',
    type: UserType.Seed,
  },
];
