import { ArrowRight, Mail } from "lucide-react";

const enquiryTypes = ["Custom pieces", "Hospitality", "Wholesale"];

export function ContactSection() {
  return (
    <section
      className="grid grid-cols-[.85fr_1.15fr] items-center gap-[clamp(48px,8vw,120px)] bg-[#f3eee6] px-[max(5vw,calc((100vw-1440px)/2))] py-24 max-[980px]:gap-10 max-[980px]:px-[4%] max-[700px]:grid-cols-1 max-[700px]:gap-8 max-[700px]:px-[5%] max-[700px]:py-[60px]"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="flex h-full flex-col justify-between gap-12 max-[700px]:gap-8">
        <div className="max-w-[540px]">
          <p className="m-0 text-[10px] font-bold uppercase tracking-[.18em] text-[#a4613a]">
            A note to Cuveroo
          </p>
          <h2
            className="mb-5 mt-5 font-[Georgia,Times_New_Roman,serif] text-[clamp(43px,5vw,68px)] font-normal leading-[.99] tracking-[-.045em] text-[#211f1b] max-[700px]:text-[clamp(42px,10vw,56px)]"
            id="contact-title"
          >
            Let’s shape
            <br />
            <em className="text-[#a9653e]">something beautiful.</em>
          </h2>
          <p className="mb-0 mt-0 max-w-[440px] text-[15px] leading-[1.75] text-[#655f58]">
            A single piece or a whole space, tell us what you’re working on. We’ll help you find the right way to bring it to life.
          </p>
        </div>

        <div className="max-w-[510px] border-t border-[#d8cbbd] pt-5">
          <p className="mb-4 mt-0 text-[9px] font-bold uppercase tracking-[.16em] text-[#81766b]">
            Enquiries for
          </p>
          <ul className="mb-5 mt-0 flex flex-wrap gap-x-6 gap-y-2 p-0 text-[12px] text-[#4b4036]">
            {enquiryTypes.map((type) => (
              <li className="list-none" key={type}>{type}</li>
            ))}
          </ul>
          <div className="flex items-center gap-2.5 text-[11px] text-[#4b3225]">
            <Mail aria-hidden="true" className="text-[#a9653e]" size={16} />
            <span>Made in Morocco. Made around your idea.</span>
          </div>
        </div>
      </div>

      <div className="border border-[#e1d7ca] border-t-2 border-t-[#b87343] bg-[#fffdfa] p-[clamp(24px,3.2vw,46px)] max-[700px]:p-5">
        <div className="mb-7 flex items-center justify-between gap-4 border-b border-[#e7dfd5] pb-5">
          <div>
            <p className="mb-2 mt-0 text-[9px] font-bold uppercase tracking-[.16em] text-[#a4613a]">
              Your project
            </p>
            <h3 className="m-0 font-[Georgia,Times_New_Roman,serif] text-[27px] font-normal leading-tight text-[#28231f] max-[700px]:text-[24px]">
              Start a conversation
            </h3>
          </div>
          <span className="font-[Georgia,Times_New_Roman,serif] text-[20px] text-[#c5a78d]">01</span>
        </div>

        <form className="grid grid-cols-2 gap-x-4 gap-y-5 max-[400px]:grid-cols-1">
          <label className="grid gap-2 text-[9px] font-bold uppercase tracking-[.12em] text-[#625b51]">
            <span>Your name</span>
            <input
              className="min-h-[48px] w-full border border-[#e3d9cb] bg-[#fcfaf6] px-3.5 text-[12px] font-normal normal-case tracking-normal text-[#211f1b] transition-colors placeholder:text-[#a29a8e] hover:border-[#c5a78d] focus:border-[#b87343] focus:bg-white focus:outline-none"
              autoComplete="name"
              name="name"
              placeholder="Name"
            />
          </label>
          <label className="grid gap-2 text-[9px] font-bold uppercase tracking-[.12em] text-[#625b51]">
            <span>Your email</span>
            <input
              className="min-h-[48px] w-full border border-[#e3d9cb] bg-[#fcfaf6] px-3.5 text-[12px] font-normal normal-case tracking-normal text-[#211f1b] transition-colors placeholder:text-[#a29a8e] hover:border-[#c5a78d] focus:border-[#b87343] focus:bg-white focus:outline-none"
              autoComplete="email"
              name="email"
              placeholder="you@example.com"
              type="email"
            />
          </label>
          <label className="col-span-full grid gap-2 text-[9px] font-bold uppercase tracking-[.12em] text-[#625b51] max-[400px]:col-span-1">
            <span>A little about the project</span>
            <textarea
              className="min-h-[140px] w-full resize-y border border-[#e3d9cb] bg-[#fcfaf6] px-3.5 py-3 text-[12px] font-normal normal-case leading-[1.6] tracking-normal text-[#211f1b] transition-colors placeholder:text-[#a29a8e] hover:border-[#c5a78d] focus:border-[#b87343] focus:bg-white focus:outline-none"
              name="message"
              placeholder="A piece, a space, an idea…"
              rows={5}
            />
          </label>
          <div className="col-span-full flex flex-wrap items-center justify-between gap-4 border-t border-[#e7dfd5] pt-5 max-[400px]:col-span-1">
            <p className="m-0 max-w-[230px] text-[10px] leading-[1.5] text-[#82786d]">
              Online enquiries will be available soon.
            </p>
            <button
              className="inline-flex min-h-[48px] items-center justify-center gap-4 bg-[#b87343] px-5 text-[10px] font-bold uppercase tracking-[.08em] text-white opacity-65"
              type="button"
              disabled
            >
              Coming soon <ArrowRight aria-hidden="true" size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
