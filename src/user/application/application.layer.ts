/* istanbul ignore file */
import { DomainLayer } from '../domain/domain.layer';
import { applicationConfig } from '@user/application/application.config';
import { Application } from '@core/decorators/application.decorator';

@Application(applicationConfig, DomainLayer)
export class ApplicationLayer {}
