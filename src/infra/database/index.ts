import { DataSource } from 'typeorm';
import { PaymentModel } from '../../application/payment/typeorm/model/payment.model';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'dev',
  password: 'dev',
  database: 'payment',
  synchronize: true,
  logging: true,
  entities: [PaymentModel],
});
