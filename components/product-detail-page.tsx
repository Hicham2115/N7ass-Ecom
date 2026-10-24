"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  Hand,
  Minus,
  PackageCheck,
  Plus,
  Search,
  ShoppingBag,
  Star,
  Truck,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useShop } from "@/components/shop-state";
import { catalogProducts, type Product } from "@/lib/products";

type ProductImage = { src: string; alt: string; position?: string };
type DetailTab = "description" | "specifications" | "delivery";

const scallopGallery: ProductImage[] = [
  {
    src: "/cu/pendant-scalloped.webp",
    alt: "Suspension festonnée en cuivre martelé dans un intérieur lumineux",
  },
  {
    src: "/cu/pendant-scalloped-room.webp",
    alt: "Suspension festonnée au-dessus d’une table en pierre dans une salle à manger",
  },
  {
    src: "/cu/pendant-scalloped-detail.webp",
    alt: "Détail du cuivre martelé et du bord festonné de la suspension",
  },
];

function getGallery(product: Product) {
  if (product.id === "scallop-pendant") return scallopGallery;
  return [{ src: product.image, alt: product.alt }];
}

function getDescription(product: Product) {
  if (product.id === "scallop-pendant") {
    return "Une suspension en cuivre martelé aux courbes festonnées, pensée pour diffuser une lumière douce et apporter du caractère à la pièce.";
  }
  if (product.category === "Poufs") return product.alt;

  return `Une création en cuivre façonnée avec soin au Maroc. ${product.alt}.`;
}

function ProductPrice({ value }: { value: number }) {
  return <>{value.toLocaleString("fr-MA")} DH</>;
}

function TrustNote({ icon: Icon, title, text }: { icon: typeof Hand; title: string; text: string }) {
  return (
    <div className="flex items-center gap-4 px-5 py-4 first:pl-0 last:pr-0 max-[700px]:gap-3 max-[700px]:px-3 max-[700px]:py-3">
      <Icon aria-hidden="true" className="size-6 shrink-0 text-[#a9653e] max-[700px]:size-5" strokeWidth={1.5} />
      <div>
        <p className="mb-1 mt-0 text-[14px] font-medium leading-tight text-[#342f2a] max-[700px]:text-[13px]">{title}</p>
        <p className="m-0 text-[13px] leading-[1.45] text-[#756d64] max-[700px]:text-[12px]">{text}</p>
      </div>
    </div>
  );
}

