
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Gift,
  Sparkles,
  Tag,
  ArrowUpRight,
  Copy,
  Check,
} from "lucide-react";

const offers = [
  {
    id: 1,
    label: "FESTIVE SPECIAL",
    title: "Festive Celebration",
    discount: "30%",
    description:
      "Celebrate special moments with beautiful traditional handlooms.",
    code: "FESTIVE30",
    icon: Gift,
    theme: "bg-[#632d35]",
  },
  {
    id: 2,
    label: "WELCOME OFFER",
    title: "First Purchase",
    discount: "15%",
    description:
      "A special welcome gift for your first AARANYA purchase.",
    code: "WELCOME15",
    icon: Sparkles,
    theme: "bg-[#8a6549]",
  },
  {
    id: 3,
    label: "SILK SPECIAL",
    title: "Silk Collection",
    discount: "20%",
    description:
      "Discover the timeless elegance of traditional silk collections.",
    code: "SILK20",
    icon: Tag,
    theme: "bg-[#455b49]",
  },
  {
    id: 4,
    label: "HERITAGE SPECIAL",
    title: "Heritage Special",
    discount: "10%",
    description:
      "Celebrate the beauty of traditional handloom craftsmanship.",
    code: "HANDLOOM10",
    icon: Gift,
    theme: "bg-[#79515b]",
  },
];

export default function SpecialOffers() {
  const [copiedCode, setCopiedCode] = useState("");

  const copyCoupon = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);

      window.setTimeout(() => {
        setCopiedCode((current) =>
          current === code ? "" : current
        );
      }, 2000);
    } catch {
      alert(`Please copy this coupon manually: ${code}`);
    }
  };

  return (
    <section className="bg-[#f5efe7] px-5 pb-14 pt-3 sm:px-8 md:pb-16 md:pt-5 lg:px-16">

      {/* Heading */}
      <div className="mx-auto mb-9 max-w-7xl text-center">

        <p className="mb-2 text-[10px] font-semibold tracking-[0.3em] text-[#a47748]">
          A LITTLE SOMETHING SPECIAL
        </p>

        <h2 className="font-serif text-3xl font-semibold text-[#632d35] md:text-5xl">
          Special Offers
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600">
          Discover special savings on beautiful handloom collections
          and bring home something timeless.
        </p>

        <div className="mx-auto mt-5 h-[2px] w-16 bg-[#b58a50]" />
      </div>

      {/* Four Offer Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {offers.map((offer) => {
          const Icon = offer.icon;
          const isCopied = copiedCode === offer.code;

          return (
            <div
              key={offer.id}
              className={`${offer.theme} group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl p-6 text-white shadow-md transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl sm:p-7`}
            >

              {/* Decorative Background */}
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110" />

              <div className="pointer-events-none absolute -right-5 -top-5 h-28 w-28 rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -bottom-16 -left-14 h-40 w-40 rounded-full border border-white/10" />

              {/* Top Label */}
              <div className="relative flex items-center justify-between">

                <span className="text-[9px] font-semibold tracking-[0.22em] text-[#f0d5a9] sm:text-[10px]">
                  {offer.label}
                </span>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <Icon
                    size={20}
                    strokeWidth={1.4}
                    className="text-[#f0d5a9]"
                  />
                </div>
              </div>

              {/* Offer Content */}
              <div className="relative mt-6">

                <h3 className="font-serif text-xl font-semibold leading-tight sm:text-2xl">
                  {offer.title}
                </h3>

                <div className="mt-3 flex items-baseline gap-2">

                  <span className="font-serif text-5xl font-bold tracking-tight text-[#f0d5a9] sm:text-6xl">
                    {offer.discount}
                  </span>

                  <span className="text-xs font-semibold tracking-widest">
                    OFF
                  </span>
                </div>

                <p className="mt-3 max-w-xs text-xs leading-6 text-white/75 sm:text-sm">
                  {offer.description}
                </p>
              </div>

              {/* Coupon Code */}
              <div className="relative mt-auto pt-6">

                <div className="flex items-center justify-between gap-3 border border-dashed border-white/40 bg-white/10 px-3 py-3 sm:px-4">

                  <div className="min-w-0">

                    <p className="text-[8px] tracking-[0.2em] text-white/60 sm:text-[9px]">
                      USE COUPON CODE
                    </p>

                    <p className="mt-1 truncate text-xs font-bold tracking-[0.13em] text-[#f0d5a9] sm:text-sm">
                      {offer.code}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyCoupon(offer.code)}
                    className="flex shrink-0 items-center gap-1.5 text-[10px] font-semibold transition hover:text-[#f0d5a9] sm:text-xs"
                  >
                    {isCopied ? (
                      <>
                        <Check size={14} />
                        COPIED
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        COPY
                      </>
                    )}
                  </button>
                </div>

                <Link
                  href="/collections"
                  className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.15em] text-white transition hover:text-[#f0d5a9] sm:text-xs"
                >
                  SHOP COLLECTION
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          );
        })}

      </div>

      {/* Bottom Message */}
      <div className="mx-auto mt-9 max-w-7xl text-center">

        <p className="font-serif text-base italic text-[#8a6549] sm:text-lg">
          Every thread tells a story. Every weave celebrates tradition.
        </p>
      </div>

    </section>
  );
}
