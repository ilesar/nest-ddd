import { Module } from '@nestjs/common';
import { SharedBoundedContext } from '@shared/shared.bounded-context';
import { UserBoundedContext } from '@user/user.bounded-context';

const BOUNDED_CONTEXTS = [];

@Module({
  imports: [SharedBoundedContext, UserBoundedContext, ...BOUNDED_CONTEXTS],
  providers: [],
  exports: [],
})
export class MainModule {}
