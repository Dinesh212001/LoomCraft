
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export interface WishlistProduct {
  id: string | number;
  name: string;
  price: number;
  image: string;
  category?: string;
}

interface WishlistContextType {
  wishlist: WishlistProduct[];
  wishlistCount: number;
  addToWishlist: (product: WishlistProduct) => void;
  removeFromWishlist: (id: string | number) => void;
  isInWishlist: (id: string | number) => boolean;
  toggleWishlist: (product: WishlistProduct) => void;
}

const WishlistContext = createContext<
  WishlistContextType | undefined
>(undefined);

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [wishlist, setWishlist] = useState<WishlistProduct[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load wishlist from localStorage
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem("aaranya-wishlist");

      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
    } catch (error) {
      console.error("Unable to load wishlist:", error);
    } finally {
      setLoaded(true);
    }
  }, []);

  // Save wishlist to localStorage
  useEffect(() => {
    if (loaded) {
      localStorage.setItem(
        "aaranya-wishlist",
        JSON.stringify(wishlist)
      );
    }
  }, [wishlist, loaded]);

  // Add product
  const addToWishlist = (product: WishlistProduct) => {
    setWishlist((previous) => {
      const alreadyExists = previous.some(
        (item) => String(item.id) === String(product.id)
      );

      if (alreadyExists) return previous;

      return [...previous, product];
    });
  };

  // Remove product
  const removeFromWishlist = (id: string | number) => {
    setWishlist((previous) =>
      previous.filter(
        (item) => String(item.id) !== String(id)
      )
    );
  };

  // Check product
  const isInWishlist = (id: string | number) => {
    return wishlist.some(
      (item) => String(item.id) === String(id)
    );
  };

  // Toggle product
  const toggleWishlist = (product: WishlistProduct) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount: wishlist.length,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}
