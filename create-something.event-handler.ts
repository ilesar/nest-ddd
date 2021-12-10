import { EventsHandler } from '@nestjs/cqrs';
import { CreateSomethingEvent } from './create-something.event';
import { TemplateEventHandler } from '@core/templates/_template.event-handler';

@EventsHandler(CreateSomethingEvent)
export class CreateSomethingEventHandler extends TemplateEventHandler<CreateSomethingEvent> {
  async execute(event: CreateSomethingEvent): Promise<void> {
    const { } = event;
  }
}
