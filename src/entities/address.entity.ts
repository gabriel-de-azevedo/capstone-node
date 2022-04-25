import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('addresses')
export class AddressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  street: string;

  @Column({ nullable: false })
  number: string;

  @Column({ nullable: false })
  complement: string;

  @Column({ nullable: false })
  district: string;

  @Column({ nullable: false })
  cep: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  state: string;
}
