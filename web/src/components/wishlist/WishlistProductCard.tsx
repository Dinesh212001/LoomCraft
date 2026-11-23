"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import type { WishlistProduct } from "@/context/WishlistContext";

type Props = {
  product: WishlistProduct;
  onRemove: (id: string | number) => void;
};

const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;

// One saved product inside the wishlist grid.
export default function WishlistProductCard({ product, onRemove }: Props) {
  return (
    <article className="group overflow-hidden bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#e9dfd3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Remove from Wishlist */}
        <button
          type="button"
          onClick={() => onRemove(product.id)}
          aria-label={`Remove ${product.name} from wishlist`}
          title="Remove from Wishlist"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#632d35] shadow-md transition hover:bg-[#632d35] hover:text-white"
        >
          <Trash2 size={18} />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-5">
        {product.category && (
          <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-[#a47748]">
            {product.category}
          </p>
        )}

        <h2 className="min-h-[52px] font-serif text-lg font-semibold leading-snug text-[#632d35]">
          {product.name}
        </h2>

        <p className="mt-3 text-base font-bold text-[#632d35]">
          {formatPrice(product.price)}
        </p>

        {/* Product Actions */}
        <div className="mt-5 flex gap-2">
          <Link
            href={`/products/${encodeURIComponent(String(product.id))}`}
            className="flex flex-1 items-center justify-center gap-2 bg-[#632d35] py-3 text-[10px] font-bold tracking-wider text-white transition hover:bg-[#4d2028]"
          >
            <ShoppingBag size={15} />
            VIEW PRODUCT
          </Link>

          <button
            type="button"
            onClick={() => onRemove(product.id)}
            aria-label={`Remove ${product.name} from wishlist`}
            title="Remove product"
            className="flex h-11 w-11 items-center justify-center border border-[#632d35] text-[#632d35] transition hover:bg-[#632d35] hover:text-white"
          >
            <Heart size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}