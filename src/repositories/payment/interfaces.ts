interface IPayment {
  id?: string;
  date: string;
  method: string;
  total: number;
}

interface IPaymentRepository {
  createPayment: (payment: IPayment) => IPayment;
  savePayment: (payment: IPayment) => Promise<IPayment>;
  findPaymentByKey: (key: string, value: string) => Promise<IPayment[]>;
  findAllPayment: () => Promise<IPayment[]>;
}

export { IPaymentRepository, IPayment };
