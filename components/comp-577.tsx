import Link from "next/link";
import { Menu, Search, ShoppingBag, UserRound } from "lucide-react";

const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#categories", label: "Shop" },
  { href: "#featured", label: "Collections" },
  { href: "#story", label: "About us" },
  { href: "#custom", label: "Wholesale" },
  { href: "#contact", label: "Contact" },
];

export default function Component() {
  return (
    <header className="relative z-10 bg-[#f8f5ef]">
      <div className="grid min-h-[82px] grid-cols-[1fr_auto_1fr] items-center px-[max(6vw,calc((100vw-1540px)/2))] max-[980px]:px-[5%] max-[700px]:min-h-[72px] max-[700px]:px-[5%] max-[400px]:px-[4%]">
        <div className="flex items-center gap-5 justify-self-start max-[700px]:gap-[9px] max-[400px]:gap-[3px]">
          <details className="group relative hidden max-[700px]:block">
            <summary aria-label="Open navigation" className="grid h-[34px] w-8 cursor-pointer list-none place-items-center [&::-webkit-details-marker]:hidden">
              <Menu aria-hidden="true" size={21} strokeWidth={1.8} />
            </summary>
            <nav aria-label="Mobile navigation" className="absolute left-[-5px] top-[calc(100%+15px)] z-50 hidden min-w-[220px] gap-0 border border-[#ddd4c7] bg-[#fcfaf6] p-2 px-4 shadow-[0_12px_28px_rgba(32,25,17,.12)] group-open:grid">
              {navigationLinks.map((link) => (
                <Link className="border-b border-[#ddd4c7] py-3 text-[11px] uppercase transition-colors hover:text-[#b87343] last:border-b-0" href={link.href} key={link.label}>{link.label}</Link>
              ))}
            </nav>
          </details>
          <Link className="grid h-9 w-8 place-items-center text-[#48443f] transition-colors hover:text-[#b87343]" href="#categories" aria-label="Browse products">
            <Search aria-hidden="true" size={21} strokeWidth={1.8} />
          </Link>
        </div>

        <Link className="inline-flex w-max items-center justify-self-center font-[Georgia,Times_New_Roman,serif] text-[34px] leading-none tracking-[.14em] text-[#211f1b] max-[700px]:text-[23px] max-[400px]:text-[20px]" href="#home" aria-label="Cuveroo home">
          CUVEROO
        </Link>

        <div className="flex items-center justify-self-end gap-[23px] max-[700px]:gap-[11px]">
          <Link className="grid h-9 w-8 place-items-center text-[#48443f] transition-colors hover:text-[#b87343] max-[700px]:w-[27px] [&_svg]:max-[700px]:h-[19px] [&_svg]:max-[700px]:w-[19px]" href="#contact" aria-label="Contact Cuveroo">
            <UserRound aria-hidden="true" size={21} strokeWidth={1.8} />
          </Link>
          <Link className="grid h-9 w-8 place-items-center text-[#48443f] transition-colors hover:text-[#b87343] max-[700px]:w-[27px] [&_svg]:max-[700px]:h-[19px] [&_svg]:max-[700px]:w-[19px]" href="#featured" aria-label="View collection">
            <ShoppingBag aria-hidden="true" size={21} strokeWidth={1.8} />
          </Link>
        </div>
      </div>

      <nav className="flex min-h-[53px] items-center justify-center gap-[clamp(25px,3vw,51px)] border-b border-[rgba(65,52,40,.12)] max-[980px]:gap-[22px] max-[700px]:hidden" aria-label="Main navigation">
        {navigationLinks.map((link, index) => (
          <Link
            className={index === 0
              ? "relative flex min-h-[53px] items-center text-[11px] font-bold uppercase tracking-[.045em] text-[#b87343] transition-all duration-300 hover:-translate-y-px after:absolute after:inset-x-0 after:bottom-[7px] after:h-0.5 after:origin-left after:bg-[#b87343] after:content-[''] max-[980px]:text-[10px]"
              : "relative flex min-h-[53px] items-center text-[11px] font-bold uppercase tracking-[.045em] text-[#3e3b37] transition-all duration-300 hover:-translate-y-px hover:text-[#b87343] after:absolute after:bottom-[7px] after:left-0 after:right-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#b87343] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100 max-[980px]:text-[10px] motion-reduce:transition-none motion-reduce:after:transition-none"}
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
