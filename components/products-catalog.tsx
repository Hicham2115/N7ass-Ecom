"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { catalogProducts } from "@/lib/products";
import { services } from "@/lib/services";

const catalogItems = [
  ...services.map((service) => ({ ...service, kind: "service" as const })),
  ...catalogProducts.filter((product) => product.category === "Poufs").map((product) => ({ ...product, kind: "product" as const, detail: undefined })),
];
const categories = [...new Set(catalogItems.map((item) => item.category))];
const rooms = [...new Set(catalogItems.map((item) => item.room))];

function FilterGroup({ title, options, selected, onToggle, allLabel, countByOption }: {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
  allLabel: string;
  countByOption: Record<string, number>;
}) {
  return (
    <details className="group border-b border-[#e1d8ce] py-4" open>
      <summary className="flex cursor-pointer list-none items-center justify-between font-[Georgia,Times_New_Roman,serif] text-[18px] [&::-webkit-details-marker]:hidden">
        {title}<ChevronDown aria-hidden="true" className="size-4 text-[#80634e] transition-transform group-open:rotate-180" />
      </summary>
      <div className="mt-3 grid gap-2.5">
        {[allLabel, ...options].map((option) => {
          const isAll = option === allLabel;
          const checked = isAll ? selected.length === 0 : selected.includes(option);
          return (
            <label className="flex cursor-pointer items-center gap-3 text-[13px] text-[#49443e]" key={option}>
              <input checked={checked} className="size-[17px] accent-[#a9653e]" onChange={() => onToggle(isAll ? "" : option)} type="checkbox" />
              <span className="flex-1">{option}</span>
              <span className="text-xs text-[#8c8379]">{isAll ? catalogItems.length : countByOption[option] ?? 0}</span>
            </label>
          );
        })}
      </div>
    </details>
  );
}

