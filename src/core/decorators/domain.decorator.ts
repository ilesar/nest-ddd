import { applyDecorators, Module } from '@nestjs/common';
import { DomainConfigInterface } from '@core/interfaces/domain-config.interface';
import { InjectionUtil } from '@core/utils/injection.util';

export function Domain(config: DomainConfigInterface) {
  return applyDecorators(
    Module(InjectionUtil.getDomainLayerConfiguration(config)),
  );
}
