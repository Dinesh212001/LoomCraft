
"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  ArrowLeft,
  Heart,
  ShoppingBag,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  RotateCcw,
  Check,
} from "lucide-react";

import { useWishlist } from "../../../../context/WishlistContext";
import { useCart } from "../../../../context/CartContext";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  fabric: string;
  weaving: string;
  colour: string;
  pattern: string;
  dimensions: string;
  blousePiece: string;
  care: string;
  stock: number;
  description: string;
  images: string[];
};

type ProductDetailsProps = {
  id: string;
};

const products: Product[] = [
  {
    id: "1",
    name: "Traditional Kanjivaram Silk Saree",
    category: "Silk Sarees",
    price: 12500,
    originalPrice: 15000,
    fabric: "Pure Kanjivaram Silk",
    weaving: "Traditional Handloom Zari Weaving",
    colour: "Royal Maroon and Gold",
    pattern: "Traditional Temple Border",
    dimensions: "5.5 metres",
    blousePiece: "Yes",
    care: "Dry Clean Only",
    stock: 8,
    description:
      "Experience the beauty of traditional craftsmanship with this elegant Kanjivaram silk saree. Its rich colour, detailed zari work and classic border make it ideal for weddings and special occasions.",
    images: [
      "/images/kanchipuram-silk.jpg",
      "/images/Golden Silk Saree front.png",
      "/images/Golden Silk Saree back.png",
      "/images/Golden Silk Saree details.png",
    ],
  },
  {
    id: "2",
    name: "Elegant Cotton Handloom Saree",
    category: "Cotton Sarees",
    price: 2800,
    originalPrice: 3500,
    fabric: "Pure Cotton",
    weaving: "Traditional Handloom Weaving",
    colour: "Blue and Cream",
    pattern: "Classic Checked Design",
    dimensions: "5.5 metres",
    blousePiece: "Yes",
    care: "Gentle Hand Wash",
    stock: 12,
    description:
      "A comfortable everyday handloom saree made with breathable cotton fabric. Its timeless design makes it suitable for daily wear and casual occasions.",
    images: [
      "/images/chettinad-cotton.jpg",
      "/images/Chettinad-collection.jpg",
    ],
  },
  {
    id: "3",
    name: "Premium Linen Saree",
    category: "Linen Sarees",
    price: 3500,
    originalPrice: 4200,
    fabric: "Premium Linen",
    weaving: "Handloom Weaving",
    colour: "Pastel Green",
    pattern: "Minimal Border Design",
    dimensions: "5.5 metres",
    blousePiece: "Yes",
    care: "Gentle Hand Wash",
    stock: 10,
    description:
      "A lightweight linen saree combining comfort and understated elegance. Perfect for office wear, gatherings and everyday occasions.",
    images: [
      "/images/linen-saree.jpg",
      "/images/Traditional-silk.jpg",
    ],
  },
  {
    id: "4",
    name: "Traditional Designer Dupatta",
    category: "Dupattas",
    price: 1800,
    originalPrice: 2200,
    fabric: "Cotton Silk",
    weaving: "Handloom Weaving",
    colour: "Mustard Yellow",
    pattern: "Traditional Woven Motifs",
    dimensions: "2.5 metres",
    blousePiece: "Not Applicable",
    care: "Gentle Hand Wash",
    stock: 15,
    description:
      "Add a traditional touch to your outfit with this beautifully woven handloom dupatta. Its versatile design complements ethnic clothing.",
    images: [
      "/images/dupattas.jpg",
      "/images/Traditional-silk.jpg",
    ],
  },
  {
    id: "5",
    name: "Traditional Blouse Material",
    category: "Blouse Materials",
    price: 1200,
    originalPrice: 1500,
    fabric: "Silk Blend",
    weaving: "Traditional Woven Fabric",
    colour: "Maroon",
    pattern: "Zari Border",
    dimensions: "1 metre",
    blousePiece: "Not Applicable",
    care: "Dry Clean Recommended",
    stock: 20,
    description:
      "A beautiful blouse material featuring a traditional woven finish. It pairs well with silk and festive sarees.",
    images: [
      "/images/Traditional-silk.jpg",
      "/images/Kanchipuram-collection.jpg",
    ],
  },
  {
    id: "6",
    name: "Classic Men's Handloom Fabric",
    category: "Men's Handloom",
    price: 2200,
    originalPrice: 2800,
    fabric: "Pure Cotton",
    weaving: "Handloom Weaving",
    colour: "White and Gold",
    pattern: "Traditional Border",
    dimensions: "4 metres",
    blousePiece: "Not Applicable",
    care: "Gentle Hand Wash",
    stock: 10,
    description:
      "Traditional handloom fabric designed for comfortable ethnic wear. Its classic finish makes it suitable for festive and cultural occasions.",
    images: [
      "/images/mens-handloom.jpg",
      "/images/Traditional-silk.jpg",
    ],
  },
  {
    id: "101",
    name: "Royal Maroon Handwoven Silk Saree",
    category: "Silk Sarees",
    price: 15999,
    originalPrice: 19999,
    fabric: "Pure Silk",
    weaving: "Traditional Handloom",
    colour: "Royal Maroon",
    pattern: "Traditional Woven Border",
    dimensions: "5.5 metres",
    blousePiece: "Yes",
    care: "Dry Clean Only",
    stock: 10,
    description:
      "A rich maroon silk saree with a graceful traditional look, designed for celebrations and special occasions. Its elegant handloom-inspired finish makes it a beautiful choice for festive gatherings and special moments.",
    images: ["/images/new-royal-maroon-silk.png"],
  },
  {
    id: "102",
    name: "Pastel Green Traditional Cotton Saree",
    category: "Cotton Sarees",
    price: 6499,
    originalPrice: 7999,
    fabric: "Cotton",
    weaving: "Traditional Handloom",
    colour: "Pastel Green",
    pattern: "Classic Traditional Woven Design",
    dimensions: "5.5 metres",
    blousePiece: "Yes",
    care: "Gentle Hand Wash",
    stock: 10,
    description:
      "A refreshing pastel green cotton saree that blends everyday comfort with timeless traditional elegance. Its breathable cotton feel makes it suitable for everyday wear, office wear and casual occasions.",
    images: ["/images/new-pastel-green-cotton.png"],
  },
  {
    id: "103",
    name: "Mustard Yellow Elegant Linen Saree",
    category: "Linen Sarees",
    price: 7499,
    originalPrice: 8999,
    fabric: "Linen",
    weaving: "Traditional Handloom",
    colour: "Mustard Yellow",
    pattern: "Minimal Traditional Border",
    dimensions: "5.5 metres",
    blousePiece: "Yes",
    care: "Gentle Hand Wash",
    stock: 10,
    description:
      "An elegant mustard linen saree with a light, graceful drape for effortless day-to-evening styling. A refined choice for gatherings, work occasions and relaxed celebrations.",
    images: ["/images/new-mustard-yellow-linen.png"],
  },
  {
    id: "104",
    name: "Rose Pink Handloom Silk Cotton Saree",
    category: "Silk Sarees",
    price: 8999,
    originalPrice: 10999,
    fabric: "Cotton Silk",
    weaving: "Traditional Handloom",
    colour: "Rose Pink",
    pattern: "Elegant Woven Traditional Design",
    dimensions: "5.5 metres",
    blousePiece: "Yes",
    care: "Dry Clean Recommended",
    stock: 10,
    description:
      "A beautiful rose pink silk-cotton saree, bringing together a soft texture and a refined festive finish. Its graceful appearance makes it suitable for celebrations and special occasions.",
    images: ["/images/new-rose-pink-silk-cotton.png"],
  },
  {
    id: "7",
    name: "Kancheepuram Silk Saree",
    category: "Silk Sarees",
    price: 14500,
    originalPrice: 17000,
    fabric: "Pure Silk",
    weaving: "Zari Weaving",
    colour: "Gold and Magenta",
    pattern: "Traditional Zari Border",
    dimensions: "5.5 metres",
    blousePiece: "Yes",
    care: "Dry Clean Only",
    stock: 10,
    description:
      "Gold body with magenta zari detailing. A classic Kancheepuram silk saree for weddings and festive occasions.",
    images: ["/images/antique-gold-magenta-kancheepuram-silk-saree.jpg"],
  },
  {
    id: "8",
    name: "Royal Maroon and Antique Gold Kanchipuram Silk Saree",
    category: "Silk Sarees",
    price: 14500,
    originalPrice: 17500,
    fabric: "Pure Silk",
    weaving: "Zari Weaving",
    colour: "Maroon and Antique Gold",
    pattern: "Traditional Zari Motifs",
    dimensions: "5.5 metres",
    blousePiece: "Yes",
    care: "Dry Clean Only",
    stock: 10,
    description:
      "Celebrate timeless South Indian elegance with this magnificent Kanchipuram-inspired silk saree, featuring a lustrous antique-gold body, intricate traditional zari motifs and a rich maroon border. Ideal for weddings, festive celebrations, temple visits and special family occasions.",
    images: ["/images/kanchipuram-silk-model.jpg"],
  },
  {
    id: "9",
    name: "Elegant Orange Cotton Saree with Pink Border",
    category: "Cotton Sarees",
    price: 6499,
    originalPrice: 7999,
    fabric: "Cotton",
    weaving: "Traditional Handloom",
    colour: "Orange",
    pattern: "Magenta Border with Woven Motifs",
    dimensions: "5.5 metres",
    blousePiece: "Yes",
    care: "Gentle Hand Wash",
    stock: 10,
    description:
      "Vibrant orange body with elegant magenta border detailing and traditional woven motifs.",
    images: ["/images/elegant-orange-cotton-saree.jpg"],
  },
  {
    id: "10",
    name: "Black and Orange Cotton Saree",
    category: "Cotton Sarees",
    price: 6499,
    originalPrice: 7999,
    fabric: "Cotton",
    weaving: "Traditional Handloom",
    colour: "Black and Orange",
    pattern: "Leafy Motifs",
    dimensions: "5.5 metres",
    blousePiece: "Yes",
    care: "Gentle Hand Wash",
    stock: 10,
    description:
      "Black body with orange border and traditional leafy motifs.",
    images: ["/images/black-orange-cotton-saree.jpg"],
  },
  {
    id: "11",
    name: "Elegant Blue Linen Saree",
    category: "Linen Sarees",
    price: 6499,
    originalPrice: 7999,
    fabric: "Linen",
    weaving: "Traditional Motif Design",
    colour: "Blue and Silver Grey",
    pattern: "Gold Motifs with Silver-Grey Border",
    dimensions: "5.5 metres",
    blousePiece: "Yes",
    care: "Gentle Hand Wash",
    stock: 10,
    description:
      "Blue body with silver-grey border and traditional gold motifs.",
    images: ["/images/blue-grey-linen-saree.jpg"],
  },
  {
    id: "12",
    name: "Navy Blue Floral Linen Saree",
    category: "Linen Sarees",
    price: 6999,
    originalPrice: 8499,
    fabric: "Linen",
    weaving: "Traditional Floral Design",
    colour: "Navy Blue and Orange",
    pattern: "Orange Floral Prints",
    dimensions: "5.5 metres",
    blousePiece: "Yes",
    care: "Gentle Hand Wash",
    stock: 10,
    description:
      "Navy blue body with orange floral prints and an elegant traditional border.",
    images: ["/images/navy-blue-floral-linen-saree.jpg"],
  },
  {
    id: "13",
    name: "Ivory and Maroon Traditional Dupatta",
    category: "Dupattas",
    price: 2499,
    originalPrice: 2999,
    fabric: "Not Specified",
    weaving: "Traditional Printed Design",
    colour: "Ivory, Maroon and Gold",
    pattern: "Maroon Patterns with Gold Border",
    dimensions: "2.5 metres",
    blousePiece: "Not Applicable",
    care: "Gentle Hand Wash",
    stock: 10,
    description:
      "Ivory body with intricate maroon patterns and a rich gold border.",
    images: ["/images/ivory-maroon-traditional-dupatta.jpg"],
  },
  {
    id: "14",
    name: "Teal Blue and Rust Traditional Dupatta",
    category: "Dupattas",
    price: 2499,
    originalPrice: 2999,
    fabric: "Not Specified",
    weaving: "Traditional Motif Design",
    colour: "Teal Blue and Rust Orange",
    pattern: "Traditional Motifs with Tassels",
    dimensions: "2.5 metres",
    blousePiece: "Not Applicable",
    care: "Gentle Hand Wash",
    stock: 10,
    description:
      "Teal blue body with rust-orange border, intricate motifs and decorative tassels.",
    images: ["/images/teal-rust-traditional-dupatta.jpg"],
  },
  {
    id: "15",
    name: "Magenta Radha Krishna Embroidered Blouse",
    category: "Blouse Designs",
    price: 4999,
    originalPrice: 5999,
    fabric: "Not Specified",
    weaving: "Handcrafted Embroidery",
    colour: "Magenta and Gold",
    pattern: "Radha Krishna Motifs",
    dimensions: "Standard blouse size",
    blousePiece: "Not Applicable",
    care: "Dry Clean Recommended",
    stock: 10,
    description:
      "Magenta blouse with intricate gold embroidery and Radha Krishna motifs.",
    images: ["/images/magenta-radha-krishna-blouse.png"],
  },
  {
    id: "16",
    name: "Ivory Gold Traditional Men's Ethnic Wear",
    category: "Men's Handloom",
    price: 4999,
    originalPrice: 5999,
    fabric: "Not Specified",
    weaving: "Traditional Embroidery",
    colour: "Ivory and Gold",
    pattern: "Gold Embroidery",
    dimensions: "Standard size with matching dhoti",
    blousePiece: "Not Applicable",
    care: "Dry Clean Recommended",
    stock: 10,
    description:
      "Ivory outfit with elegant gold embroidery and a matching dhoti.",
    images: ["/images/ivory-gold-mens-ethnic-wear.png"],
  },
  {
    id: "17",
    name: "Ivory Gold Men's Traditional Silk Dhoti Set",
    category: "Men's Handloom",
    price: 5999,
    originalPrice: 7499,
    fabric: "Silk",
    weaving: "Traditional Zari Weaving",
    colour: "Ivory and Gold",
    pattern: "Gold Zari Borders",
    dimensions: "Standard size with dhoti",
    blousePiece: "Not Applicable",
    care: "Dry Clean Only",
    stock: 10,
    description:
      "Ivory silk outfit with rich gold zari borders and an elegant traditional finish.",
    images: ["/images/ivory-gold-mens-silk-dhoti-set.png"],
  },
];

