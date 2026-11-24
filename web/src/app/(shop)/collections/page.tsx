"use client";

import { Suspense, useMemo, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  X,
  ChevronDown,
  RotateCcw,
} from "lucide-react";

import ProductCardGrid from "@/components/product/ProductCard";

const categories = [
  "Silk Sarees",
  "Cotton Sarees",
  "Linen Sarees",
  "Dupattas",
  "Men's Veshti",
  "Blouse Materials",
  "Blouse Designs",
  "Men's Handloom",
];

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

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  fabric: string;
  weaving: string;
  colour: string;
  inStock: boolean;
  newest: number;
  popularity: number;
  oldPrice?: number;
  discount?: string;
  rating?: number;
  reviews?: number;
  label?: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Traditional Kanjivaram Silk Saree",
    category: "Silk Sarees",
    price: 12500,
    oldPrice: 15000,
    discount: "17% OFF",
    rating: 4.8,
    reviews: 124,
    label: "BESTSELLER",
    image: "/images/kanchipuram-silk.jpg",
    description: "Elegant traditional silk craftsmanship.",
    fabric: "Pure Silk",
    weaving: "Zari Weaving",
    colour: "Maroon",
    inStock: true,
    newest: 6,
    popularity: 95,
  },
  {
    id: 2,
    name: "Elegant Cotton Handloom Saree",
    category: "Cotton Sarees",
    price: 2800,
    oldPrice: 3500,
    discount: "20% OFF",
    rating: 4.6,
    reviews: 86,
    label: "POPULAR",
    image: "/images/chettinad-cotton.jpg",
    description: "Comfortable everyday handwoven elegance.",
    fabric: "Cotton",
    weaving: "Traditional Handloom",
    colour: "Blue",
    inStock: true,
    newest: 5,
    popularity: 85,
  },
  {
    id: 3,
    name: "Premium Linen Saree",
    category: "Linen Sarees",
    price: 3500,
    oldPrice: 4200,
    discount: "17% OFF",
    rating: 4.5,
    reviews: 64,
    label: "NEW ARRIVAL",
    image: "/images/linen-saree.jpg",
    description: "Lightweight linen with a graceful finish.",
    fabric: "Linen",
    weaving: "Traditional Handloom",
    colour: "Green",
    inStock: true,
    newest: 4,
    popularity: 75,
  },
  {
    id: 4,
    name: "Traditional Designer Dupatta",
    category: "Dupattas",
    price: 1800,
    oldPrice: 2200,
    discount: "18% OFF",
    rating: 4.7,
    reviews: 92,
    label: "TRENDING",
    image: "/images/dupattas.jpg",
    description: "Beautifully detailed traditional textile.",
    fabric: "Cotton Silk",
    weaving: "Zari Weaving",
    colour: "Mustard",
    inStock: true,
    newest: 3,
    popularity: 90,
  },
  {
    id: 5,
    name: "Handcrafted Blouse Material",
    category: "Blouse Materials",
    price: 1200,
    oldPrice: 1500,
    discount: "20% OFF",
    rating: 4.4,
    reviews: 48,
    label: "HANDCRAFTED",
    image: "/images/Traditional-silk.jpg",
    description: "Rich fabric for custom blouse designs.",
    fabric: "Silk Blend",
    weaving: "Traditional Handloom",
    colour: "Maroon",
    inStock: true,
    newest: 2,
    popularity: 65,
  },
  {
    id: 6,
    name: "Classic Men's Handloom Fabric",
    category: "Men's Veshti",
    price: 2200,
    oldPrice: 2600,
    discount: "15% OFF",
    rating: 4.5,
    reviews: 56,
    label: "TRADITIONAL",
    image: "/images/mens-handloom.jpg",
    description: "Traditional fabric for timeless styles.",
    fabric: "Cotton",
    weaving: "Traditional Handloom",
    colour: "Cream",
    inStock: true,
    newest: 1,
    popularity: 80,
  },
  {
    id: 7,
    name: "Kancheepuram Silk Saree",
    category: "Silk Sarees",
    price: 14500,
    image: "/images/antique-gold-magenta-kancheepuram-silk-saree.jpg",
    description: "Gold body with magenta zari detailing.",
    fabric: "Pure Silk",
    weaving: "Zari Weaving",
    colour: "Gold",
    inStock: true,
    newest: 7,
    popularity: 90,
  },
  {
    id: 8,
    name: "Royal Maroon and Antique Gold Kanchipuram Silk Saree",
    category: "Silk Sarees",
    price: 14500,
    image: "/images/kanchipuram-silk-model.jpg",
    description:
      "Celebrate timeless South Indian elegance with this magnificent Kanchipuram-inspired silk saree, featuring a lustrous antique-gold body, intricate traditional zari motifs and a rich maroon border. Ideal for weddings, festive celebrations, temple visits and special family occasions.",
    fabric: "Pure Silk",
    weaving: "Zari Weaving",
    colour: "Maroon",
    inStock: true,
    newest: 8,
    popularity: 96,
  },
  {
    id: 9,
    name: "Elegant Orange Cotton Saree with Pink Border",
    category: "Cotton Sarees",
    price: 6499,
    image: "/images/elegant-orange-cotton-saree.jpg",
    description:
      "Vibrant orange body with elegant magenta border detailing and traditional woven motifs.",
    fabric: "Cotton",
    weaving: "Traditional Handloom",
    colour: "Orange",
    inStock: true,
    newest: 9,
    popularity: 92,
  },
  {
    id: 10,
    name: "Black and Orange Cotton Saree",
    category: "Cotton Sarees",
    price: 6499,
    image: "/images/black-orange-cotton-saree.jpg",
    description: "Black body with orange border and traditional leafy motifs.",
    fabric: "Cotton",
    weaving: "Traditional Handloom",
    colour: "Black and Orange",
    inStock: true,
    newest: 10,
    popularity: 10,
  },
  {
    id: 11,
    name: "Elegant Blue Linen Saree",
    category: "Linen Sarees",
    price: 6499,
    image: "/images/blue-grey-linen-saree.jpg",
    description:
      "Blue body with silver-grey border and traditional gold motifs.",
    fabric: "Linen",
    weaving: "Traditional Motif Design",
    colour: "Blue and Silver Grey",
    inStock: true,
    newest: 11,
    popularity: 11,
  },
  {
    id: 12,
    name: "Navy Blue Floral Linen Saree",
    category: "Linen Sarees",
    price: 6999,
    image: "/images/navy-blue-floral-linen-saree.jpg",
    description:
      "Navy blue body with orange floral prints and an elegant traditional border.",
    fabric: "Linen",
    weaving: "Traditional Floral Design",
    colour: "Navy Blue and Orange",
    inStock: true,
    newest: 12,
    popularity: 12,
  },
  {
    id: 13,
    name: "Ivory and Maroon Traditional Dupatta",
    category: "Dupattas",
    price: 2499,
    image: "/images/ivory-maroon-traditional-dupatta.jpg",
    description:
      "Ivory body with intricate maroon patterns and a rich gold border.",
    fabric: "Not Specified",
    weaving: "Traditional Printed Design",
    colour: "Ivory, Maroon and Gold",
    inStock: true,
    newest: 13,
    popularity: 13,
  },
  {
    id: 14,
    name: "Teal Blue and Rust Traditional Dupatta",
    category: "Dupattas",
    price: 2499,
    image: "/images/teal-rust-traditional-dupatta.jpg",
    description:
      "Teal blue body with rust-orange border, intricate motifs and decorative tassels.",
    fabric: "Not Specified",
    weaving: "Traditional Motif Design",
    colour: "Teal Blue and Rust Orange",
    inStock: true,
    newest: 14,
    popularity: 14,
  },
  {
    id: 15,
    name: "Magenta Radha Krishna Embroidered Blouse",
    category: "Blouse Designs",
    price: 4999,
    image: "/images/magenta-radha-krishna-blouse.png",
    description:
      "Magenta blouse with intricate gold embroidery and Radha Krishna motifs.",
    fabric: "Not Specified",
    weaving: "Handcrafted Embroidery",
    colour: "Magenta and Gold",
    inStock: true,
    newest: 15,
    popularity: 15,
  },
  {
    id: 16,
    name: "Ivory Gold Traditional Men's Ethnic Wear",
    category: "Men's Handloom",
    price: 4999,
    image: "/images/ivory-gold-mens-ethnic-wear.png",
    description:
      "Ivory outfit with elegant gold embroidery and a matching dhoti.",
    fabric: "Not Specified",
    weaving: "Traditional Embroidery",
    colour: "Ivory and Gold",
    inStock: true,
    newest: 16,
    popularity: 16,
  },
  {
    id: 17,
    name: "Ivory Gold Men's Traditional Silk Dhoti Set",
    category: "Men's Handloom",
    price: 5999,
    image: "/images/ivory-gold-mens-silk-dhoti-set.png",
    description:
      "Ivory silk outfit with rich gold zari borders and an elegant traditional finish.",
    fabric: "Silk",
    weaving: "Traditional Zari Weaving",
    colour: "Ivory and Gold",
    inStock: true,
    newest: 17,
    popularity: 17,
  },
];

