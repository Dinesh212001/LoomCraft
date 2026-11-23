export interface Category { id: string; name: string; slug: string }

export interface ProductCardData {
  id: string;
  name: string;
  slug: string;
  fabric_type: string;
  color: string | null;
  price: number;          // original price
  discount_percent: number;
  final_price: number;    // price after discount (calculated by backend)
  category_name: string;
  category_slug: string;
  image: string | null;
  in_stock: boolean;
}

export interface HomeData {
  categories: Category[];
  featured: ProductCardData[];
  newArrivals: ProductCardData[];
  popular: ProductCardData[];
  offers: ProductCardData[];
}
