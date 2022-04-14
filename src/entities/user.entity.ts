import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AddressEntity } from './address.entity';
import { FeedbackEntity } from './feedback.entity';
import { PaymentEntity } from './payment.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ unique: true, nullable: false })
  cpf: string;

  @Column({ nullable: false })
  phone: string;

  @Column({ nullable: true, default: false })
  admin: boolean;

  @OneToOne(() => AddressEntity, { nullable: true })
  @JoinColumn()
  address: AddressEntity;

  @OneToMany(() => PaymentEntity, (payments) => payments.user)
  payments: PaymentEntity[];

  @OneToMany(() => FeedbackEntity, (feedbacks) => feedbacks.user)
  feedbacks: FeedbackEntity[];
  key: any;
}
