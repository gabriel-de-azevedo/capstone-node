import { ProductEntity } from '../../entities';
import { ProductRepository } from '../../repositories';

const getProductService = async ({ id }) => {
  let result: ProductEntity[] = [];
  const boxRepo = new ProductRepository();
  result = await boxRepo.findProductAll();
  if (id) {
    result = result.filter((prodcut) => prodcut.id === id);
  }
  return result;
};

export { getProductService };
