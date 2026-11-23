"use client";

import Link from "next/link";
import { useCart } from "../../../context/CartContext";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  ShoppingCart,
} from "lucide-react";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  // Prevent errors if cartItems is undefined or not an array
  const cart = Array.isArray(cartItems) ? cartItems : [];

  const subtotal = cart.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 1),
    0,
  );

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <main className="min-h-screen bg-[#fffdf9] px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#a77a48]">
            Your Shopping Bag
          </p>

          <h1 className="text-3xl font-semibold text-[#351e23] sm:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Review your selected handloom products before checkout.
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart */
          <div className="mx-auto max-w-xl py-16 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#f5eee7]">
              <ShoppingBag
                size={42}
                strokeWidth={1.3}
                className="text-[#8b684e]"
              />
            </div>

            <h2 className="text-2xl font-semibold text-[#351e23]">
              Your cart is empty
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              You haven't added any products to your cart yet. Explore our
              handloom collections and find something beautiful.
            </p>

            <Link
              href="/collections"
              className="mt-8 inline-flex items-center gap-2 bg-[#351e23] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#53343a]"
            >
              <ShoppingBag size={17} />
              Explore Collections
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Cart Products */}
            <div className="lg:col-span-2">
              <div className="mb-5 flex items-center justify-between border-b border-[#eadfd5] pb-4">
                <h2 className="text-lg font-semibold text-[#351e23]">
                  Cart Items ({cart.length})
                </h2>

                <button
                  onClick={clearCart}
                  className="flex items-center gap-2 text-sm text-red-600 transition hover:text-red-800"
                >
                  <Trash2 size={16} />
                  Clear Cart
                </button>
              </div>

              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-5 border-b border-[#eadfd5] pb-6 sm:flex-row"
                  >
                    {/* Product Image */}
                    <div className="h-36 w-full flex-shrink-0 overflow-hidden bg-[#f5eee7] sm:h-40 sm:w-32">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name || "Handloom product"}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <ShoppingBag size={35} className="text-[#a77a48]" />
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-[#351e23]">
                          {item.name || "Handloom Product"}
                        </h3>

                        {item.category && (
                          <p className="mt-1 text-sm text-gray-500">
                            {item.category}
                          </p>
                        )}

                        <p className="mt-3 text-base font-semibold text-[#8b684e]">
                          {formatPrice(Number(item.price || 0))}
                        </p>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-[#d9c8b8]">
                          <button
                            onClick={() =>
                              updateQuantity(
                                String(item.id),
                                Math.max(1, Number(item.quantity || 1) - 1),
                              )
                            }
                            disabled={Number(item.quantity || 1) <= 1}
                            className="p-2 text-[#351e23] transition hover:bg-[#f5eee7] disabled:cursor-not-allowed disabled:opacity-40"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={15} />
                          </button>

                          <span className="min-w-10 text-center text-sm text-[#351e23]">
                            {Number(item.quantity || 1)}
                          </span>

                          <button
                            onClick={() =>
                              updateQuantity(
                                String(item.id),
                                Number(item.quantity || 1) + 1,
                              )
                            }
                            className="p-2 text-[#351e23] transition hover:bg-[#f5eee7]"
                            aria-label="Increase quantity"
                          >
                            <Plus size={15} />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(String(item.id))}
                          className="flex items-center gap-2 text-sm text-red-600 transition hover:text-red-800"
                        >
                          <Trash2 size={16} />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}
                    <div className="text-left sm:min-w-28 sm:text-right">
                      <p className="text-xs text-gray-500">Item Total</p>
                      <p className="mt-1 font-semibold text-[#351e23]">
                        {formatPrice(
                          Number(item.price || 0) * Number(item.quantity || 1),
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/collections"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#8b684e] transition hover:text-[#351e23]"
              >
                <ArrowLeft size={17} />
                Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="h-fit border border-[#eadfd5] bg-white p-6 rounded-lg lg:sticky lg:top-24 lg:self-start">
              <h2 className="border-b border-[#eadfd5] pb-4 text-xl font-semibold text-[#351e23]">
                Order Summary
              </h2>

              <div className="space-y-4 py-5">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Items</span>
                  <span>
                    {cart.reduce(
                      (total, item) => total + Number(item.quantity || 1),
                      0,
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-700">Calculated at checkout</span>
                </div>

                <div className="border-t border-[#eadfd5] pt-4">
                  <div className="flex justify-between text-base font-semibold text-[#351e23]">
                    <span>Total</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Shipping charges are not included.
                  </p>
                </div>
              </div>

              <Link
                href="/checkout"
                className="flex w-full items-center justify-center gap-2 bg-[#351e23] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#53343a]"
              >
                <ShoppingCart size={17} />
                Proceed to Checkout
              </Link>

              <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                Thank you for choosing our handloom collections.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
