import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SeasonalFeatureSection() {
  return (
    <section className="seasonal-section" aria-labelledby="seasonal-title">
      <Image
        alt="Copper fire bowl glowing in a garden at dusk"
        className="seasonal-photo"
        fill
        sizes="100vw"
        src="/cu/firebowl-garden-night.jpeg"
      />
      <div className="seasonal-wash" />
      <div className="seasonal-copy">
        <p className="eyebrow">The Cuveroo edit</p>
        <h2 id="seasonal-title">Warm spaces.<br /><em>Personal touches.</em></h2>
        <p>A considered mix of lighting and home accents, chosen for the way you live.</p>
        <Link className="button button-copper" href="#featured">
          Explore the edit <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  );
}
