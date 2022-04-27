import { BoxEntity } from '../../entities';
import {
  PaymentRepository,
  IPayment,
  UserRepository,
} from '../../repositories';

const createPayment = async (
  email: string,
  payment: IPayment,
  box: BoxEntity
) => {
  const paymentInstance = new PaymentRepository();
  const user = await new UserRepository().findUser('email', email);
  const newPayment = paymentInstance.createPayment(payment);
  newPayment.box = box;
  newPayment.user = user;
  const savedPayment = await paymentInstance.savePayment(newPayment);

  return savedPayment;
};

export { createPayment };
