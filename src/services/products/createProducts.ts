import { ProductRepository, Iproduct, BoxRepository } from '../../repositories';
import { ErrorHandler } from '../../utils';

const createdProductService = async (productData: Iproduct, boxId: string) => {
  const productInstance = new ProductRepository();
  const filteredProduct = await productInstance.findProductbyKey(
    'title',
    productData.title
  );
  if (filteredProduct.length > 0) {
    throw new ErrorHandler(409, 'product already exists');
  }
  const box = await new BoxRepository().findBoxByKey('id', boxId);
  const createProduct = productInstance.createProduct(productData);
  createProduct.box = box[0];
  const saveProduct = await productInstance.saveProduct(createProduct);
  return saveProduct;
};

export { createdProductService };
