import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";

const categories = [
  {
    name: "Cuisines",
    note: "Agencements et rangements sur mesure",
    image: "/tcap-kitchen.webp",
    alt: "Cuisine aménagée avec façades en bois et plan de travail clair",
  },
  {
    name: "Chambres",
    note: "Têtes de lit, rangements et habillage mural",
    image: "/tcap-bedroom.webp",
    alt: "Chambre aménagée avec lits et papier peint mural",
  },
  {
    name: "Salons",
    note: "Ambiances modernes ou marocaines",
    image: "/tcap-salon.webp",
    alt: "Salon contemporain aménagé avec mobilier sur mesure",
  },
  {
    name: "Finitions",
    note: "Carrelage, habillage et détails décoratifs",
    image: "/tcap-hero.webp",
    alt: "Intérieur avec finitions murales et boiseries",
  },
  {
    name: "Extérieurs",
    note: "Volets roulants et aménagements extérieurs",
    image: "/tcap-exterior.webp",
    alt: "Façade et volet roulant motorisé",
  },
];

export function CategorySection() {
  return (
    <section
      className="bg-[#f8f4ee] px-4 py-6 sm:px-6 lg:px-[2.5%] lg:py-7"
      id="categories"
      aria-labelledby="categories-title"
    >
      <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center sm:mb-5">
        <div className="col-start-2 flex items-center gap-2.5 sm:gap-4">
          <span className="hidden items-center gap-1 text-[#b87343] sm:flex" aria-hidden="true">
            <span className="h-px w-8 bg-[#c8a181]" />
            <ArrowRight size={11} strokeWidth={1.5} />
          </span>
          <h2
            className="whitespace-nowrap font-sans text-[clamp(15px,1.05vw,17px)] font-medium uppercase tracking-[0.1em] text-[#211f1b] sm:text-[17px] sm:tracking-[0.12em]"
            id="categories-title"
          >
            Nos services
          </h2>
          <span className="hidden items-center gap-1 text-[#b87343] sm:flex" aria-hidden="true">
            <ArrowLeft size={11} strokeWidth={1.5} />
            <span className="h-px w-8 bg-[#c8a181]" />
          </span>
        </div>
        <Link
          className="group col-start-3 inline-flex items-center justify-self-end gap-1.5 whitespace-nowrap text-[clamp(12px,0.85vw,14px)] font-semibold uppercase tracking-[0.08em] text-[#a76f49] transition-colors hover:text-[#211f1b]"
          href="/services"
        >
          Nos projets <MoveRight aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" size={14} strokeWidth={1.5} />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 sm:gap-x-2.5 lg:grid-cols-5">
        {categories.map((category) => (
          <Link
            className="group flex min-w-0 flex-col items-stretch"
            href="#featured"
            key={category.name}
          >
            <span className="relative block aspect-[1.09] overflow-hidden border border-[#d9c9b8] bg-[#e8dfd3]">
              <Image
                alt={category.alt}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                fill
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 31vw, 19vw"
                src={category.image}
              />
            </span>
            <span className="mt-2 text-center font-sans text-[clamp(13px,0.9vw,15px)] font-semibold uppercase tracking-[0.04em] text-[#211f1b] sm:text-[clamp(14px,1vw,16px)] lg:text-[14px]">
              {category.name}
            </span>
            <span className="mx-auto mt-1 max-w-[190px] text-center text-[clamp(12px,0.85vw,14px)] leading-[1.5] text-[#69645d] sm:text-[clamp(13px,0.9vw,15px)] lg:text-[clamp(14px,1vw,16px)]">
              {category.note}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
