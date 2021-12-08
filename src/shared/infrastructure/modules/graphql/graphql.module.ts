import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { graphQLConfig } from '../../config/graphQL.config';
import { CqrsModule } from '@nestjs/cqrs';
import { registerEnums } from '../../config/enums.config';
import { PubSub } from 'graphql-subscriptions';

@Module({
  imports: [CqrsModule, GraphQLModule.forRootAsync(graphQLConfig)],
  providers: [PubSub],
  exports: [PubSub],
})
export class GraphqlModule {
  constructor() {
    registerEnums();
  }
}
