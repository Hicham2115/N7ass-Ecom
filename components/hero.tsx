import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[clamp(560px,calc(100svh-135px),790px)] items-stretch overflow-hidden bg-[#f7f4ed] max-[700px]:min-h-[690px] max-[700px]:items-end"
      id="home"
    >
      <div className="absolute inset-y-0 right-0 w-[64%] overflow-hidden bg-[#eee8dd] max-[700px]:inset-0 max-[700px]:w-full">
        <Image
          alt="Hand-hammered copper pendant lamp in a warm, light-filled interior"
          className="object-cover object-center [object-position:center_47%] max-[700px]:[object-position:55%_center]"
          fill
          priority
          sizes="(max-width: 700px) 100vw, 64vw"
          src="/cu/pendant-scalloped.jpeg"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,#faf8f3_0%,rgba(250,248,243,.97)_32%,rgba(250,248,243,.82)_43%,rgba(250,248,243,.22)_61%,transparent_74%)] max-[700px]:bg-[linear-gradient(0deg,#faf8f3_0%,rgba(250,248,243,.96)_37%,rgba(250,248,243,.55)_59%,rgba(250,248,243,.05)_100%)]"
      />
      <div className="relative z-10 flex w-[57%] flex-col items-start justify-center py-[66px] pl-[max(11.5vw,calc((100vw-1500px)/2))] pr-0 max-[980px]:w-[62%] max-[980px]:pl-[8%] max-[700px]:w-full max-[700px]:px-[7%] max-[700px]:py-12">
        <p className="mb-0 text-[9px] font-bold uppercase leading-[1.7] tracking-[.19em] text-[#b87343] max-[700px]:max-w-[250px]">
          Handcrafted for meaningful spaces
        </p>
        <h1
          className="mb-[18px] mt-[23px] max-w-[690px] font-[Georgia,Times_New_Roman,serif] text-[clamp(48px,4.15vw,78px)] font-normal leading-[.99] tracking-[-.045em] text-[#211f1b] max-[700px]:mb-3 max-[700px]:mt-[13px] max-[700px]:text-[clamp(42px,10.3vw,58px)]"
          id="hero-title"
        >
          Timeless Copper
          <br />
          for Modern Living
        </h1>
        <p className="mb-7 max-w-[370px] text-[15px] leading-[1.72] text-[#4c4842] max-[700px]:mb-[19px] max-[700px]:text-xs">
          Artisanal lighting and home decor, meticulously
          <br className="max-[700px]:hidden" /> handcrafted in Morocco. Created
          for homes
          <br className="max-[700px]:hidden" /> and hospitality spaces that
          value authenticity,
          <br className="max-[700px]:hidden" /> craftsmanship and lasting
          beauty.
        </p>
        <Link
          className="inline-flex min-h-12 items-center justify-center gap-5 border border-[#b87343] bg-[#b87343] px-9 text-xs font-bold uppercase tracking-[.07em] text-white transition-colors hover:bg-[#985c35] max-[700px]:px-6"
          href="#categories"
        >
          Shop the collection <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </section>
  );
}
