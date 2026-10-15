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
        alt="Sunlit dining room with a copper pendant and tableware"
        className="object-cover object-center max-[700px]:object-[68%_center]"
        fill
        sizes="100vw"
        src="/cu/seasonal-edit-room.png"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f1e7dc]/55 via-[#f1e7dc]/15 to-transparent max-[700px]:bg-gradient-to-t max-[700px]:from-[#f1e7dc]/95 max-[700px]:via-[#f1e7dc]/75 max-[700px]:to-transparent"
      />
      <div className="relative z-10 w-[43%] max-w-[500px] py-14 pl-[6.5%] pr-0 max-[980px]:w-[48%] max-[700px]:w-full max-[700px]:max-w-none max-[700px]:px-[7%] max-[700px]:pb-10 max-[700px]:pt-20">
        <p className="m-0 text-[11px] font-bold uppercase tracking-[0.17em] text-[#a76f49]">
          The seasonal edit
        </p>
        <h2
          className="mb-5 mt-4 font-[Georgia,Times_New_Roman,serif] text-[clamp(42px,4.1vw,60px)] font-normal leading-[1.06] tracking-[-0.045em] text-[#211f1b] max-[700px]:text-[46px]"
          id="seasonal-title"
        >
          Warm Spaces
          <br />
          Last Longer
        </h2>
        <p className="mb-6 max-w-[390px] text-[13px] leading-[1.65] text-[#514a42]">
          Hand-hammered textures. Organic forms. Enduring design. Our curated edit
          brings together timeless pieces that add warmth, character and soul to
          your space.
        </p>
        <Link
          className="inline-flex min-h-[52px] items-center justify-center gap-4 bg-[#b87343] px-7 text-[10px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#985c35]"
          href="#featured"
        >
          Explore the edit <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  );
}
