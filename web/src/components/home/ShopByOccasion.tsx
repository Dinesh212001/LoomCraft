
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const occasions = [
  {
    number: "01",
    name: "Wedding Elegance",
    subtitle: "Celebrate your special moments",
    description:
      "Exquisite traditional silk sarees for weddings and unforgettable celebrations.",
    image: "/images/occasion-wedding-elegance.png",
    alt: "Traditional silk sarees at a South Indian wedding",
  },
  {
    number: "02",
    name: "Festive Moments",
    subtitle: "Bring home the festive spirit",
    description:
      "Vibrant colours, beautiful borders and festive handloom designs.",
    image: "/images/occasion-festive-moments.png",
    alt: "Women wearing colourful sarees at a festive gathering",
  },
  {
    number: "03",
    name: "Everyday Grace",
    subtitle: "Comfort meets timeless style",
    description:
      "Elegant and comfortable sarees for everyday wear and casual gatherings.",
    image: "/images/occasion-everyday-grace.png",
    alt: "Women wearing everyday sarees in a modern setting",
  },
  {
    number: "04",
    name: "Special Celebrations",
    subtitle: "Make every occasion memorable",
    description:
      "Beautiful handloom styles for family gatherings and special occasions.",
    image: "/images/occasion-special-celebrations.png",
    alt: "Traditional saree styling for a special celebration",
  },
];

export default function ShopByOccasion() {
  return (
    <section className="bg-[#fffdf9] px-5 pt-4 pb-12 sm:px-8 md:pt-6 md:pb-16 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.35em] text-[#a47748]">
            DRESS FOR EVERY MOMENT
          </p>

          <h2 className="font-serif text-4xl font-semibold text-[#632d35] sm:text-5xl md:text-6xl">
            Shop by Occasion
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#66574e] sm:text-base">
            From grand celebrations to everyday elegance, discover
            handloom collections that make every moment special.
          </p>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-[#b58a50]" />
        </div>

        {/* Occasion Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {occasions.map((occasion) => (
            <article
              key={occasion.number}
              className="group min-w-0 overflow-hidden border border-[#eadfd2] bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >

              {/* Image */}
              <Link
                href="/collections"
                className="relative block aspect-[4/5] overflow-hidden bg-[#f1e9df]"
                aria-label={`Explore ${occasion.name}`}
              >
                <Image
                  src={occasion.image}
                  alt={occasion.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-black/20 text-xs font-semibold text-white backdrop-blur-sm">
                  {occasion.number}
                </span>
              </Link>

              {/* Information Below Image */}
              <div className="p-5 sm:p-6">

                <p className="mb-3 text-[10px] font-bold tracking-[0.25em] text-[#a47748]">
                  AARANYA HANDLOOM
                </p>

                <h3 className="font-serif text-xl font-semibold leading-snug text-[#632d35] sm:text-2xl">
                  {occasion.name}
                </h3>

                <p className="mt-2 text-sm font-medium leading-6 text-[#66574e]">
                  {occasion.subtitle}
                </p>

                <p className="mt-3 text-xs leading-6 text-[#82756b]">
                  {occasion.description}
                </p>

                {/* Explore Action */}
                <Link
                  href="/collections"
                  className="mt-5 flex items-center justify-between border-t border-[#e8dccc] pt-4 text-[#632d35] transition-colors hover:text-[#a47748]"
                >
                  <span className="text-[10px] font-bold tracking-[0.16em]">
                    EXPLORE COLLECTION
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c6ad] transition-all duration-300 group-hover:border-[#632d35] group-hover:bg-[#632d35] group-hover:text-white">
                    <ArrowUpRight size={19} />
                  </span>
                </Link>

              </div>
            </article>
          ))}

        </div>

        {/* Bottom Decorative Detail */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#b58a50]" />

          <p className="font-serif text-sm italic tracking-widest text-[#a47748]">
            Every occasion deserves something beautiful
          </p>

          <span className="h-px w-16 bg-[#b58a50]" />
        </div>

      </div>
    </section>
  );
}
