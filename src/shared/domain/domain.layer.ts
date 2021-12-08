/* istanbul ignore file */
import { Domain } from '@core/decorators/domain.decorator';
import { domainConfig } from '@shared/domain/domain.config';

@Domain(domainConfig)
export class DomainLayer {}
