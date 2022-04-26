import { getRepository, Repository } from 'typeorm';
import { ProductEntity } from '../../entities';
import { Iproduct, IproductRepository } from './interface';

class ProductRepository implements IproductRepository {
  private ormRepository: Repository<ProductEntity>;

  constructor() {
    this.ormRepository = getRepository(ProductEntity);
  }

  createProduct = (productData: Iproduct) =>
    this.ormRepository.create(productData);

  saveProduct = async (productData: Iproduct) => {
    const saved = await this.ormRepository.save(productData);
    const [filtred] = await this.findProductbyKey('id', saved.id);
    return filtred;
  };

  findProductbyKey = async (key: string, value: any) => {
    const productFiltered = await this.ormRepository.find({
      [key]: value,
    });
    return productFiltered;
  };
  findProductAll = async () => await this.ormRepository.find();
}

export { ProductRepository, Iproduct };
