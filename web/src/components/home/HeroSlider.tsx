
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

const slides = [
  {
    image: "/images/aaranya-hero.png",
    eyebrow: "TRADITIONAL INDIAN HANDLOOM",
    title: "Timeless Weaves, Modern Grace.",
    description:
      "Discover handloom sarees that celebrate tradition, artistry and everyday elegance.",
    buttonText: "EXPLORE COLLECTION",
    link: "/collections",
    position: "object-center",
  },
  {
    image: "/images/handloom-weaving.png",
    eyebrow: "CELEBRATING SOUTH INDIAN CRAFT",
    title: "Every Thread Tells a Story.",
    description:
      "Explore beautiful handwoven creations inspired by India's rich textile heritage.",
    buttonText: "DISCOVER COLLECTION",
    link: "/collections",
    position: "object-center",
  },
  {
    image: "/images/linen-saree.png",
    eyebrow: "THE BEAUTY OF HANDLOOM",
    title: "Tradition Woven for Today.",
    description:
      "Experience the beauty of timeless designs and the artistry of skilled Indian weavers.",
    buttonText: "SHOP COLLECTION",
    link: "/collections",
    position: "object-center",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((previous) => (previous + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (previous) => (previous - 1 + slides.length) % slides.length
    );
  };

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative h-[620px] w-full overflow-hidden bg-[#f7ecdf] sm:h-[680px] lg:h-[730px]">

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt="Traditional Indian handloom craftsmanship"
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover ${slide.position}`}
          />
        </div>
      ))}

      {/* Cream Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,246,235,0.99) 0%, rgba(255,246,235,0.97) 38%, rgba(255,246,235,0.82) 52%, rgba(255,246,235,0.25) 73%, rgba(255,246,235,0.03) 100%)",
        }}
      />

      {/* Bottom Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#4b2825]/10 via-transparent to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center px-6 sm:px-10 lg:px-16">
        <div className="max-w-[850px] pt-2">

          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4">
            <span className="h-[2px] w-14 bg-[#a47748]" />

            <p className="text-xs font-bold tracking-[0.25em] text-[#9a693c] sm:text-sm">
              {activeSlide.eyebrow}
            </p>
          </div>

          {/* Heading */}
          <h1 className="max-w-[850px] font-serif text-[48px] font-bold leading-[1.08] tracking-[-0.035em] text-[#632d35] sm:text-[64px] md:text-[76px] lg:text-[88px]">
            {activeSlide.title}
          </h1>

          {/* Gold Accent */}
          <div className="mt-7 h-[4px] w-24 bg-[#bd8a45]" />

          {/* Description */}
          <p className="mt-7 max-w-[720px] text-base leading-8 text-[#55423c] sm:text-lg">
            {activeSlide.description}
          </p>

          {/* CTA Button */}
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href={activeSlide.link}
              className="group inline-flex min-h-[70px] items-center gap-7 bg-[#632d35] px-9 py-5 text-sm font-bold tracking-[0.18em] text-white shadow-lg transition-all duration-300 hover:bg-[#4d2028]"
            >
              {activeSlide.buttonText}

              <ArrowUpRight
                size={22}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <span className="text-xs font-semibold tracking-[0.22em] text-[#987047]">
              THE ART OF HANDLOOM
            </span>
          </div>
        </div>
      </div>

      {/* Three Centered Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-[4px] rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-12 bg-[#632d35]"
                : "w-7 bg-[#a47748]/60"
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-7 right-6 z-20 flex gap-3 sm:right-10 lg:right-16">
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff8ef] text-[#632d35] shadow-md transition hover:bg-[#632d35] hover:text-white"
        >
          <ChevronLeft size={25} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff8ef] text-[#632d35] shadow-md transition hover:bg-[#632d35] hover:text-white"
        >
          <ChevronRight size={25} />
        </button>
      </div>
    </section>
  );
}
