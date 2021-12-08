import { QueryService, InjectQueryService } from '@nestjs-query/core';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { Resolver } from '@nestjs/graphql';
import { CountryDto } from '@shared/infrastructure/modules/graphql/dtos/country.dto';
import { CountryEntity } from '@shared/infrastructure/modules/database/entities/country.entity';

@Resolver(() => CountryDto)
export class CountryResolver extends CRUDResolver(CountryDto, {
  create: { disabled: true },
  read: { one: { disabled: false }, many: { disabled: false } },
  update: { disabled: true },
  delete: { disabled: true },
}) {
  constructor(
    @InjectQueryService(CountryEntity)
    readonly service: QueryService<CountryEntity>,
  ) {
    super(service);
  }
}
