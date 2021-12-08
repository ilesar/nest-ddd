import { UserEntity } from '@shared/infrastructure/modules/database/entities/user.entity';
import { UserResolver } from '../modules/graphql/resolvers/user.resolver';
import { CountryEntity } from '@shared/infrastructure/modules/database/entities/country.entity';
import { CountryResolver } from '../modules/graphql/resolvers/country.resolver';
import { UserDto } from '@shared/infrastructure/modules/graphql/dtos/user.dto';
import { CountryDto } from '@shared/infrastructure/modules/graphql/dtos/country.dto';
import { GraphqlCrudMapInterface } from '@shared/infrastructure/modules/graphql/interfaces/graphql-crud-map.interface';

export const graphqlCrudMap: GraphqlCrudMapInterface[] = [
  {
    dto: UserDto,
    entity: UserEntity,
    resolver: UserResolver,
  },
  {
    dto: CountryDto,
    entity: CountryEntity,
    resolver: CountryResolver,
  },
];
