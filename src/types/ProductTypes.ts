export type ProductTypes = {
  id: number;
  slug: string;
  name: string;
  price: number;
  thumbnail: string;
  seller: {
    name: string;
  }
  images: string[];
  description: string;
  features: string[];

}
