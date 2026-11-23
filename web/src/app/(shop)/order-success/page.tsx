"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

type Order = {
  orderId: string;
  customer: {
    fullName: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  total: number;
  paymentMethod: string;
  items: {
    id: number;
    name: string;
    quantity: number;
    price: number;
  }[];
};

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("aaranya-orders") || "[]");

    const found = orders.find((item: Order) => item.orderId === orderId);

    setOrder(found || null);
  }, [orderId]);

  if (!order) {
    return (
      <main className="min-h-screen bg-[#fffdf9] flex items-center justify-center px-5">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-[#632d35]">
            Order not found
          </h1>
          <Link
            href="/collections"
            className="mt-6 inline-block text-sm text-[#a47748] underline"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffdf9] px-5 py-16">
      <section className="mx-auto max-w-2xl bg-white p-7 text-center shadow-sm md:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#edf4e9] text-4xl text-green-700">
          ✓
        </div>

        <p className="mt-7 text-xs tracking-[0.3em] text-[#a47748]">
          AARANYA COLLECTION
        </p>

        <h1 className="mt-3 font-serif text-3xl text-[#632d35] md:text-4xl">
          Thank You for Your Order!
        </h1>

        <p className="mt-4 text-sm leading-7 text-gray-500">
          Your order has been placed successfully. We look forward to delivering
          your handloom selection.
        </p>

        <div className="mt-8 border border-[#eee5dc] bg-[#fffdf9] p-5 text-left">
          <p className="text-xs text-gray-500">Order Number</p>
          <p className="mt-1 break-all font-semibold text-[#632d35]">
            {order.orderId}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-5 border-t border-[#eee5dc] pt-5">
            <div>
              <p className="text-xs text-gray-500">Payment Method</p>
              <p className="mt-1 text-sm font-medium text-[#351e23]">
                {order.paymentMethod}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Order Total</p>
              <p className="mt-1 text-sm font-semibold text-[#632d35]">
                ₹{order.total.toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          <div className="mt-5 border-t border-[#eee5dc] pt-5">
            <p className="text-xs text-gray-500">Delivery Address</p>
            <p className="mt-2 text-sm leading-6 text-[#351e23]">
              {order.customer.fullName}
              <br />
              {order.customer.address}
              <br />
              {order.customer.city}, {order.customer.state} -{" "}
              {order.customer.pincode}
            </p>
          </div>
        </div>

        <p className="mt-6 text-xs text-[#a47748]">
          {order.paymentMethod === "Cash on Delivery"
            ? "Payment is due when your order is delivered."
            : order.paymentMethod === "UPI"
              ? "UPI payment method selected for this order."
              : "Card payment method selected for this order."}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/orders"
            className="bg-[#632d35] px-7 py-3 text-sm text-white transition hover:bg-[#4d2029]"
          >
            View My Orders
          </Link>

          <Link
            href="/collections"
            className="border border-[#632d35] px-7 py-3 text-sm text-[#632d35] transition hover:bg-[#f4ede4]"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#fffdf9] flex items-center justify-center">
          Loading order details...
        </div>
      }
    >
      <ConfirmationContent />
    </Suspense>
  );
}
