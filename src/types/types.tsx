export type Product = {
  id: number;
  name: string;
  price: number;
};

export type CartProduct = {
  product: Product;
  quantity: number;
};
