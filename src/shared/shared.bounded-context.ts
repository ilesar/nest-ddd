import { InfrastructureLayer } from './infrastructure/infrastructure.layer';
import { BoundedContext } from '@core/decorators/bounded-context.decorator';

@BoundedContext(InfrastructureLayer)
export class SharedBoundedContext {}
