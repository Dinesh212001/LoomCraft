
"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface CartContextType {
  cartCount: number;
  cartItems: any[];
  checkoutItems: any[];
  addToCart: (product: any) => void;
  buyNow: (product: any) => void;
  clearBuyNow: () => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [checkoutItems, setCheckoutItems] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("handloom-cart");

      if (savedCart) {
        const parsedCart = JSON.parse(savedCart);

        if (Array.isArray(parsedCart)) {
          setCartItems(parsedCart);
        }
      }
    } catch (error) {
      console.error("Unable to load cart:", error);
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(
        "handloom-cart",
        JSON.stringify(cartItems)
      );
    }
  }, [cartItems, isLoaded]);

  const addToCart = (product: any) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => String(item.id) === String(product.id)
      );

      if (existingItem) {
        return previousItems.map((item) =>
          String(item.id) === String(product.id)
            ? {
                ...item,
                quantity:
                  (Number(item.quantity) || 1) +
                  (Number(product.quantity) || 1),
              }
            : item
        );
      }

      return [
        ...previousItems,
        {
          ...product,
          quantity: Number(product.quantity) || 1,
        },
      ];
    });
  };

  // Buy Now: keep the selected product separate from the normal cart
  const buyNow = (product: any) => {
    setCheckoutItems([
      {
        ...product,
        quantity: Number(product.quantity) || 1,
      },
    ]);
  };

  const clearBuyNow = () => {
    setCheckoutItems([]);
  };

  const removeFromCart = (id: string) => {
    setCartItems((previousItems) =>
      previousItems.filter(
        (item) => String(item.id) !== String(id)
      )
    );
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;

    setCartItems((previousItems) =>
      previousItems.map((item) =>
        String(item.id) === String(id)
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce(
    (total, item) =>
      total + (Number(item.quantity) || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cartItems,
        checkoutItems,
        addToCart,
        buyNow,
        clearBuyNow,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}
