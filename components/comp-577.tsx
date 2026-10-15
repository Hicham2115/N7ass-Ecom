"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { ShopActions } from "@/components/shop-actions";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/#featured", label: "Collections" },
  { href: "/#story", label: "About us" },
  { href: "/#custom", label: "Wholesale" },
  { href: "/#contact", label: "Contact" },
];

export default function Component() {
  const pathname = usePathname();

  return (
    <header className="relative z-10 bg-[#f8f5ef]">
      <div className="grid min-h-[82px] grid-cols-[1fr_auto_1fr] items-center px-[max(6vw,calc((100vw-1540px)/2))] max-[980px]:px-[5%] max-[700px]:min-h-[72px] max-[700px]:px-[5%] max-[400px]:px-[4%]">
        <div className="flex items-center gap-5 justify-self-start max-[700px]:gap-[9px] max-[400px]:gap-[3px]">
          <details className="group relative hidden max-[700px]:block">
            <summary
              aria-label="Open navigation"
              className="grid h-[34px] w-8 cursor-pointer list-none place-items-center [&::-webkit-details-marker]:hidden"
            >
              <Menu aria-hidden="true" size={21} strokeWidth={1.8} />
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute left-[-5px] top-[calc(100%+15px)] z-50 hidden min-w-[220px] gap-0 border border-[#ddd4c7] bg-[#fcfaf6] p-2 px-4 shadow-[0_12px_28px_rgba(32,25,17,.12)] group-open:grid"
            >
              {navigationLinks.map((link) => (
                <Link
                  className="group relative border-b border-[#ddd4c7] py-3 text-[clamp(12px,0.85vw,14px)] uppercase transition-colors duration-200 hover:pl-1 hover:text-[#b87343] last:border-b-0 motion-reduce:transition-none"
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </details>
          <Link
            className="grid h-9 w-8 place-items-center text-[#48443f] transition-colors hover:text-[#b87343]"
            href="/products"
            aria-label="Browse products"
          >
            <Search aria-hidden="true" size={21} strokeWidth={1.8} />
          </Link>
        </div>

        <Link
          className="inline-flex w-max items-center justify-self-center gap-2 font-[Georgia,Times_New_Roman,serif] text-[34px] leading-none tracking-[.14em] text-[#211f1b] max-[700px]:gap-1.5 max-[700px]:text-[23px] max-[400px]:text-[20px]"
            href="/"
          aria-label="Cuveroo home"
        >
          CUVEROO
        </Link>

        <ShopActions />
      </div>

      <nav
        className="flex min-h-[53px] items-center justify-center gap-[clamp(25px,3vw,51px)] border-b border-[rgba(65,52,40,.12)] max-[980px]:gap-[22px] max-[700px]:hidden"
        aria-label="Main navigation"
      >
        {navigationLinks.map((link) => (
          <Link
            className={
              (link.label === "Home" && pathname === "/") || (link.label === "Shop" && pathname.startsWith("/products"))
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
