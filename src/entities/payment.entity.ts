import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BoxEntity } from './box.entity';
import { UserEntity } from './user.entity';

@Entity('payments')
export class PaymentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @ManyToOne(() => UserEntity, (users) => users.payments)
  user: UserEntity;

  @ManyToOne(() => BoxEntity, (boxes) => boxes.payments)
  box: BoxEntity;
}
