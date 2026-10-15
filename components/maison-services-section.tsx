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
      className="grid min-h-[410px] grid-cols-[47%_53%] bg-[#241f1a] text-[#fcfaf6] max-[700px]:grid-cols-1"
      id="custom"
      aria-labelledby="services-title"
    >
      <div className="group relative min-h-[410px] overflow-hidden bg-[#34251d] max-[700px]:min-h-0 max-[700px]:h-[62vw] max-[700px]:max-h-[370px]">
        <Image
          className="object-cover object-center transition-transform duration-[800ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          alt="Artisan hand-hammering a copper sheet at the workbench"
          fill
          sizes="(max-width: 700px) 100vw, 47vw"
          src="/cu/copper-workshop.png"
        />
      </div>
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(150px,.55fr)] items-center gap-[clamp(22px,3vw,50px)] px-[clamp(30px,4vw,66px)] py-[42px] max-[1120px]:min-[701px]:grid-cols-1 max-[1120px]:min-[701px]:gap-6 max-[1120px]:min-[701px]:py-0 max-[700px]:grid-cols-1 max-[700px]:gap-[26px] max-[700px]:px-[7%] max-[700px]:pb-[42px] max-[700px]:pt-[38px]" id="story">
        <div className="min-w-0">
          <p className="m-0 text-[9px] font-bold uppercase tracking-[.19em] text-[#d5a27c]">Wholesale & custom</p>
          <h2 className="mb-4 mt-[13px] font-[Georgia,Times_New_Roman,serif] text-[clamp(31px,3vw,44px)] font-normal leading-[1.03] tracking-[-.035em] max-[700px]:text-[clamp(34px,8vw,44px)]" id="services-title">
            Custom creations
            <br />
            for inspired spaces
          </h2>
          <p className="m-0 max-w-[470px] text-[13px] leading-[1.7] text-[rgba(247,244,237,.7)]">
            We collaborate with interior designers, architects and hospitality
            brands on custom pieces and wholesale orders, bringing your vision
            to life through authentic Moroccan craftsmanship.
          </p>
          <Link className="group mt-[18px] inline-flex min-h-12 items-center justify-between gap-6 bg-[#b76d35] px-[19px] text-[10px] font-bold uppercase tracking-[.1em] text-[#fff8f0] transition-colors duration-200 hover:bg-[#985c35] active:scale-[.99] focus-visible:outline-[#d5a27c] focus-visible:outline-offset-4" href="#contact">
            <span>Enquire about wholesale</span>
            <ArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-[3px]" size={17} />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-0 border-l border-[rgba(213,162,124,.3)] pl-[clamp(18px,2vw,30px)] max-[1120px]:min-[701px]:grid-cols-[.65fr_1.35fr] max-[1120px]:min-[701px]:items-center max-[1120px]:min-[701px]:gap-[14px] max-[1120px]:min-[701px]:border-l-0 max-[1120px]:min-[701px]:border-t max-[1120px]:min-[701px]:py-5 max-[700px]:grid-cols-1 max-[700px]:border-l-0 max-[700px]:border-t max-[700px]:px-0 max-[700px]:pt-[22px]" aria-label="Our craft process">
          <p className="mb-5 mt-0 font-[Georgia,Times_New_Roman,serif] text-[clamp(18px,1.7vw,24px)] leading-[1.15] text-[#f5e9dc] max-[1120px]:min-[701px]:mb-0">From first idea<br />to final patina</p>
          <ol className="m-0 grid list-none gap-[15px] p-0 max-[1120px]:min-[701px]:grid-cols-3 max-[1120px]:min-[701px]:gap-[10px] max-[700px]:grid-cols-3">
            {craftSteps.map(({ number, title, detail }) => (
              <li className="grid grid-cols-[25px_1fr] items-start gap-[7px] max-[1120px]:min-[701px]:grid-cols-1 max-[1120px]:min-[701px]:gap-[5px] max-[700px]:grid-cols-1" key={number}>
                <span className="pt-px text-[9px] tracking-[.05em] text-[#d5a27c]">{number}</span>
                <div className="grid gap-[3px]"><strong className="text-[11px] font-semibold uppercase tracking-[.06em] text-[#eee2d5] max-[700px]:text-[9px]">{title}</strong><small className="text-[9px] leading-[1.4] text-[rgba(247,244,237,.58)]">{detail}</small></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
