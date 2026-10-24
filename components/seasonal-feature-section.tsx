import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SeasonalFeatureSection() {
  return (
    <section
      className="relative isolate flex min-h-[450px] items-center overflow-hidden bg-[#eadbca] max-[700px]:min-h-[680px] max-[700px]:items-end"
      aria-labelledby="seasonal-title"
    >
      <Image
        alt="Cuisine sur mesure avec un mur clair à gauche et des finitions bois et pierre"
        className="object-cover object-center max-[700px]:hidden"
        fill
        sizes="100vw"
        src="/tcap-kitchen-wall.png"
      />
      <Image
        alt=""
        aria-hidden="true"
        className="object-cover min-[701px]:hidden"
        fill
        sizes="100vw"
        src="/tcap-kitchen.png"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 min-[701px]:hidden max-[700px]:bg-[linear-gradient(to_top,rgba(247,244,237,.96)_0%,rgba(247,244,237,.88)_38%,rgba(247,244,237,.55)_62%,rgba(247,244,237,.12)_82%,transparent_100%)]"
      />
      <div className="relative z-10 w-[56%] max-w-[760px] py-14 pl-[max(5.5vw,calc((100vw-1500px)/2))] pr-8 max-[980px]:w-[58%] max-[980px]:pl-[6%] max-[700px]:w-full max-[700px]:max-w-none max-[700px]:px-[7%] max-[700px]:pb-10 max-[700px]:pt-20">
        <p className="m-0 text-[clamp(13px,0.9vw,15px)] font-bold uppercase tracking-[0.17em] text-[#a76f49] max-[700px]:hidden">
          Un projet, une maison
        </p>
        <h2
          className="mb-5 mt-4 font-[Georgia,Times_New_Roman,serif] text-[clamp(42px,4.1vw,60px)] font-normal leading-[1.06] tracking-[-0.045em] text-[#211f1b] max-[700px]:text-[46px]"
          id="seasonal-title"
        >
          Du premier choix
          <br />
          au dernier détail
        </h2>
        <p className="mb-6 max-w-[560px] text-[clamp(15px,1.05vw,17px)] leading-[1.65] text-[#514a42] max-[700px]:text-[17px] max-[700px]:leading-[1.7] max-[700px]:text-[#39342e]">
          Choisissez les matériaux, les dimensions et les finitions. Nous vous
          accompagnons pour créer une cuisine qui correspond à votre espace et
          à votre budget.
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            className="inline-flex min-h-[52px] items-center justify-center gap-4 bg-[#b87343] px-7 text-[clamp(12px,0.85vw,14px)] font-bold uppercase tracking-[0.08em] !text-white transition-colors hover:bg-[#985c35]"
            href="#contact"
          >
            Demander un devis <ArrowRight aria-hidden="true" size={16} />
          </Link>
          <Link className="group inline-flex min-h-[52px] items-center justify-center gap-3 border border-[#a9653e] bg-[#f7f4ed]/75 px-5 text-[12px] font-bold uppercase tracking-[.08em] text-[#795237] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#a9653e] hover:text-white hover:shadow-[0_8px_20px_rgba(121,82,55,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9c613b]" href="/products">
            Tous les services <ArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
