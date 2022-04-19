import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentEntity } from './payment.entity';
import { ProductEntity } from './product.entity';

@Entity('boxes')
export class BoxEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  month: string;

  @OneToMany(() => ProductEntity, (products) => products.box)
  products: ProductEntity[];

  @OneToMany(() => PaymentEntity, (payments) => payments.box)
  payments: PaymentEntity[];
}
