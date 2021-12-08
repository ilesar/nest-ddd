import { Entity, JoinColumn, Column, ManyToOne } from 'typeorm';
import { TemplateEntity } from '@core/templates/_template.entity';
import { CountryEntity } from './country.entity';
import { UserType } from '@shared/domain/enums/user-type.enum';
import { UserRole } from '@shared/domain/enums/user-role.enum';

@Entity({
  name: 'user',
})
export class UserEntity extends TemplateEntity {
  @Column({
    type: 'enum',
    enum: UserRole,
    nullable: true,
  })
  role: UserRole;

  @Column({ nullable: true, length: 255 })
  firstName?: string;

  @Column({ nullable: true, length: 255 })
  lastName?: string;

  @Column({
    nullable: true,
  })
  avatarUrl: string;

  @Column({ nullable: true, length: 255 })
  email?: string;

  @ManyToOne(() => CountryEntity, (country) => country.users)
  @JoinColumn()
  country: CountryEntity;

  @Column({ nullable: true })
  type: UserType;
}
