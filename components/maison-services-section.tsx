import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const craftSteps = [
  { number: "01", title: "Imagine", detail: "Your idea sets the direction." },
  { number: "02", title: "Shape", detail: "Copper formed by hand." },
  { number: "03", title: "Finish", detail: "A final patina, made to last." },
];

export function MaisonServicesSection() {
  return (
    <section
      className="services-section"
      id="custom"
      aria-labelledby="services-title"
    >
      <div className="services-photo">
        <Image
          alt="Artisan hand-hammering a copper sheet at the workbench"
          fill
          sizes="(max-width: 700px) 100vw, 47vw"
          src="/cu/copper-workshop.png"
        />
      </div>
      <div className="services-copy" id="story">
        <div className="services-story">
          <p className="eyebrow">Wholesale & custom</p>
          <h2 id="services-title">
            Custom creations
            <br />
            for inspired spaces
          </h2>
          <p className="services-intro">
            We collaborate with interior designers, architects and hospitality
            brands on custom pieces and wholesale orders, bringing your vision
            to life through authentic Moroccan craftsmanship.
          </p>
          <Link className="services-cta" href="#contact">
            <span>Enquire about wholesale</span>
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <div className="services-process" aria-label="Our craft process">
          <p className="services-process-title">From first idea<br />to final patina</p>
          <ol>
            {craftSteps.map(({ number, title, detail }) => (
              <li key={number}>
                <span>{number}</span>
                <div><strong>{title}</strong><small>{detail}</small></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
