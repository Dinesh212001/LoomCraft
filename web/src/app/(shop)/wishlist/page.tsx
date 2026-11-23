"use client";

import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import ProductCardGrid from "@/components/product/ProductCard";

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <main className="min-h-screen bg-[#f5efe7] px-5 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#a47748]">
            YOUR PERSONAL COLLECTION
          </p>

          <h1 className="font-serif text-4xl font-semibold text-[#632d35] sm:text-5xl">
            My Wishlist
          </h1>

          <p className="mt-4 text-sm text-[#66574e]">
            Your favourite handloom creations, all in one place.
          </p>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-[#b58a50]" />
        </div>

        {/* Wishlist Count */}
        <div className="mb-8 flex items-center justify-between">
          <p className="font-serif text-xl text-[#632d35]">
            Saved Items ({wishlist.length})
          </p>

          <Link
            href="/collections"
            className="text-sm font-semibold text-[#a47748] transition hover:text-[#632d35]"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Empty Wishlist */}
        {wishlist.length === 0 ? (
          <div className="bg-white px-6 py-16 text-center shadow-sm">
            <Heart
              size={52}
              strokeWidth={1.2}
              className="mx-auto mb-5 text-[#b58a50]"
            />

            <h2 className="font-serif text-2xl font-semibold text-[#632d35]">
              Your Wishlist is Empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#66574e]">
              You haven't saved any products yet. Explore our handloom
              collection and add your favourite designs here.
            </p>

            <Link
              href="/collections"
              className="mx-auto mt-7 inline-flex items-center gap-2 bg-[#632d35] px-7 py-3 text-xs font-bold tracking-wider text-white transition hover:bg-[#4d2028]"
            >
              <ShoppingBag size={16} />
              EXPLORE COLLECTION
            </Link>
          </div>
        ) : (

          /* Wishlist Products */
          <ProductCardGrid products={wishlist} showWishlist />
        )}

        {/* Bottom Detail */}
        <div className="mt-14 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#b58a50]" />

          <p className="font-serif text-sm italic tracking-wider text-[#a47748]">
            Handpicked favourites. Timeless elegance.
          </p>

          <span className="h-px w-12 bg-[#b58a50]" />
        </div>

      </div>
    </main>
  );
}