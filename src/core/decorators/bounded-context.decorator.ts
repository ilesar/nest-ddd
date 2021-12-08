import { applyDecorators, Module } from '@nestjs/common';

export function BoundedContext(infrastructureLayer: any) {
  return applyDecorators(
    Module({
      imports: [infrastructureLayer],
      providers: [],
      exports: [],
    }),
  );
}
