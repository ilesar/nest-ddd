import { Entity } from 'typeorm';
import { TemplateEntity } from '@core/templates/_template.entity';

@Entity()
export class SomethingEntity extends TemplateEntity {
}
