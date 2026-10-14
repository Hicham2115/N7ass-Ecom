import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const pieces = [
  { name: "Scalloped pendant", type: "Lighting", image: "/cu/pendant-scalloped.jpeg" },
  { name: "Hammered basin", type: "Bathroom & spa", image: "/cu/basin-hammered.jpeg" },
  { name: "Sculptural pendant", type: "Lighting", image: "/cu/pendant-green.jpeg" },
  { name: "Copper fire bowl", type: "Garden & outdoor", image: "/cu/firebowl-product.jpeg" },
];

export function FeaturedProductsSection() {
  return (
    <section className="section featured-section" id="featured" aria-labelledby="featured-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">A few pieces to begin</p>
          <h2 id="featured-title">Featured objects</h2>
        </div>
        <Link className="text-link" href="#categories">View all objects <ArrowRight aria-hidden="true" size={15} /></Link>
      </div>
      <div className="product-grid">
        {pieces.map((piece) => (
          <article className="product-item" key={piece.name}>
            <Link className="product-photo" href="#contact" aria-label={`Ask about ${piece.name}`}>
              <Image src={piece.image} alt={piece.name} fill sizes="(max-width: 760px) 45vw, 25vw" />
              <span className="product-open"><ArrowUpRight aria-hidden="true" size={17} /></span>
            </Link>
            <p className="product-type">{piece.type}</p>
            <h3>{piece.name}</h3>
            <Link className="product-link" href="#contact">Enquire about this piece</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
