import { getHome } from '@/services/home.service';
import type { HomeData } from '@/types/product';
import HeroBanner from '@/components/home/HeroBanner';
import CategoryList from '@/components/home/CategoryList';
import ProductSection from '@/components/home/ProductSection';

// HOME page  ->  calls  GET /api/home  (backend: routes > controller > service > model)
// This is a Server Component: it runs on the Next.js server, calls the API, and sends ready HTML.
export default async function ApiHome() {
  let data: HomeData | null = null;
  try {
    data = await getHome();
  } catch {
    data = null; // backend not running
  }

  if (!data) {
    return <p className="muted">Could not load data. Is the backend running on port 5000?</p>;
  }

  return (
    <>
      <HeroBanner />
      <CategoryList categories={data.categories} />
      <ProductSection title="Featured" products={data.featured} />
      <ProductSection title="New Arrivals" products={data.newArrivals} />
      <ProductSection title="Popular" products={data.popular} />
      <ProductSection title="Special Offers" products={data.offers} />
    </>
  );
}
