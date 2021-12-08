import { applyDecorators, Module } from '@nestjs/common';
import { InjectionUtil } from '@core/utils/injection.util';
import { ApplicationConfigInterface } from '@core/interfaces/application-config.interface';

export function Application(
  config: ApplicationConfigInterface,
  domainLayer: any,
) {
  return applyDecorators(
    Module(InjectionUtil.getApplicationLayerConfiguration(config, domainLayer)),
  );
}
