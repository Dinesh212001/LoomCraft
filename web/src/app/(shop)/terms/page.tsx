import type { Metadata } from "next";
import InfoPage from "@/components/layout/InfoPage";

export const metadata: Metadata = { title: "Terms & Conditions | AARANYA" };

export default function TermsPage() {
  return (
    <InfoPage
      title="Terms & Conditions"
      subtitle="Please read these terms before placing an order."
      draftNote
      sections={[
        {
          heading: "Products",
          body: [
            "Product descriptions state the fabric type, weaving technique and measurements as accurately as possible. Handloom products can have slight variations in colour and weave.",
          ],
        },
        {
          heading: "Pricing and stock",
          body: [
            "Prices and discounts are shown in Indian Rupees. An order is confirmed only when stock is available; out of stock items cannot be ordered.",
          ],
        },
        {
          heading: "Orders and payments",
          body: [
            "Online orders are marked as paid only after the payment is verified. Cancellations, returns and exchanges follow our Returns & Exchanges policy.",
          ],
        },
      ]}
    />
  );
}
