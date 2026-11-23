import type { Metadata } from "next";
import InfoPage from "@/components/layout/InfoPage";

export const metadata: Metadata = { title: "Returns & Exchanges | AARANYA" };

export default function ReturnsPage() {
  return (
    <InfoPage
      title="Returns & Exchanges"
      subtitle="Our policy for cancellations, returns and exchanges."
      draftNote
      sections={[
        {
          heading: "Cancellations",
          body: ["An order can be cancelled while it is still Pending or Confirmed, before it is shipped."],
        },
        {
          heading: "Returns and exchanges",
          body: [
            "Return and exchange requests are accepted only for eligible orders, as per the store policy. Handloom products may show small natural variations in weave and colour, which are part of their character.",
          ],
        },
        {
          heading: "Eligibility period",
          body: ["The exact eligibility period and conditions will be confirmed by the store and published here."],
        },
      ]}
    />
  );
}
