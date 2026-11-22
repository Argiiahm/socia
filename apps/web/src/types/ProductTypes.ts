export type ProductTypes = {
  id: string;
  name: string;
  price: number;
  thumbnail: string;
  user: {
    id: string;
    username: string;
  };
  images: string[];
  description: string;
  features: string[];
};

export type ProductResponse<TProduct = ProductTypes> = {
  success: boolean;
  message: string;
  product: TProduct;
};
