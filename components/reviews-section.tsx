import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const reviews = [
  {
    initials: "SA",
    name: "Sara A.",
    date: "Recently",
    rating: 5,
    text: "The pendant is even more beautiful in person. The hammering catches the light throughout the day, and the finish feels beautifully considered.",
  },
  {
    initials: "YM",
    name: "Youssef M.",
    date: "Recently",
    rating: 5,
    text: "A striking piece with real character. You can see the care in the workmanship, and it has brought so much warmth to our dining room.",
  },
  {
    initials: "LN",
    name: "Lina N.",
    date: "Recently",
    rating: 4,
    text: "Lovely craftsmanship and a timeless design. The copper basin has become the centrepiece of our bathroom.",
  },
  {
    initials: "AP",
    name: "Amal P.",
    date: "Recently",
    rating: 5,
    text: "Beautifully made and full of character. The warm copper glow makes our entryway feel special every evening.",
  },
  {
    initials: "NM",
    name: "Nadia M.",
    date: "Recently",
    rating: 5,
    text: "The finish is gorgeous and the pendant feels like a small work of art. It sits perfectly above our dining table.",
  },
  {
    initials: "RK",
    name: "Rachid K.",
    date: "Recently",
    rating: 5,
    text: "A thoughtful design and lovely handmade detail. The planter adds just the right warmth to our terrace.",
  },
  {
    initials: "HB",
    name: "Hana B.",
    date: "Recently",
    rating: 4,
    text: "A lovely statement piece with a beautiful hammered finish. It has made our living room feel more personal.",
  },
];

const reviewCount = reviews.length;
const averageRating = reviews.reduce((total, review) => total + review.rating, 0) / reviewCount;
const distribution = Array.from({ length: 5 }, (_, index) => {
  const score = 5 - index;
  const count = reviews.filter((review) => review.rating === score).length;
  return { score, count };
}).filter(({ count }) => count > 0);
const mostCommonRating = Math.max(...distribution.map(({ count }) => count), 1);

function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="inline-flex gap-[3px] text-[#b87343] max-[700px]:gap-px [&_svg]:max-[700px]:h-[13px] [&_svg]:max-[700px]:w-[13px]"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          aria-hidden="true"
          fill={index < rating ? "currentColor" : "none"}
          key={index}
          size={17}
          strokeWidth={1.7}
        />
      ))}
    </span>
  );
}

export function ReviewsSection() {
  return (
    <section
      className="bg-[#fffdfa] px-[max(5vw,calc((100vw-1440px)/2))] py-12 text-[13px] text-[#28231f] max-[980px]:px-[6%] max-[700px]:px-[6%] max-[700px]:py-[42px]"
      id="journal"
      aria-labelledby="reviews-title"
    >
      <h2 className="mb-[30px] mt-0 border-b border-[#e6dfd6] pb-[17px] font-sans text-[27px] font-bold tracking-[-.04em] max-[700px]:mb-[23px] max-[700px]:text-2xl" id="reviews-title">Reviews</h2>
      <div className="grid grid-cols-[175px_minmax(0,1fr)] gap-[34px] px-0 py-2 max-[700px]:grid-cols-[110px_minmax(0,1fr)] max-[700px]:gap-[15px]">
        <div className="flex flex-col items-start justify-center gap-[9px] border-r border-[#e6dfd6] pr-[25px] max-[700px]:pr-3">
          <strong className="text-[43px] font-bold leading-none max-[700px]:text-[32px]">{averageRating.toFixed(1)}</strong>
          <Stars rating={Math.round(averageRating)} />
          <p className="m-0 text-[11px] text-[#82786d]">{reviewCount} customer reviews</p>
        </div>
        <div
          className="grid content-center gap-[10px]"
          aria-label="Review ratings distribution"
        >
          {distribution.map(({ score, count }) => (
            <div className="grid grid-cols-[32px_minmax(90px,1fr)_minmax(95px,.24fr)] items-center gap-3 text-[11px] text-[#736b62] max-[700px]:grid-cols-[25px_minmax(45px,1fr)] max-[700px]:gap-[7px]" key={score}>
              <span className="font-semibold text-[#352f29]">{score}.0</span>
              <span className="h-[9px] overflow-hidden rounded-full bg-[#f0ece7]">
                <span className="block h-full rounded-full bg-gradient-to-r from-[#a4653e] to-[#c99467]" style={{ width: `${(count / mostCommonRating) * 100}%` }} />
              </span>
              <span className="whitespace-nowrap text-[#6c6258] max-[700px]:hidden">
                {count} {count === 1 ? "review" : "reviews"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2.5 border-b border-[#e6dfd6] pb-[25px]" aria-label="Review highlights">
        {["Craftsmanship", "Thoughtful design", "Hand-finished", "Made in Morocco"].map((highlight) => (
          <span className="inline-flex min-h-[42px] items-center border border-[#e8e1d8] bg-white px-[14px] text-[11px] text-[#39332d] max-[700px]:min-h-[38px] max-[700px]:px-2.5 max-[700px]:text-[9px]" key={highlight}>{highlight}</span>
        ))}
      </div>
      <div className="grid">
        {reviews.map((review) => (
          <article className="grid grid-cols-[39px_minmax(0,1fr)] gap-3 border-b border-[#e6dfd6] py-[23px] max-[700px]:grid-cols-[32px_minmax(0,1fr)] max-[700px]:gap-[9px] max-[700px]:py-[18px]" key={review.initials}>
            <div className="grid h-[38px] w-[38px] place-items-center rounded-full bg-[#98704f] text-[9px] font-bold text-[#fffaf5] max-[700px]:h-8 max-[700px]:w-8" aria-hidden="true">
              {review.initials}
            </div>
            <div>
              <div className="flex items-center justify-between gap-5 max-[700px]:items-start">
                <div className="flex items-baseline gap-2.5 max-[700px]:flex-col max-[700px]:gap-0.5">
                  <strong className="text-[11px] font-bold">{review.name}</strong>
                  <span className="text-[9px] text-[#898178]">{review.date}</span>
                </div>
                <div className="flex items-center gap-2.5 max-[700px]:gap-[5px]">
                  <b className="text-[11px]">{review.rating}.0</b>
                  <Stars rating={review.rating} />
                </div>
              </div>
              <p className="mb-0 mt-[10px] text-[13px] leading-[1.65] text-[#39342e]">{review.text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="flex items-center justify-between gap-6 pt-[22px] max-[700px]:items-start max-[700px]:flex-col max-[700px]:gap-[18px]">
        <p className="m-0 text-[11px] text-[#777067]">
          Have a Cuveroo piece at home? <strong className="font-semibold text-[#29241f]">Share your experience.</strong>
        </p>
        <Link className="group inline-flex items-center gap-[9px] border-b border-[#c9a487] pb-1.5 text-[10px] font-bold uppercase tracking-[.04em] text-[#593a27]" href="#contact">
          Write a review <ArrowRight aria-hidden="true" className="text-[#b87343] transition-transform group-hover:translate-x-[3px]" size={16} />
        </Link>
      </div>
    </section>
  );
}
