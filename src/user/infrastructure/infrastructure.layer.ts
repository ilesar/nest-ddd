/* istanbul ignore file */
import { ApplicationLayer } from '../application/application.layer';
import { infrastructureConfig } from '@user/infrastructure/infrastructure.config';
import { Infrastructure } from '@core/decorators/infrastructure.decorator';

@Infrastructure(infrastructureConfig, ApplicationLayer)
export class InfrastructureLayer {}
