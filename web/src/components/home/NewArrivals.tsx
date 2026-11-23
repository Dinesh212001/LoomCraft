
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ShoppingBag,
  Star,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Royal Maroon Handwoven Silk Saree",
    category: "PREMIUM SILK",
    price: 15999,
    oldPrice: 19999,
    discount: "20% OFF",
    rating: "4.9",
    reviews: 86,
    image: "/images/new-royal-maroon-silk.png",
    label: "JUST ARRIVED",
  },
  {
    id: 2,
    name: "Pastel Green Traditional Cotton Saree",
    category: "PURE COTTON",
    price: 6499,
    oldPrice: 7999,
    discount: "18% OFF",
    rating: "4.8",
    reviews: 64,
    image: "/images/new-pastel-green-cotton.png",
    label: "NEW DESIGN",
  },
  {
    id: 3,
    name: "Mustard Yellow Elegant Linen Saree",
    category: "LINEN COLLECTION",
    price: 7499,
    oldPrice: 8999,
    discount: "16% OFF",
    rating: "4.7",
    reviews: 52,
    image: "/images/new-mustard-yellow-linen.png",
    label: "TRENDING",
  },
  {
    id: 4,
    name: "Rose Pink Handloom Silk Cotton Saree",
    category: "SILK COTTON",
    price: 8999,
    oldPrice: 10999,
    discount: "18% OFF",
    rating: "4.8",
    reviews: 71,
    image: "/images/new-rose-pink-silk-cotton.png",
    label: "NEW ARRIVAL",
  },
];

export default function NewArrivals() {
  const formatPrice = (price: number) =>
    `₹${price.toLocaleString("en-IN")}`;

  return (
    <section className="bg-[#f5efe7] px-5 pt-12 pb-0 sm:px-8 md:pt-14 md:pb-0 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Centered Section Heading */}
        <div className="mb-12 flex flex-col items-center justify-center text-center">

          <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#a47748]">
            FRESH FROM OUR LOOMS
          </p>

          <h2 className="font-serif text-4xl font-semibold text-[#632d35] sm:text-5xl md:text-6xl">
            New Arrivals
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#66574e] sm:text-base">
            Explore our latest handloom creations, thoughtfully selected
            to bring fresh colours and timeless elegance to your wardrobe.
          </p>

          {/* Gold Decorative Divider */}
          <div className="mt-6 h-[2px] w-20 bg-[#b58a50]" />

        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <article
              key={product.id}
              className="group min-w-0 overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#e9dfd3]">

                <Link
                  href="/new-arrivals"
                  aria-label={`View ${product.name} in New Arrivals`}
                  className="absolute inset-0"
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
                <span className="absolute left-4 top-4 z-10 bg-[#632d35] px-3 py-2 text-[10px] font-bold tracking-wider text-white">
                  {product.label}
                </span>

                {/* Discount */}
                <span className="absolute bottom-4 left-4 z-10 bg-[#fffdf9] px-3 py-2 text-[11px] font-bold text-[#632d35]">
                  {product.discount}
                </span>

                {/* Quick Explore */}
                <Link
                  href="/new-arrivals"
                  aria-label={`Explore ${product.name}`}
                  className="absolute bottom-4 right-4 z-10 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-[#632d35] opacity-0 shadow-md transition-all duration-300 hover:bg-[#632d35] hover:text-white group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <ArrowUpRight size={20} />
                </Link>

              </div>

              {/* Product Details */}
              <div className="p-5">

                <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-[#a47748]">
                  {product.category}
                </p>

                <h3 className="min-h-[52px] font-serif text-lg font-semibold leading-snug text-[#632d35]">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2 text-xs text-[#66574e]">

                  <Star
                    size={14}
                    fill="#a47748"
                    color="#a47748"
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

                {/* Explore Button */}
                <Link
                  href="/new-arrivals"
                  className="mt-5 flex w-full items-center justify-center gap-2 border border-[#632d35] py-3 text-[10px] font-bold tracking-[0.15em] text-[#632d35] transition hover:bg-[#632d35] hover:text-white"
                >
                  <ShoppingBag size={15} />
                  EXPLORE COLLECTION
                </Link>

              </div>
            </article>
          ))}

        </div>

        {/* Bottom Decorative Detail */}
        <div className="mt-12 flex items-center justify-center gap-4">

          <span className="h-px w-14 bg-[#b58a50]" />

          <p className="font-serif text-sm italic tracking-wider text-[#a47748]">
            Fresh styles. Timeless traditions.
          </p>

          <span className="h-px w-14 bg-[#b58a50]" />

        </div>

      </div>
    </section>
  );
}
