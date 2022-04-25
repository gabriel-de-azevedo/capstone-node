import { getRepository, Repository } from 'typeorm';
import { AddressEntity } from './../../entities/address.entity';
import { CreationAddress, IAddress, IAddressRepository } from './interfaces';

class AddressRepository implements IAddressRepository {
  private ormRepository: Repository<AddressEntity>;

  constructor() {
    this.ormRepository = getRepository(AddressEntity);
  }
  createAddress: (address: CreationAddress) => IAddress = (
    address: CreationAddress
  ) => this.ormRepository.create(address);
  saveAddress = async (address: IAddress) => this.ormRepository.save(address);
  findAddress = async (key: string, value: string) =>
    await this.ormRepository.findOne({
      [key]: value,
    });
  updateAddress = async (id: string, update: { [x: string]: unknown }) =>
    await this.ormRepository.update(id, update);
}

export { AddressRepository, IAddress, CreationAddress };
