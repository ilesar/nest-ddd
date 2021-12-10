import { NotFoundException } from '@nestjs/common';
import { TemplateModel } from '@core/templates/_template.model';
import { ICommandHandler } from '@nestjs/cqrs';
import { TemplateCommand } from '@core/templates/_template.command';

export abstract class TemplateCommandHandler<C extends TemplateCommand>
  implements ICommandHandler<C>
{
  abstract execute(command: C): Promise<any>;

  protected async resolveModel<M extends TemplateModel>(
    repository: any,
    id: string,
    relations?: string[],
    mustExist = true,
  ): Promise<M | undefined> {
    const entity = await repository.load(id, relations);
    const model: M = entity as unknown as M;

    if (mustExist && !model) {
      throw new NotFoundException(
        `Model with ID = ${id} not found in ${repository.constructor.name}.`,
      );
    }

    return model;
  }

  protected async resolveModelBy<M extends TemplateModel>(
    repository: any,
    options: any,
    mustExist = true,
  ): Promise<M> {
    const entity = await repository.loadBy(options);
    const model: M = entity as unknown as M;
    if (mustExist && !model) {
      throw new NotFoundException(
        `Model not found in ${repository.constructor.name}.`,
      );
    }

    return model;
  }

  protected async resolveModels<M extends TemplateModel>(
    repository: any,
    ids: string[],
    relations?: string[],
  ): Promise<M[]> {
    const entities = await repository.loadMany(ids, relations);
    return entities as unknown as M[];
  }

  protected async resolveModelsBy<M extends TemplateModel>(
    repository: any,
    options: any,
  ): Promise<M[]> {
    const entities = await repository.loadManyBy(options);
    return entities as unknown as M[];
  }

  protected async resolveSomeModels<M extends TemplateModel>(
    repository: any,
    ids: string[],
    relations?: string[],
  ): Promise<M[]> {
    const entities = await repository.loadSome(ids, relations);
    return entities as unknown as M[];
  }
}
