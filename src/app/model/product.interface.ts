export interface Variant {
  id: string;
  quantity: number;
  title: string;
  sku: string;
}

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  variants: Variant[];
  price: string;
  tags: string[];
}



