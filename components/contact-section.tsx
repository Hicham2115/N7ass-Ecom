import { ArrowRight, Mail, MessageSquare } from "lucide-react";

export function ContactSection() {
  return (
    <section className="grid grid-cols-[.8fr_1.2fr] gap-[8%] px-[max(5vw,calc((100vw-1440px)/2))] py-[85px] max-[980px]:px-[4%] max-[700px]:grid-cols-1 max-[700px]:gap-[27px] max-[700px]:px-[5%] max-[700px]:py-[60px]" id="contact" aria-labelledby="contact-title">
      <div>
        <p className="m-0 text-[9px] font-bold uppercase tracking-[.19em] text-[#b87343]">Let’s talk copper</p>
        <h2 className="mb-[14px] mt-[14px] font-[Georgia,Times_New_Roman,serif] text-[clamp(40px,4.4vw,58px)] font-normal leading-[1.02] tracking-[-.045em] max-[700px]:text-[45px]" id="contact-title">Tell us what<br /><em className="text-[#b87343] not-italic">you have in mind.</em></h2>
        <p className="m-0 max-w-[390px] text-[13px] leading-[1.8] text-[#736e65]">Whether you’re choosing a piece for home or exploring custom and wholesale work, start a conversation with Cuveroo.</p>
        <div className="mt-[25px] flex items-center gap-2.5 text-[10px] text-[#4b3225]"><Mail aria-hidden="true" className="text-[#b87343]" size={17} /><span>Product, custom, and wholesale enquiries</span></div>
      </div>
      <div className="border border-[#ddd4c7] bg-[#fffdfa] p-[27px] max-[700px]:p-[19px]">
        <form className="grid grid-cols-2 gap-x-[14px] gap-y-[17px] max-[400px]:grid-cols-1">
          <label className="grid gap-[7px] text-[9px] font-bold uppercase tracking-[.11em] text-[#625b51] max-[400px]:col-span-1">
            <span>Your name</span>
            <input className="min-h-[43px] w-full border border-[#e3d9cb] bg-[#fcfaf6] p-3 text-[11px] font-normal normal-case tracking-normal text-[#211f1b] placeholder:text-[#a29a8e]" autoComplete="name" name="name" placeholder="Name" />
          </label>
          <label className="grid gap-[7px] text-[9px] font-bold uppercase tracking-[.11em] text-[#625b51] max-[400px]:col-span-1">
            <span>Your email</span>
            <input className="min-h-[43px] w-full border border-[#e3d9cb] bg-[#fcfaf6] p-3 text-[11px] font-normal normal-case tracking-normal text-[#211f1b] placeholder:text-[#a29a8e]" autoComplete="email" name="email" placeholder="you@example.com" type="email" />
          </label>
          <label className="col-span-full grid gap-[7px] text-[9px] font-bold uppercase tracking-[.11em] text-[#625b51] max-[400px]:col-span-1">
            <span>Your message</span>
            <textarea className="min-h-[100px] w-full resize-y border border-[#e3d9cb] bg-[#fcfaf6] p-3 text-[11px] font-normal normal-case tracking-normal text-[#211f1b] placeholder:text-[#a29a8e]" name="message" placeholder="Tell us a little about your project" rows={4} />
          </label>
          <p className="col-span-full -mt-[3px] mb-0 flex items-center gap-[7px] text-[9px] text-[#82786d] max-[400px]:col-span-1"><MessageSquare aria-hidden="true" size={14} /> Form delivery needs a Cuveroo inbox or submission endpoint.</p>
          <button className="group col-span-full inline-flex min-h-[46px] items-center justify-self-start gap-[14px] border border-[#b87343] bg-[#b87343] px-5 text-[10px] font-bold uppercase tracking-[.07em] text-white transition-colors hover:bg-[#985c35] disabled:cursor-not-allowed disabled:opacity-55 max-[400px]:col-span-1" type="button" disabled>
            Send enquiry <ArrowRight aria-hidden="true" size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
