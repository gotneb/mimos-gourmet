export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  photos: string[];
  category: string;
};

export type CakeCategory = {
  id: string;
  title: string;
  description: string;
  startPrice: number;
  image: string;
};

export type FeaturedCake = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
};

export type ProductOption = {
  id: string;
  name: string;
  price: number;
};

export type ProductDetail = {
  id: string;
  title: string;
  description: string;
  basePrice: number;
  images: string[];
  flavors: ProductOption[];
  sizes: ProductOption[];
  batterTypes: ProductOption[];
  category: string;
};
