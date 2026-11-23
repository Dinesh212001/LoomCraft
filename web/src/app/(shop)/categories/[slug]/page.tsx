import { notFound, redirect } from "next/navigation";

// Home / Navbar category links  ->  /categories/<slug>
// Each slug opens the Collections page with the matching category filter selected.
const CATEGORY_BY_SLUG: Record<string, string> = {
  "kanchipuram-silk": "Silk Sarees",
  "arani-silk": "Silk Sarees",
  "chettinad-cotton": "Cotton Sarees",
  "kovai-cotton": "Cotton Sarees",
  "linen-cotton": "Linen Sarees",
  "silk-dupattas": "Dupattas",
  "mens-cotton-veshti": "Men's Veshti",
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_BY_SLUG).map((slug) => ({ slug }));
}

export default async function CategoryPage({ params }: PageProps<"/categories/[slug]">) {
  const { slug } = await params;
  const category = CATEGORY_BY_SLUG[slug];

  if (!category) notFound(); // only unknown / mistyped slugs show 404

  redirect(`/collections?category=${encodeURIComponent(category)}`);
}
