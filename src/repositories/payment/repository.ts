import { getRepository, Repository } from 'typeorm';
import { PaymentEntity } from '../../entities';
import { IPayment, IPaymentRepository } from './interfaces';

class PaymentRepository implements IPaymentRepository {
  private ormRepository: Repository<PaymentEntity>;

  constructor() {
    this.ormRepository = getRepository(PaymentEntity);
  }
  createPayment = (payment: IPayment) => this.ormRepository.create(payment);

  savePayment = async (payment: IPayment) => {
    const saved = await this.ormRepository.save(payment);
    const [filtered] = await this.findPaymentByKey('id', saved.id);
    return filtered;
  };

  findPaymentByKey = async (key: string, value: any) => {
    const filteredPayment = await this.ormRepository.find({
      where: { [key]: value },
      relations: ['user', 'box'],
    });
    return filteredPayment;
  };
  findAllPayment = async () => {
    const allPayment = await this.ormRepository.find({
      relations: ['user', 'box'],
    });
    return allPayment;
  };
}

export { PaymentRepository, IPayment };
