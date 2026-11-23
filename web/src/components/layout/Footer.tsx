
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const shoppingLinks = [
  { name: "Kanchipuram Silk Sarees", href: "/collections" },
  { name: "Arani Silk Sarees", href: "/collections" },
  { name: "Chettinad Cotton Sarees", href: "/collections" },
  { name: "Kovai Cotton Sarees", href: "/collections" },
  { name: "Silk Dupattas", href: "/collections" },
  { name: "Men's Cotton Veshti", href: "/collections" },
];

const supportLinks = [
  { name: "Contact Us", href: "/contact" },
  { name: "Shipping Information", href: "/shipping" },
  { name: "Returns & Exchanges", href: "/returns" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#32191f] text-white">

      {/* Newsletter Section */}
      <div className="border-b border-white/15 px-5 py-14 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center">

          <div className="max-w-xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.3em] text-[#e5c28f]">
              STAY CONNECTED WITH AARANYA
            </p>

            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
              Stories, Styles & Everything
              <span className="block italic text-[#e5c28f]">
                Beautiful.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/65">
              Discover our latest handloom collections, new arrivals
              and updates from the world of traditional craftsmanship.
            </p>
          </div>

          <div className="w-full max-w-md">
            <form
              action="mailto:hello@aaranya.com"
              method="GET"
              className="flex border-b border-[#e5c28f]/70 pb-3"
            >
              <input
                type="email"
                name="body"
                required
                placeholder="Enter your email address"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-white outline-none placeholder:text-white/45"
              />

              <button
                type="submit"
                className="flex items-center gap-2 px-3 text-xs font-semibold tracking-wider text-[#e5c28f] transition hover:text-white"
              >
                SUBSCRIBE
                <ArrowRight size={17} />
              </button>
            </form>

            <p className="mt-3 text-[10px] leading-5 text-white/45">
              Stay inspired with updates from AARANYA.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="px-5 py-14 md:px-10 md:py-16 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

          {/* Brand Information */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="font-serif text-4xl font-bold tracking-[0.12em] text-white">
                AARANYA
              </h2>

              <p className="mt-2 text-[9px] tracking-[0.35em] text-[#e5c28f]">
                THE ART OF HANDLOOM
              </p>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
              Celebrating the beauty of South Indian handloom traditions
              through timeless fabrics, elegant designs and rich
              textile heritage.
            </p>

            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#e5c28f] transition hover:text-white"
            >
              DISCOVER OUR STORY
              <ArrowUpRight size={15} />
            </Link>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-sm font-bold text-white/75 transition hover:border-[#e5c28f] hover:bg-[#e5c28f] hover:text-[#32191f]"
              >
                IG
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-sm font-bold text-white/75 transition hover:border-[#e5c28f] hover:bg-[#e5c28f] hover:text-[#32191f]"
              >
                f
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-xs font-bold text-white/75 transition hover:border-[#e5c28f] hover:bg-[#e5c28f] hover:text-[#32191f]"
              >
                YT
              </a>
            </div>
          </div>

          {/* Shopping Links */}
          <div>
            <h3 className="mb-7 font-serif text-xl text-[#e5c28f]">
              Explore Collections
            </h3>

            <ul className="space-y-4">
              {shoppingLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 transition hover:pl-1 hover:text-[#e5c28f]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="mb-7 font-serif text-xl text-[#e5c28f]">
              Customer Care
            </h3>

            <ul className="space-y-4">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 transition hover:pl-1 hover:text-[#e5c28f]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-7 font-serif text-xl text-[#e5c28f]">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-[#e5c28f]" />
                <div>
                  <p className="text-xs text-white/45">Email</p>
                  <a
                    href="mailto:hello@aaranya.com"
                    className="mt-1 block text-sm text-white/75 hover:text-[#e5c28f]"
                  >
                    hello@aaranya.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-[#e5c28f]" />
                <div>
                  <p className="text-xs text-white/45">Phone</p>
                  <p className="mt-1 text-sm text-white/75">
                    Contact details coming soon
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-[#e5c28f]" />
                <div>
                  <p className="text-xs text-white/45">Location</p>
                  <p className="mt-1 text-sm leading-6 text-white/75">
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/15 px-5 py-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5">

          {/* Copyright and Tagline */}
          <div className="flex w-full flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-center text-xs text-white/50">
              © 2026 AARANYA. All rights reserved.
            </p>

            <p className="font-serif text-sm italic text-[#e5c28f]">
              Woven with Tradition. Designed for You.
            </p>

            <a
              href="#top"
              className="text-xs text-white/50 transition hover:text-[#e5c28f]"
            >
              Back to Top ↑
            </a>
          </div>

          {/* Payment Methods - Single Horizontal Line */}
          <div className="flex w-full items-center justify-center gap-2 overflow-x-auto border-t border-white/10 pt-5 sm:gap-4">

            <span className="shrink-0 text-[9px] font-semibold tracking-wider text-white/50">
              WE ACCEPT
            </span>

            {/* Visa */}
            <div
              title="Visa"
              className="flex h-9 w-[65px] shrink-0 items-center justify-center rounded bg-white px-2"
            >
              <span className="text-lg font-black italic text-[#17499c]">
                VISA
              </span>
            </div>

            {/* Mastercard */}
            <div
              title="Mastercard"
              className="flex h-9 w-[105px] shrink-0 items-center justify-center gap-1 rounded bg-white px-2"
            >
              <span className="flex -space-x-1">
                <span className="h-4 w-4 rounded-full bg-[#eb001b]" />
                <span className="h-4 w-4 rounded-full bg-[#f79e1b]" />
              </span>
              <span className="text-[9px] font-bold text-[#222]">
                Mastercard
              </span>
            </div>

            {/* RuPay */}
            <div
              title="RuPay"
              className="flex h-9 w-[65px] shrink-0 items-center justify-center rounded bg-white px-2"
            >
              <span className="text-lg font-black italic text-[#315b9a]">
                RuPay
              </span>
            </div>

            {/* UPI */}
            <div
              title="UPI"
              className="flex h-9 w-[58px] shrink-0 items-center justify-center rounded bg-white px-2"
            >
              <span className="text-lg font-black text-[#16836b]">
                UPI
              </span>
            </div>

            {/* PayPal */}
            <div
              title="PayPal"
              className="flex h-9 w-[75px] shrink-0 items-center justify-center rounded bg-white px-2"
            >
              <span className="text-base font-black italic text-[#1265a8]">
                PayPal
              </span>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}
