import Image from "next/image";
import Link from "next/link";
import { ArrowRight, DraftingCompass, LampDesk, Store } from "lucide-react";

const services = [
  { label: "Custom pieces", icon: DraftingCompass },
  { label: "Wholesale enquiries", icon: Store },
  { label: "Lighting & home accents", icon: LampDesk },
];

export function MaisonServicesSection() {
  return (
    <section className="services-section" id="custom" aria-labelledby="services-title">
      <div className="services-photo">
        <Image
          alt="Artisan hand-hammering a copper sheet at the workbench"
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
          src="/cu/copper-workshop.png"
        />
      </div>
      <div className="services-copy" id="story">
        <p className="eyebrow">Wholesale & custom</p>
        <h2 id="services-title">Made for your<br /><em>kind of space.</em></h2>
        <p>Tell us what you have in mind. Cuveroo welcomes custom and wholesale enquiries for its copper collection.</p>
        <ul className="services-list">
          {services.map(({ label, icon: Icon }) => (
            <li key={label}><Icon aria-hidden="true" size={19} /><span>{label}</span></li>
          ))}
        </ul>
        <Link className="button button-light" href="#contact">Talk with Cuveroo <ArrowRight aria-hidden="true" size={16} /></Link>
      </div>
    </section>
  );
}