const formatPrice = (price: number) => `₹${price.toLocaleString("en-IN")}`;

function CollectionsContent({
  initialCategory,
}: {
  initialCategory: string | null;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory && categories.includes(initialCategory)
      ? [initialCategory]
      : []
  );

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

  const toggleFilter = (
    value: string,
    selected: string[],
    setSelected: (values: string[]) => void
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
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
    const result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase().trim());

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
        selectedColours.some((colour) =>
          product.colour.toLowerCase().includes(colour.toLowerCase())
        );

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
    } else if (sortBy === "newest") {
      result.sort((a, b) => b.newest - a.newest);
    } else if (sortBy === "popular") {
      result.sort((a, b) => b.popularity - a.popularity);
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

  const FilterHeading = ({
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
      <FilterHeading title="Category">
        {categories.map((category) => (
          <FilterCheckbox
            key={category}
            label={category}
            checked={selectedCategories.includes(category)}
            onChange={() =>
              toggleFilter(category, selectedCategories, setSelectedCategories)
            }
          />
        ))}
      </FilterHeading>

      <FilterHeading title="Fabric Type">
        {fabrics.map((fabric) => (
          <FilterCheckbox
            key={fabric}
            label={fabric}
            checked={selectedFabrics.includes(fabric)}
            onChange={() =>
              toggleFilter(fabric, selectedFabrics, setSelectedFabrics)
            }
          />
        ))}
      </FilterHeading>

      <FilterHeading title="Price Range">
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
      </FilterHeading>

      <FilterHeading title="Colour">
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          {colours.map((colour) => (
            <label
              key={colour.name}
              className="flex cursor-pointer items-center gap-2 py-2 text-xs text-gray-600"
            >
              <input
                type="checkbox"
                checked={selectedColours.includes(colour.name)}
                onChange={() =>
                  toggleFilter(colour.name, selectedColours, setSelectedColours)
                }
                className="h-3.5 w-3.5 accent-[#632d35]"
              />

              <span
                className="h-4 w-4 shrink-0 rounded-full border border-gray-300"
                style={{ backgroundColor: colour.value }}
              />

              {colour.name}
            </label>
          ))}
        </div>
      </FilterHeading>

      <FilterHeading title="Weaving Type">
        {weavingTypes.map((weaving) => (
          <FilterCheckbox
            key={weaving}
            label={weaving}
            checked={selectedWeaving.includes(weaving)}
            onChange={() =>
              toggleFilter(weaving, selectedWeaving, setSelectedWeaving)
            }
          />
        ))}
      </FilterHeading>

      <FilterHeading title="Availability">
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
      </FilterHeading>

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
      {/* Collections Hero Image */}
      <section className="relative w-full overflow-hidden bg-[#f4ede4]">
        <img
          src="/images/aaranya-our-collections-hero.png"
          alt="AARANYA – Our Collections"
          className="h-[350px] w-full object-cover object-center sm:h-[450px] md:h-[600px] lg:h-[650px]"
        />
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
                  className="text-xs font-medium text-[#a77a43] hover:text-[#632d35]"
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
                  All Collections
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Showing {filteredProducts.length} of {products.length}{" "}
                  products
                </p>
              </div>

              <span className="text-xs tracking-wider text-[#a77a43]">
                HANDCRAFTED WITH LOVE
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
                  No Products Found
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

// /collections?category=Silk%20Sarees opens with that category pre-selected.
function CollectionsRouter() {
  const category = useSearchParams().get("category");

  return (
    <CollectionsContent key={category ?? "all"} initialCategory={category} />
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#fffdf9]" />}>
      <CollectionsRouter />
    </Suspense>
  );
}