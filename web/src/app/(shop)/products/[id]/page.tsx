
import ProductDetailsClient from "./ProductDetailsClient";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({
  params,
}: PageProps) {
  const { id } = await params;

  return <ProductDetailsClient id={id} />;
}
