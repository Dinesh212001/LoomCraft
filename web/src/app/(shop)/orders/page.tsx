"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Package,
  ShoppingBag,
  ArrowLeft,
  ArrowRight,
  MapPin,
  CalendarDays,
  CreditCard,
} from "lucide-react";

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
  paymentMethod: string;
  paymentStatus: string;
  orderStatus: string;
};

export default function OrdersPage() {
  const [orders, setOrders] = useState<CustomerOrder[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load orders from localStorage
  useEffect(() => {
    try {
      const storedOrders = localStorage.getItem("aaranya-orders");

      if (storedOrders) {
        const parsedOrders: CustomerOrder[] = JSON.parse(storedOrders);

        if (Array.isArray(parsedOrders)) {
          setOrders(parsedOrders);
        }
      }
    } catch (error) {
      console.error("Unable to load orders:", error);
      setOrders([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const formatPrice = (price: number) =>
    `₹${Number(price || 0).toLocaleString("en-IN")}`;

  const formatDate = (date: string) => {
    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "Date unavailable";
    }

    return parsedDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Loading screen
  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5efe7]">
        <p className="font-serif text-lg text-[#632d35]">
          Loading your orders...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5efe7] px-4 py-12 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold tracking-[0.3em] text-[#a47748]">
            AARANYA HANDLOOM
          </p>

          <h1 className="font-serif text-4xl font-semibold text-[#632d35] sm:text-5xl">
            My Orders
          </h1>

          <p className="mt-4 text-sm text-[#66574e]">
            View and track your handloom purchases.
          </p>

          <div className="mx-auto mt-6 h-[2px] w-20 bg-[#b58a50]" />
        </div>

        {/* Empty Orders */}
        {orders.length === 0 ? (
          <div className="mx-auto max-w-xl bg-white px-6 py-16 text-center shadow-sm sm:px-10">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#f5efe7]">
              <ShoppingBag
                size={38}
                strokeWidth={1.3}
                className="text-[#632d35]"
              />
            </div>

            <h2 className="font-serif text-2xl text-[#632d35]">
              No Orders Yet
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              You have not placed any orders yet. Explore our beautiful handloom
              collections and find something special.
            </p>

            <Link
              href="/collections"
              className="mt-8 inline-flex items-center gap-2 bg-[#632d35] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#4d2028]"
            >
              Explore Collections
              <ArrowRight size={17} />
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Order Count */}
            <div className="flex items-center justify-between border-b border-[#e5d9cc] pb-4">
              <h2 className="font-serif text-xl text-[#632d35]">
                Your Order History
              </h2>

              <span className="text-sm text-gray-500">
                {orders.length} {orders.length === 1 ? "Order" : "Orders"}
              </span>
            </div>

            {/* Orders List */}
            {orders.map((order) => (
              <section key={order.orderId} className="bg-white shadow-sm">
                {/* Order Header */}
                <div className="flex flex-col gap-4 border-b border-[#eee5dc] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#a47748]">
                      Order Number
                    </p>

                    <h3 className="mt-1 font-semibold text-[#632d35]">
                      {order.orderId}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-5">
                    <div>
                      <p className="text-xs text-gray-400">Order Date</p>

                      <p className="mt-1 flex items-center gap-2 text-sm text-[#632d35]">
                        <CalendarDays size={15} />
                        {formatDate(order.createdAt)}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400">Order Status</p>

                      <span className="mt-1 inline-block bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                        {order.orderStatus || "Placed"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Order Products */}
                <div className="space-y-5 p-5 sm:p-7">
                  {order.items?.map((item, index) => (
                    <div
                      key={`${order.orderId}-${item.id}-${index}`}
                      className="flex gap-4 border-b border-[#eee5dc] pb-5 last:border-0 last:pb-0"
                    >
                      <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-[#f5efe7]">
                        <Image
                          src={item.image || "/images/placeholder.png"}
                          alt={item.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-1 flex-col justify-center">
                        <h4 className="font-serif text-base font-semibold text-[#632d35]">
                          {item.name}
                        </h4>

                        <p className="mt-2 text-xs text-gray-500">
                          Quantity: {item.quantity}
                        </p>

                        <p className="mt-2 text-sm font-semibold text-[#632d35]">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Details */}
                <div className="grid grid-cols-1 gap-6 border-t border-[#eee5dc] bg-[#fffdf9] p-5 sm:grid-cols-2 sm:p-7">
                  {/* Delivery Address */}
                  <div>
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#632d35]">
                      <MapPin size={17} className="text-[#a47748]" />
                      Delivery Address
                    </h4>

                    <p className="text-sm leading-6 text-gray-600">
                      {order.customer?.fullName}
                      <br />
                      {order.customer?.address}
                      <br />
                      {order.customer?.city}, {order.customer?.state}
                      <br />
                      PIN: {order.customer?.pincode}
                      <br />
                      Mobile: {order.customer?.phone}
                    </p>
                  </div>

                  {/* Payment Details */}
                  <div>
                    <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#632d35]">
                      <CreditCard size={17} className="text-[#a47748]" />
                      Payment Details
                    </h4>

                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between gap-3">
                        <span>Payment Method</span>
                        <span className="font-medium text-[#632d35]">
                          {order.paymentMethod}
                        </span>
                      </div>

                      <div className="flex justify-between gap-3">
                        <span>Payment Status</span>
                        <span className="font-medium text-[#a47748]">
                          {order.paymentStatus}
                        </span>
                      </div>

                      <div className="flex justify-between gap-3">
                        <span>Subtotal</span>
                        <span>{formatPrice(order.subtotal)}</span>
                      </div>

                      <div className="flex justify-between gap-3">
                        <span>Shipping</span>
                        <span>
                          {order.shipping === 0
                            ? "FREE"
                            : formatPrice(order.shipping)}
                        </span>
                      </div>

                      <div className="flex justify-between border-t border-[#e5d9cc] pt-3 font-semibold text-[#632d35]">
                        <span>Order Total</span>
                        <span className="font-serif text-xl">
                          {formatPrice(order.total)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* Continue Shopping */}
            <div className="pt-4 text-center">
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 bg-[#632d35] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#4d2028]"
              >
                Continue Shopping
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#a47748] transition hover:text-[#632d35]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
