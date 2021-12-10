import { SubscriberHandler } from '@core/decorators/subscriber-handler.decorator';
import { SomethingSubscriber } from './something.subscriber';
import { TemplateSubscriberHandler } from '@core/templates/_template.subscriber-handler';

@SubscriberHandler(SomethingSubscriber)
export class SomethingSubscriberHandler extends TemplateSubscriberHandler<SomethingSubscriber> {
  async execute(subscriber: SomethingSubscriber): Promise<void> {
    const { } = subscriber;
  }
}
