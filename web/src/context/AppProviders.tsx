
"use client";

import { ReactNode } from "react";
import { WishlistProvider } from "./WishlistContext";
import { CartProvider } from "./CartContext";

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({
  children,
}: AppProvidersProps) {
  return (
    <CartProvider>
      <WishlistProvider>
        {children}
      </WishlistProvider>
    </CartProvider>
  );
}
