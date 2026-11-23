import type { Metadata } from "next";
import InfoPage from "@/components/layout/InfoPage";

export const metadata: Metadata = { title: "Contact Us | AARANYA" };

export default function ContactPage() {
  return (
    <InfoPage
      title="Contact Us"
      subtitle="Questions about a saree, an order or a custom requirement? We are happy to help."
      sections={[
        {
          heading: "Email",
          body: ["Write to us at hello@aaranya.com and we will reply as soon as we can."],
        },
        {
          heading: "Product and bulk enquiries",
          body: [
            "For questions about a particular fabric, weaving technique, colour or bulk orders, please use the enquiry form so that our team has all the details in one place.",
          ],
        },
        {
          heading: "Order help",
          body: [
            "Please keep your order ID ready. You can find it in the My Orders section and in your order confirmation.",
          ],
        },
      ]}
    />
  );
}
