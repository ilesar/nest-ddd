import { applyDecorators } from '@nestjs/common';
import { CommandHandler } from '@nestjs/cqrs';

export function SubscriberHandler(subscriber: any) {
  return applyDecorators(CommandHandler(subscriber));
}
