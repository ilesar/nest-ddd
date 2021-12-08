import { Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { TemplateDto } from '@core/templates/_template.dto';
import { Relation } from '@nestjs-query/query-graphql';
import { CountryDto } from './country.dto';
import { Dto } from '@shared/infrastructure/modules/decorators/dto.decorator';
import { UserRole } from '@shared/domain/enums/user-role.enum';

@Dto(UserDto)
@Relation('country', () => CountryDto, {
  disableRemove: true,
  disableUpdate: true,
})
export class UserDto extends TemplateDto {
  @Field(() => [UserRole])
  role!: UserRole;

  @Field({ nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  avatarUrl?: string;

  @IsEmail()
  @Field(() => String, { nullable: true })
  email?: string;
}
