
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import WishlistButton from "../wishlist/WishlistButton";

export type CardGridProduct = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  inStock?: boolean;
  description?: string;
  oldPrice?: number;
  discount?: string;
  rating?: number;
  reviews?: number;
  label?: string;
};

interface CardGridProps {
  products: CardGridProduct[];
  showWishlist?: boolean;
}

const formatPrice = (price: number) =>
  `₹${price.toLocaleString("en-IN")}`;

export default function CardGrid({
  products,
  showWishlist = false,
}: CardGridProps) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <article
          key={product.id}
          className="group flex h-full min-w-0 flex-col overflow-hidden border border-[#eee5dc] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Product Image */}
          <Link
            href={`/products/${product.id}`}
            aria-label={`View ${product.name}`}
            className="block"
          >
            <div className="relative h-[280px] overflow-hidden bg-[#f4ede4]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 bg-white/95 px-3 py-2 text-[10px] tracking-wider text-[#351e23]">
                {product.label || "HANDLOOM"}
              </span>

              {product.discount && (
                <span className="absolute bottom-3 left-3 bg-[#632d35] px-3 py-2 text-[10px] font-semibold tracking-wider text-white">
                  {product.discount}
                </span>
              )}

              {product.inStock === false && (
                <span className="absolute bottom-3 left-3 bg-[#632d35] px-3 py-2 text-[10px] font-semibold tracking-wider text-white">
                  OUT OF STOCK
                </span>
              )}

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/10">
                <span className="translate-y-3 rounded-full bg-white px-4 py-3 text-xs font-semibold text-[#351e23] opacity-0 shadow-md transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View Product
                </span>
              </div>
            </div>
          </Link>

          {/* Wishlist */}
          {showWishlist && (
            <WishlistButton
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: product.category,
              }}
              className="absolute right-3 top-3 z-10 h-10 w-10 text-[#632d35] hover:bg-[#632d35] hover:text-white"
            />
          )}

          {/* Product Details */}
          <div className="flex flex-1 flex-col p-4">
            <p className="min-h-4 text-[10px] tracking-[0.15em] text-[#a77a43]">
              {product.category.toUpperCase()}
            </p>

            <h3 className="mt-2 line-clamp-2 min-h-[3.5rem] font-serif text-base leading-snug text-[#351e23] sm:text-lg">
              {product.name}
            </h3>

            <div className="mt-2 min-h-[2.5rem]">
              {product.rating !== undefined ? (
                <div className="flex items-center gap-2 text-xs text-[#66574e]">
                  <Star size={14} fill="#a47748" color="#a47748" />
                  <span className="font-semibold">
                    {product.rating.toFixed(1)}
                  </span>
                  <span className="text-[#a99a8b]">
                    ({product.reviews ?? 0} reviews)
                  </span>
                </div>
              ) : (
                <p className="line-clamp-2 text-xs leading-5 text-gray-500">
                  {product.description || ""}
                </p>
              )}
            </div>

            {/* Price and Details */}
            <div className="mt-auto flex min-h-[62px] items-center justify-between gap-2 border-t border-[#eee5dc] pt-3">
              <div>
                <p className="text-base font-semibold text-[#351e23]">
                  {formatPrice(product.price)}
                </p>

                {product.oldPrice !== undefined && (
                  <p className="text-xs text-gray-400 line-through">
                    {formatPrice(product.oldPrice)}
                  </p>
                )}
              </div>

              <Link
                href={`/products/${product.id}`}
                className="flex shrink-0 items-center gap-1 text-xs text-[#a77a43] transition hover:text-[#351e23]"
              >
                Details
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Product Action */}
            <Link
              href={`/products/${product.id}`}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-[#6f2638] py-3 text-xs font-medium text-[#6f2638] transition hover:bg-[#6f2638] hover:text-white"
            >
              <ShoppingBag size={15} />
              Explore Product
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
