
import Link from "next/link";
import Image from "next/image";

import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Kanchipuram Silk Sarees",
    subtitle: "Royal elegance with rich zari craftsmanship",
    image: "/images/kanchipuram-silk.jpg",
    link: "/categories/kanchipuram-silk",
    alt: "Traditional Kanchipuram silk saree with gold zari border",
  },
  {
    name: "Arani Silk Sarees",
    subtitle: "Lightweight silk with timeless tradition",
    image: "/images/arani-silk.jpg",
    link: "/categories/arani-silk",
    alt: "Traditional Arani silk saree",
  },
  {
    name: "Chettinad Cotton Sarees",
    subtitle: "Traditional checks and vibrant colours",
    image: "/images/chettinad-cotton.jpg",
    link: "/categories/chettinad-cotton",
    alt: "Colourful Chettinad cotton saree with checked pattern",
  },
  {
    name: "Kovai Cotton Sarees",
    subtitle: "Soft cotton and everyday comfort",
    image: "/images/kovai-cotton.jpeg",
    link: "/categories/kovai-cotton",
    alt: "Traditional Kovai cotton saree",
  },
  {
    name: "Handloom Linen Cotton Sarees",
    subtitle: "Natural textures and effortless elegance",
    image: "/images/linen-saree.jpg",
    link: "/categories/linen-cotton",
    alt: "Elegant natural linen cotton handloom saree",
  },
  {
    name: "Silk Dupattas",
    subtitle: "Beautiful silk with intricate traditional designs",
    image: "/images/dupattas.jpg",
    link: "/categories/silk-dupattas",
    alt: "Traditional silk dupatta with woven design",
  },
  {
    name: "Men's Cotton Veshti",
    subtitle: "Classic tradition with authentic craftsmanship",
    image: "/images/mens-handloom.jpg",
    link: "/categories/mens-cotton-veshti",
    alt: "Traditional South Indian men's cotton veshti",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-[#fffdf9] px-5 py-16 md:px-10 md:py-20 lg:px-16">

      {/* Section Heading */}
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#a47748]">
          EXPLORE OUR HANDLOOM COLLECTIONS
        </p>

        <h2 className="font-serif text-3xl font-semibold text-[#632d35] md:text-5xl">
          Discover Your Style
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
          Discover the beauty of South Indian handloom traditions.
          From exquisite silk sarees to elegant cotton collections,
          every weave celebrates heritage and craftsmanship.
        </p>

        <div className="mx-auto mt-6 h-[2px] w-16 bg-[#b58a50]" />
      </div>

      {/* Category Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {categories.map((category, index) => (
          <Link
            key={category.name}
            href={category.link}
            className={`group relative block h-[350px] overflow-hidden rounded-sm bg-[#eee5dc] shadow-sm sm:h-[400px] md:h-[430px]
              ${
                index === categories.length - 1
                  ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[calc(50%-0.75rem)] lg:col-span-1 lg:col-start-2 lg:max-w-none"
                  : ""
              }`}
          >
            {/* Category Image */}
            <Image
             src={category.image}
             alt={category.alt}
             fill
             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
             />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

            {/* Decorative Border */}
            <div className="pointer-events-none absolute inset-3 border border-white/30 transition-all duration-500 group-hover:inset-5 group-hover:border-[#e5c28f]/80" />

            {/* Category Information */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6 text-white md:p-7">

              <div className="min-w-0">
                <p className="mb-2 text-[10px] font-semibold tracking-[0.25em] text-[#f0d5a9] md:text-xs">
                  AARANYA HANDLOOM
                </p>

                <h3 className="font-serif text-xl font-semibold leading-tight md:text-2xl">
                  {category.name}
                </h3>

                <p className="mt-2 text-xs leading-6 text-white/85 md:text-sm">
                  {category.subtitle}
                </p>
              </div>

              {/* Explore Icon */}
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/70 transition-all duration-300 group-hover:border-[#632d35] group-hover:bg-[#632d35] md:h-12 md:w-12">
                <ArrowUpRight size={22} />
              </span>

            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}
