
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const highlights = [
  "Inspired by South Indian weaving traditions",
  "Thoughtfully curated handloom collections",
  "A celebration of traditional craftsmanship",
];

export default function BrandStory() {
  return (
    <section className="bg-[#fffdf9] px-5 py-14 sm:px-8 md:py-20 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left: Brand Images */}
        <div className="relative mx-auto w-full max-w-[620px] pb-16 pr-8 sm:pb-20 sm:pr-12">

          {/* Main Image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#eee3d7]">
            <Image
              src="/images/aaranya-heritage-purple-silk.png"
              alt="Purple silk saree with traditional gold zari craftsmanship"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Brand Label */}
          <div className="absolute left-0 top-10 z-10 bg-[#632d35] px-6 py-5 text-white shadow-xl sm:px-8 sm:py-6">
            <p className="font-serif text-2xl italic tracking-wide text-[#e5c28f] sm:text-3xl">
              AARANYA
            </p>
            <p className="mt-2 text-[9px] font-bold tracking-[0.2em] sm:text-[10px]">
              THE ART OF HANDLOOM
            </p>
          </div>

          {/* Smaller Overlapping Image */}
          <div className="absolute -bottom-1 right-0 z-10 w-[48%] border-[6px] border-[#fffdf9] bg-[#eee3d7] sm:w-[46%]">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/aaranya-heritage-teal-cotton.png"
                alt="Cream handloom cotton saree with teal green and gold border"
                fill
                sizes="(max-width: 768px) 45vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>

        {/* Right: Brand Story Content */}
        <div className="py-4">

          <div className="mb-7 flex items-center gap-3">
            <Sparkles size={21} className="text-[#a47748]" />
            <p className="text-xs font-bold tracking-[0.3em] text-[#a47748]">
              OUR STORY &amp; HERITAGE
            </p>
          </div>

          <h2 className="font-serif text-4xl font-semibold leading-tight text-[#632d35] sm:text-5xl md:text-6xl">
            Every Thread
            <span className="mt-2 block italic text-[#a47748]">
              Tells a Story.
            </span>
          </h2>

          <div className="my-8 h-[3px] w-20 bg-[#b58a50]" />

          <p className="text-base leading-8 text-[#57463c]">
            At AARANYA, we celebrate the timeless beauty of Indian
            handloom traditions. Every weave reflects a rich textile
            heritage, bringing together traditional artistry and
            contemporary elegance.
          </p>

          <p className="mt-5 text-sm leading-8 text-[#82756b] sm:text-base">
            From the richness of Kanchipuram silk to the simplicity
            of traditional cotton, our collections are inspired by
            the colours, textures and craftsmanship of South India.
            We believe every fabric carries a story worth celebrating.
          </p>

          {/* Highlights */}
          <div className="mt-8 space-y-5">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <CheckCircle2
                  size={22}
                  className="shrink-0 text-[#a47748]"
                />
                <p className="text-sm leading-6 text-[#57463c] sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* About Button */}
          <Link
            href="/about"
            className="group mt-9 inline-flex items-center gap-4 bg-[#632d35] px-7 py-4 text-xs font-bold tracking-[0.16em] text-white transition duration-300 hover:bg-[#85464e]"
          >
            DISCOVER OUR STORY
            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

        </div>
      </div>
    </section>
  );
}
