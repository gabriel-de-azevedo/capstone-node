import { ProductRepository, Iproduct } from '../../repositories';

const createdProductService = async (productData: Iproduct) => {
  const productInstance = new ProductRepository();

  const createProduct = productInstance.createProduct(productData);

  const saveProduct = await productInstance.saveProduct(createProduct);
  return saveProduct;
};

export { createdProductService };
