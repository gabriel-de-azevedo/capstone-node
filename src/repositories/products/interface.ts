interface Iproduct {
  id?: string;
  title: string;
  description: string;
}

interface IproductRepository {
  createProduct: (productData: Iproduct) => Iproduct;
  saveProduct: (ProductData: Iproduct) => Promise<Iproduct>;
  findProductbyKey: (key: string, value: string) => Promise<Iproduct[]>;
  findProductAll: () => Promise<Iproduct[]>;
}

export { IproductRepository, Iproduct };
