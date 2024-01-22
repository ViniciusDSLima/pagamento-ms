import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentStatusEnum } from '../../../../domain/payment/enum/paymentStatus.enum';

@Entity('payments')
export class PaymentModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: number;

  @Column()
  name: string;

  @Column()
  number: string;

  @Column()
  expiration: string;

  @Column()
  code: string;

  @Column({ type: 'varchar' })
  paymentStatus: PaymentStatusEnum;

  @Column()
  orderId: string;

  @Column()
  formOfPayment: string;
}
