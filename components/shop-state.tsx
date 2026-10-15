"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { catalogProducts } from "@/lib/products";

type CartItem = { productId: string; quantity: number };
type SavedState = { cart: CartItem[]; favorites: string[] };
type ShopContextValue = SavedState & {
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  setCartQuantity: (productId: string, quantity: number) => void;
  toggleFavorite: (productId: string) => void;
  removeFavorite: (productId: string) => void;
};

const storageKey = "cuveroo-shop-state";
const productIds = new Set(catalogProducts.map((product) => product.id));
const ShopContext = createContext<ShopContextValue | null>(null);

function readSavedState(): SavedState {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return { cart: [], favorites: [] };

  try {
    const parsed = JSON.parse(saved) as Partial<SavedState>;
    const favorites = Array.isArray(parsed.favorites)
      ? parsed.favorites.filter((id): id is string => typeof id === "string" && productIds.has(id))
      : [];
    const cart = Array.isArray(parsed.cart)
      ? parsed.cart.filter((item): item is CartItem =>
          typeof item?.productId === "string" &&
          productIds.has(item.productId) &&
          Number.isInteger(item.quantity) &&
          item.quantity > 0,
        )
      : [];
    return { cart, favorites: [...new Set(favorites)] };
  } catch (error) {
    console.error("Could not read saved Cuveroo items.", error);
    return { cart: [], favorites: [] };
  }
}

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = readSavedState();
    setCart(saved.cart);
    setFavorites(saved.favorites);
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify({ cart, favorites }));
    } catch (error) {
      console.error("Could not save Cuveroo items.", error);
    }
  }, [cart, favorites, loaded]);

  const addToCart = useCallback((productId: string) => {
    const product = catalogProducts.find((item) => item.id === productId);
    if (!product || !product.inStock) return;
    setCart((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (existing) {
        return current.map((item) => item.productId === productId ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...current, { productId, quantity: 1 }];
    });
    setCartOpen(true);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((current) => current.filter((item) => item.productId !== productId));
  }, []);

  const setCartQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((current) => current.filter((item) => item.productId !== productId));
      return;
    }
    setCart((current) => current.map((item) => item.productId === productId ? { ...item, quantity: Math.floor(quantity) } : item));
  }, []);

  const toggleFavorite = useCallback((productId: string) => {
    if (!productIds.has(productId)) return;
    setFavorites((current) => current.includes(productId)
      ? current.filter((id) => id !== productId)
      : [...current, productId],
    );
  }, []);

  const removeFavorite = useCallback((productId: string) => {
    setFavorites((current) => current.filter((id) => id !== productId));
  }, []);

  const value = useMemo(() => ({ cart, favorites, cartOpen, setCartOpen, addToCart, removeFromCart, setCartQuantity, toggleFavorite, removeFavorite }), [cart, favorites, cartOpen, addToCart, removeFromCart, setCartQuantity, toggleFavorite, removeFavorite]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used within ShopProvider.");
  return context;
}
