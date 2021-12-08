/* istanbul ignore file */
import { DomainLayer } from '../domain/domain.layer';
import { Application } from '@core/decorators/application.decorator';
import { applicationConfig } from '@shared/application/application.config';

@Application(applicationConfig, DomainLayer)
export class ApplicationLayer {}
