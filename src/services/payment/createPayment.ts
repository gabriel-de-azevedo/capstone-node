import {
  PaymentRepository,
  IPayment,
  UserRepository,
} from '../../repositories';

const createPayment = async (email: string, payment: IPayment) => {
  const paymentInstance = new PaymentRepository();
  const user = await new UserRepository().findUser('email', email);
  const newPayment = paymentInstance.createPayment(payment);
  newPayment.user = user;
  const savedPayment = await paymentInstance.savePayment(newPayment);

  const { password, address, ...formatedUser } = user;
  return { ...savedPayment, user: { ...formatedUser } };
};

export { createPayment };
