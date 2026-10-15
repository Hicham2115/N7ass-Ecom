"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Heart, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useShop } from "@/components/shop-state";
import { catalogProducts } from "@/lib/products";

function Price({ value }: { value: number }) {
  return <span>${value.toLocaleString()}</span>;
}

export function ShopActions() {
  const { cart, favorites, cartOpen, setCartOpen, addToCart, removeFromCart, setCartQuantity, toggleFavorite, removeFavorite } = useShop();
  const [wishlistOpen, setWishlistOpen] = useState(false);

  const cartLines = useMemo(() => cart.flatMap((line) => {
    const product = catalogProducts.find((item) => item.id === line.productId);
    return product ? [{ ...line, product }] : [];
  }), [cart]);
  const favoriteProducts = useMemo(() => favorites.flatMap((id) => {
    const product = catalogProducts.find((item) => item.id === id);
    return product ? [product] : [];
  }), [favorites]);
  const cartCount = cart.reduce((total, line) => total + line.quantity, 0);
  const subtotal = cartLines.reduce((total, line) => total + line.product.price * line.quantity, 0);

  return (
    <div className="flex items-center justify-self-end gap-[23px] max-[700px]:gap-[11px]">
      <Dialog open={wishlistOpen} onOpenChange={setWishlistOpen}>
        <DialogTrigger asChild>
          <button
            aria-label={`Saved pieces${favorites.length ? `, ${favorites.length} items` : ""}`}
            className="relative grid h-9 w-8 place-items-center text-[#48443f] transition-colors hover:text-[#b87343] max-[700px]:w-[27px]"
            type="button"
          >
            <Heart aria-hidden="true" size={21} strokeWidth={1.8} className="max-[700px]:size-[19px]" />
            {favorites.length > 0 && <span className="absolute -right-1 -top-1 grid size-[17px] place-items-center rounded-full bg-[#a9653e] text-[9px] font-semibold text-white">{favorites.length}</span>}
          </button>
        </DialogTrigger>
        <DialogContent aria-describedby="wishlist-description" aria-label="Saved pieces" mobileSide="right">
          <div className="flex items-start justify-between gap-5 border-b border-[#ddd4c7] pb-5">
            <div>
              <DialogTitle>Your saved pieces</DialogTitle>
              <DialogDescription className="mt-2" id="wishlist-description">Keep the pieces you love close at hand.</DialogDescription>
            </div>
            <DialogClose aria-label="Close saved pieces" className="grid size-9 shrink-0 place-items-center rounded-full border border-[#d9cec1] text-[#51473e] transition-colors hover:bg-[#f0e7dd]"><X aria-hidden="true" size={17} /></DialogClose>
          </div>

          {favoriteProducts.length ? (
            <div className="flex-1 divide-y divide-[#e1d8ce] overflow-y-auto">
              {favoriteProducts.map((product) => (
                <article className="flex gap-4 py-4" key={product.id}>
                  <div className="relative size-[82px] shrink-0 overflow-hidden bg-[#eee5da]">
                    <Image alt={product.alt} className="object-cover" fill sizes="82px" src={product.image} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="mb-1 mt-0 text-[9px] uppercase tracking-[.15em] text-[#9c613b]">{product.category}</p>
                    <h3 className="m-0 font-[Georgia,Times_New_Roman,serif] text-[17px] font-normal leading-tight">{product.name}</h3>
                    <p className="mb-2 mt-1 text-xs text-[#63594f]"><Price value={product.price} /></p>
                    <button className="text-[10px] font-semibold uppercase tracking-[.1em] text-[#795237] underline underline-offset-4" onClick={() => removeFavorite(product.id)} type="button">Remove</button>
                  </div>
                  <Button
                    aria-label={`Add ${product.name} to cart`}
                    className="size-10 shrink-0 self-center bg-[#a9653e] text-white hover:bg-[#77482d]"
                    disabled={!product.inStock}
                    onClick={() => {
                      setWishlistOpen(false);
                      addToCart(product.id);
                    }}
                    size="icon"
                  >
                    <ShoppingBag aria-hidden="true" />
                  </Button>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center py-12 text-center">
              <Heart aria-hidden="true" className="mb-4 text-[#a9653e]" size={25} strokeWidth={1.4} />
              <p className="mb-1 mt-0 font-[Georgia,Times_New_Roman,serif] text-2xl">Nothing saved yet</p>
              <p className="mb-5 mt-1 max-w-[260px] text-sm leading-6 text-[#736e65]">Tap the heart on a piece to keep it here.</p>
              <DialogClose asChild><Link className="text-[11px] font-semibold uppercase tracking-[.12em] text-[#795237] underline underline-offset-4" href="/products">Explore the collection</Link></DialogClose>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={cartOpen} onOpenChange={setCartOpen}>
        <DialogTrigger asChild>
          <button
            aria-label={`Shopping bag${cartCount ? `, ${cartCount} items` : ""}`}
            className="relative grid h-9 w-8 place-items-center text-[#48443f] transition-colors hover:text-[#b87343] max-[700px]:w-[27px]"
            type="button"
          >
            <ShoppingBag aria-hidden="true" size={21} strokeWidth={1.8} className="max-[700px]:size-[19px]" />
            {cartCount > 0 && <span className="absolute -right-1 -top-1 grid size-[17px] place-items-center rounded-full bg-[#a9653e] text-[9px] font-semibold text-white">{cartCount}</span>}
          </button>
        </DialogTrigger>
        <DialogContent aria-describedby="cart-description" aria-label="Shopping bag" mobileSide="right">
          <div className="flex items-start justify-between gap-5 border-b border-[#ddd4c7] pb-5">
            <div>
              <DialogTitle>Your bag{cartCount ? ` (${cartCount})` : ""}</DialogTitle>
              <DialogDescription className="mt-2" id="cart-description">A closer look at the pieces you have chosen.</DialogDescription>
            </div>
            <DialogClose aria-label="Close shopping bag" className="grid size-9 shrink-0 place-items-center rounded-full border border-[#d9cec1] text-[#51473e] transition-colors hover:bg-[#f0e7dd]"><X aria-hidden="true" size={17} /></DialogClose>
          </div>

          {cartLines.length ? (
            <>
              <div className="flex-1 divide-y divide-[#e1d8ce] overflow-y-auto">
                {cartLines.map(({ product, quantity }) => (
                  <article className="flex gap-4 py-4" key={product.id}>
                    <div className="relative size-[82px] shrink-0 overflow-hidden bg-[#eee5da]">
                      <Image alt={product.alt} className="object-cover" fill sizes="82px" src={product.image} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 mt-0 text-[9px] uppercase tracking-[.15em] text-[#9c613b]">{product.category}</p>
                      <h3 className="m-0 font-[Georgia,Times_New_Roman,serif] text-[17px] font-normal leading-tight">{product.name}</h3>
                      <p className="mb-2 mt-1 text-xs text-[#63594f]"><Price value={product.price} /></p>
                      <div aria-label={`Quantity for ${product.name}`} className="inline-flex h-8 items-center border border-[#ddd4c7]">
                        <button aria-label={`Remove one ${product.name}`} className="grid size-8 place-items-center text-[#6d6257] transition-colors hover:bg-[#f0e7dd]" onClick={() => setCartQuantity(product.id, quantity - 1)} type="button"><Minus aria-hidden="true" size={13} /></button>
                        <span aria-live="polite" className="w-7 text-center text-xs">{quantity}</span>
                        <button aria-label={`Add one ${product.name}`} className="grid size-8 place-items-center text-[#6d6257] transition-colors hover:bg-[#f0e7dd]" onClick={() => setCartQuantity(product.id, quantity + 1)} type="button"><Plus aria-hidden="true" size={13} /></button>
                      </div>
                    </div>
                    <button aria-label={`Remove ${product.name} from bag`} className="grid size-8 shrink-0 place-items-center self-start text-[#877b70] transition-colors hover:text-[#9c613b]" onClick={() => removeFromCart(product.id)} type="button"><Trash2 aria-hidden="true" size={15} /></button>
                  </article>
                ))}
              </div>
              <div className="border-t border-[#ddd4c7] pt-5">
                <div className="mb-2 flex items-center justify-between text-sm"><span>Subtotal</span><strong className="font-semibold"><Price value={subtotal} /></strong></div>
                <p className="mb-4 mt-0 text-xs leading-5 text-[#736e65]">Shipping and final details are confirmed with your order.</p>
                <Link className="group flex min-h-12 items-center justify-between bg-[#a9653e] px-4 text-[11px] font-semibold uppercase tracking-[.12em] text-white transition-colors hover:bg-[#77482d]" href="/#contact" onClick={() => setCartOpen(false)}>
                  Ask us about your order <ArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" size={16} />
                </Link>
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center py-12 text-center">
              <ShoppingBag aria-hidden="true" className="mb-4 text-[#a9653e]" size={27} strokeWidth={1.4} />
              <p className="mb-1 mt-0 font-[Georgia,Times_New_Roman,serif] text-2xl">Your bag is empty</p>
              <p className="mb-5 mt-1 max-w-[260px] text-sm leading-6 text-[#736e65]">Find a handmade piece for your home.</p>
              <DialogClose asChild><Link className="text-[11px] font-semibold uppercase tracking-[.12em] text-[#795237] underline underline-offset-4" href="/products">Shop the collection</Link></DialogClose>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
