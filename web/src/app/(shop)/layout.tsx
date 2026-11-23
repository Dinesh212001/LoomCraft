import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Customer site layout: every page inside (shop) gets Navbar + Footer
export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Target for the footer "Back to Top" link */}
      <div id="top" />

      {/* Header: shown on every customer page */}
      <Navbar />

      {/* Each page renders its own <main> here */}
      <div className="flex-1">{children}</div>

      {/* Footer: shown on every customer page */}
      <Footer />
    </>
  );
}
