import type { Metadata } from "next";
import InfoPage from "@/components/layout/InfoPage";

export const metadata: Metadata = { title: "Shipping Information | AARANYA" };

export default function ShippingPage() {
  return (
    <InfoPage
      title="Shipping Information"
      subtitle="How your handloom order reaches you."
      draftNote
      sections={[
        {
          heading: "Delivery across India",
          body: [
            "We deliver handloom sarees, dupattas and other collections across India. Delivery charges, if any, are shown in your cart and at checkout before you pay.",
          ],
        },
        {
          heading: "Order processing",
          body: [
            "Every order follows these steps: Pending, Confirmed, Processing, Shipped, Out for Delivery and Delivered. You can follow the current step from the My Orders page.",
          ],
        },
        {
          heading: "Delivery timelines",
          body: ["Estimated delivery timelines will be confirmed by the store and shown here."],
        },
      ]}
    />
  );
}
