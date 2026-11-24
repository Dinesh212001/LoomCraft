"use client";

import { useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  RotateCcw,
} from "lucide-react";

import ProductCardGrid from "@/components/product/ProductCard";

type Product = {
  id: number;
  name: string;
  category: string;
  fabric: string;
  weaving: string;
  colour: string;
  price: number;
  oldPrice: number;
  discount: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  inStock: boolean;
  newest: number;
  popularity: number;
  label: string;
};

const products: Product[] = [
  {
    id: 101,
    name: "Royal Maroon Handwoven Silk Saree",
    category: "Silk Sarees",
    fabric: "Pure Silk",
    weaving: "Traditional Handloom",
    colour: "Maroon",
    price: 15999,
    oldPrice: 19999,
    discount: "20% OFF",
    rating: 4.9,
    reviews: 86,
    image: "/images/new-royal-maroon-silk.png",
    description:
      "A rich maroon silk saree with a graceful traditional look, designed for celebrations and special occasions.",
    inStock: true,
    newest: 4,
    popularity: 86,
    label: "JUST ARRIVED",
  },
  {
    id: 102,
    name: "Pastel Green Traditional Cotton Saree",
    category: "Cotton Sarees",
    fabric: "Cotton",
    weaving: "Traditional Handloom",
    colour: "Green",
    price: 6499,
    oldPrice: 7999,
    discount: "18% OFF",
    rating: 4.8,
    reviews: 64,
    image: "/images/new-pastel-green-cotton.png",
    description:
      "A refreshing pastel green cotton saree that blends everyday comfort with timeless traditional elegance.",
    inStock: true,
    newest: 3,
    popularity: 64,
    label: "NEW DESIGN",
  },
  {
    id: 103,
    name: "Mustard Yellow Elegant Linen Saree",
    category: "Linen Sarees",
    fabric: "Linen",
    weaving: "Traditional Handloom",
    colour: "Mustard",
    price: 7499,
    oldPrice: 8999,
    discount: "16% OFF",
    rating: 4.7,
    reviews: 52,
    image: "/images/new-mustard-yellow-linen.png",
    description:
      "An elegant mustard linen saree with a light, graceful drape for effortless day-to-evening styling.",
    inStock: true,
    newest: 2,
    popularity: 52,
    label: "TRENDING",
  },
  {
    id: 104,
    name: "Rose Pink Handloom Silk Cotton Saree",
    category: "Silk Sarees",
    fabric: "Cotton Silk",
    weaving: "Traditional Handloom",
    colour: "Pink",
    price: 8999,
    oldPrice: 10999,
    discount: "18% OFF",
    rating: 4.8,
    reviews: 71,
    image: "/images/new-rose-pink-silk-cotton.png",
    description:
      "A beautiful rose pink silk-cotton saree, bringing together a soft texture and a refined festive finish.",
    inStock: true,
    newest: 1,
    popularity: 71,
    label: "NEW ARRIVAL",
  },
];

const categories = ["Silk Sarees", "Cotton Sarees", "Linen Sarees"];

const fabrics = ["Pure Silk", "Cotton", "Linen", "Cotton Silk", "Silk Blend"];

const weavingTypes = ["Traditional Handloom", "Zari Weaving", "Powerloom"];

const colours = [
  { name: "Maroon", value: "#632d35" },
  { name: "Red", value: "#c62828" },
  { name: "Royal Blue", value: "#243b80" },
  { name: "Navy Blue", value: "#172554" },
  { name: "Purple", value: "#702c91" },
  { name: "Mustard", value: "#d6a52d" },
  { name: "Yellow", value: "#f2d34f" },
  { name: "Green", value: "#287347" },
  { name: "Emerald", value: "#08785b" },
  { name: "Pink", value: "#e88ba9" },
  { name: "Peach", value: "#efb69b" },
  { name: "Orange", value: "#e87526" },
  { name: "Cream", value: "#eee1c4" },
  { name: "Beige", value: "#c9b28d" },
  { name: "White", value: "#ffffff" },
  { name: "Black", value: "#222222" },
  { name: "Grey", value: "#858585" },
  { name: "Teal", value: "#168b8b" },
  { name: "Brown", value: "#80502e" },
  { name: "Gold", value: "#c9a13c" },
];

