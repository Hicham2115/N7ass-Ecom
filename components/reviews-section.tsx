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
      className="review-stars"
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
      className="reviews-section"
      id="journal"
      aria-labelledby="reviews-title"
    >
      <h2 id="reviews-title">Reviews</h2>
      <div className="reviews-overview">
        <div className="reviews-score">
          <strong>{averageRating.toFixed(1)}</strong>
          <Stars rating={Math.round(averageRating)} />
          <p>{reviewCount} customer reviews</p>
        </div>
        <div
          className="reviews-breakdown"
          aria-label="Review ratings distribution"
        >
          {distribution.map(({ score, count }) => (
            <div className="review-bar-row" key={score}>
              <span>{score}.0</span>
              <span className="review-bar">
                <span style={{ width: `${(count / mostCommonRating) * 100}%` }} />
              </span>
              <span className="review-count">
                {count} {count === 1 ? "review" : "reviews"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="review-highlights" aria-label="Review highlights">
        <span>
          Craftsmanship
        </span>
        <span>
          Thoughtful design
        </span>
        <span>
          Hand-finished
        </span>
        <span>
          Made in Morocco
        </span>
      </div>
      <div className="review-list">
        {reviews.map((review) => (
          <article className="review-card" key={review.initials}>
            <div className="review-avatar" aria-hidden="true">
              {review.initials}
            </div>
            <div className="review-card-content">
              <div className="review-card-heading">
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.date}</span>
                </div>
                <div className="review-card-rating">
                  <b>{review.rating}.0</b>
                  <Stars rating={review.rating} />
                </div>
              </div>
              <p>{review.text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="review-invitation">
        <p>
          Have a Cuveroo piece at home? <strong>Share your experience.</strong>
        </p>
        <Link href="#contact">
          Write a review <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  );
}
