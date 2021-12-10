import { QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepositoryInterface } from '@shared/domain/repositories/user-repository.interface';
import { UserTypeormRepository } from '@user/infrastructure/modules/database/repositories/user-typeorm.repository';
import { TemplateCommandHandler } from '@root/core/templates/_template.command-handler';
import { GetUserQuery } from '../../queries/get-user.query';
import { User } from '@shared/domain/models/user.model';

@QueryHandler(GetUserQuery)
export class GetUserQueryHandler extends TemplateCommandHandler<GetUserQuery> {
  constructor(
    @InjectRepository(UserTypeormRepository)
    private userRepository: UserRepositoryInterface,
  ) {
    super();
  }

  async execute(command: GetUserQuery): Promise<User> {
    const { userId } = command;

    return this.resolveUser(userId);
  }

  async resolveUser(userId: string) {
    const user = await this.userRepository.load(userId);

    if (user) return user;
  }
}
