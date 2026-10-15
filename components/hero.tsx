import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[clamp(560px,calc(100svh-135px),790px)] items-stretch overflow-hidden bg-[#e9ddcf] max-[700px]:min-h-[690px] max-[700px]:items-end"
      id="home"
    >
      <Image
        alt="Hand-hammered copper pendant in a sunlit room with an olive branch and stone console"
        className="animate-[cuveroo-image-arrive_1400ms_cubic-bezier(.2,.7,.2,1)_both] object-cover object-left motion-reduce:animate-none max-[700px]:[object-position:68%_35%]"
        fill
        priority
        sizes="100vw"
        src="/cu/hero-copper-wide.png"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#f3ebdf]/20 via-[#f3ebdf]/5 to-transparent max-[700px]:bg-gradient-to-t max-[700px]:from-[#f3ebdf]/95 max-[700px]:via-[#f3ebdf]/70 max-[700px]:to-transparent"
      />
      <div className="relative z-10 flex w-[57%] flex-col items-start justify-center py-[66px] pl-[max(11.5vw,calc((100vw-1500px)/2))] pr-0 max-[980px]:w-[62%] max-[980px]:pl-[8%] max-[700px]:w-full max-[700px]:px-[7%] max-[700px]:py-12">
        <div className="relative isolate w-full">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-30px] z-0 rounded-[45%] bg-[radial-gradient(ellipse_at_40%_50%,rgba(250,246,239,.92)_0%,rgba(250,246,239,.78)_54%,rgba(250,246,239,0)_100%)] blur-3xl"
          />
          <div className="relative z-10">
            <p className="mb-0 animate-[cuveroo-fade-up_850ms_cubic-bezier(.22,1,.36,1)_120ms_both] text-[9px] font-bold uppercase leading-[1.7] tracking-[.19em] text-[#b87343] motion-reduce:animate-none max-[700px]:max-w-[250px]">
              Handcrafted for meaningful spaces
            </p>
            <h1
              className="mb-[18px] mt-[23px] max-w-[690px] animate-[cuveroo-fade-up_1000ms_cubic-bezier(.22,1,.36,1)_260ms_both] font-[Georgia,Times_New_Roman,serif] text-[clamp(48px,4.15vw,78px)] font-normal leading-[.99] tracking-[-.045em] text-[#211f1b] motion-reduce:animate-none max-[700px]:mb-3 max-[700px]:mt-[13px] max-[700px]:text-[clamp(42px,10.3vw,58px)]"
              id="hero-title"
            >
              Timeless Copper
              <br />
              for Modern Living
            </h1>
            <p className="mb-7 max-w-[440px] animate-[cuveroo-fade-up_900ms_cubic-bezier(.22,1,.36,1)_470ms_both] text-[13px] leading-[1.72] text-[#4c4842] motion-reduce:animate-none max-[700px]:mb-[19px] max-[700px]:max-w-[350px] max-[700px]:text-xs">
              Artisanal lighting and home decor, meticulously handcrafted in
              Morocco. Created for homes and hospitality spaces that value
              authenticity, craftsmanship and lasting beauty.
            </p>
            <Link
              className="inline-flex min-h-12 animate-[cuveroo-fade-up_850ms_cubic-bezier(.22,1,.36,1)_650ms_both] items-center justify-center gap-5 border border-[#b87343] bg-[#b87343] px-9 text-[10px] font-bold uppercase tracking-[.07em] text-white transition-colors hover:bg-[#985c35] motion-reduce:animate-none max-[700px]:px-6"
              href="#categories"
            >
              Shop the collection <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
