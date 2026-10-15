"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Check, ChevronDown, Heart, ShoppingBag, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useShop } from "@/components/shop-state";
import { catalogCategories as categories, catalogProducts as products, catalogRooms as rooms, maximumPrice, minimumPrice } from "@/lib/products";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


type SortOrder = "featured" | "price-asc" | "price-desc" | "name-asc";
const sortLabels: Record<SortOrder, string> = {
  featured: "Featured",
  "price-asc": "Price: low to high",
  "price-desc": "Price: high to low",
  "name-asc": "Name: A to Z",
};
type FilterState = {
  selectedCategories: string[];
  setSelectedCategories: (value: string[]) => void;
  selectedRooms: string[];
  setSelectedRooms: (value: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
  inStockOnly: boolean;
  setInStockOnly: (value: boolean) => void;
  categoryCounts: Record<string, number>;
  roomCounts: Record<string, number>;
};

function toggleSelection(values: string[], value: string, setValues: (next: string[]) => void) {
  setValues(values.includes(value) ? values.filter((item) => item !== value) : [...values, value]);
}

function FilterFields({
  selectedCategories,
  setSelectedCategories,
  selectedRooms,
  setSelectedRooms,
  priceRange,
  setPriceRange,
  inStockOnly,
  setInStockOnly,
  categoryCounts,
  roomCounts,
}: FilterState) {
  return (
    <div className="divide-y divide-[#e1d8ce]">
      <details className="group py-4" open>
        <summary className="flex cursor-pointer list-none items-center justify-between font-[Georgia,Times_New_Roman,serif] text-[18px] [&::-webkit-details-marker]:hidden">
          Category
          <ChevronDown aria-hidden="true" className="size-4 text-[#80634e] transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-3 grid gap-2.5">
          <label className="flex cursor-pointer items-center gap-3 text-[13px] text-[#49443e]">
            <input
              checked={selectedCategories.length === 0}
              className="size-[17px] accent-[#a9653e]"
              onChange={() => setSelectedCategories([])}
              type="checkbox"
            />
            <span className="flex-1">All Products</span>
            <span className="text-xs text-[#8c8379]">{products.length}</span>
          </label>
          {categories.map((item) => (
            <label className="flex cursor-pointer items-center gap-3 text-[13px] text-[#49443e]" key={item}>
              <input
                checked={selectedCategories.includes(item)}
                className="size-[17px] accent-[#a9653e]"
                onChange={() => toggleSelection(selectedCategories, item, setSelectedCategories)}
                type="checkbox"
              />
              <span className="flex-1">{item}</span>
              <span className="text-xs text-[#8c8379]">{categoryCounts[item] ?? 0}</span>
            </label>
          ))}
        </div>
      </details>

      <details className="group py-4" open>
        <summary className="flex cursor-pointer list-none items-center justify-between font-[Georgia,Times_New_Roman,serif] text-[18px] [&::-webkit-details-marker]:hidden">
          Room
          <ChevronDown aria-hidden="true" className="size-4 text-[#80634e] transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-3 grid gap-2.5">
          <label className="flex cursor-pointer items-center gap-3 text-[13px] text-[#49443e]">
            <input
              checked={selectedRooms.length === 0}
              className="size-[17px] accent-[#a9653e]"
              onChange={() => setSelectedRooms([])}
              type="checkbox"
            />
            <span className="flex-1">All Rooms</span>
            <span className="text-xs text-[#8c8379]">{products.length}</span>
          </label>
          {rooms.map((item) => (
            <label className="flex cursor-pointer items-center gap-3 text-[13px] text-[#49443e]" key={item}>
              <input
                checked={selectedRooms.includes(item)}
                className="size-[17px] accent-[#a9653e]"
                onChange={() => toggleSelection(selectedRooms, item, setSelectedRooms)}
                type="checkbox"
              />
              <span className="flex-1">{item}</span>
              <span className="text-xs text-[#8c8379]">{roomCounts[item] ?? 0}</span>
            </label>
          ))}
        </div>
      </details>

      <details className="group py-4" open>
        <summary className="flex cursor-pointer list-none items-center justify-between font-[Georgia,Times_New_Roman,serif] text-[18px] [&::-webkit-details-marker]:hidden">
          Price
          <ChevronDown aria-hidden="true" className="size-4 text-[#80634e] transition-transform group-open:rotate-180" />
        </summary>
        <div className="px-1 pt-5">
          <Slider
            aria-label="Price range"
            className="py-1"
            max={maximumPrice}
            min={minimumPrice}
            onValueChange={(value) => setPriceRange([value[0], value[1]])}
            step={10}
            value={priceRange}
          />
          <div className="mt-2 flex justify-between text-[12px] text-[#71675d]">
            <span>${priceRange[0].toLocaleString()}</span>
            <span>${priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </details>

      <details className="group py-4" open>
        <summary className="flex cursor-pointer list-none items-center justify-between font-[Georgia,Times_New_Roman,serif] text-[18px] [&::-webkit-details-marker]:hidden">
          Availability
          <ChevronDown aria-hidden="true" className="size-4 text-[#80634e] transition-transform group-open:rotate-180" />
        </summary>
        <label className="mt-3 flex cursor-pointer items-center gap-3 text-[13px] text-[#49443e]">
          <input
            checked={inStockOnly}
            className="size-[17px] accent-[#a9653e]"
            onChange={(event) => setInStockOnly(event.target.checked)}
            type="checkbox"
          />
          <span className="flex-1">Show in-stock pieces</span>
          <span className="text-xs text-[#8c8379]">{products.filter((product) => product.inStock).length}</span>
        </label>
      </details>
    </div>
  );
}

export function ProductsCatalog() {
  const { addToCart, favorites, toggleFavorite } = useShop();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([minimumPrice, maximumPrice]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortOrder, setSortOrder] = useState<SortOrder>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const categoryCounts = useMemo(
    () => Object.fromEntries(categories.map((category) => [category, products.filter((product) => product.category === category).length])),
    [],
  );
  const roomCounts = useMemo(
    () => Object.fromEntries(rooms.map((room) => [room, products.filter((product) => product.room === room).length])),
    [],
  );

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesRoom = selectedRooms.length === 0 || selectedRooms.includes(product.room);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesAvailability = !inStockOnly || product.inStock;
      return matchesCategory && matchesRoom && matchesPrice && matchesAvailability;
    });

    if (sortOrder === "price-asc") return [...filtered].sort((a, b) => a.price - b.price);
    if (sortOrder === "price-desc") return [...filtered].sort((a, b) => b.price - a.price);
    if (sortOrder === "name-asc") return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    return filtered;
  }, [inStockOnly, priceRange, selectedCategories, selectedRooms, sortOrder]);

  const filterState: FilterState = {
    selectedCategories,
    setSelectedCategories,
    selectedRooms,
    setSelectedRooms,
    priceRange,
    setPriceRange,
    inStockOnly,
    setInStockOnly,
    categoryCounts,
    roomCounts,
  };
  const activeFilterCount = selectedCategories.length + selectedRooms.length + Number(inStockOnly) + Number(priceRange[0] !== minimumPrice || priceRange[1] !== maximumPrice);
  const selectedSortLabel = sortLabels[sortOrder];

  function clearFilters() {
    setSelectedCategories([]);
    setSelectedRooms([]);
    setPriceRange([minimumPrice, maximumPrice]);
    setInStockOnly(false);
  }

  return (
    <main className="min-h-[70vh] bg-[#fcfaf6] text-[#211f1b]">
      <div className="mx-auto grid max-w-[1540px] grid-cols-[244px_minmax(0,1fr)] gap-10 px-[max(3.1vw,24px)] pb-20 pt-8 max-[900px]:grid-cols-1 max-[900px]:gap-0 max-[900px]:px-6 max-[640px]:px-4 max-[640px]:pb-14 max-[640px]:pt-6">
        <aside className="border-r border-[#e1d8ce] pr-7 max-[900px]:hidden" aria-label="Product filters">
          <p className="mb-5 mt-1 text-[11px] font-semibold uppercase tracking-[.18em] text-[#795237]">Shop</p>
          <FilterFields {...filterState} />
          {activeFilterCount > 0 && (
            <button className="mt-4 text-[11px] font-semibold uppercase tracking-[.12em] text-[#795237] underline underline-offset-4" onClick={clearFilters} type="button">
              Clear all filters
            </button>
          )}
        </aside>

        <section aria-labelledby="products-title" className="min-w-0">
          <div className="mb-6 flex items-end justify-between gap-6 max-[640px]:mb-5 max-[640px]:items-start">
            <div>
              <h1 className="m-0 font-[Georgia,Times_New_Roman,serif] text-[clamp(42px,5vw,66px)] font-normal leading-[.98] tracking-[-.045em] max-[640px]:text-[clamp(38px,10vw,48px)]" id="products-title">The Collection</h1>
              <p aria-live="polite" className="mb-0 mt-2 text-[10px] font-semibold uppercase tracking-[.18em] text-[#6d6257]">{visibleProducts.length} {visibleProducts.length === 1 ? "product" : "products"}</p>
            </div>

            <div className="flex items-center gap-3 pb-1 max-[900px]:hidden">
              <span className="text-[13px] text-[#51473e]" id="desktop-sort-label">Sort by</span>
              <Select
                onValueChange={(value) => setSortOrder(value as SortOrder)}
                value={sortOrder}
              >
                <SelectTrigger aria-labelledby="desktop-sort-label" className="min-w-[170px]">
                  <SelectValue>{selectedSortLabel}</SelectValue>
                </SelectTrigger>
                <SelectContent align="end">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: low to high</SelectItem>
                  <SelectItem value="price-desc">Price: high to low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mb-5 hidden items-center justify-between gap-3 max-[900px]:flex">
            <Dialog open={filtersOpen} onOpenChange={setFiltersOpen}>
              <DialogTrigger asChild>
                <Button className="h-10 gap-2 rounded-none border-[#cdb9a5] bg-transparent px-3 text-[11px] uppercase tracking-[.11em] text-[#795237] hover:bg-[#f0e7dd] hover:text-[#211f1b]" variant="outline">
                  <SlidersHorizontal aria-hidden="true" size={15} />
                  Filters{activeFilterCount > 0 ? ` (${activeFilterCount})` : ""}
                </Button>
              </DialogTrigger>
              <DialogContent aria-describedby="mobile-filter-description" aria-label="Filter products" className="max-[640px]:max-h-[90svh]">
                <div className="flex items-start justify-between gap-6 border-b border-[#ddd4c7] pb-4">
                  <div>
                    <DialogTitle>Filter the collection</DialogTitle>
                    <DialogDescription className="mt-1" id="mobile-filter-description">Find the right piece for your space.</DialogDescription>
                  </div>
                  <DialogClose aria-label="Close filters" className="grid size-9 shrink-0 place-items-center rounded-full border border-[#d9cec1] text-[#51473e] transition-colors hover:bg-[#f0e7dd]">
                    <X aria-hidden="true" size={17} />
                  </DialogClose>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <FilterFields {...filterState} />
                </div>
                <div className="flex items-center justify-between gap-4 border-t border-[#ddd4c7] pt-4">
                  <button className="text-[11px] font-semibold uppercase tracking-[.12em] text-[#795237] underline underline-offset-4" onClick={clearFilters} type="button">Clear all</button>
                  <DialogClose asChild>
                    <Button className="h-11 rounded-none bg-[#9c613b] px-5 text-[11px] uppercase tracking-[.12em] text-white hover:bg-[#77482d]">Show {visibleProducts.length} products</Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>

            <div className="flex items-center gap-2.5">
              <span className="shrink-0 text-[11px] text-[#766d63] max-[420px]:sr-only" id="mobile-sort-label">Sort by</span>
              <Select
                onValueChange={(value) => setSortOrder(value as SortOrder)}
                value={sortOrder}
              >
                <SelectTrigger aria-labelledby="mobile-sort-label" className="h-10 w-[156px] min-w-0 px-3 text-[12px] max-[420px]:w-[132px] max-[420px]:px-2">
                  <SelectValue>{selectedSortLabel}</SelectValue>
                </SelectTrigger>
                <SelectContent align="end">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-asc">Price: low to high</SelectItem>
                  <SelectItem value="price-desc">Price: high to low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid grid-cols-3 gap-x-4 gap-y-8 max-[900px]:grid-cols-3 max-[700px]:grid-cols-2 max-[640px]:gap-x-3 max-[640px]:gap-y-7">
              {visibleProducts.map((product) => (
                <article className="group min-w-0" key={product.name}>
                  <div className="relative mb-2.5 aspect-square overflow-hidden bg-[#e8dfd3] max-[640px]:mb-2">
                    <Image
                      alt={product.alt}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] motion-reduce:transition-none"
                      fill
                      sizes="(max-width: 640px) 46vw, (max-width: 900px) 30vw, 25vw"
                      src={product.image}
                    />
                    <button
                      aria-label={favorites.includes(product.id) ? `Remove ${product.name} from saved pieces` : `Save ${product.name}`}
                      aria-pressed={favorites.includes(product.id)}
                      className={`absolute right-3 top-3 grid size-10 place-items-center rounded-full transition-colors max-[640px]:right-2 max-[640px]:top-2 max-[640px]:size-9 ${favorites.includes(product.id) ? "bg-[#a9653e] text-white" : "bg-[#fcfaf6]/90 text-[#795237] hover:bg-white"}`}
                      onClick={() => toggleFavorite(product.id)}
                      type="button"
                    >
                      <Heart aria-hidden="true" className="size-[17px]" fill={favorites.includes(product.id) ? "currentColor" : "none"} strokeWidth={1.6} />
                    </button>
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h2 className="m-0 font-[Georgia,Times_New_Roman,serif] text-[clamp(17px,1.4vw,22px)] font-normal leading-[1.16] tracking-[-.025em] text-[#211f1b] max-[640px]:text-[16px]">
                        <Link className="transition-colors hover:text-[#9c613b]" href="/#contact">{product.name}</Link>
                      </h2>
                      <p className="mb-0 mt-1.5 text-[9px] uppercase tracking-[.17em] text-[#84796e] max-[640px]:text-[8px]">{product.category}</p>
                      <p className="mb-0 mt-2 text-[13px] text-[#39342e] max-[640px]:mt-1.5 max-[640px]:text-[12px]">${product.price.toLocaleString()}</p>
                    </div>
                    <Button
                      aria-label={product.inStock ? `Add ${product.name} to bag` : `${product.name} is out of stock`}
                      className="mt-1 size-11 shrink-0 bg-[#ad693c] text-white hover:bg-[#7c4a2d] max-[640px]:size-9"
                      disabled={!product.inStock}
                      onClick={() => addToCart(product.id)}
                      size="icon-lg"
                    >
                      <ShoppingBag aria-hidden="true" size={17} strokeWidth={1.6} />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-8 border-y border-[#ded5cb] py-16 text-center">
              <h2 className="m-0 font-[Georgia,Times_New_Roman,serif] text-3xl font-normal">No pieces match these filters</h2>
              <p className="mb-5 mt-3 text-sm text-[#736e65]">Adjust your selection to see more of the collection.</p>
              <Button className="h-11 rounded-none bg-[#9c613b] px-6 text-[11px] uppercase tracking-[.12em] text-white hover:bg-[#77482d]" onClick={clearFilters}>Clear filters</Button>
            </div>
          )}

          <div className="mt-14 flex flex-col items-center border-t border-[#ded5cb] pt-9 text-center max-[640px]:mt-10 max-[640px]:pt-7">
            <p className="mb-2 mt-0 text-[10px] font-semibold uppercase tracking-[.18em] text-[#9c613b]">Made by hand. Made to last.</p>
            <p className="mb-4 mt-0 font-[Georgia,Times_New_Roman,serif] text-[clamp(23px,2.4vw,32px)] leading-tight tracking-[-.025em]">Need a custom size or finish?</p>
            <Link className="group inline-flex min-h-11 items-center gap-3 border border-[#a9653e] px-5 text-[11px] font-semibold uppercase tracking-[.12em] text-[#795237] transition-colors hover:bg-[#a9653e] hover:text-white" href="/#contact">
              Talk with Cuveroo <ArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" size={15} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