export default function ProductDetailsClient({
  id,
}: ProductDetailsProps) {
  const router = useRouter();

  const { isInWishlist, toggleWishlist } = useWishlist();

  const { addToCart, buyNow } = useCart();

  const normalizedId = String(id).trim();

  const product = products.find(
    (item) => String(item.id).trim() === normalizedId
  );

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Image Zoom States
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const [zoomPosition, setZoomPosition] = useState({
    x: 50,
    y: 50,
  });

  // Mouse Move Zoom
  const handleImageMouseMove = (
    event: MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 100;

    const y =
      ((event.clientY - rect.top) / rect.height) * 100;

    setZoomPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });

    setIsImageZoomed(true);
  };

  // Reset Zoom
  const handleImageMouseLeave = () => {
    setIsImageZoomed(false);

    setZoomPosition({
      x: 50,
      y: 50,
    });
  };

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#faf7f2] px-5 text-center">
        <h1 className="text-3xl font-semibold text-[#351e23]">
          Product Not Found
        </h1>

        <p className="mt-3 text-gray-600">
          Sorry, the product you are looking for is unavailable.
        </p>

        <Link
          href="/collections"
          className="mt-6 rounded-md bg-[#6f2638] px-6 py-3 text-white transition hover:bg-[#4b1928]"
        >
          Back to Collections
        </Link>
      </main>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  const wishlistProduct = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0],
    category: product.category,
  };

  const handleWishlist = () => {
    toggleWishlist(wishlistProduct);
  };

  const discount = Math.round(
    ((product.originalPrice - product.price) /
      product.originalPrice) *
      100
  );

  const isOutOfStock = product.stock === 0;

  const specifications = [
    ["Fabric Type", product.fabric],
    ["Weaving Technique", product.weaving],
    ["Colour", product.colour],
    ["Design Pattern", product.pattern],
    ["Dimensions", product.dimensions],
    ["Blouse Piece", product.blousePiece],
    ["Care Instructions", product.care],
  ];

  const increaseQuantity = () => {
    setQuantity((previous) =>
      Math.min(product.stock, previous + 1)
    );
  };

  const decreaseQuantity = () => {
    setQuantity((previous) =>
      Math.max(1, previous - 1)
    );
  };

  // Add to Cart handler
  const handleAddToCart = () => {
    if (isOutOfStock) return;

    addToCart({
      id: Number(product.id),
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
      quantity: quantity,
    });

    alert(`${quantity} x ${product.name} added to cart!`);
  };

  // Buy Now handler
  const handleBuyNow = () => {
    if (isOutOfStock) return;

    buyNow({
      id: Number(product.id),
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
      quantity: quantity,
    });

    router.push("/checkout");
  };

  const mainImage =
    product.images[selectedImage] || product.images[0];

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      {/* Back Navigation */}
      <div className="border-b border-[#eadfd5] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-5">
          <button
            onClick={() =>
              router.push(
                ["101", "102", "103", "104"].includes(normalizedId)
                  ? "/new-arrivals"
                  : "/collections"
              )
            }
            className="flex items-center gap-2 text-sm font-medium text-[#6f2638] transition hover:text-[#a77a43]"
          >
            <ArrowLeft size={18} />

            {["101", "102", "103", "104"].includes(normalizedId)
              ? "Back to New Arrivals"
              : "Back to Collections"}
          </button>
        </div>
      </div>

      {/* Product Section */}
      <section className="mx-auto max-w-7xl px-5 py-10 md:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product Image Gallery */}
          <div>
            <div
              className="relative overflow-hidden rounded-xl bg-white"
              onMouseMove={handleImageMouseMove}
              onMouseLeave={handleImageMouseLeave}
              style={{
                cursor: isImageZoomed ? "zoom-in" : "default",
              }}
            >
              <img
                src={mainImage}
                alt={product.name}
                className="h-[420px] w-full rounded-xl object-cover object-center transition-transform duration-200 ease-out md:h-[600px]"
                style={{
                  transform: isImageZoomed
                    ? "scale(2)"
                    : "scale(1)",
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }}
              />

              <span className="absolute left-5 top-5 rounded-full bg-[#6f2638] px-4 py-2 text-xs font-semibold text-white">
                {discount}% OFF
              </span>

              <button
                type="button"
                onClick={handleWishlist}
                aria-label={
                  isWishlisted
                    ? "Remove from wishlist"
                    : "Add to wishlist"
                }
                aria-pressed={isWishlisted}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110"
              >
                <Heart
                  size={21}
                  className={
                    isWishlisted
                      ? "fill-[#9b3047] text-[#9b3047]"
                      : "text-[#6f2638]"
                  }
                />
              </button>
            </div>

            {/* Product Thumbnails */}
            <div className="mt-5 flex gap-4 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => {
                    setSelectedImage(index);
                    setIsImageZoomed(false);
                  }}
                  aria-label={`View ${product.name} image ${index + 1}`}
                  aria-pressed={selectedImage === index}
                  className={`relative h-28 w-28 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                    selectedImage === index
                      ? "border-[#6f2638] opacity-100"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#a77a43]">
              {product.category}
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight text-[#351e23] md:text-4xl">
              {product.name}
            </h1>

            <p className="mt-5 leading-8 text-gray-600">
              {product.description}
            </p>

            {/* Price */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-bold text-[#6f2638]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              <span className="text-lg text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>

              <span className="rounded-md bg-[#f2e5df] px-3 py-1 text-sm font-semibold text-[#6f2638]">
                Save {discount}%
              </span>
            </div>

            <div className="my-7 border-t border-[#e8dcd2]" />

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  isOutOfStock ? "bg-red-500" : "bg-green-600"
                }`}
              />

              <span
                className={`text-sm font-semibold ${
                  isOutOfStock ? "text-red-600" : "text-green-700"
                }`}
              >
                {isOutOfStock
                  ? "Out of Stock"
                  : `In Stock (${product.stock} available)`}
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="mt-7">
              <p className="mb-3 text-sm font-semibold text-[#351e23]">
                Quantity
              </p>

              <div className="flex items-center gap-5">
                <div className="flex items-center overflow-hidden rounded-md border border-[#d9c8bb] bg-white">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1 || isOutOfStock}
                    aria-label="Decrease quantity"
                    className="p-3 text-[#6f2638] hover:bg-[#f5eee8] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Minus size={16} />
                  </button>

                  <span className="min-w-12 text-center font-semibold text-[#351e23]">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    disabled={
                      quantity >= product.stock || isOutOfStock
                    }
                    aria-label="Increase quantity"
                    className="p-3 text-[#6f2638] hover:bg-[#f5eee8] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <span className="text-sm text-gray-500">
                  {isOutOfStock
                    ? "Currently unavailable"
                    : "Select your quantity"}
                </span>
              </div>
            </div>

            {/* Shopping Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className="flex flex-1 items-center justify-center gap-3 rounded-md bg-[#6f2638] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#4b1928] disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                <ShoppingBag size={19} />
                {isOutOfStock ? "Out of Stock" : "Add to Cart"}
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                disabled={isOutOfStock}
                className="flex flex-1 items-center justify-center gap-3 rounded-md bg-[#a77a43] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#805b30] disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                <ShoppingBag size={19} />
                Buy Now
              </button>

              <button
                type="button"
                onClick={handleWishlist}
                aria-pressed={isWishlisted}
                aria-label={
                  isWishlisted
                    ? "Remove from wishlist"
                    : "Add to wishlist"
                }
                className="flex items-center justify-center gap-2 rounded-md border border-[#6f2638] px-6 py-4 text-sm font-semibold text-[#6f2638] transition hover:bg-[#f2e5df]"
              >
                <Heart
                  size={19}
                  className={isWishlisted ? "fill-[#6f2638]" : ""}
                />
                {isWishlisted ? "Wishlisted" : "Wishlist"}
              </button>
            </div>

            {/* Service Information */}
            <div className="mt-9 grid grid-cols-1 gap-5 border-t border-[#e8dcd2] pt-7 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <Truck
                  className="shrink-0 text-[#a77a43]"
                  size={23}
                />
                <div>
                  <p className="text-sm font-semibold text-[#351e23]">
                    Delivery
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Delivery details at checkout
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck
                  className="shrink-0 text-[#a77a43]"
                  size={23}
                />
                <div>
                  <p className="text-sm font-semibold text-[#351e23]">
                    Quality
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Handloom craftsmanship
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <RotateCcw
                  className="shrink-0 text-[#a77a43]"
                  size={23}
                />
                <div>
                  <p className="text-sm font-semibold text-[#351e23]">
                    Returns
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Refer to return policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications */}
      <section className="border-t border-[#eadfd5] bg-white py-14">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#a77a43]">
              Product Information
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#351e23]">
              Product Specifications
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Explore the details of this handloom product.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-xl border border-[#eadfd5]">
            {specifications.map(([label, value], index) => (
              <div
                key={label}
                className={`grid grid-cols-1 gap-2 px-5 py-5 sm:grid-cols-2 sm:gap-6 ${
                  index % 2 === 0
                    ? "bg-[#faf7f2]"
                    : "bg-white"
                }`}
              >
                <p className="text-sm font-semibold text-[#6f2638]">
                  {label}
                </p>

                <p className="text-sm text-gray-700">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Shopping Section */}
      <section className="bg-[#351e23] px-5 py-12 text-center text-white">
        <Check
          className="mx-auto text-[#d5ae75]"
          size={32}
        />

        <h2 className="mt-4 text-2xl font-semibold">
          Celebrate the Beauty of Handloom
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#e8dcd2]">
          Discover traditional craftsmanship and timeless
          designs with AARANYA – The Art of Handloom.
        </p>

        <Link
          href="/collections"
          className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#d5ae75] px-7 py-3 text-sm font-semibold text-[#351e23] transition hover:bg-white"
        >
          Explore More Collections
          <ArrowLeft className="rotate-180" size={17} />
        </Link>
      </section>
    </main>
  );
}
