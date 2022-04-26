import { ProductRepository, Iproduct, BoxRepository } from '../../repositories';

const createdProductService = async (productData: Iproduct, boxId) => {
  const productInstance = new ProductRepository();
  const filteredProduct = productInstance.findProductbyKey(
    'tittle',
    productData.title
  );
  if (!filteredProduct[0]) {
    throw { msg: 'Product already exists' };
  }
  const box = new BoxRepository().findBoxByKey('id', boxId);
  const createProduct = productInstance.createProduct(productData);
  createProduct.box = box[0];
  const saveProduct = await productInstance.saveProduct(createProduct);
  return saveProduct;
};

export { createdProductService };
