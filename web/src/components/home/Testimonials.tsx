
"use client";

import { Quote, Star, Flower2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    review:
      "The saree design and traditional colours are beautiful. I especially loved the elegant zari work and overall presentation.",
    product: "KANCHIPURAM SILK SAREE",
    customer: "Priya S.",
  },
  {
    id: 2,
    review:
      "I love the traditional cotton design. The colours and patterns make it a lovely choice for everyday wear.",
    product: "CHETTINAD COTTON SAREE",
    customer: "Meena R.",
  },
  {
    id: 3,
    review:
      "The natural look and elegant texture are wonderful. It is exactly the kind of understated traditional style I enjoy.",
    product: "LINEN HANDLOOM SAREE",
    customer: "Divya K.",
  },
  {
    id: 4,
    review:
      "The beautiful colour and detailed border make this saree special. It is a lovely addition to my collection.",
    product: "TRADITIONAL SILK SAREE",
    customer: "Anitha M.",
  },
  {
    id: 5,
    review:
      "The fabric feels comfortable and the traditional design is beautiful. I love the attention to detail.",
    product: "HANDLOOM COTTON COLLECTION",
    customer: "Lakshmi P.",
  },
  {
    id: 6,
    review:
      "A beautiful blend of traditional craftsmanship and elegant styling. Perfect for special occasions.",
    product: "FESTIVE HANDLOOM COLLECTION",
    customer: "Kavitha S.",
  },
];

export default function Testimonials() {
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-[#f8f1e8] py-12 md:py-16">

      {/* Section Heading */}
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">

        <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#a47748]">
          WHAT OUR CUSTOMERS SAY
        </p>

        <h2 className="font-serif text-4xl font-semibold text-[#632d35] sm:text-5xl md:text-6xl">
          Stories of Happiness
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#66574e] sm:text-base">
          Discover the experiences and stories behind the beauty
          of traditional handloom collections.
        </p>

        <div className="mx-auto mt-6 h-[3px] w-20 bg-[#b58a50]" />

        {/* Overall Rating */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <div className="flex gap-1 text-[#b58a50]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={20} fill="currentColor" />
            ))}
          </div>

          <p className="text-sm text-[#57463c]">
            Customer experiences at AARANYA
          </p>
        </div>
      </div>

      {/* Continuous Scrolling Cards */}
      <div className="testimonial-marquee mt-10 overflow-hidden px-2">

        <div className="testimonial-track flex w-max items-stretch gap-4">

          {scrollingTestimonials.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              className="testimonial-card relative flex min-h-[290px] w-[210px] shrink-0 flex-col items-center justify-between border-2 border-[#713b40] bg-[#fffaf3] px-4 pb-4 pt-7 text-center shadow-[0_8px_18px_rgba(75,35,30,0.10)] sm:w-[240px] sm:px-5 sm:pt-8"
            >

              {/* Quote Icon */}
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#efdfc7] text-[#713b40]">
                <Quote size={18} fill="currentColor" />
              </div>

              {/* Star Rating */}
              <div className="mt-3 flex gap-1 text-[#bd852e]">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={14}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-3 flex-1 font-serif text-[13px] leading-6 text-[#49332e] sm:text-sm">
                "{item.review}"
              </p>

              {/* Decorative Divider */}
              <div className="my-3 flex w-full items-center justify-center gap-2 text-[#a47748]">
                <span className="h-px flex-1 bg-[#d9bd91]" />
                <Flower2 size={18} strokeWidth={1.5} />
                <span className="h-px flex-1 bg-[#d9bd91]" />
              </div>

              {/* Product Name */}
              <p className="text-[9px] font-bold leading-5 tracking-[0.12em] text-[#94601e] sm:text-[10px]">
                {item.product}
              </p>

              {/* Reviewer Details */}
              <div className="mt-3 flex items-center justify-center gap-2">

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#713b40] font-serif text-base text-white">
                  {item.customer.charAt(0)}
                </div>

                <div className="text-left">
                  <p className="font-serif text-sm font-semibold text-[#632d35]">
                    {item.customer}
                  </p>

                  <p className="mt-0.5 text-[10px] text-[#89796e]">
                    Customer
                  </p>
                </div>

              </div>

            </article>
          ))}

        </div>
      </div>

      {/* Bottom Text */}
      <p className="mt-8 px-5 text-center font-serif text-sm italic tracking-wide text-[#a47748]">
        Thank you for being part of our handloom story.
      </p>

      {/* Shape and Animation */}
      <style jsx>{`
        .testimonial-card {
          border-radius: 90px 90px 20px 20px / 45px 45px 20px 20px;
        }

        .testimonial-track {
          animation: testimonial-scroll 45s linear infinite;
        }

        .testimonial-marquee:hover .testimonial-track {
          animation-play-state: paused;
        }

        @keyframes testimonial-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none;
          }
        }
      `}</style>

    </section>
  );
}
