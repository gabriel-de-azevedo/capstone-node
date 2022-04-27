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
  const savedPayment = await paymentInstance.savePayment(newPayment);

  const { password, address, ...formatedUser } = user;
  return { ...savedPayment, user: { ...formatedUser }, box };
};

export { createPayment };
