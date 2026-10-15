"use client";

import Link from "next/link";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { ShopActions } from "@/components/shop-actions";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const navigationLinks = [
  { href: "/", label: "Accueil" },
  { href: "/products", label: "Boutique" },
  { href: "/#featured", label: "Collection" },
  { href: "/#story", label: "Notre atelier" },
  { href: "/#custom", label: "Professionnels" },
  { href: "/#contact", label: "Contact" },
];

export default function Component() {
  const pathname = usePathname();

  return (
    <header className="relative z-10 bg-[#f8f5ef]">
      <div className="grid min-h-[82px] grid-cols-[1fr_auto_1fr] items-center px-[max(6vw,calc((100vw-1540px)/2))] max-[980px]:px-[5%] max-[700px]:min-h-[72px] max-[700px]:px-[5%] max-[400px]:px-[4%]">
        <div className="flex items-center gap-5 justify-self-start max-[700px]:gap-[9px] max-[400px]:gap-[3px]">
          <Dialog>
            <DialogTrigger asChild>
              <button
                aria-label="Ouvrir le menu"
                className="grid h-[34px] w-8 place-items-center text-[#29251f] transition-colors hover:text-[#b87343] max-[700px]:grid min-[701px]:hidden"
                type="button"
              >
                <Menu aria-hidden="true" size={22} strokeWidth={1.8} />
              </button>
            </DialogTrigger>
            <DialogContent aria-describedby="mobile-navigation-description" aria-label="Menu principal" className="hidden max-[700px]:flex" mobileSide="left">
              <div className="flex items-start justify-between border-b border-[#ddd4c7] pb-6">
                <div>
                  <DialogTitle className="text-[28px] tracking-[.12em]">CUVEROO</DialogTitle>
                  <DialogDescription className="mt-2" id="mobile-navigation-description">L’art du cuivre, façonné au Maroc.</DialogDescription>
                </div>
                <DialogClose aria-label="Fermer le menu" className="grid size-10 place-items-center rounded-full border border-[#d9cec1] text-[#51473e] transition-colors hover:bg-[#f0e7dd]">
                  <X aria-hidden="true" size={19} />
                </DialogClose>
              </div>
              <nav aria-label="Navigation mobile" className="mt-5 flex-1">
                {navigationLinks.map((link, index) => (
                  <Link
                    className={`group flex min-h-[58px] items-center justify-between border-b border-[#e5ddd2] py-3 text-[13px] font-semibold uppercase tracking-[.1em] transition-colors hover:text-[#b87343] ${((link.label === "Accueil" && pathname === "/") || (link.label === "Boutique" && pathname.startsWith("/products"))) ? "text-[#b87343]" : "text-[#302c26]"}`}
                    href={link.href}
                    key={link.label}
                  >
                    <span><span className="mr-4 text-[10px] tracking-normal text-[#b87343]/70">0{index + 1}</span>{link.label}</span>
                    <ArrowRight aria-hidden="true" className="opacity-0 transition-opacity group-hover:opacity-100" size={16} />
                  </Link>
                ))}
              </nav>
              <p className="border-t border-[#ddd4c7] pt-5 text-[10px] uppercase tracking-[.18em] text-[#8c7d6d]">Créations artisanales · Maroc</p>
            </DialogContent>
          </Dialog>
          <Link
            className="grid h-9 w-8 place-items-center text-[#48443f] transition-colors hover:text-[#b87343]"
            href="/products"
            aria-label="Parcourir les produits"
          >
            <Search aria-hidden="true" size={21} strokeWidth={1.8} />
          </Link>
        </div>

        <Link
          className="inline-flex w-max items-center justify-self-center gap-2 font-[Georgia,Times_New_Roman,serif] text-[34px] leading-none tracking-[.14em] text-[#211f1b] max-[700px]:gap-1.5 max-[700px]:text-[23px] max-[400px]:text-[20px]"
            href="/"
          aria-label="Accueil Cuveroo"
        >
          CUVEROO
        </Link>

        <ShopActions />
      </div>

      <nav
        className="flex min-h-[53px] items-center justify-center gap-[clamp(25px,3vw,51px)] border-b border-[rgba(65,52,40,.12)] max-[980px]:gap-[22px] max-[700px]:hidden"
        aria-label="Navigation principale"
      >
        {navigationLinks.map((link) => (
          <Link
            className={
              (link.label === "Accueil" && pathname === "/") || (link.label === "Boutique" && pathname.startsWith("/products"))
                ? "relative flex min-h-[53px] items-center text-[clamp(12px,0.85vw,14px)] font-bold uppercase tracking-[.045em] text-[#b87343] transition-colors duration-200 after:absolute after:inset-x-0 after:bottom-[7px] after:h-0.5 after:origin-left after:bg-[#b87343] after:content-['']"
                : "relative flex min-h-[53px] items-center text-[clamp(12px,0.85vw,14px)] font-bold uppercase tracking-[.045em] text-[#3e3b37] transition-colors duration-200 hover:text-[#b87343] after:absolute after:bottom-[7px] after:left-0 after:right-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#b87343] after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:transition-none motion-reduce:after:transition-none"
            }
            href={link.href}
            key={link.label}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
