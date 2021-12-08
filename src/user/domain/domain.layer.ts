/* istanbul ignore file */
import { domainConfig } from '@user/domain/domain.config';
import { Domain } from '@core/decorators/domain.decorator';

@Domain(domainConfig)
export class DomainLayer {}
