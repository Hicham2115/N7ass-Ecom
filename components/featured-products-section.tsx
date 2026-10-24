import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pieces = [
  {
    id: "scallop-pendant",
    name: "Cuisine sur mesure",
    description: "Façades MDF, finitions brillantes et plan de travail au choix.",
    image: "/tcap-kitchen.png",
    imageClassName: "group-hover:scale-[1.04]",
  },
  {
    id: "hammam-basin",
    name: "Chambre aménagée",
    description: "Tête de lit, tissu et papier peint coordonnés.",
    image: "/tcap-bedroom.png",
    imageClassName: "group-hover:scale-[1.04]",
  },
  {
    id: "living-room-loop-pendant",
    name: "Salon contemporain",
    description: "Mobilier et habillage pensés pour votre pièce.",
    image: "/tcap-salon.png",
    imageClassName: "group-hover:scale-[1.04]",
  },
  {
    id: "atlas-fire-bowl",
    name: "Volets roulants",
    description: "Commande à distance et options domotiques.",
    image: "/tcap-hero.png",
    imageClassName: "group-hover:scale-[1.04]",
  },
];

export function FeaturedProductsSection() {
  return (
    <section
      className="bg-[#f7f3ec] px-[max(2vw,20px)] py-10 max-[700px]:px-[5%] max-[700px]:py-9"
      id="featured"
      aria-labelledby="featured-title"
    >
      <div className="relative mb-5 flex min-h-7 items-center justify-center max-[700px]:mb-6 max-[700px]:flex-col max-[700px]:gap-3">
        <h2
          className="m-0 flex items-center gap-6 font-sans text-[16px] font-medium uppercase tracking-[.08em] text-[#211f1b] max-[700px]:gap-3 max-[700px]:text-sm"
          id="featured-title"
        >
          <span aria-hidden="true" className="h-px w-12 bg-[#c39170] max-[700px]:w-7" />
          Projets à découvrir
          <span aria-hidden="true" className="h-px w-12 bg-[#c39170] max-[700px]:w-7" />
        </h2>
        <Link
          className="group absolute right-0 inline-flex items-center gap-2 text-[clamp(12px,0.85vw,14px)] font-medium uppercase tracking-[.07em] text-[#a66b45] transition-colors hover:text-[#211f1b] max-[700px]:static max-[700px]:self-end"
          href="/products"
        >
          Voir nos services
          <ArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" size={14} />
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-3 max-[700px]:grid-cols-2 max-[700px]:gap-x-3 max-[700px]:gap-y-7">
        {pieces.map((piece) => (
          <article className="group" key={piece.name}>
            <Link
              className="relative mb-3 block aspect-square overflow-hidden bg-[#e8dfd3]"
              href="#contact"
              aria-label={`En savoir plus sur ${piece.name}`}
            >
              <Image
                className={`object-cover transition-transform duration-500 ${piece.imageClassName}`}
                src={piece.image}
                alt={piece.name}
                fill
                sizes="(max-width: 700px) 45vw, 24vw"
              />
            </Link>
            <h3 className="mb-1 mt-0 font-[Georgia,Times_New_Roman,serif] text-[clamp(16px,1.25vw,19px)] font-normal leading-tight tracking-[-.02em] text-[#211f1b] max-[700px]:text-[15px]">
              {piece.name}
            </h3>
            <p className="mb-0 mt-1 max-w-[280px] text-[clamp(15px,1.05vw,17px)] leading-[1.55] text-[#5b554d] max-[700px]:text-xs">
              {piece.description}
            </p>
            <Link
              className="group/link mt-4 inline-flex items-center gap-3 text-[clamp(12px,0.85vw,14px)] font-medium uppercase tracking-[.07em] text-[#a66b45] transition-colors hover:text-[#211f1b] max-[700px]:mt-3 max-[700px]:text-[clamp(12px,0.85vw,14px)]"
              href="#contact"
            >
              Parler de ce projet
              <ArrowRight aria-hidden="true" className="transition-transform group-hover/link:translate-x-1" size={14} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
