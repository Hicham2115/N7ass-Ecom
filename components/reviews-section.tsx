import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { ReviewsCarousel } from "@/components/reviews-carousel";

const reviews = [
  {
    initials: "SA",
    name: "Sara A.",
    date: "Récemment",
    rating: 5,
    text: "La suspension est encore plus belle en vrai. Le martelage capte la lumière au fil de la journée et la finition est remarquable.",
  },
  {
    initials: "YM",
    name: "Youssef M.",
    date: "Récemment",
    rating: 5,
    text: "Une pièce pleine de caractère. Le soin apporté à sa fabrication se voit, et elle a apporté beaucoup de chaleur à notre salle à manger.",
  },
  {
    initials: "LN",
    name: "Lina N.",
    date: "Récemment",
    rating: 4,
    text: "Un bel artisanat et un design intemporel. La vasque en cuivre est devenue la pièce maîtresse de notre salle de bain.",
  },
  {
    initials: "AP",
    name: "Amal P.",
    date: "Récemment",
    rating: 5,
    text: "Une pièce joliment travaillée et pleine de caractère. La lueur chaude du cuivre embellit notre entrée chaque soir.",
  },
  {
    initials: "NM",
    name: "Nadia M.",
    date: "Récemment",
    rating: 5,
    text: "La finition est superbe et la suspension ressemble à une petite œuvre d’art. Elle trouve parfaitement sa place au-dessus de notre table.",
  },
  {
    initials: "RK",
    name: "Rachid K.",
    date: "Récemment",
    rating: 5,
    text: "Un design bien pensé et de beaux détails faits main. La jardinière apporte juste ce qu’il faut de chaleur à notre terrasse.",
  },
  {
    initials: "HB",
    name: "Hana B.",
    date: "Récemment",
    rating: 4,
    text: "Une belle pièce forte à la finition martelée. Elle a rendu notre salon plus personnel.",
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
      aria-label={`${rating} étoiles sur 5`}
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
      className="bg-[#fffdfa] px-[max(5vw,calc((100vw-1440px)/2))] py-12 text-[clamp(15px,1.05vw,17px)] text-[#28231f] max-[980px]:px-[6%] max-[700px]:px-[6%] max-[700px]:py-[42px]"
      id="journal"
      aria-labelledby="reviews-title"
    >
      <h2 className="mb-[30px] mt-0 border-b border-[#e6dfd6] pb-[17px] font-sans text-[27px] font-bold tracking-[-.04em] max-[700px]:mb-[23px] max-[700px]:text-2xl" id="reviews-title">Avis clients</h2>
      <div className="grid grid-cols-[175px_minmax(0,1fr)] gap-[34px] px-0 py-2 max-[700px]:grid-cols-[110px_minmax(0,1fr)] max-[700px]:gap-[15px]">
        <div className="flex flex-col items-start justify-center gap-[9px] border-r border-[#e6dfd6] pr-[25px] max-[700px]:pr-3">
          <strong className="text-[43px] font-bold leading-none max-[700px]:text-[32px]">{averageRating.toFixed(1)}</strong>
          <Stars rating={Math.round(averageRating)} />
          <p className="m-0 text-[clamp(13px,0.9vw,15px)] text-[#82786d]">{reviewCount} avis clients</p>
        </div>
        <div
          className="grid content-center gap-[10px]"
          aria-label="Répartition des notes"
        >
          {distribution.map(({ score, count }) => (
            <div className="grid grid-cols-[32px_minmax(90px,1fr)_minmax(95px,.24fr)] items-center gap-3 text-[clamp(13px,0.9vw,15px)] text-[#736b62] max-[700px]:grid-cols-[25px_minmax(45px,1fr)] max-[700px]:gap-[7px]" key={score}>
              <span className="font-semibold text-[#352f29]">{score}.0</span>
              <span className="h-[9px] overflow-hidden rounded-full bg-[#f0ece7]">
                <span className="block h-full rounded-full bg-gradient-to-r from-[#a4653e] to-[#c99467]" style={{ width: `${(count / mostCommonRating) * 100}%` }} />
              </span>
              <span className="whitespace-nowrap text-[#6c6258] max-[700px]:hidden">
                {count} {count === 1 ? "avis" : "avis"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2.5 border-b border-[#e6dfd6] pb-[25px]" aria-label="Points appréciés">
        {["Savoir-faire artisanal", "Design soigné", "Finition à la main", "Fabriqué au Maroc"].map((highlight) => (
          <span className="inline-flex min-h-[42px] items-center border border-[#e8e1d8] bg-white px-[14px] text-[clamp(13px,0.9vw,15px)] text-[#39332d] max-[700px]:min-h-[38px] max-[700px]:px-2.5 max-[700px]:text-[clamp(11px,0.78vw,13px)]" key={highlight}>{highlight}</span>
        ))}
      </div>
      <ReviewsCarousel reviews={reviews} />
      <div className="flex items-center justify-between gap-6 pt-[22px] max-[700px]:items-start max-[700px]:flex-col max-[700px]:gap-[18px]">
        <p className="m-0 text-[clamp(13px,0.9vw,15px)] text-[#777067]">
          Vous avez une pièce Cuveroo chez vous ? <strong className="font-semibold text-[#29241f]">Racontez-nous votre expérience.</strong>
        </p>
        <Link className="group inline-flex items-center gap-[9px] border-b border-[#c9a487] pb-1.5 text-[clamp(12px,0.85vw,14px)] font-bold uppercase tracking-[.04em] text-[#593a27]" href="#contact">
          Laisser un avis <ArrowRight aria-hidden="true" className="text-[#b87343] transition-transform group-hover:translate-x-[3px]" size={16} />
        </Link>
      </div>
    </section>
  );
}
