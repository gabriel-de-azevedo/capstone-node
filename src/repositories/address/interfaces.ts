import { UpdateResult } from 'typeorm';

interface IAddress {
    id: string;
    street: any;
    number: string;
    complement: string;
    district: string;
    cep: string;
    city: string;
}

interface CreationAddress {
    street: string;
    number: string;
    complement: string;
    district: string;
    cep: string;
    city: string;
}

interface IAddressRepository {
  createAddress: (user: CreationAddress) => IAddress;
  saveAddress: (user: IAddress) => Promise<IAddress>;
  updateAddress: (
    id: string,
    update: { [x: string]: unknown }
  ) => Promise<UpdateResult>;
}

export { IAddress, CreationAddress, IAddressRepository };
