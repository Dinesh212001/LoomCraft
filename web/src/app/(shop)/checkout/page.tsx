"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  ShoppingBag,
  CreditCard,
  Truck,
  CheckCircle,
} from "lucide-react";

import { useCart } from "../../../context/CartContext";

type CustomerDetails = {
  fullName: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
};

type OrderItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CustomerOrder = {
  orderId: string;
  createdAt: string;
  customer: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  paymentMethod: "UPI" | "Card" | "Cash on Delivery";
  paymentStatus: "Pending" | "Demo Paid";
  orderStatus: "Placed";
};

export default function CheckoutPage() {
  const router = useRouter();
  const [selectedUPIApp, setSelectedUPIApp] = useState("");

  // Get cart data from CartContext
  const { cartItems, clearCart } = useCart();

  // Always use an array to prevent undefined.length errors
  const cart = Array.isArray(cartItems) ? cartItems : [];

  // Calculate cart count and subtotal
  const cartCount = cart.reduce(
    (total, item) => total + (Number(item.quantity) || 1),
    0,
  );

  const cartTotal = cart.reduce(
    (total, item) =>
      total + Number(item.price || 0) * (Number(item.quantity) || 1),
    0,
  );

  const [customer, setCustomer] = useState<CustomerDetails>({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<
    "UPI" | "Card" | "Cash on Delivery"
  >("Cash on Delivery");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Shipping calculation
  const shippingCharge = cartTotal > 2000 ? 0 : 100;
  const orderTotal = cartTotal + shippingCharge;

  const formatPrice = (price: number) =>
    `₹${price.toLocaleString("en-IN", {
      maximumFractionDigits: 0,
    })}`;

  // Handle customer input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setCustomer((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Place COD order
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setErrorMessage("");

    if (cart.length === 0) {
      setErrorMessage(
        "Your cart is empty. Please add products before checkout.",
      );
      return;
    }

    if (!/^[6-9]\d{9}$/.test(customer.mobile)) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!/^\d{6}$/.test(customer.pincode)) {
      setErrorMessage("Please enter a valid 6-digit PIN code.");
      return;
    }

    setIsSubmitting(true);

    try {
      const orderId = `AAR${Date.now()}`;

      const order: CustomerOrder = {
        orderId,
        createdAt: new Date().toISOString(),

        customer: {
          fullName: customer.fullName,
          email: customer.email,
          phone: customer.mobile,
          address: customer.address,
          city: customer.city,
          state: customer.state,
          pincode: customer.pincode,
        },

        items: cart.map((product) => ({
          id: Number(product.id),
          name: product.name || "Handloom Product",
          price: Number(product.price || 0),
          image: product.image || "",
          quantity: Number(product.quantity) || 1,
        })),

        subtotal: cartTotal,
        shipping: shippingCharge,
        total: orderTotal,
        paymentMethod: paymentMethod,
        paymentStatus: "Pending",
        orderStatus: "Placed",
      };

      // Save order in localStorage
      const existingOrders = localStorage.getItem("aaranya-orders");

      const parsedOrders = existingOrders ? JSON.parse(existingOrders) : [];

      const orders: CustomerOrder[] = Array.isArray(parsedOrders)
        ? parsedOrders
        : [];

      orders.unshift(order);

      localStorage.setItem("aaranya-orders", JSON.stringify(orders));

      // Clear cart after successful order placement
      clearCart();

      // Navigate to order confirmation
      router.push(`/order-success?orderId=${encodeURIComponent(orderId)}`);
    } catch (error) {
      console.error("Order placement error:", error);

      setErrorMessage("Unable to place your order. Please try again.");

      setIsSubmitting(false);
    }
  };

  // Empty cart
  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#f5efe7] px-5 py-20">
        <div className="mx-auto max-w-xl bg-white p-10 text-center shadow-sm">
          <ShoppingBag size={48} className="mx-auto mb-5 text-[#a47748]" />

          <h1 className="font-serif text-3xl text-[#632d35]">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Add your favourite handloom products before proceeding to checkout.
          </p>

          <Link
            href="/collections"
            className="mt-7 inline-flex items-center gap-2 bg-[#632d35] px-7 py-3 text-sm font-semibold text-white hover:bg-[#4d2028]"
          >
            Explore Collections
            <ArrowRight size={16} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5efe7] px-4 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#a47748]">
            AARANYA HANDLOOM
          </p>

          <h1 className="font-serif text-4xl font-semibold text-[#632d35] sm:text-5xl">
            Checkout
          </h1>

          <p className="mt-4 text-sm text-[#66574e]">
            Complete your delivery details and review your order.
          </p>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-[#b58a50]" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            {/* Customer Information */}
            <div className="space-y-7 lg:col-span-2">
              {/* Contact Details */}
              <section className="bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#f5efe7]">
                    <MapPin size={20} className="text-[#632d35]" />
                  </div>

                  <div>
                    <h2 className="font-serif text-xl text-[#632d35]">
                      Contact Information
                    </h2>

                    <p className="text-xs text-gray-500">
                      Enter your contact details
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-[#632d35]">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      value={customer.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      autoComplete="name"
                      className="w-full border border-[#e5d9cc] px-4 py-3 text-sm outline-none focus:border-[#632d35]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#632d35]">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={customer.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      required
                      autoComplete="email"
                      className="w-full border border-[#e5d9cc] px-4 py-3 text-sm outline-none focus:border-[#632d35]"
                    />
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#632d35]">
                      Mobile Number *
                    </label>

                    <input
                      type="tel"
                      name="mobile"
                      value={customer.mobile}
                      onChange={handleChange}
                      placeholder="Enter 10-digit mobile number"
                      pattern="[6-9][0-9]{9}"
                      maxLength={10}
                      required
                      autoComplete="tel"
                      className="w-full border border-[#e5d9cc] px-4 py-3 text-sm outline-none focus:border-[#632d35]"
                    />
                  </div>
                </div>
              </section>

              {/* Delivery Address */}
              <section className="bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#f5efe7]">
                    <Truck size={20} className="text-[#632d35]" />
                  </div>

                  <div>
                    <h2 className="font-serif text-xl text-[#632d35]">
                      Delivery Address
                    </h2>

                    <p className="text-xs text-gray-500">
                      Where should we deliver your order?
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {/* Address */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#632d35]">
                      House No. / Street Address *
                    </label>

                    <textarea
                      name="address"
                      value={customer.address}
                      onChange={handleChange}
                      placeholder="Enter your complete delivery address"
                      required
                      rows={3}
                      autoComplete="street-address"
                      className="w-full resize-none border border-[#e5d9cc] px-4 py-3 text-sm outline-none focus:border-[#632d35]"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* City */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#632d35]">
                        City *
                      </label>

                      <input
                        type="text"
                        name="city"
                        value={customer.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                        required
                        autoComplete="address-level2"
                        className="w-full border border-[#e5d9cc] px-4 py-3 text-sm outline-none focus:border-[#632d35]"
                      />
                    </div>

                    {/* State */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#632d35]">
                        State *
                      </label>

                      <input
                        type="text"
                        name="state"
                        value={customer.state}
                        onChange={handleChange}
                        placeholder="Enter state"
                        required
                        autoComplete="address-level1"
                        className="w-full border border-[#e5d9cc] px-4 py-3 text-sm outline-none focus:border-[#632d35]"
                      />
                    </div>

                    {/* PIN Code */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-[#632d35]">
                        PIN Code *
                      </label>

                      <input
                        type="text"
                        name="pincode"
                        value={customer.pincode}
                        onChange={handleChange}
                        placeholder="6-digit PIN code"
                        pattern="[0-9]{6}"
                        maxLength={6}
                        required
                        autoComplete="postal-code"
                        className="w-full border border-[#e5d9cc] px-4 py-3 text-sm outline-none focus:border-[#632d35]"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section className="bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#f5efe7]">
                    <CreditCard size={20} className="text-[#632d35]" />
                  </div>

                  <div>
                    <h2 className="font-serif text-xl text-[#632d35]">
                      Payment Method
                    </h2>

                    <p className="text-xs text-gray-500">
                      Available payment option
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {(["UPI", "Card", "Cash on Delivery"] as const).map(
                    (method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setPaymentMethod(method)}
                        className={`w-full border p-4 text-left transition ${
                          paymentMethod === method
                            ? "border-[#632d35] bg-[#fffdf9]"
                            : "border-[#e5d9cc] bg-white hover:border-[#a47748]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                              paymentMethod === method
                                ? "border-[#632d35]"
                                : "border-gray-300"
                            }`}
                          >
                            {paymentMethod === method && (
                              <div className="h-2.5 w-2.5 rounded-full bg-[#632d35]" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-[#632d35]">
                              {method === "UPI"
                                ? "UPI Payment"
                                : method === "Card"
                                  ? "Credit / Debit Card"
                                  : "Cash on Delivery"}
                            </p>
                            <p className="mt-1 text-xs text-gray-500">
                              {method === "UPI"
                                ? "Pay using Google Pay, PhonePe, Paytm or any UPI app"
                                : method === "Card"
                                  ? "Pay securely using your credit or debit card"
                                  : "Pay when your order arrives at your doorstep"}
                            </p>
                          </div>
                          {paymentMethod === method && (
                            <CheckCircle size={20} className="text-[#632d35]" />
                          )}
                        </div>
                      </button>
                    ),
                  )}
                </div>
                {paymentMethod === "Cash on Delivery" && (
                  <p className="mt-4 text-xs leading-5 text-gray-500">
                    You can pay the order amount directly to the delivery
                    partner when your products are delivered.
                  </p>
                )}
                {paymentMethod === "UPI" && (
                  <div className="mt-5 border border-[#e5d9cc] bg-[#fffdf9] p-5">
                    <h3 className="text-sm font-semibold text-[#632d35]">
                      Pay using UPI
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      Order Amount: {formatPrice(orderTotal)}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {["Google Pay", "PhonePe", "Paytm"].map((app) => (
                        <button
                          key={app}
                          type="button"
                          onClick={() => setSelectedUPIApp(app)}
                          className={`border px-4 py-2 text-sm transition ${
                            selectedUPIApp === app
                              ? "border-[#632d35] bg-[#632d35] text-white"
                              : "border-[#e5d9cc] text-[#632d35] hover:border-[#632d35]"
                          }`}
                        >
                          {app}
                        </button>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-col items-center border border-[#e5d9cc] bg-white p-5">
                      <div className="flex h-48 w-48 items-center justify-center border-2 border-dashed border-[#a47748] bg-[#f5efe7] text-center">
                        <p className="px-4 text-sm text-[#632d35]">
                          QR Code Preview
                          <br />
                          <span className="text-xs text-gray-500">
                            Demo QR placeholder
                          </span>
                        </p>
                      </div>

                      <p className="mt-3 text-center text-xs text-gray-500">
                        Scan using Google Pay, PhonePe or any UPI app
                      </p>
                    </div>

                    <div className="mt-5">
                      <label className="mb-2 block text-sm font-medium text-[#632d35]">
                        UPI ID
                      </label>

                      <input
                        type="text"
                        placeholder="example@upi"
                        className="w-full border border-[#e5d9cc] px-4 py-3 text-sm outline-none focus:border-[#632d35]"
                      />
                    </div>
                  </div>
                )}
                {paymentMethod === "Card" && (
                  <div className="mt-5 border border-[#e5d9cc] bg-[#fffdf9] p-5">
                    <h3 className="text-sm font-semibold text-[#632d35]">
                      Credit / Debit Card
                    </h3>

                    <div className="mt-4 space-y-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#632d35]">
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          placeholder="Name on card"
                          className="w-full border border-[#e5d9cc] px-4 py-3 text-sm outline-none focus:border-[#632d35]"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-[#632d35]">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          className="w-full border border-[#e5d9cc] px-4 py-3 text-sm outline-none focus:border-[#632d35]"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="mb-2 block text-sm font-medium text-[#632d35]">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            maxLength={5}
                            className="w-full border border-[#e5d9cc] px-4 py-3 text-sm outline-none focus:border-[#632d35]"
                          />
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium text-[#632d35]">
                            CVV
                          </label>
                          <input
                            type="password"
                            placeholder="CVV"
                            maxLength={4}
                            className="w-full border border-[#e5d9cc] px-4 py-3 text-sm outline-none focus:border-[#632d35]"
                          />
                        </div>
                      </div>

                      <p className="text-xs text-gray-500">
                        Demo card payment interface. No real payment is
                        processed.
                      </p>
                    </div>
                  </div>
                )}
              </section>
            </div>

            {/* Order Summary */}
            <aside className="w-full bg-white p-5 shadow-sm sm:p-8 lg:sticky lg:top-24 lg:self-start">
              <h2 className="font-serif text-2xl text-[#632d35]">
                Order Summary
              </h2>

              <p className="mt-2 text-xs text-gray-500">
                {cartCount} {cartCount === 1 ? "item" : "items"} in your cart
              </p>

              {/* Products */}
              <div className="mt-7 space-y-5">
                {cart.map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-4 border-b border-[#eee5dc] pb-5"
                  >
                    <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-[#f5efe7]">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name || "Handloom product"}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <ShoppingBag size={24} className="text-[#a47748]" />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col justify-center">
                      <h3 className="font-serif text-sm font-semibold text-[#632d35]">
                        {product.name || "Handloom Product"}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        Quantity: {Number(product.quantity) || 1}
                      </p>

                      <p className="mt-2 text-sm font-bold text-[#632d35]">
                        {formatPrice(
                          Number(product.price || 0) *
                            (Number(product.quantity) || 1),
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Details */}
              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>

                  <span className="font-medium text-[#a47748]">
                    {shippingCharge === 0
                      ? "FREE"
                      : formatPrice(shippingCharge)}
                  </span>
                </div>

                {shippingCharge === 0 ? (
                  <p className="text-xs text-green-700">
                    You qualify for free shipping!
                  </p>
                ) : (
                  <p className="text-xs text-gray-500">
                    Free shipping on orders above ₹2,000.
                  </p>
                )}

                <div className="border-t border-[#eee5dc] pt-5">
                  <div className="flex justify-between">
                    <span className="font-semibold text-[#632d35]">
                      Order Total
                    </span>

                    <span className="font-serif text-2xl font-bold text-[#632d35]">
                      {formatPrice(orderTotal)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Error Message */}
              {errorMessage && (
                <p
                  role="alert"
                  className="mt-5 border border-red-200 bg-red-50 p-3 text-xs leading-5 text-red-700"
                >
                  {errorMessage}
                </p>
              )}

              {/* Place Order */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 flex w-full items-center justify-center gap-2 bg-[#632d35] px-5 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-[#4d2028] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "PLACING ORDER..." : "PLACE ORDER"}

                {!isSubmitting && <ArrowRight size={17} />}
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                {paymentMethod === "Cash on Delivery"
                  ? "Pay when your order is delivered to your doorstep."
                  : paymentMethod === "UPI"
                    ? `Pay ₹${orderTotal.toLocaleString("en-IN")} using UPI.`
                    : "Pay securely using your credit or debit card."}
              </p>

              {/* Back to Cart */}
              <Link
                href="/cart"
                className="mt-5 flex items-center justify-center gap-2 text-sm text-[#a47748] transition hover:text-[#632d35]"
              >
                <ArrowLeft size={16} />
                Back to Cart
              </Link>
            </aside>
          </div>
        </form>
      </div>
    </main>
  );
}
