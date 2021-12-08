import { FindManyOptions, FindOneOptions, In, Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

export abstract class TemplateRepository<E> extends Repository<E> {
  load(id: string, relations: string[] = []) {
    if (!id) return;
    return this.findOne(id, {
      relations,
    });
  }

  loadBy(options: FindOneOptions<any>) {
    return this.findOne(options);
  }

  loadSome(ids: string[], relations: string[] = []) {
    return this.find({ where: { id: In(ids) }, relations: relations });
  }

  async loadMany(ids: string[], relations: string[] = []) {
    const results = (await this.find({
      where: { id: In(ids) },
      relations: relations,
    })) as any;

    for (const id of ids) {
      const foundResult = results.find((result) => result.id === id);

      if (!foundResult) {
        throw new NotFoundException(
          `[${id}] Model not found in ${this.constructor.name}`,
        );
      }
    }

    return results;
  }

  async loadManyBy(options: FindManyOptions<any>) {
    return (await this.find(options)) as any;
  }

  store(model: any) {
    return this.save(model);
  }

  storeMany(models: any[]) {
    return this.save(models);
  }
}
