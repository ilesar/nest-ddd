import AdminJS from 'adminjs';
import { Database, Resource } from '@adminjs/typeorm';
import { ApplicationLayer } from '@shared/application/application.layer';
import { infrastructureConfig } from '@shared/infrastructure/infrastructure.config';
import { Infrastructure } from '@core/decorators/infrastructure.decorator';

AdminJS.registerAdapter({ Database, Resource });

@Infrastructure(infrastructureConfig, ApplicationLayer)
export class InfrastructureLayer {}
