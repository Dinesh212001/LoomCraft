
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function PromotionalBanner() {
  return (
    <section className="bg-[#fffdf9] px-5 py-12 sm:px-8 md:py-16 lg:px-16">
      <div className="relative mx-auto min-h-[480px] max-w-7xl overflow-hidden bg-[#32191d] shadow-lg md:min-h-[550px]">

        {/* Same Background Image - No Image Change */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/aaranya-festive-background.png')",
            backgroundPosition: "center right",
          }}
        />

        {/* Mask Duplicate Background Letters */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #281318 0%, rgba(40,19,24,0.99) 42%, rgba(40,19,24,0.96) 55%, rgba(40,19,24,0.65) 70%, rgba(40,19,24,0.08) 100%)",
          }}
        />

        {/* Decorative Border */}
        <div className="pointer-events-none absolute inset-3 z-10 border border-[#e5c28f]/50 md:inset-6" />

        {/* Campaign Content */}
        <div className="relative z-20 flex min-h-[480px] max-w-3xl flex-col justify-center px-8 py-14 text-white sm:px-12 md:min-h-[550px] md:px-16 lg:px-20">

          {/* Campaign Label */}
          <div className="mb-6 flex items-center gap-3">
            <Sparkles size={20} className="text-[#e5c28f]" />

            <p className="text-[10px] font-semibold tracking-[0.3em] text-[#e5c28f] sm:text-xs">
              THE AARANYA FESTIVE EDIT
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="max-w-2xl font-serif text-4xl font-semibold leading-[1.12] sm:text-5xl md:text-6xl lg:text-7xl">
            Tradition
            <br />
            Deserves to
            <span className="block italic text-[#e5c28f]">
              Shine.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-lg text-sm leading-7 text-white/90 sm:text-base sm:leading-8">
            Celebrate every special moment with the timeless beauty
            of South Indian handlooms. Discover elegant silk,
            traditional cotton and beautiful handcrafted designs.
          </p>

          {/* Decorative Divider */}
          <div className="my-7 h-[2px] w-20 bg-[#e5c28f]" />

          <p className="text-[10px] font-bold tracking-[0.25em] text-[#e5c28f] sm:text-xs">
            DISCOVER THE BEAUTY OF HANDLOOM
          </p>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/collections"
              className="group inline-flex items-center gap-3 bg-[#e5c28f] px-6 py-4 text-[10px] font-bold tracking-[0.15em] text-[#35191f] transition duration-300 hover:bg-white sm:px-8 sm:text-xs"
            >
              SHOP COLLECTION
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 border border-white/70 px-6 py-4 text-[10px] font-semibold tracking-[0.15em] text-white transition duration-300 hover:border-[#e5c28f] hover:bg-white/10 sm:px-8 sm:text-xs"
            >
              OUR STORY
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
