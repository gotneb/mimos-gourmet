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
