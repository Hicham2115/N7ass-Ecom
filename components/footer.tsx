import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const footerLinks = [
  { title: "Shop", links: [["All objects", "/products"], ["Lighting", "/products"], ["Bathroom & spa", "/products"], ["Garden & outdoor", "/products"]] },
  { title: "Cuveroo", links: [["Our craft", "/#story"], ["Journal", "/#journal"], ["Wholesale & custom", "/#custom"], ["Contact", "/#contact"]] },
];

export function Footer() {
  return (
    <footer className="bg-[#1b1d1b] px-[max(5vw,calc((100vw-1440px)/2))] pb-5 pt-[52px] text-[#fcfaf6] max-[700px]:px-[6%] max-[700px]:pb-[18px] max-[700px]:pt-[39px]">
      <div className="grid grid-cols-[1.15fr_.75fr_.85fr_1fr] gap-9 pb-10 max-[980px]:gap-[22px] max-[700px]:grid-cols-2 max-[700px]:gap-x-5 max-[700px]:gap-y-[30px]">
        <div>
          <Link className="inline-flex w-max items-center justify-self-center gap-2 text-[#fcfaf6]" href="/" aria-label="Cuveroo home">
            <Image className="h-[38px] w-[38px] object-contain" src="/cuveroo-emblem.png" alt="" width={64} height={64} />
            <span className="font-[Georgia,Times_New_Roman,serif] text-[22px] leading-none tracking-[.14em]">CUVEROO</span>
          </Link>
          <p className="mb-0 mt-[14px] font-[Georgia,Times_New_Roman,serif] text-[14px] leading-[1.6] text-[#b8afa2]">Authentic copper.<br />Timeless design.</p>
        </div>
        {footerLinks.map((group) => (
          <nav aria-label={group.title} key={group.title}>
            <h2 className="mb-4 mt-0 text-[clamp(11px,0.78vw,13px)] uppercase tracking-[.16em] text-[#d5a27c]">{group.title}</h2>
            <ul className="m-0 grid list-none gap-2.5 p-0">{group.links.map(([label, href]) => <li key={label}><Link className="text-[clamp(12px,0.85vw,14px)] text-[#d0c8be] transition-colors hover:text-[#d5a27c]" href={href}>{label}</Link></li>)}</ul>
          </nav>
        ))}
        <div className="max-[700px]:col-span-full">
          <p className="m-0 text-[clamp(11px,0.78vw,13px)] font-bold uppercase tracking-[.19em] text-[#d5a27c]">Keep in touch</p>
          <h2 className="mb-[15px] mt-2.5 max-w-[240px] font-[Georgia,Times_New_Roman,serif] text-[25px] font-normal leading-[1.1]">Objects with a little more soul.</h2>
          <Link className="inline-flex items-center gap-2 text-[clamp(12px,0.85vw,14px)] text-[#eee5d9] transition-colors hover:text-[#d5a27c]" href="/#contact">Contact Cuveroo <ArrowRight aria-hidden="true" size={15} /></Link>
        </div>
      </div>
      <div className="flex justify-between gap-4 border-t border-white/15 pt-[17px] text-[clamp(11px,0.78vw,13px)] tracking-[.04em] text-[#aaa195]"><span>© 2026 Cuveroo</span><span>Objects for living</span></div>
    </footer>
  );
}
