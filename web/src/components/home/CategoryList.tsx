import Link from 'next/link';
import type { Category } from '@/types/product';

export default function CategoryList({ categories }: { categories: Category[] }) {
  return (
    <div className="chips">
      {categories.map((c) => (
        <Link key={c.id} href={`/products?category=${c.slug}`} className="chip">{c.name}</Link>
      ))}
    </div>
  );
}
