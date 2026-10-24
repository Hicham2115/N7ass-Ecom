import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CurrentYear } from "./current-year";

const footerLinks = [
  {
    title: "Nos services",
    links: [
      ["Cuisines sur mesure", "/products"],
      ["Chambres & salons", "/products"],
      ["Carrelage & finitions", "/products"],
      ["Aménagement extérieur", "/products"],
    ],
  },
  {
    title: "À votre écoute",
    links: [
      ["Nous contacter", "/#contact"],
      ["Questions fréquentes", "/#faq-title"],
      ["Notre méthode", "/#story"],
      ["Parler de votre projet", "/#custom"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#241f1a] px-[max(4.5vw,24px)] pt-10 text-[#f8f5ef] max-[700px]:px-4 max-[700px]:pt-6">
      <div className="relative z-10 mx-auto max-w-[1540px] rounded-[32px] border border-[#443a31] bg-[#241f1a] px-[clamp(28px,5vw,76px)] pb-8 pt-[clamp(34px,4.5vw,64px)] max-[700px]:rounded-[24px] max-[700px]:px-6 max-[700px]:pb-6">
        <div className="grid grid-cols-[1.15fr_.72fr_.9fr_1.12fr] gap-x-10 gap-y-12 pb-12 max-[980px]:grid-cols-2 max-[980px]:gap-x-12 max-[980px]:gap-y-10 max-[520px]:grid-cols-1 max-[520px]:gap-y-9 max-[520px]:pb-9">
          <div>
            <Link
              aria-label="T.cap accueil"
              className="inline-flex items-center"
              href="/"
            >
              <span className="font-[Georgia,Times_New_Roman,serif] text-[22px] leading-none tracking-[.14em]">
                T.CAP
              </span>
            </Link>
            <p className="mb-0 mt-5 max-w-[285px] text-[15px] leading-7 text-[#c6bdb2]">
              Aménagement intérieur et extérieur sur mesure à Selouane, près de Nador.
            </p>
            <p className="mb-0 mt-5 text-[11px] font-semibold uppercase tracking-[.16em] text-[#9d623d]">
              De l’idée à la pose.
            </p>
          </div>

          {footerLinks.map((group) => (
            <nav aria-label={group.title} key={group.title}>
              <h2 className="mb-5 mt-1 text-[13px] font-semibold tracking-[.01em] text-[#f8f5ef]">
                {group.title}
              </h2>
              <ul className="m-0 grid list-none gap-[15px] p-0">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      className="group relative inline-block text-[14px] leading-6 text-[#c6bdb2] transition-colors duration-200 hover:text-[#e0ad83] focus-visible:text-[#e0ad83] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#e0ad83] after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
                      href={href}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="mb-3 mt-1 text-[13px] font-semibold tracking-[.01em] text-[#f8f5ef]">
              Restons en contact
            </h2>
            <p className="mb-5 mt-0 max-w-[300px] text-[14px] leading-6 text-[#c6bdb2]">
              Une question sur votre projet ? Nous serons ravis de
              vous répondre.
            </p>
            <Link
              className="group flex min-h-[52px] max-w-[370px] items-center justify-between rounded-full border border-[#55483c] bg-[#302a24] py-1 pl-5 pr-1 text-[14px] text-[#ded5ca] transition-colors duration-200 hover:border-[#80634e] hover:bg-[#383129] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d5a27c]"
              href="/#contact"
            >
              <span>Contacter T.cap</span>
              <span className="grid size-11 place-items-center rounded-full bg-[#d5a27c] text-[#241f1a] transition-colors duration-200 group-hover:bg-[#e0ad83]">
                <ArrowRight aria-hidden="true" size={18} />
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-[#443a31] pt-6 text-[12px] text-[#b6aa9d] max-[520px]:flex-col max-[520px]:items-start max-[520px]:gap-2">
          <span>
            © <CurrentYear /> T.cap. Tous droits réservés.
          </span>
          <span>Aménagement & finitions · Selouane, Nador</span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none relative z-0 mx-auto -mt-2 h-[clamp(90px,16vw,210px)] max-w-[1540px] overflow-hidden text-center"
      >
        <span className="absolute inset-x-0 bottom-[-.21em] whitespace-nowrap font-[Georgia,Times_New_Roman,serif] text-[clamp(96px,20vw,280px)] leading-[.82] tracking-[.035em] text-white/[.045]">
          T.cap
        </span>
      </div>
      <p className="mx-auto max-w-[1440px] px-6 py-4 text-center text-[12px] text-white/70 sm:px-8 lg:px-12">
        Conçu &amp; développé par{" "}
        <a
          href="https://www.stallionadvertising.ma/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-teal-300 after:transition-transform after:duration-200 after:content-[''] hover:text-teal-300 hover:after:scale-x-100 focus-visible:text-teal-300 focus-visible:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 motion-reduce:after:transition-none"
        >
          Stallion Advertising
        </a>
      </p>
    </footer>
  );
}