const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;

export default function NewArrivalsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFabrics, setSelectedFabrics] = useState<string[]>([]);
  const [selectedWeaving, setSelectedWeaving] = useState<string[]>([]);
  const [selectedColours, setSelectedColours] = useState<string[]>([]);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);

  const [stockFilter, setStockFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const [expandedSections, setExpandedSections] = useState<string[]>([
    "Category",
    "Fabric Type",
    "Price Range",
    "Colour",
    "Weaving Type",
    "Availability",
  ]);

  const toggleValue = (
    value: string,
    selected: string[],
    setter: (values: string[]) => void
  ) => {
    setter(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value]
    );
  };

  const toggleSection = (section: string) => {
    setExpandedSections((previous) =>
      previous.includes(section)
        ? previous.filter((item) => item !== section)
        : [...previous, section]
    );
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedFabrics([]);
    setSelectedWeaving([]);
    setSelectedColours([]);
    setMinPrice(0);
    setMaxPrice(50000);
    setStockFilter("all");
    setSortBy("newest");
  };

  const activeFilterCount =
    selectedCategories.length +
    selectedFabrics.length +
    selectedWeaving.length +
    selectedColours.length +
    (minPrice > 0 || maxPrice < 50000 ? 1 : 0) +
    (stockFilter !== "all" ? 1 : 0);

  const filteredProducts = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesSearch =
        !query ||
        [
          product.name,
          product.description,
          product.category,
          product.fabric,
          product.colour,
          product.weaving,
        ].some((value) => value.toLowerCase().includes(query));

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const matchesFabric =
        selectedFabrics.length === 0 ||
        selectedFabrics.includes(product.fabric);

      const matchesWeaving =
        selectedWeaving.length === 0 ||
        selectedWeaving.includes(product.weaving);

      const matchesColour =
        selectedColours.length === 0 ||
        selectedColours.includes(product.colour);

      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;

      const matchesStock =
        stockFilter === "all" ||
        (stockFilter === "in" && product.inStock) ||
        (stockFilter === "out" && !product.inStock);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesFabric &&
        matchesWeaving &&
        matchesColour &&
        matchesPrice &&
        matchesStock
      );
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "popular") {
      result.sort((a, b) => b.popularity - a.popularity);
    } else {
      result.sort((a, b) => b.newest - a.newest);
    }

    return result;
  }, [
    searchTerm,
    selectedCategories,
    selectedFabrics,
    selectedWeaving,
    selectedColours,
    minPrice,
    maxPrice,
    stockFilter,
    sortBy,
  ]);

  const FilterSection = ({
    title,
    children,
  }: {
    title: string;
    children: ReactNode;
  }) => (
    <div className="border-b border-[#eee5dc] py-5">
      <button
        type="button"
        onClick={() => toggleSection(title)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-semibold text-[#351e23]">{title}</span>

        <ChevronDown
          size={17}
          className={`text-[#a77a43] transition-transform ${
            expandedSections.includes(title) ? "rotate-180" : ""
          }`}
        />
      </button>

      {expandedSections.includes(title) && (
        <div className="mt-4">{children}</div>
      )}
    </div>
  );

  const FilterCheckbox = ({
    label,
    checked,
    onChange,
  }: {
    label: string;
    checked: boolean;
    onChange: () => void;
  }) => (
    <label className="flex cursor-pointer items-center gap-3 py-2 text-sm text-gray-600 transition hover:text-[#632d35]">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-[#632d35]"
      />
      {label}
    </label>
  );

  const FilterContent = () => (
    <div>
      <FilterSection title="Category">
        {categories.map((item) => (
          <FilterCheckbox
            key={item}
            label={item}
            checked={selectedCategories.includes(item)}
            onChange={() =>
              toggleValue(item, selectedCategories, setSelectedCategories)
            }
          />
        ))}
      </FilterSection>

      <FilterSection title="Fabric Type">
        {fabrics.map((item) => (
          <FilterCheckbox
            key={item}
            label={item}
            checked={selectedFabrics.includes(item)}
            onChange={() =>
              toggleValue(item, selectedFabrics, setSelectedFabrics)
            }
          />
        ))}
      </FilterSection>

      <FilterSection title="Price Range">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 border border-[#e5d9cc] px-3 py-2">
              <p className="text-[10px] text-gray-400">Minimum</p>
              <p className="text-sm font-semibold text-[#632d35]">
                {formatPrice(minPrice)}
              </p>
            </div>

            <div className="flex-1 border border-[#e5d9cc] px-3 py-2">
              <p className="text-[10px] text-gray-400">Maximum</p>
              <p className="text-sm font-semibold text-[#632d35]">
                {formatPrice(maxPrice)}
              </p>
            </div>
          </div>

          <label className="block text-xs text-gray-500">
            Minimum price
            <input
              type="range"
              min={0}
              max={50000}
              step={500}
              value={minPrice}
              onChange={(e) =>
                setMinPrice(Math.min(Number(e.target.value), maxPrice))
              }
              className="mt-2 w-full cursor-pointer accent-[#632d35]"
            />
          </label>

          <label className="block text-xs text-gray-500">
            Maximum price
            <input
              type="range"
              min={0}
              max={50000}
              step={500}
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(Math.max(Number(e.target.value), minPrice))
              }
              className="mt-2 w-full cursor-pointer accent-[#632d35]"
            />
          </label>

          <div className="flex justify-between text-[10px] text-gray-400">
            <span>₹0</span>
            <span>₹50,000</span>
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Colour">
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          {colours.map((item) => (
            <label
              key={item.name}
              className="flex cursor-pointer items-center gap-2 py-2 text-xs text-gray-600"
            >
              <input
                type="checkbox"
                checked={selectedColours.includes(item.name)}
                onChange={() =>
                  toggleValue(item.name, selectedColours, setSelectedColours)
                }
                className="h-3.5 w-3.5 accent-[#632d35]"
              />

              <span
                className="h-4 w-4 shrink-0 rounded-full border border-gray-300"
                style={{ backgroundColor: item.value }}
              />

              {item.name}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Weaving Type">
        {weavingTypes.map((item) => (
          <FilterCheckbox
            key={item}
            label={item}
            checked={selectedWeaving.includes(item)}
            onChange={() =>
              toggleValue(item, selectedWeaving, setSelectedWeaving)
            }
          />
        ))}
      </FilterSection>

      <FilterSection title="Availability">
        <FilterCheckbox
          label="All Products"
          checked={stockFilter === "all"}
          onChange={() => setStockFilter("all")}
        />

        <FilterCheckbox
          label="In Stock"
          checked={stockFilter === "in"}
          onChange={() => setStockFilter("in")}
        />

        <FilterCheckbox
          label="Out of Stock"
          checked={stockFilter === "out"}
          onChange={() => setStockFilter("out")}
        />
      </FilterSection>

      <button
        type="button"
        onClick={clearAllFilters}
        className="mt-5 flex w-full items-center justify-center gap-2 border border-[#632d35] py-3 text-xs font-semibold tracking-wider text-[#632d35] transition hover:bg-[#632d35] hover:text-white"
      >
        <RotateCcw size={15} />
        CLEAR ALL FILTERS
      </button>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#fffdf9]">
      {/* New Arrivals Hero Image */}
      <section className="w-full overflow-hidden bg-[#f4ede4]">
        <div className="relative aspect-[8/3] min-h-[260px] w-full sm:min-h-[340px] lg:min-h-[480px]">
          <Image
            src="/images/aaranya-purple-rose-new-arrivals.png"
            alt="AARANYA New Arrivals - Traditional handloom saree collection"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-3 py-5">
          <Link
            href="/"
            className="text-sm text-[#a77a43] transition hover:underline"
          >
            Home
          </Link>

          <span className="text-gray-400">/</span>

          <span className="text-sm text-gray-600">New Arrivals</span>
        </div>
      </section>

      {/* Search and Sort */}
      <section className="mx-auto max-w-[1600px] px-5 pt-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative flex-1 md:max-w-xl">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a77a43]"
            />

            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products by name..."
              className="w-full border border-[#e5d9cc] bg-white py-3.5 pl-12 pr-4 text-sm text-[#351e23] outline-none transition placeholder:text-gray-400 focus:border-[#632d35]"
            />

            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#632d35]"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileFilterOpen(true)}
              className="flex items-center justify-center gap-2 border border-[#632d35] px-5 py-3 text-sm font-medium text-[#632d35] transition hover:bg-[#632d35] hover:text-white lg:hidden"
            >
              <SlidersHorizontal size={17} />
              Filters
              {activeFilterCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#632d35] px-1 text-[10px] text-white">
                  {activeFilterCount}
                </span>
              )}
            </button>

            <div className="flex items-center gap-2">
              <span className="whitespace-nowrap text-xs text-gray-500">
                Sort By:
              </span>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-[#e5d9cc] bg-white px-3 py-3 text-xs text-[#351e23] outline-none focus:border-[#632d35]"
              >
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="popular">Popularity</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Collection Section */}
      <section className="mx-auto max-w-[1600px] px-5 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 border border-[#eee5dc] bg-white p-5">
              <div className="flex items-center justify-between border-b border-[#eee5dc] pb-5">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={19} className="text-[#a77a43]" />
                  <h2 className="font-serif text-xl text-[#351e23]">
                    Filters
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="text-xs text-[#a77a43] hover:text-[#632d35]"
                >
                  Clear All
                </button>
              </div>

              <FilterContent />
            </div>
          </aside>

          {/* Products */}
          <div className="min-w-0">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-serif text-2xl text-[#351e23] md:text-3xl">
                  Latest Handloom Styles
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Showing {filteredProducts.length} of {products.length} new
                  arrivals
                </p>
              </div>

              <span className="text-xs tracking-wider text-[#a77a43]">
                FRESH STYLES. TIMELESS TRADITIONS.
              </span>
            </div>

            {/* Active Filters */}
            {(activeFilterCount > 0 || searchTerm) && (
              <div className="mb-6 flex flex-wrap items-center gap-2">
                {searchTerm && (
                  <span className="rounded-full bg-[#f4ede4] px-3 py-2 text-xs text-[#632d35]">
                    Search: {searchTerm}
                  </span>
                )}

                {[
                  ...selectedCategories,
                  ...selectedFabrics,
                  ...selectedWeaving,
                  ...selectedColours,
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#f4ede4] px-3 py-2 text-xs text-[#632d35]"
                  >
                    {item}
                  </span>
                ))}

                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="text-xs font-semibold text-[#a77a43] underline"
                >
                  Clear All
                </button>
              </div>
            )}

            {/* Product Cards (shared component) */}
            {filteredProducts.length > 0 ? (
              <ProductCardGrid
                products={filteredProducts}
                gridClassName="grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
              />
            ) : (
              <div className="bg-[#f4ede4] px-6 py-20 text-center">
                <Search size={40} className="mx-auto text-[#a77a43]" />

                <h3 className="mt-5 font-serif text-2xl text-[#351e23]">
                  No New Arrivals Found
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                  Try changing your search or selected filters.
                </p>

                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="mt-7 inline-flex items-center gap-2 bg-[#632d35] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4d2028]"
                >
                  <RotateCcw size={16} />
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setMobileFilterOpen(false)}
            className="absolute inset-0 bg-black/40"
          />

          <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-[#fffdf9] shadow-xl">
            <div className="flex items-center justify-between border-b border-[#eee5dc] p-5">
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={19} className="text-[#a77a43]" />
                <h2 className="font-serif text-xl text-[#351e23]">Filters</h2>
              </div>

              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                aria-label="Close filter panel"
                className="text-[#632d35]"
              >
                <X size={23} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5">
              <FilterContent />
            </div>

            <div className="flex gap-3 border-t border-[#eee5dc] p-5">
              <button
                type="button"
                onClick={clearAllFilters}
                className="flex-1 border border-[#632d35] py-3 text-xs font-semibold text-[#632d35]"
              >
                CLEAR ALL
              </button>

              <button
                type="button"
                onClick={() => setMobileFilterOpen(false)}
                className="flex-1 bg-[#632d35] py-3 text-xs font-semibold text-white"
              >
                SHOW {filteredProducts.length} PRODUCTS
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}