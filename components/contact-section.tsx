import { ArrowRight } from "lucide-react";

export function ContactSection() {
  return (
    <section
      aria-labelledby="contact-title"
      className="border-y border-[#e7ded3] bg-[#fcfaf6] px-[clamp(24px,7.2vw,150px)] pb-[clamp(72px,8vw,120px)] pt-[clamp(58px,7vw,96px)] max-[700px]:px-[6%] max-[700px]:pb-16 max-[700px]:pt-12"
      id="contact"
    >
      <div className="mx-auto">
        <p className="m-0 text-[clamp(12px,0.85vw,14px)] font-semibold uppercase tracking-[.19em] text-[#795237]">
          <span className="mr-2 text-[#b87343]">/</span>Contact
        </p>
        <h2
          className="mb-0 mt-7 max-w-[1120px] font-sans text-[clamp(40px,5vw,68px)] font-semibold leading-[1.05] tracking-[-.05em] text-[#171614] max-[700px]:mt-5 max-[700px]:text-[clamp(38px,9vw,52px)]"
          id="contact-title"
        >
          A question? Write to <span className="text-[#a9653e]">us.</span>
        </h2>

        <form className="mt-[clamp(48px,7vw,106px)] grid gap-[clamp(34px,4.2vw,60px)]">
          <label className="flex flex-wrap items-baseline gap-x-5 gap-y-2 font-sans text-[clamp(18px,1.45vw,24px)] leading-tight text-[#211f1b]">
            <span>Hello, my name is</span>
            <input
              aria-label="Your name"
              autoComplete="name"
              className="h-[1.4em] min-w-[220px] flex-1 border-0 border-b-2 border-[#d3c9bd] bg-transparent px-1 text-[clamp(17px,1.35vw,22px)] font-normal text-[#211f1b] outline-none transition-colors duration-200 placeholder:text-[#aaa197] hover:border-[#b87343] max-[700px]:min-w-[160px]"
              name="name"
              placeholder="Your name"
              required
            />
          </label>

          <label className="flex flex-wrap items-baseline gap-x-5 gap-y-2 font-sans text-[clamp(18px,1.45vw,24px)] leading-tight text-[#211f1b]">
            <span>You can reach us at</span>
            <input
              aria-label="Your email address"
              autoComplete="email"
              className="h-[1.4em] min-w-[220px] flex-1 border-0 border-b-2 border-[#d3c9bd] bg-transparent px-1 text-[clamp(17px,1.35vw,22px)] font-normal text-[#211f1b] outline-none transition-colors duration-200 placeholder:text-[#aaa197] hover:border-[#b87343] max-[700px]:min-w-[160px]"
              name="email"
              placeholder="you@example.com"
              required
              type="email"
            />
            <span aria-hidden="true" className="text-[#a9653e]">!</span>
          </label>

          <label className="grid gap-5 font-sans">
            <span className="text-[clamp(12px,0.85vw,14px)] font-semibold uppercase tracking-[.17em] text-[#795237]">
              Your message
            </span>
            <textarea
              aria-label="Your message"
              className="min-h-[clamp(130px,13vw,190px)] w-full resize-y border-0 border-b-2 border-[#d3c9bd] bg-transparent px-0 py-1 font-sans text-[clamp(16px,1.1vw,18px)] leading-[1.6] text-[#211f1b] outline-none placeholder:text-[#aaa197]"
              name="message"
              placeholder="How can we help?"
              required
              rows={4}
            />
          </label>

          <div className="flex flex-wrap items-center gap-5 border-t border-[#ded8d0] pt-[clamp(36px,4vw,58px)]">
            <button
              className="inline-flex min-h-[64px] min-w-[220px] items-center justify-center gap-5 rounded-full bg-[#171614] px-8 font-sans text-[clamp(13px,0.9vw,15px)] font-medium uppercase tracking-[.08em] text-white shadow-[0_10px_30px_rgba(33,31,27,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#795237] disabled:cursor-not-allowed"
              disabled
              type="button"
            >
              Send enquiry <ArrowRight aria-hidden="true" size={18} />
            </button>
            <p className="m-0 text-[clamp(13px,0.9vw,15px)] text-[#82786d]">
              Online submissions are coming soon.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
