
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Wedding Collection",
    description: "Celebrate your special moments in timeless elegance.",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&q=85",
    link: "/collections/wedding",
    label: "BRIDAL ELEGANCE",
  },
  {
    id: 2,
    name: "Festive Collection",
    description: "Bring tradition and beauty to every celebration.",
    image:
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=900&q=85",
    link: "/collections/festive",
    label: "CELEBRATE TRADITION",
  },
  {
    id: 3,
    name: "Traditional Silk",
    description: "Discover the richness of India's handwoven silk.",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e9?w=900&q=85",
    link: "/collections/traditional-silk",
    label: "TIMELESS HERITAGE",
  },
  {
    id: 4,
    name: "Everyday Handloom",
    description: "Comfortable handcrafted styles for everyday beauty.",
    image:
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=900&q=85",
    link: "/collections/everyday",
    label: "EVERYDAY GRACE",
  },
  {
    id: 5,
    name: "Men's Handloom",
    description:
      "Discover elegant traditional menswear with beautiful craftsmanship.",
    image: "/images/mens-handloom.jpg",
    link: "/collections/mens-handloom",
    label: "TRADITIONAL CRAFTSMANSHIP",
  },
  {
  id: 6,
  name: "Blouse Materials",
  description: "Explore rich blouse fabrics with beautiful traditional embroidery and designs.",
  image: "/images/blouse-material.jpg",
  link: "/collections/blouse-materials",
  label: "ELEGANT FABRIC DESIGNS",
  },
];

export default function PopularCollections() {
  return (
    <section className="bg-[#f8f4ed] px-5 py-20 md:px-10 lg:px-16">

      {/* Section Heading */}
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#a47748]">
          CURATED WITH LOVE
        </p>

        <h2 className="font-serif text-3xl font-semibold text-[#632d35] md:text-5xl">
          Popular Collections
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
          Explore collections inspired by India's rich textile
          traditions and timeless craftsmanship.
        </p>

        <div className="mx-auto mt-6 h-[2px] w-16 bg-[#b58a50]" />
      </div>

      {/* Collection Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-7 sm:grid-cols-2">

        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={collection.link}
            className="group relative h-[360px] overflow-hidden bg-[#632d35] md:h-[430px]"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url("${collection.image}")`,
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white md:p-9">

              <div>
                <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-[#e5c28f]">
                  {collection.label}
                </p>

                <h3 className="font-serif text-2xl font-semibold md:text-4xl">
                  {collection.name}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
                  {collection.description}
                </p>

                <span className="mt-5 inline-block border-b border-[#e5c28f] pb-1 text-xs font-semibold tracking-widest text-[#e5c28f]">
                  EXPLORE COLLECTION
                </span>
              </div>

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/70 transition group-hover:border-[#e5c28f] group-hover:bg-[#e5c28f] group-hover:text-[#632d35]">
                <ArrowUpRight size={22} />
              </span>

            </div>
          </Link>
        ))}

      </div>
    </section>
  );
}
