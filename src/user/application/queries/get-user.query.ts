import { TemplateQuery } from '@core/templates/_template.query';

export class GetUserQuery extends TemplateQuery {
  constructor(public readonly userId: string) {
    super({
      userId,
    });
  }
}