export function ProductDetailPage({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<DetailTab>("description");
  const [activeImage, setActiveImage] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const { addToCart, favorites, toggleFavorite } = useShop();
  const gallery = getGallery(product);
  const saved = favorites.includes(product.id);
  const relatedProducts = useMemo(
    () => catalogProducts.filter((item) => item.id !== product.id && item.category === product.category).slice(0, 3),
    [product.id, product.category],
  );
  const title = product.category === "Poufs" || product.name.toLocaleLowerCase("fr-MA").includes("cuivre")
    ? product.name
    : `${product.name} en cuivre`;
  const description = getDescription(product);

  function moveImage(direction: -1 | 1) {
    setActiveImage((current) => (current + direction + gallery.length) % gallery.length);
  }

  return (
    <main className="bg-[#fcfaf6] pb-20 text-[#211f1b] max-[700px]:pb-24">
      <div className="mx-auto max-w-[1600px] px-[max(5.2vw,24px)] pb-16 pt-7 max-[700px]:px-4 max-[700px]:pb-12 max-[700px]:pt-4">
        <nav aria-label="Fil d’Ariane" className="mb-6 flex flex-wrap items-center gap-2 text-[12px] text-[#756d64] max-[700px]:mb-4 max-[420px]:text-[11px]">
          <Link className="transition-colors hover:text-[#a9653e]" href="/">Accueil</Link>
          <ChevronRight aria-hidden="true" className="size-3.5 text-[#a18e7d]" />
          <Link className="transition-colors hover:text-[#a9653e]" href="/products">Boutique</Link>
          <ChevronRight aria-hidden="true" className="size-3.5 text-[#a18e7d]" />
          <span>{product.category}</span>
          <ChevronRight aria-hidden="true" className="size-3.5 text-[#a18e7d] max-[420px]:hidden" />
          <span className="max-[420px]:hidden">{product.name}</span>
        </nav>

        <div className="grid grid-cols-[minmax(0,1.08fr)_minmax(400px,.82fr)] gap-[clamp(42px,5vw,88px)] max-[920px]:grid-cols-[minmax(0,1fr)_minmax(330px,.9fr)] max-[700px]:grid-cols-1 max-[700px]:gap-7">
          <section aria-label={`Galerie de ${product.name}`} className="min-w-0">
            <div className="group/image relative aspect-[1.22] overflow-hidden bg-[#eee5da] max-[700px]:aspect-[1.08]">
              <Image
                alt={gallery[activeImage].alt}
                className="object-cover transition-transform duration-700 group-hover/image:scale-[1.015] motion-reduce:transition-none"
                fill
                priority
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 55vw, 760px"
                src={gallery[activeImage].src}
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-[#211f1b]/45 to-transparent px-5 pb-4 pt-12 text-white max-[700px]:px-3 max-[700px]:pb-3">
                <span className="text-[11px] font-medium tracking-[.12em]">{String(activeImage + 1).padStart(2, "0")} / {String(gallery.length).padStart(2, "0")}</span>
                <div className="flex gap-2">
                  <button aria-label="Image précédente" className="grid size-9 place-items-center rounded-full border border-white/55 bg-[#211f1b]/15 transition-colors hover:bg-white hover:text-[#211f1b]" onClick={() => moveImage(-1)} type="button">
                    <ChevronLeft aria-hidden="true" className="size-4" />
                  </button>
                  <button aria-label="Image suivante" className="grid size-9 place-items-center rounded-full border border-white/55 bg-[#211f1b]/15 transition-colors hover:bg-white hover:text-[#211f1b]" onClick={() => moveImage(1)} type="button">
                    <ChevronRight aria-hidden="true" className="size-4" />
                  </button>
                </div>
              </div>
              <button
                aria-label="Agrandir la photo"
                className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-[#fcfaf6]/95 text-[#332b24] transition-colors hover:bg-white"
                onClick={() => setZoomOpen(true)}
                type="button"
              >
                <Search aria-hidden="true" className="size-[17px]" strokeWidth={1.7} />
              </button>
            </div>

            {gallery.length > 1 && (
              <div aria-label="Choisir une photo" className="mt-3 grid grid-cols-3 gap-3 max-[700px]:gap-2">
                {gallery.map((item, index) => (
                  <button
                    aria-label={`Afficher la photo ${index + 1}`}
                    aria-pressed={activeImage === index}
                    className={`relative aspect-[1.55] overflow-hidden bg-[#eee5da] transition-opacity ${activeImage === index ? "outline outline-1 outline-offset-2 outline-[#a9653e]" : "opacity-75 hover:opacity-100"}`}
                    key={item.src}
                    onClick={() => setActiveImage(index)}
                    type="button"
                  >
                    <Image alt="" className="object-cover" fill sizes="(max-width: 700px) 32vw, 220px" src={item.src} />
                  </button>
                ))}
              </div>
            )}
          </section>

          <section aria-labelledby="product-title" className="self-start pt-2 max-[700px]:pt-0">
            <p className="mb-3 mt-0 text-[11px] font-semibold uppercase tracking-[.2em] text-[#a9653e]">{product.category === "Poufs" ? "Assises en tissu" : "Fait main au Maroc"}</p>
            <h1 className="mb-0 mt-0 max-w-[610px] font-[Georgia,Times_New_Roman,serif] text-[clamp(34px,3.25vw,54px)] font-normal leading-[1.04] tracking-[-.045em] max-[700px]:max-w-[520px] max-[700px]:text-[clamp(34px,9vw,46px)]" id="product-title">
              {title}
            </h1>

            {product.category !== "Poufs" && <Link className="mt-4 inline-flex items-center gap-2 text-[13px] text-[#6f665d] transition-colors hover:text-[#a9653e]" href="/#journal">
              <span aria-label="Note moyenne : 4,7 sur 5" className="flex items-center gap-0.5 text-[#b87343]">
                {Array.from({ length: 5 }, (_, index) => <Star aria-hidden="true" className="size-[15px] fill-current" key={index} strokeWidth={1.5} />)}
              </span>
              4,7 · 7 avis Cuveroo
            </Link>}

            <p className="mb-0 mt-5 font-[Georgia,Times_New_Roman,serif] text-[29px] leading-none tracking-[-.025em] max-[700px]:mt-4 max-[700px]:text-[27px]">
              <ProductPrice value={product.price} />
            </p>
            <div className="my-6 border-t border-[#ddd4c7] max-[700px]:my-5" />
            <p className="mb-0 mt-0 max-w-[540px] text-[16px] leading-[1.75] text-[#665f57] max-[700px]:text-[15px] max-[700px]:leading-[1.65]">
              {description}
            </p>

            <div className="mt-6">
              <p className="mb-3 mt-0 text-[13px] font-medium text-[#342f2a]">{product.category === "Poufs" ? "Revêtement" : "Finition"} <span className="text-[#82786d]">· {product.category === "Poufs" ? "tissu à motifs" : "cuivre naturel"}</span></p>
              <div className="inline-flex items-center gap-2 border border-[#c98a62] bg-[#f8f1e9] px-3 py-2 text-[12px] text-[#4f4034]">
                <span aria-hidden="true" className={`size-4 rounded-full ring-1 ring-inset ring-[#784524]/40 ${product.category === "Poufs" ? "bg-[#c5a680]" : "bg-[#a9653e]"}`} />
                {product.category === "Poufs" ? "Tissu tissé" : "Cuivre martelé"}
                <Check aria-hidden="true" className="ml-2 size-3.5 text-[#9c613b]" />
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-2 mt-0 text-[13px] font-medium text-[#342f2a]">Quantité</p>
              <div className="flex gap-3 max-[390px]:flex-col">
                <div className="inline-flex h-[52px] w-[152px] shrink-0 items-center border border-[#d9d0c5] max-[390px]:h-12 max-[390px]:w-full">
                  <button aria-label="Réduire la quantité" className="grid h-full w-12 place-items-center text-[#51473e] transition-colors hover:bg-[#f0e8de] disabled:opacity-40" disabled={quantity <= 1} onClick={() => setQuantity((value) => Math.max(1, value - 1))} type="button">
                    <Minus aria-hidden="true" className="size-4" />
                  </button>
                  <span aria-label={`Quantité : ${quantity}`} aria-live="polite" className="min-w-0 flex-1 text-center text-[15px]">{quantity}</span>
                  <button aria-label="Augmenter la quantité" className="grid h-full w-12 place-items-center text-[#51473e] transition-colors hover:bg-[#f0e8de] disabled:opacity-40" disabled={quantity >= 99} onClick={() => setQuantity((value) => Math.min(99, value + 1))} type="button">
                    <Plus aria-hidden="true" className="size-4" />
                  </button>
                </div>
                <Button
                  className="group min-h-[52px] flex-1 justify-between rounded-none bg-[#241f1a] px-5 text-[12px] font-semibold uppercase tracking-[.1em] text-white hover:bg-[#9c613b] max-[390px]:min-h-12"
                  disabled={!product.inStock}
                  onClick={() => addToCart(product.id, quantity)}
                >
                  <span className="inline-flex items-center gap-3">
                    <ShoppingBag aria-hidden="true" className="size-[17px]" strokeWidth={1.6} />
                    {product.inStock ? "Ajouter au panier" : "Indisponible"}
                  </span>
                  {product.inStock && <ArrowRight aria-hidden="true" className="size-[17px] transition-transform group-hover:translate-x-1" />}
                </Button>
              </div>
              {!product.inStock && <p className="mb-0 mt-2 text-[13px] text-[#8a6d59]">Cette pièce n’est pas disponible pour le moment.</p>}
            </div>

            <button
              aria-pressed={saved}
              className={`mt-4 inline-flex items-center gap-2 text-[13px] transition-colors hover:text-[#a9653e] ${saved ? "text-[#9c613b]" : "text-[#6f665d]"}`}
              onClick={() => toggleFavorite(product.id)}
              type="button"
            >
              <Heart aria-hidden="true" className="size-[17px]" fill={saved ? "currentColor" : "none"} strokeWidth={1.6} />
              {saved ? "Ajouté à vos favoris" : "Ajouter à ma liste d’envies"}
            </button>

            <div className="mt-5 grid grid-cols-2 divide-x divide-[#ddd4c7] border-y border-[#ddd4c7] max-[390px]:grid-cols-1 max-[390px]:divide-x-0 max-[390px]:divide-y">
              <TrustNote icon={Hand} title={product.category === "Poufs" ? "Revêtement textile" : "Fait main au Maroc"} text={product.category === "Poufs" ? "Tissu à motifs et pieds sphériques." : "Chaque pièce est façonnée avec soin."} />
              <TrustNote icon={Truck} title="Livraison & suivi" text="Les détails sont confirmés avec notre équipe." />
            </div>
          </section>
        </div>

        <section aria-label="Informations sur le produit" className="mt-12 border-y border-[#ddd4c7] max-[700px]:mt-9">
          <div aria-label="Détails du produit" className="flex flex-wrap gap-7 max-[700px]:gap-5" role="tablist">
            {([
              ["description", "Description"],
              ["specifications", "Caractéristiques"],
              ["delivery", "Livraison & retours"],
            ] as const).map(([tab, label]) => (
              <button
                aria-selected={activeTab === tab}
                className={`relative min-h-[58px] text-[13px] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-[#a9653e] after:transition-transform ${activeTab === tab ? "font-medium text-[#241f1a] after:scale-x-100" : "text-[#756d64] after:scale-x-0 hover:text-[#241f1a]"}`}
                id={`product-tab-${tab}`}
                key={tab}
                onClick={() => setActiveTab(tab)}
                role="tab"
                type="button"
              >
                {label}
              </button>
            ))}
          </div>
          <div aria-labelledby={`product-tab-${activeTab}`} className="grid min-h-[170px] grid-cols-2 gap-8 py-7 max-[700px]:grid-cols-1 max-[700px]:gap-4 max-[700px]:py-5" role="tabpanel">
            {activeTab === "description" && (
              <>
                <div>
                  <p className="mb-2 mt-0 text-[11px] font-semibold uppercase tracking-[.15em] text-[#9c613b]">Description</p>
                  <h3 className="mb-2 mt-0 font-[Georgia,Times_New_Roman,serif] text-[25px] font-normal leading-tight">Un caractère singulier, au quotidien.</h3>
                  <p className="mb-0 mt-0 text-[14px] leading-6 text-[#665f57]">{description}</p>
                </div>
                <div className="grid content-start gap-3 text-[14px] text-[#665f57]">
                  <p className="m-0 flex items-center gap-3"><Check aria-hidden="true" className="size-4 text-[#a9653e]" /> {product.category}</p>
                  <p className="m-0 flex items-center gap-3"><Check aria-hidden="true" className="size-4 text-[#a9653e]" /> {product.category === "Poufs" ? "Assise d’appoint" : "Création façonnée à la main au Maroc"}</p>
                  <p className="m-0 flex items-center gap-3"><Check aria-hidden="true" className="size-4 text-[#a9653e]" /> Pensée pour {product.room.toLocaleLowerCase("fr-MA")}</p>
                </div>
              </>
            )}
            {activeTab === "specifications" && (
              <dl className="col-span-2 m-0 grid grid-cols-2 gap-x-10 gap-y-4 text-[14px] max-[700px]:grid-cols-1">
                {[["Matière", product.category === "Poufs" ? "Tissu tissé" : "Cuivre"], ["Fabrication", product.category === "Poufs" ? "—" : "Façonnée à la main au Maroc"], ["Finition", product.category === "Poufs" ? "Motif textile" : "Martelée, patine naturelle"], ["Pièce", product.room]].map(([label, value]) => (
                  <div className="flex justify-between gap-4 border-b border-[#e3dbd1] pb-3" key={label}>
                    <dt className="text-[#756d64]">{label}</dt><dd className="m-0 text-right text-[#332e28]">{value}</dd>
                  </div>
                ))}
              </dl>
            )}
            {activeTab === "delivery" && (
              <div className="col-span-2 grid grid-cols-2 gap-8 max-[700px]:grid-cols-1 max-[700px]:gap-4">
                <div className="flex gap-3"><Truck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#a9653e]" /><div><h3 className="mb-1 mt-0 text-[14px] font-medium">Livraison</h3><p className="m-0 text-[14px] leading-6 text-[#665f57]">Les modalités et frais de livraison sont confirmés par notre équipe avec votre commande.</p></div></div>
                <div className="flex gap-3"><PackageCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[#a9653e]" /><div><h3 className="mb-1 mt-0 text-[14px] font-medium">Une question ?</h3><p className="m-0 text-[14px] leading-6 text-[#665f57]">Nous vous accompagnons pour choisir la pièce et préparer votre projet.</p><Link className="mt-2 inline-flex items-center gap-2 text-[12px] font-semibold text-[#795237] underline underline-offset-4" href="/#contact">Contacter T.cap <ArrowRight aria-hidden="true" className="size-3.5" /></Link></div></div>
              </div>
            )}
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section aria-labelledby="related-title" className="mt-14 max-[700px]:mt-10">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 mt-0 text-[10px] font-semibold uppercase tracking-[.17em] text-[#9c613b]">À découvrir</p>
                <h2 className="m-0 font-[Georgia,Times_New_Roman,serif] text-[clamp(27px,3vw,38px)] font-normal tracking-[-.035em]" id="related-title">Dans le même univers</h2>
              </div>
              <Link className="group mb-1 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.1em] text-[#795237] transition-colors hover:text-[#241f1a]" href="/products">Voir la collection <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" /></Link>
            </div>
            <div className="grid grid-cols-3 gap-4 max-[520px]:grid-cols-2 max-[520px]:gap-3">
              {relatedProducts.map((item) => (
                <Link className="group min-w-0" href={`/products/${item.id}`} key={item.id}>
                  <div className="relative mb-2 aspect-[1.25] overflow-hidden bg-[#eee5da]">
                    <Image alt={item.alt} className="object-cover transition-transform duration-500 group-hover:scale-[1.035]" fill sizes="(max-width: 520px) 46vw, 30vw" src={item.image} />
                  </div>
                  <h3 className="mb-1 mt-0 font-[Georgia,Times_New_Roman,serif] text-[18px] font-normal leading-tight group-hover:text-[#9c613b] max-[520px]:text-[16px]">{item.name}</h3>
                  <p className="m-0 text-[14px] text-[#665f57]"><ProductPrice value={item.price} /></p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 hidden items-center justify-between gap-4 border-t border-[#ddd4c7] bg-[#fcfaf6]/95 px-4 py-3 backdrop-blur-sm max-[700px]:flex">
        <div className="min-w-0">
          <p className="m-0 truncate text-[12px] font-medium">{product.name}</p>
          <p className="mb-0 mt-0.5 text-[14px] text-[#6f665d]"><ProductPrice value={product.price} /></p>
        </div>
        <Button className="h-11 shrink-0 rounded-none bg-[#241f1a] px-4 text-[10px] font-semibold uppercase tracking-[.08em] text-white hover:bg-[#9c613b]" disabled={!product.inStock} onClick={() => addToCart(product.id, quantity)}>
          <ShoppingBag aria-hidden="true" className="size-4" /> Ajouter
        </Button>
      </div>

      <Dialog open={zoomOpen} onOpenChange={setZoomOpen}>
        <DialogContent aria-describedby="product-image-description" className="z-[110] inset-[4vh_4vw] h-[92vh] max-h-none w-[92vw] max-w-none border-0 bg-[#211f1b] p-3 sm:p-4 max-[640px]:p-2" mobileSide="full">
          <DialogTitle className="sr-only">Photo de {product.name}</DialogTitle>
          <DialogDescription className="sr-only" id="product-image-description">Vue agrandie de {product.name}.</DialogDescription>
          <DialogClose aria-label="Fermer l’agrandissement" className="absolute right-3 top-3 z-10 grid size-10 place-items-center bg-[#fcfaf6] text-[#211f1b] hover:bg-white">
            <X aria-hidden="true" className="size-5" />
          </DialogClose>
          <div className="relative min-h-0 flex-1">
            <Image alt={gallery[activeImage].alt} className="object-contain" fill sizes="92vw" src={gallery[activeImage].src} />
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
