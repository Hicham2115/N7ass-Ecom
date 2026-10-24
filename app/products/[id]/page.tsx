import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight, MapPin, Phone } from "lucide-react";
import { services } from "@/lib/services";
import { catalogProducts } from "@/lib/products";
import { ProductDetailPage } from "@/components/product-detail-page";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return [...services, ...catalogProducts].map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = services.find((item) => item.id === id);
  const product = catalogProducts.find((item) => item.id === id);
  return {
    title: service ? `${service.name} | T.cap` : product ? `${product.name} | T.cap` : "Article | T.cap",
    description: service?.detail ?? product?.alt,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = services.find((item) => item.id === id);
  const product = catalogProducts.find((item) => item.id === id);
  if (!service && product) return <ProductDetailPage product={product} />;
  if (!service) notFound();

  const relatedServices = services.filter((item) => item.id !== service.id);

  return (
    <main className="bg-[#fcfaf6] pb-20 text-[#211f1b]">
      <div className="mx-auto max-w-[1600px] px-[max(5.2vw,24px)] pb-16 pt-7 max-[700px]:px-4 max-[700px]:pb-12 max-[700px]:pt-4">
        <nav aria-label="Fil d’Ariane" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-[#756d64] max-[700px]:mb-4">
          <Link className="transition-colors hover:text-[#a9653e]" href="/">Accueil</Link>
          <ChevronRight aria-hidden="true" className="size-3.5 text-[#a18e7d]" />
          <Link className="transition-colors hover:text-[#a9653e]" href="/services">Nos services</Link>
          <ChevronRight aria-hidden="true" className="size-3.5 text-[#a18e7d]" />
          <span>{service.category}</span>
        </nav>

        <div className="grid grid-cols-[minmax(0,1.08fr)_minmax(400px,.82fr)] gap-[clamp(42px,5vw,88px)] max-[920px]:grid-cols-[minmax(0,1fr)_minmax(330px,.9fr)] max-[700px]:grid-cols-1 max-[700px]:gap-7">
          <div className="relative aspect-[1.22] overflow-hidden bg-[#eee5da] max-[700px]:aspect-[1.08]">
            <Image alt={service.alt} className="object-cover" fill priority sizes="(max-width: 700px) 100vw, (max-width: 1100px) 55vw, 760px" src={service.image} />
          </div>

          <section aria-labelledby="service-title" className="self-start pt-2 max-[700px]:pt-0">
            <p className="mb-3 mt-0 text-[11px] font-semibold uppercase tracking-[.2em] text-[#a9653e]">Aménagement intérieur & extérieur</p>
            <h1 className="mb-0 mt-0 max-w-[610px] font-[Georgia,Times_New_Roman,serif] text-[clamp(34px,3.25vw,54px)] font-normal leading-[1.04] tracking-[-.045em] max-[700px]:max-w-[520px] max-[700px]:text-[clamp(34px,9vw,46px)]" id="service-title">{service.name}</h1>
            <p className="mb-0 mt-5 max-w-[540px] text-[16px] leading-[1.75] text-[#665f57] max-[700px]:text-[15px] max-[700px]:leading-[1.65]">{service.detail} Chaque projet est étudié selon votre espace, vos préférences et votre budget.</p>

            <div className="my-6 border-t border-[#ddd4c7] max-[700px]:my-5" />
            <p className="mb-3 mt-0 text-[13px] font-medium text-[#342f2a]">Un accompagnement adapté à votre projet</p>
            <div className="grid gap-3 text-[14px] text-[#665f57]">
              <p className="m-0 flex items-center gap-3"><Check aria-hidden="true" className="size-4 text-[#a9653e]" /> Conseils sur les matériaux et les finitions</p>
              <p className="m-0 flex items-center gap-3"><Check aria-hidden="true" className="size-4 text-[#a9653e]" /> Aménagement pensé pour votre intérieur</p>
              <p className="m-0 flex items-center gap-3"><MapPin aria-hidden="true" className="size-4 text-[#a9653e]" /> Selouane, Nador et alentours</p>
            </div>

            <Link className="group mt-7 inline-flex min-h-[52px] w-full max-w-[430px] items-center justify-between bg-[#241f1a] px-5 text-[12px] font-semibold uppercase tracking-[.1em] !text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#9c613b] hover:shadow-[0_10px_24px_rgba(156,97,59,0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9c613b]" href="/#contact">
              <span className="inline-flex items-center gap-3 !text-white"><Phone aria-hidden="true" className="size-[17px]" /> Demander un devis</span>
              <ArrowRight aria-hidden="true" className="size-[17px] transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="mt-5 grid grid-cols-2 divide-x divide-[#ddd4c7] border-y border-[#ddd4c7] max-[390px]:grid-cols-1 max-[390px]:divide-x-0 max-[390px]:divide-y">
              <div className="px-5 py-4 first:pl-0"><p className="mb-1 mt-0 text-[14px] font-medium text-[#342f2a]">À votre écoute</p><p className="m-0 text-[13px] leading-[1.45] text-[#756d64]">Échangeons sur votre besoin et vos idées.</p></div>
              <div className="px-5 py-4 last:pr-0"><p className="mb-1 mt-0 text-[14px] font-medium text-[#342f2a]">Sur mesure</p><p className="m-0 text-[13px] leading-[1.45] text-[#756d64]">Une proposition adaptée à votre espace.</p></div>
            </div>
          </section>
        </div>

        <section className="mt-12 border-y border-[#ddd4c7] py-7 max-[700px]:mt-9 max-[700px]:py-5">
          <p className="mb-2 mt-0 text-[11px] font-semibold uppercase tracking-[.15em] text-[#9c613b]">Notre approche</p>
          <h2 className="mb-2 mt-0 font-[Georgia,Times_New_Roman,serif] text-[25px] font-normal leading-tight">De l’idée à la réalisation.</h2>
          <p className="mb-0 mt-0 max-w-[760px] text-[14px] leading-6 text-[#665f57]">T.cap vous accompagne dans le choix des solutions, des matériaux et des finitions pour aménager votre maison à votre image. Contactez-nous pour parler de votre projet.</p>
        </section>

        <section aria-labelledby="related-title" className="mt-14 max-[700px]:mt-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div><p className="mb-2 mt-0 text-[10px] font-semibold uppercase tracking-[.17em] text-[#9c613b]">À découvrir</p><h2 className="m-0 font-[Georgia,Times_New_Roman,serif] text-[clamp(27px,3vw,38px)] font-normal tracking-[-.035em]" id="related-title">Autres services</h2></div>
            <Link className="group mb-1 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.1em] text-[#795237] transition-colors hover:text-[#241f1a]" href="/services">Tous les services <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[700px]:grid-cols-2 max-[520px]:gap-3">
            {relatedServices.slice(0, 3).map((item) => (
              <Link className="group min-w-0" href={`/products/${item.id}`} key={item.id}>
                <div className="relative mb-2 aspect-[1.25] overflow-hidden bg-[#eee5da]"><Image alt={item.alt} className="object-cover transition-transform duration-500 group-hover:scale-[1.035]" fill sizes="(max-width: 520px) 46vw, 30vw" src={item.image} /></div>
                <h3 className="mb-1 mt-0 font-[Georgia,Times_New_Roman,serif] text-[18px] font-normal leading-tight group-hover:text-[#9c613b] max-[520px]:text-[16px]">{item.name}</h3>
                <p className="m-0 text-[12px] uppercase tracking-[.12em] text-[#84796e]">{item.category}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
