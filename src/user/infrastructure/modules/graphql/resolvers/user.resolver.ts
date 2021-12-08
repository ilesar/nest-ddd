import { QueryService, InjectQueryService } from '@nestjs-query/core';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CommandBus } from '@nestjs/cqrs';
import { UpdateUserInput } from '../inputs/user/update-user.input';
import { UpdateUserCommand } from '@user/application/commands/update-user.command';
import { UserDto } from '@shared/infrastructure/modules/graphql/dtos/user.dto';
import { UserEntity } from '@shared/infrastructure/modules/database/entities/user.entity';
import { AuthenticatedUser } from '@shared/application/decorators/authenticated-user.decorator';
import { AuthenticationRequired } from '@shared/application/decorators/authentication-required.decorator';
import { User } from '@shared/domain/models/user.model';

@AuthenticationRequired()
@Resolver(() => UserDto)
export class UserResolver extends CRUDResolver(UserDto, {
  create: { disabled: true },
  read: { one: { disabled: false }, many: { disabled: false } },
  update: { disabled: true },
  delete: { disabled: true },
}) {
  constructor(
    @InjectQueryService(UserEntity)
    readonly service: QueryService<UserEntity>,
    private readonly commandBus: CommandBus,
  ) {
    super(service);
  }

  @Mutation(() => UserDto)
  async updateOneUser(
    @Args('input')
    input: UpdateUserInput,
    @AuthenticatedUser() currentUser: User,
  ): Promise<UserDto> {
    const command = new UpdateUserCommand(
      currentUser,
      input.role,
      input.country ? input.country.id : undefined,
      input.firstName,
      input.lastName,
      input.avatarUrl,
      input.email,
    );
    return this.commandBus.execute(command);
  }
}
