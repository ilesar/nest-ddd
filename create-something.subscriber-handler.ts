import { CreateSomethingSubscriber } from './create-something.subscriber';
import { TemplateSubscriberHandler } from '@core/templates/_template.subscriber-handler';
import { SubscriberHandler } from '@core/decorators/subscriber-handler.decorator';

@SubscriberHandler(CreateSomethingSubscriber)
export class CreateSomethingSubscriberHandler extends TemplateSubscriberHandler<CreateSomethingSubscriber> {
  constructor() {
    super();
  }

  async execute(subscriber: CreateSomethingSubscriber): Promise<void> {
    const {} = subscriber;
  }
}
