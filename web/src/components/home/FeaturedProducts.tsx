
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  Star,
} from "lucide-react";

import WishlistButton from "../wishlist/WishlistButton";

const products = [
  {
    id: 1,
    name: "Peacock Blue Kanchipuram Silk Saree",
    category: "PURE SILK",
    price: 18999,
    oldPrice: 23999,
    discount: "21% OFF",
    rating: "4.9",
    reviews: 128,
    image: "/images/featured-peacock-blue.png",
    label: "BESTSELLER",
  },
  {
    id: 2,
    name: "Ivory Rose Traditional Silk Saree",
    category: "SILK COLLECTION",
    price: 12499,
    oldPrice: 15999,
    discount: "22% OFF",
    rating: "4.8",
    reviews: 96,
    image: "/images/featured-ivory-rose.png",
    label: "NEW ARRIVAL",
  },
  {
    id: 3,
    name: "Emerald Green Heritage Zari Saree",
    category: "HANDLOOM SILK",
    price: 16999,
    oldPrice: 21999,
    discount: "23% OFF",
    rating: "4.9",
    reviews: 84,
    image: "/images/featured-emerald-green.png",
    label: "HANDCRAFTED",
  },
  {
    id: 4,
    name: "Mustard Yellow Purple Border Silk Saree",
    category: "TRADITIONAL SILK",
    price: 11499,
    oldPrice: 14999,
    discount: "23% OFF",
    rating: "4.7",
    reviews: 73,
    image: "/images/featured-mustard-yellow.png",
    label: "POPULAR",
  },
];

export default function FeaturedProducts() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleProducts = Array.from(
    { length: products.length },
    (_, index) => products[(activeIndex + index) % products.length]
  );

  const formatPrice = (price: number) =>
    `₹${price.toLocaleString("en-IN")}`;

  return (
    <section className="bg-[#fffdf9] px-5 py-16 sm:px-8 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-[#a47748]">
              THE AARANYA EDIT
            </p>

            <h2 className="font-serif text-4xl font-semibold text-[#632d35] sm:text-5xl md:text-6xl">
              Featured Creations
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#66574e] sm:text-base">
              Discover handpicked treasures celebrating beautiful
              fabrics, intricate craftsmanship and the timeless
              artistry of Indian handlooms.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/collections"
              className="border-b border-[#a47748] pb-2 text-xs font-bold tracking-widest text-[#632d35] transition hover:text-[#a47748]"
            >
              VIEW ALL PRODUCTS
              <ArrowUpRight className="ml-2 inline" size={16} />
            </Link>

            <button
              type="button"
              onClick={() =>
                setActiveIndex(
                  (activeIndex - 1 + products.length) % products.length
                )
              }
              aria-label="Previous products"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dfcdb8] text-[#632d35] transition hover:bg-[#632d35] hover:text-white"
            >
              <ArrowLeft size={19} />
            </button>

            <button
              type="button"
              onClick={() =>
                setActiveIndex((activeIndex + 1) % products.length)
              }
              aria-label="Next products"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dfcdb8] text-[#632d35] transition hover:bg-[#632d35] hover:text-white"
            >
              <ArrowRight size={19} />
            </button>
          </div>
        </div>

        {/* Product Gallery */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">

          {visibleProducts.map((product) => (
            <article key={product.id} className="group min-w-0">

              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f1e9df]">

                <Link
                  href={`/products/${product.id}`}
                  className="absolute inset-0"
                  aria-label={`View ${product.name}`}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </Link>

                {/* Product Label */}
                <span className="absolute left-3 top-3 z-10 bg-[#632d35] px-3 py-2 text-[10px] font-bold tracking-wider text-white">
                  {product.label}
                </span>

                {/* Wishlist */}
                <WishlistButton
                  product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    category: product.category,
                  }}
                  className="absolute right-3 top-3 z-10 h-10 w-10 text-[#632d35]"
                />

                {/* Discount */}
                <span className="absolute bottom-3 left-3 z-10 bg-[#fffdf9] px-3 py-2 text-[11px] font-bold text-[#632d35]">
                  {product.discount}
                </span>

                {/* Quick View */}
                <Link
                  href={`/products/${product.id}`}
                  className="absolute bottom-3 right-3 z-10 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-white text-[#632d35] opacity-0 shadow-md transition-all duration-300 hover:bg-[#632d35] hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
                  aria-label={`View ${product.name}`}
                >
                  <ArrowUpRight size={21} />
                </Link>
              </div>

              {/* Product Information */}
              <div className="pt-5">

                <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-[#a47748]">
                  {product.category}
                </p>

                <Link href={`/products/${product.id}`}>
                  <h3 className="font-serif text-lg font-semibold leading-snug text-[#632d35] transition hover:text-[#a47748]">
                    {product.name}
                  </h3>
                </Link>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2 text-xs text-[#66574e]">
                  <Star
                    size={14}
                    fill="#A47748"
                    color="#A47748"
                  />

                  <span className="font-semibold">
                    {product.rating}
                  </span>

                  <span className="text-[#a99a8b]">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="text-base font-bold text-[#632d35]">
                    {formatPrice(product.price)}
                  </span>

                  <span className="text-sm text-[#a99a8b] line-through">
                    {formatPrice(product.oldPrice)}
                  </span>
                </div>

                {/* Product Action */}
                <Link
                  href={`/products/${product.id}`}
                  className="mt-5 flex w-full items-center justify-center gap-2 border border-[#632d35] py-3 text-xs font-bold tracking-widest text-[#632d35] transition hover:bg-[#632d35] hover:text-white"
                >
                  <ShoppingBag size={16} />
                  EXPLORE PRODUCT
                </Link>
              </div>
            </article>
          ))}

        </div>

        {/* Bottom Decorative Detail */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#b58a50]" />

          <p className="font-serif text-sm italic tracking-widest text-[#a47748]">
            Crafted with tradition. Chosen with love.
          </p>

          <span className="h-px w-16 bg-[#b58a50]" />
        </div>

      </div>
    </section>
  );
}
