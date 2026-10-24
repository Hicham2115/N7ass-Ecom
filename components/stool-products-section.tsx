import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { catalogProducts } from "@/lib/products";

const stoolProducts = catalogProducts.filter((product) => product.category === "Poufs");

export function StoolProductsSection() {
  return (
    <section aria-labelledby="stool-products-title" className="bg-[#fcfaf6] px-[max(3.1vw,24px)] py-12 max-[640px]:px-4 max-[640px]:py-9">
      <div className="mx-auto max-w-[1540px]">
        <div className="mb-7 flex items-end justify-between gap-5 max-[640px]:mb-5">
          <div>
            <p className="mb-2 mt-0 text-[10px] font-semibold uppercase tracking-[.18em] text-[#9c613b]">Assises en tissu</p>
            <h2 className="m-0 font-[Georgia,Times_New_Roman,serif] text-[clamp(30px,3.3vw,44px)] font-normal leading-none tracking-[-.035em] text-[#211f1b]" id="stool-products-title">Nos poufs</h2>
          </div>
          <span className="pb-1 text-[11px] uppercase tracking-[.12em] text-[#736e65]">4 modèles</span>
        </div>

        <div className="grid grid-cols-4 gap-4 max-[700px]:grid-cols-2 max-[640px]:gap-x-3 max-[640px]:gap-y-6">
          {stoolProducts.map((product) => (
            <article className="group min-w-0" key={product.id}>
              <Link aria-label={`Demander un renseignement sur le pouf ${product.name}`} className="relative mb-3 block aspect-square overflow-hidden bg-white" href="/#contact">
                <Image alt={product.alt} className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none" fill sizes="(max-width: 700px) 46vw, 24vw" src={product.image} />
              </Link>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="m-0 text-[12px] font-medium uppercase tracking-[.18em] text-[#211f1b]">{product.name}</h3>
                  <p className="mb-0 mt-1.5 text-[13px] text-[#84796e]">À partir de {product.price.toLocaleString("fr-FR")} DH</p>
                </div>
                <Link aria-label={`Demander le prix du pouf ${product.name}`} className="mt-0.5 grid size-9 shrink-0 place-items-center border border-[#d9cec1] text-[#9c613b] transition-colors hover:border-[#a9653e] hover:bg-[#a9653e] hover:text-white" href="/#contact">
                  <ArrowRight aria-hidden="true" size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
