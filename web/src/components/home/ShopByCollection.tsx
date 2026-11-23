
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    number: "01",
    name: "Kanchipuram Silk",
    subtitle: "A legacy of royal elegance",
    description:
      "Discover luxurious silk with intricate zari craftsmanship and timeless South Indian heritage.",
    image: "/images/Kanchipuram-collection.jpg",
    className: "lg:col-span-7 lg:row-span-2",
  },
  {
    number: "02",
    name: "Chettinad Cotton",
    subtitle: "Colourful stories in every weave",
    description:
      "Traditional checks and beautiful contrast borders.",
    image: "/images/Chettinad-collection.jpg",
    className: "lg:col-span-5",
  },
  {
    number: "03",
    name: "Arani Silk",
    subtitle: "Grace in every thread",
    description:
      "Elegant silk creations with beautiful traditional details.",
    image: "/images/Arani-collection.jpg",
    className: "lg:col-span-5",
  },
  {
    number: "04",
    name: "Traditional Silk",
    subtitle: "Tradition, beautifully preserved",
    description:
      "Explore timeless silk designs created for memorable occasions.",
    image: "/images/Traditional-silk.jpg",
    className: "lg:col-span-12",
  },
];

export default function ShopByCollection() {
  return (
    <section className="overflow-hidden bg-[#f8f3ec] px-5 py-16 sm:px-8 md:py-24 lg:px-16">

      <div className="mx-auto max-w-7xl">

        {/* Centered Section Heading */}
        <div className="mb-14 flex flex-col items-center text-center">

          <p className="mb-5 text-xs font-bold tracking-[0.35em] text-[#a47748]">
            CURATED WITH HERITAGE
          </p>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#632d35] sm:text-5xl md:text-6xl">
            Shop by Collection
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#66574e] sm:text-base md:text-lg">
            Explore thoughtfully selected handloom collections,
            where every fabric carries a story of tradition,
            artistry and timeless elegance.
          </p>

          {/* Explore All Collections */}
          <Link
            href="/collections"
            className="mt-7 inline-flex items-center gap-3 border-b border-[#a47748] pb-2 text-xs font-bold tracking-widest text-[#632d35] transition hover:text-[#a47748]"
          >
            EXPLORE ALL COLLECTIONS
            <ArrowUpRight size={18} />
          </Link>

          {/* Decorative Divider */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#b58a50]" />
            <span className="h-2 w-2 rotate-45 border border-[#b58a50]" />
            <span className="h-px w-12 bg-[#b58a50]" />
          </div>

        </div>

        {/* Collection Gallery */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[280px_280px_300px]">

          {collections.map((collection) => (
            <Link
              key={collection.number}
              href="/collections"
              className={`group relative isolate h-[340px] overflow-hidden rounded-lg bg-[#e7d9c8] shadow-sm transition-shadow duration-500 hover:shadow-xl lg:h-full lg:min-h-0 ${collection.className}`}
            >

              {/* Collection Image */}
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#281719]/85 via-[#281719]/15 to-transparent" />

              {/* Collection Number */}
              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-xs font-medium text-white backdrop-blur-sm">
                {collection.number}
              </span>

              {/* Collection Details */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">

                <p className="mb-3 text-[10px] font-bold tracking-[0.25em] text-[#f0d5a9]">
                  AARANYA EXCLUSIVE
                </p>

                <div className="flex items-end justify-between gap-4">

                  <div className="max-w-lg">

                    <h3 className="font-serif text-3xl font-semibold sm:text-4xl">
                      {collection.name}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-white">
                      {collection.subtitle}
                    </p>

                    <p className="mt-2 max-w-md text-xs leading-6 text-white/80 sm:text-sm">
                      {collection.description}
                    </p>

                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/70 transition-all duration-300 group-hover:border-[#632d35] group-hover:bg-[#632d35]">
                    <ArrowUpRight size={22} />
                  </span>

                </div>
              </div>

            </Link>
          ))}

        </div>

        {/* Bottom Decorative Detail */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#b58a50]" />

          <span className="font-serif text-sm italic tracking-widest text-[#a47748]">
            Every weave has a story
          </span>

          <span className="h-px w-16 bg-[#b58a50]" />
        </div>

      </div>
    </section>
  );
}
