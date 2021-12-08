import { Column, Entity, OneToMany } from 'typeorm';
import { TemplateEntity } from '@core/templates/_template.entity';
import { UserEntity } from './user.entity';

@Entity({
  name: 'country',
})
export class CountryEntity extends TemplateEntity {
  @Column()
  code!: string;

  @Column()
  name!: string;

  @Column()
  continent!: string;

  @Column()
  currencyId!: string;

  @Column()
  phoneCode!: string;

  @Column()
  flag!: string;

  @OneToMany(() => UserEntity, (user) => user.country)
  users: UserEntity[];
}
