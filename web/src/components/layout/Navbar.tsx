
"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Search,
  MessageCircle,
  Heart,
  ShoppingBag,
  UserRound,
  PackageCheck,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

const fabricLinks = [
  { name: "Silk Sarees", href: "/categories/kanchipuram-silk" },
  { name: "Cotton Sarees", href: "/categories/chettinad-cotton" },
  { name: "Linen Sarees", href: "/categories/linen-cotton" },
  { name: "Silk Dupattas", href: "/categories/silk-dupattas" },
];

const regionalLinks = [
  { name: "Kanchipuram", href: "/categories/kanchipuram-silk" },
  { name: "Arani", href: "/categories/arani-silk" },
  { name: "Chettinad", href: "/categories/chettinad-cotton" },
  { name: "Kovai", href: "/categories/kovai-cotton" },
];

const occasionLinks = [
  { name: "Wedding Collection", href: "/collections" },
  { name: "Festive Collection", href: "/collections" },
  { name: "Everyday Elegance", href: "/collections" },
  { name: "Celebration Wear", href: "/collections" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Our Story", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sareeMenuOpen, setSareeMenuOpen] = useState(false);
  const [mobileSareeOpen, setMobileSareeOpen] = useState(false);

  // Shared Wishlist Context
  const { wishlistCount } = useWishlist();

  // Shared Cart Context
  const { cartCount } = useCart();

  return (
    <header className="relative z-50 w-full bg-[#fffdf9]">

      {/* Announcement Bar */}
      <div className="bg-[#351820] px-4 py-2 text-center text-[10px] font-medium tracking-[0.16em] text-[#f5e8d7] sm:text-[11px]">
        CELEBRATING SOUTH INDIAN HANDLOOM
        <span className="mx-2 text-[#d9b47d]">|</span>
        DISCOVER TIMELESS ELEGANCE
      </div>

      {/* Main Header */}
      <div className="border-b border-[#eee5dc]">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between px-5 py-4 md:px-10 lg:px-14">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-[#632d35] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          {/* Brand Name - logo graphic removed */}
          <Link href="/" aria-label="AARANYA home" className="flex shrink-0 flex-col items-center">
            <span className="font-serif text-3xl font-bold leading-none tracking-[0.12em] text-[#632d35] transition-colors hover:text-[#a47748] md:text-4xl">
              AARANYA
            </span>
            <span className="mt-1.5 text-[7px] tracking-[0.24em] text-[#a47748] sm:text-[9px] sm:tracking-[0.3em]">
              THE ART OF HANDLOOM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">

            <Link
              href="/"
              className="text-sm text-[#632d35] transition hover:text-[#a47748]"
            >
              Home
            </Link>

            {/* Sarees Mega Menu */}
            <div
              className="static"
              onMouseEnter={() => setSareeMenuOpen(true)}
              onMouseLeave={() => setSareeMenuOpen(false)}
            >
              <button
                onClick={() => setSareeMenuOpen(!sareeMenuOpen)}
                className="flex items-center gap-1 text-sm text-[#632d35] transition hover:text-[#a47748]"
                aria-expanded={sareeMenuOpen}
              >
                Sarees

                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    sareeMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {sareeMenuOpen && (
                <div className="absolute left-0 top-full w-full border-t border-[#eee5dc] bg-[#fffdf9] shadow-xl">
                  <div className="mx-auto grid max-w-[1250px] grid-cols-4 gap-10 px-10 py-10">

                    {/* Shop by Fabric */}
                    <div>
                      <h3 className="mb-5 font-serif text-xl text-[#632d35]">
                        Shop by Fabric
                      </h3>

                      <div className="space-y-4">
                        {fabricLinks.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-sm text-gray-600 transition hover:translate-x-1 hover:text-[#a47748]"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Regional Weaves */}
                    <div>
                      <h3 className="mb-5 font-serif text-xl text-[#632d35]">
                        Regional Weaves
                      </h3>

                      <div className="space-y-4">
                        {regionalLinks.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-sm text-gray-600 transition hover:translate-x-1 hover:text-[#a47748]"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Shop by Occasion */}
                    <div>
                      <h3 className="mb-5 font-serif text-xl text-[#632d35]">
                        Shop by Occasion
                      </h3>

                      <div className="space-y-4">
                        {occasionLinks.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block text-sm text-gray-600 transition hover:translate-x-1 hover:text-[#a47748]"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Menu Promotional Panel */}
                    <div className="relative flex min-h-[220px] flex-col justify-end overflow-hidden bg-[#f0e5d8] p-6">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#32191d]/80 to-transparent" />

                      <div className="relative text-white">
                        <p className="mb-2 text-[10px] tracking-[0.2em] text-[#f0d5a9]">
                          AARANYA COLLECTION
                        </p>

                        <h3 className="font-serif text-2xl">
                          The Beauty of Tradition
                        </h3>

                        <Link
                          href="/collections"
                          className="mt-4 inline-flex items-center gap-2 text-xs font-semibold"
                        >
                          EXPLORE NOW <ArrowRight size={15} />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Remaining Navigation Links */}
            {navLinks.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-[#632d35] transition hover:text-[#a47748]"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* Header Icons */}
          <div className="flex items-center gap-3 text-[#632d35] md:gap-5">

            {/* Search */}
            <Link
              href="/collections"
              aria-label="Search collections"
            >
              <Search size={20} strokeWidth={1.5} />
            </Link>

            {/* Enquiry */}
            <Link
              href="/enquiry"
              aria-label="Enquiry"
              title="Enquiry"
              className="flex items-center gap-1.5 rounded-full border border-[#e7d9ca] px-2.5 py-2 transition-all hover:border-[#a47748] hover:bg-[#f8f0e6] hover:text-[#a47748]"
            >
              <MessageCircle size={19} strokeWidth={1.5} />
              <span className="hidden xl:inline text-xs font-medium">Enquiry</span>
            </Link>

            {/* Wishlist with Live Count */}
            <Link
              href="/wishlist"
              aria-label={`Wishlist, ${wishlistCount} saved products`}
              title={`Wishlist (${wishlistCount})`}
              className="relative transition-colors hover:text-[#a47748]"
            >
              <Heart size={20} strokeWidth={1.5} />

              {wishlistCount > 0 && (
                <span className="absolute -right-2.5 -top-2.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#632d35] px-1 text-[10px] font-bold text-white">
                  {wishlistCount > 99 ? "99+" : wishlistCount}
                </span>
              )}
            </Link>

            {/* Account */}
            <Link
              href="/login"
              aria-label="Account"
              className="hidden sm:block"
            >
              <UserRound size={20} strokeWidth={1.5} />
            </Link>

            {/* Orders Icon */}
            <Link
              href="/orders"
              aria-label="My Orders"
              title="My Orders"
              className="transition-colors hover:text-[#a47748]"
            >
              <PackageCheck size={22} strokeWidth={1.5} />
            </Link>

            {/* Cart Icon with Live Count */}
            <Link
              href="/cart"
              aria-label={`Shopping cart, ${cartCount} items`}
              title={`Shopping Cart (${cartCount})`}
              className="relative transition-colors hover:text-[#a47748]"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />

              {cartCount > 0 && (
                <span className="absolute -right-2.5 -top-2.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#632d35] px-1 text-[10px] font-bold text-white">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

          </div>
        </div>
      </div>

      {/* Secondary Navigation Removed */}

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="absolute left-0 top-full max-h-[80vh] w-full overflow-y-auto border-t border-[#eee5dc] bg-[#fffdf9] px-6 py-6 shadow-xl lg:hidden">

          <nav className="space-y-1">

            {/* Home Link */}
            {navLinks.slice(0, 1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-[#eee5dc] py-4 font-medium text-[#632d35]"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Sarees Menu */}
            <div className="border-b border-[#eee5dc]">
              <button
                onClick={() => setMobileSareeOpen(!mobileSareeOpen)}
                className="flex w-full items-center justify-between py-4 font-medium text-[#632d35]"
                aria-expanded={mobileSareeOpen}
              >
                Sarees

                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    mobileSareeOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileSareeOpen && (
                <div className="space-y-3 pb-5 pl-4">

                  <p className="text-xs font-semibold tracking-wider text-[#a47748]">
                    SHOP BY FABRIC
                  </p>

                  {fabricLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm text-gray-600"
                    >
                      {item.name}
                    </Link>
                  ))}

                  <p className="pt-3 text-xs font-semibold tracking-wider text-[#a47748]">
                    REGIONAL WEAVES
                  </p>

                  {regionalLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm text-gray-600"
                    >
                      {item.name}
                    </Link>
                  ))}

                </div>
              )}
            </div>

            {/* Remaining Navigation Links */}
            {navLinks.slice(1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block border-b border-[#eee5dc] py-4 font-medium text-[#632d35]"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* Mobile Header Icons */}
          <div className="mt-6 grid grid-cols-3 gap-y-6 border-t border-[#eee5dc] pt-6">

            {/* Mobile Search */}
            <Link
              href="/collections"
              onClick={() => setMobileOpen(false)}
              className="flex flex-col items-center gap-2 text-xs text-[#632d35]"
            >
              <Search size={21} />
              Search
            </Link>

            {/* Mobile Enquiry */}
            <Link
              href="/enquiry"
              onClick={() => setMobileOpen(false)}
              aria-label="Enquiry"
              className="flex flex-col items-center gap-2 text-xs text-[#632d35]"
            >
              <MessageCircle size={21} />
              Enquiry
            </Link>

            {/* Mobile Wishlist with Live Count */}
            <Link
              href="/wishlist"
              onClick={() => setMobileOpen(false)}
              aria-label={`Wishlist, ${wishlistCount} saved products`}
              className="flex flex-col items-center gap-2 text-xs text-[#632d35]"
            >
              <span className="relative">
                <Heart size={21} />

                {wishlistCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#632d35] px-1 text-[9px] font-bold text-white">
                    {wishlistCount > 99 ? "99+" : wishlistCount}
                  </span>
                )}
              </span>

              Wishlist
            </Link>

            {/* Mobile Account */}
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex flex-col items-center gap-2 text-xs text-[#632d35]"
            >
              <UserRound size={21} />
              Account
            </Link>

            {/* Mobile Orders */}
            <Link
              href="/orders"
              onClick={() => setMobileOpen(false)}
              className="flex flex-col items-center gap-2 text-xs text-[#632d35]"
            >
              <PackageCheck size={21} />
              Orders
            </Link>

            {/* Mobile Cart with Live Count */}
            <Link
              href="/cart"
              onClick={() => setMobileOpen(false)}
              aria-label={`Shopping cart, ${cartCount} items`}
              className="flex flex-col items-center gap-2 text-xs text-[#632d35]"
            >
              <span className="relative">
                <ShoppingBag size={21} />

                {cartCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#632d35] px-1 text-[9px] font-bold text-white">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </span>

              Cart
            </Link>

          </div>

        </div>
      )}

    </header>
  );
}
