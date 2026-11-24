"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";
import WishlistButton from "@/components/wishlist/WishlistButton";

export type ProductCardGridProduct = {
  id: string | number;
  name: string;
  category?: string;
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

interface ProductCardGridProps {
  products: ProductCardGridProduct[];
  showWishlist?: boolean;
  gridClassName?: string;
}

const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;

export default function ProductCardGrid({
  products,
  showWishlist = true,
  gridClassName = "grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
}: ProductCardGridProps) {
  return (
    <div className={`grid items-stretch ${gridClassName}`}>
      {products.map((product) => {
        const href = `/products/${encodeURIComponent(String(product.id))}`;
        const outOfStock = product.inStock === false;

        return (
          <article
            key={product.id}
            className="group relative flex h-full min-w-0 flex-col overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Image */}
            <Link
              href={href}
              aria-label={`View ${product.name}`}
              className="block shrink-0"
            >
              <div className="relative h-[240px] overflow-hidden bg-[#f4ede4] sm:h-[260px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 bg-white/90 px-3 py-2 text-[10px] tracking-wider text-[#351e23]">
                  {product.label || "HANDLOOM"}
                </span>

                {outOfStock ? (
                  <span className="absolute bottom-3 left-3 bg-[#632d35] px-3 py-2 text-[10px] font-semibold tracking-wider text-white">
                    OUT OF STOCK
                  </span>
                ) : (
                  product.discount && (
                    <span className="absolute bottom-3 left-3 bg-[#632d35] px-3 py-2 text-[10px] font-semibold tracking-wider text-white">
                      {product.discount}
                    </span>
                  )
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

            {/* Details */}
            <div className="flex flex-1 flex-col p-3 sm:p-4">
              <p className="min-h-4 text-[10px] tracking-[0.15em] text-[#a77a43]">
                {(product.category ?? "").toUpperCase()}
              </p>

              <h3 className="mt-2 line-clamp-2 min-h-[3rem] font-serif text-base leading-snug text-[#351e23] sm:text-lg">
                {product.name}
              </h3>

              <p className="mt-2 line-clamp-2 min-h-[2.5rem] text-xs leading-5 text-gray-500">
                {product.description || ""}
              </p>

              <div className="mt-3 min-h-[20px]">
                {product.rating !== undefined && (
                  <div className="flex items-center gap-2 text-xs text-[#66574e]">
                    <Star size={14} fill="#a47748" color="#a47748" />
                    <span className="font-semibold">
                      {product.rating.toFixed(1)}
                    </span>
                    <span className="text-[#a99a8b]">
                      ({product.reviews ?? 0} reviews)
                    </span>
                  </div>
                )}
              </div>

              {/* Price */}
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
                  href={href}
                  className="flex shrink-0 items-center gap-1 text-xs text-[#a77a43] transition hover:text-[#351e23]"
                >
                  Details
                  <ArrowRight size={13} />
                </Link>
              </div>

              {/* Explore Product */}
              <Link
                href={href}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-md border border-[#6f2638] py-2.5 text-xs font-medium text-[#6f2638] transition hover:bg-[#6f2638] hover:text-white"
              >
                <ShoppingBag size={15} />
                Explore Product
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}