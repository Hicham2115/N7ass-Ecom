import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export function ReviewsSection() {
  return (
    <section className="reviews-section" id="journal" aria-labelledby="reviews-title">
      <div className="review-mark"><Quote aria-hidden="true" size={31} /></div>
      <div className="review-copy">
        <p className="eyebrow">Cuveroo, in your home</p>
        <h2 id="reviews-title">A piece becomes part<br />of <em>your story.</em></h2>
        <p>Have a Cuveroo piece at home? We’d love to hear where it found its place.</p>
        <Link className="text-link" href="#contact">Share your experience <ArrowRight aria-hidden="true" size={15} /></Link>
      </div>
      <div className="review-values" aria-label="Cuveroo design values">
        <span>Thoughtful form</span><i />
        <span>Hand-finished detail</span><i />
        <span>Made for living</span>
      </div>
    </section>
  );
}
