import ProductCardGrid from '@/components/product/ProductCard';
import type { ProductCardData } from '@/types/product';

// A titled row of product cards: Featured, New Arrivals, Popular, Special Offers
export default function ProductSection({ title, products }: { title: string; products: ProductCardData[] }) {
  if (products.length === 0) return null;
  return (
    <section>
      <h2 className="section-title">{title}</h2>
      <ProductCardGrid
        products={products.map((p) => ({
          id: p.id,
          name: p.name,
          category: p.category_name,
          price: p.final_price,
          oldPrice: p.discount_percent > 0 ? p.price : undefined,
          discount: p.discount_percent > 0 ? `${p.discount_percent}% OFF` : undefined,
          image: p.image || 'https://placehold.co/600x800?text=No+Image',
          inStock: p.in_stock,
        }))}
      />
    </section>
  );
}
