import type { Metadata } from "next";
import InfoPage from "@/components/layout/InfoPage";

export const metadata: Metadata = { title: "Privacy Policy | AARANYA" };

export default function PrivacyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      subtitle="How we handle your personal information."
      draftNote
      sections={[
        {
          heading: "What we collect",
          body: [
            "Your name, contact details, delivery addresses and order history, so that we can create your account and deliver your orders.",
          ],
        },
        {
          heading: "Payments",
          body: [
            "Online payments are handled by the payment gateway. We do not store sensitive payment details such as card numbers.",
          ],
        },
        {
          heading: "How we use it",
          body: [
            "Only to process orders, provide support and improve the store. We do not sell your personal information.",
          ],
        },
      ]}
    />
  );
}