export function ProductsCatalog() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState("featured");

  const categoryCounts = useMemo(() => Object.fromEntries(
    categories.map((category) => [category, catalogItems.filter((item) => item.category === category).length]),
  ), []);
  const roomCounts = useMemo(() => Object.fromEntries(
    rooms.map((room) => [room, catalogItems.filter((item) => item.room === room).length]),
  ), []);

  const visibleItems = useMemo(() => {
    const filtered = catalogItems.filter((item) =>
      (!selectedCategories.length || selectedCategories.includes(item.category)) &&
      (!selectedRooms.length || selectedRooms.includes(item.room)),
    );
    if (sortOrder === "name") return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    return filtered;
  }, [selectedCategories, selectedRooms, sortOrder]);

  function toggle(values: string[], setValues: (next: string[]) => void, value: string) {
    if (!value) return setValues([]);
    setValues(values.includes(value) ? values.filter((item) => item !== value) : [...values, value]);
  }

  return (
    <main className="min-h-[70vh] bg-[#fcfaf6] text-[#211f1b]">
      <div className="mx-auto grid max-w-[1540px] grid-cols-[244px_minmax(0,1fr)] gap-10 px-[max(3.1vw,24px)] pb-20 pt-8 max-[900px]:grid-cols-1 max-[900px]:gap-0 max-[900px]:px-6 max-[640px]:px-4 max-[640px]:pb-14 max-[640px]:pt-6">
        <aside className="border-r border-[#e1d8ce] pr-7 max-[900px]:hidden" aria-label="Filtres du catalogue">
          <p className="mb-5 mt-1 text-[11px] font-semibold uppercase tracking-[.18em] text-[#795237]">Catalogue</p>
          <FilterGroup allLabel="Toutes les catégories" countByOption={categoryCounts} onToggle={(value) => toggle(selectedCategories, setSelectedCategories, value)} options={categories} selected={selectedCategories} title="Catégorie" />
          <FilterGroup allLabel="Toutes les pièces" countByOption={roomCounts} onToggle={(value) => toggle(selectedRooms, setSelectedRooms, value)} options={rooms} selected={selectedRooms} title="Pièce" />
          <div className="border-b border-[#e1d8ce] py-4">
            <p className="mb-2 font-[Georgia,Times_New_Roman,serif] text-[18px]">Zone d’intervention</p>
            <p className="m-0 text-[13px] leading-6 text-[#49443e]">Selouane · Nador et alentours</p>
          </div>
        </aside>

        <section aria-labelledby="products-title" className="min-w-0">
          <div className="mb-6 flex items-end justify-between gap-6 max-[640px]:mb-5 max-[640px]:items-start">
            <div>
              <h1 className="m-0 font-[Georgia,Times_New_Roman,serif] text-[clamp(42px,5vw,66px)] font-normal leading-[.98] tracking-[-.045em] max-[640px]:text-[clamp(38px,10vw,48px)]" id="products-title">Nos produits & services</h1>
              <p aria-live="polite" className="mb-0 mt-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#6d6257]">{visibleItems.length} articles</p>
            </div>
            <label className="flex items-center gap-3 pb-1 text-[13px] text-[#51473e] max-[700px]:hidden">
              Trier par
              <Select onValueChange={setSortOrder} value={sortOrder}>
                <SelectTrigger aria-label="Trier le catalogue" className="min-w-[170px]"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">À la une</SelectItem>
                  <SelectItem value="name">Nom : A à Z</SelectItem>
                </SelectContent>
              </Select>
            </label>
          </div>

          {visibleItems.length ? (
            <div className="grid grid-cols-3 gap-x-4 gap-y-8 max-[900px]:grid-cols-3 max-[700px]:grid-cols-2 max-[640px]:gap-x-3 max-[640px]:gap-y-7">
              {visibleItems.map((item) => (
                <article className="group min-w-0" key={`${item.kind}-${item.id}`}>
                  <Link aria-label={`Découvrir ${item.name}`} className="relative mb-2.5 block aspect-square overflow-hidden bg-[#e8dfd3] max-[640px]:mb-2" href={`/products/${item.id}`}>
                    <Image alt={item.alt} className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none" fill sizes="(max-width: 640px) 46vw, (max-width: 900px) 30vw, 25vw" src={item.image} />
                  </Link>
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h2 className="m-0 font-[Georgia,Times_New_Roman,serif] text-[clamp(17px,1.4vw,22px)] font-normal leading-[1.16] tracking-[-.025em] text-[#211f1b] max-[640px]:text-[16px]"><Link className="transition-colors hover:text-[#9c613b]" href={`/products/${item.id}`}>{item.name}</Link></h2>
                      <p className="mb-0 mt-1.5 text-[9px] uppercase tracking-[.17em] text-[#84796e] max-[640px]:text-[8px]">{item.category}</p>
                      {item.kind === "product" ? (
                        <p className="mb-0 mt-2 text-[12px] leading-5 text-[#625c55]">À partir de {item.price.toLocaleString("fr-MA")} DH</p>
                      ) : (
                        <p className="mb-0 mt-2 text-[12px] leading-5 text-[#625c55] max-[640px]:mt-1.5">{item.detail}</p>
                      )}
                    </div>
                    <Link aria-label={item.kind === "product" ? `Voir ${item.name}` : `Demander un devis : ${item.name}`} className="mt-1 grid size-11 shrink-0 place-items-center bg-[#ad693c] text-white transition-colors hover:bg-[#7c4a2d] max-[640px]:size-9" href={item.kind === "product" ? `/products/${item.id}` : "/#contact"}><ArrowRight aria-hidden="true" size={17} /></Link>
                  </div>
                </article>
              ))}
            </div>
          ) : <p className="border-y border-[#ded5cb] py-12 text-center text-sm text-[#736e65]">Aucun élément ne correspond à ces filtres.</p>}

          <div className="mt-14 flex flex-col items-center border-t border-[#ded5cb] pt-9 text-center max-[640px]:mt-10 max-[640px]:pt-7">
            <p className="mb-2 mt-0 text-[10px] font-semibold uppercase tracking-[.18em] text-[#9c613b]">T.cap · Selouane, Nador</p>
            <p className="mb-4 mt-0 font-[Georgia,Times_New_Roman,serif] text-[clamp(23px,2.4vw,32px)] leading-tight tracking-[-.025em]">Un projet en tête ?</p>
            <Link className="group inline-flex min-h-11 items-center gap-3 border border-[#a9653e] px-5 text-[11px] font-semibold uppercase tracking-[.12em] text-[#795237] transition-colors hover:bg-[#a9653e] hover:text-white" href="/#contact">Parlons de votre projet <ArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" size={15} /></Link>
          </div>
        </section>
      </div>
    </main>
  );
}
