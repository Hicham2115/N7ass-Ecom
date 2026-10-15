"use client";

import { useEffect, useRef, useState, type UIEvent } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type Review = {
  initials: string;
  name: string;
  date: string;
  rating: number;
  text: string;
};

function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-[3px] text-[#b87343]" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          aria-hidden="true"
          fill={index < rating ? "currentColor" : "none"}
          key={index}
          size={15}
          strokeWidth={1.7}
        />
      ))}
    </span>
  );
}

export function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const pageCount = Math.ceil(reviews.length / cardsPerView);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const updateCardsPerView = () => {
      setCardsPerView(media.matches ? 2 : 1);
      setPage(0);
      viewportRef.current?.scrollTo({ left: 0 });
    };

    updateCardsPerView();
    media.addEventListener("change", updateCardsPerView);
    return () => media.removeEventListener("change", updateCardsPerView);
  }, []);

  function updatePage(event: UIEvent<HTMLDivElement>) {
    const viewport = event.currentTarget;
    setPage(Math.round(viewport.scrollLeft / viewport.clientWidth));
  }

  function movePage(direction: -1 | 1) {
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.scrollBy({ left: viewport.clientWidth * direction, behavior: "smooth" });
  }

  return (
    <div className="mt-2" role="region" aria-roledescription="carousel" aria-label="Customer reviews">
      <div
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onScroll={updatePage}
        ref={viewportRef}
      >
        {reviews.map((review, index) => (
          <article
            className="w-full shrink-0 snap-start border border-[#e6dfd6] bg-[#fffdfa] p-6 md:w-[calc((100%-16px)/2)] max-[700px]:p-5"
            key={review.initials}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${reviews.length}`}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#98704f] text-[10px] font-bold text-[#fffaf5]" aria-hidden="true">
                  {review.initials}
                </span>
                <div className="grid gap-1">
                  <strong className="text-[12px] font-bold text-[#28231f]">{review.name}</strong>
                  <span className="text-[10px] text-[#898178]">{review.date}</span>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <b className="text-[11px] text-[#28231f]">{review.rating}.0</b>
                <Stars rating={review.rating} />
              </div>
            </div>
            <p className="m-0 min-h-[94px] text-[14px] leading-[1.7] text-[#39342e] max-[700px]:min-h-0">
              “{review.text}”
            </p>
            <div className="mt-6 flex items-center gap-2 border-t border-[#e6dfd6] pt-4 text-[9px] font-semibold uppercase tracking-[.13em] text-[#a4613a]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b87343]" aria-hidden="true" />
              Cuveroo customer
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[#e6dfd6] pt-4">
        <p className="m-0 text-[11px] text-[#736e65]">
          {String(page + 1).padStart(2, "0")} <span className="px-1 text-[#c2a58d]">/</span> {String(pageCount).padStart(2, "0")}
        </p>
        <div className="flex items-center gap-2">
          <Button
            aria-label="Previous reviews"
            className="h-9 w-9 rounded-full border-[#d8cbbd] bg-transparent text-[#593a27] shadow-none hover:border-[#b87343] hover:bg-[#b87343] hover:text-white"
            disabled={page === 0}
            onClick={() => movePage(-1)}
            size="icon"
            variant="outline"
          >
            <ChevronLeft aria-hidden="true" size={17} />
          </Button>
          <Button
            aria-label="Next reviews"
            className="h-9 w-9 rounded-full border-[#d8cbbd] bg-transparent text-[#593a27] shadow-none hover:border-[#b87343] hover:bg-[#b87343] hover:text-white"
            disabled={page >= pageCount - 1}
            onClick={() => movePage(1)}
            size="icon"
            variant="outline"
          >
            <ChevronRight aria-hidden="true" size={17} />
          </Button>
        </div>
      </div>
    </div>
  );
}
