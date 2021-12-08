import { applyDecorators, Module } from '@nestjs/common';
import { InjectionUtil } from '@core/utils/injection.util';
import { InfrastructureConfigInterface } from '@core/interfaces/infrastructure-config.interface';

export function Infrastructure(
  config: InfrastructureConfigInterface,
  applicationLayer: any,
) {
  return applyDecorators(
    Module(
      InjectionUtil.getInfrastructureLayerConfiguration(
        config,
        applicationLayer,
      ),
    ),
  );
}
