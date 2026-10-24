import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const work = [
  { label: "Cuisine", detail: "MDF · finitions brillantes · plan de travail", image: "/tcap-kitchen.png", alt: "Cuisine aménagée aux finitions bois" },
  { label: "Chambre", detail: "Tête de lit · tissu · papier peint", image: "/tcap-bedroom.png", alt: "Chambre aménagée avec deux lits" },
  { label: "Salon", detail: "Mobilier · habillage · agencement", image: "/tcap-salon.png", alt: "Salon et meuble mural sur mesure" },
];

export function ReviewsSection() {
  return (
    <section className="bg-[#fffdfa] px-[max(5vw,calc((100vw-1440px)/2))] py-12 text-[#28231f] max-[980px]:px-[6%] max-[700px]:px-[6%] max-[700px]:py-[42px]" id="journal" aria-labelledby="reviews-title">
      <div className="mb-7 flex items-end justify-between gap-5 border-b border-[#e6dfd6] pb-4 max-[700px]:items-start max-[700px]:flex-col">
        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[.17em] text-[#a76f49]">Exemples de réalisations</p>
          <h2 className="m-0 font-[Georgia,Times_New_Roman,serif] text-[clamp(32px,4vw,48px)] font-normal leading-tight tracking-[-.04em]" id="reviews-title">Des espaces transformés</h2>
        </div>
        <Link className="group inline-flex items-center gap-2 pb-1 text-[12px] font-bold uppercase tracking-[.06em] text-[#593a27]" href="/products">Voir les services <ArrowRight aria-hidden="true" className="text-[#b87343] transition-transform group-hover:translate-x-1" size={15} /></Link>
      </div>
      <div className="grid grid-cols-3 gap-4 max-[700px]:grid-cols-1">
        {work.map((item) => (
          <article key={item.label}>
            <div className="relative aspect-[1.35] overflow-hidden bg-[#e8dfd3]">
              <Image alt={item.alt} className="object-cover" fill sizes="(max-width: 700px) 88vw, 30vw" src={item.image} />
            </div>
            <h3 className="mb-1 mt-3 font-[Georgia,Times_New_Roman,serif] text-[23px] font-normal">{item.label}</h3>
            <p className="m-0 text-[13px] text-[#777067]">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
