import type { Metadata } from "next";
import SpecialOffers from "@/components/home/SpecialOffers";

export const metadata: Metadata = {
  title: "Offers | AARANYA",
  description: "Special offers and coupons on handloom sarees, dupattas and more.",
};

// Navbar "Offers" link. Re-uses the same Special Offers section as the home page.
export default function OffersPage() {
  return (
    <main className="min-h-[60vh] bg-[#fffdf9]">
      <SpecialOffers />
    </main>
  );
}
