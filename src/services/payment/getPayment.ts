import { PaymentEntity } from '../../entities';
import { PaymentRepository } from '../../repositories';

const getPaymentService = async ({ date, method, total, user, box }) => {
  let result = [];
  const paymentRepo = new PaymentRepository();
  result = await paymentRepo.findAllPayment();
  if (date) {
    result = result.filter((item) => item.date === date);
  }
  if (method) {
    result = result.filter((item) => item.method === method);
  }
  if (total) {
    result = result.filter((item) => item.total === Number(total));
  }
  if (user) {
    result = result.filter((item) => item.user.id === user);
  }
  if (box) {
    result = result.filter((item) => item.box.id === box);
  }

  result = result.map((item) => {
    const { password, admin, ...formatedUser } = item.user;
    return { ...item, user: formatedUser };
  });

  return result;
};

export { getPaymentService };
