
"use client";

import { Heart } from "lucide-react";
import { useWishlist, WishlistProduct } from "../../context/WishlistContext";

interface WishlistButtonProps {
  product: WishlistProduct;
  className?: string;
}

export default function WishlistButton({
  product,
  className = "",
}: WishlistButtonProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isSaved = isInWishlist(product.id);

  return (
    <button
      type="button"
      onClick={() => toggleWishlist(product)}
      aria-label={
        isSaved ? "Remove from wishlist" : "Add to wishlist"
      }
      aria-pressed={isSaved}
      title={isSaved ? "Remove from Wishlist" : "Add to Wishlist"}
      className={`flex items-center justify-center rounded-full bg-white shadow-md transition-all hover:scale-110 ${className}`}
    >
      <Heart
        size={20}
        className={`transition-colors ${
          isSaved
            ? "fill-red-500 text-red-500"
            : "text-gray-600 hover:text-red-500"
        }`}
      />
    </button>
  );
}
