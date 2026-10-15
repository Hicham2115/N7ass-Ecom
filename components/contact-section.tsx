const services = ["Custom piece", "Wholesale", "Hospitality project", "Other"];

export function ContactSection() {
  return (
    <section
      className="bg-[#fcfaf6] px-[max(5vw,calc((100vw-1440px)/2))] pb-24 pt-[clamp(48px,7vw,96px)] max-[980px]:px-[4%] max-[700px]:px-[5%] max-[700px]:pb-16"
      id="contact"
      aria-labelledby="contact-title"
    >
      <h2
        className="mb-[clamp(44px,7vw,88px)] mt-0 font-sans text-[clamp(68px,10vw,136px)] font-semibold leading-[.82] tracking-[-.085em] text-[#211f1b] max-[700px]:mb-12 max-[700px]:text-[clamp(56px,15vw,94px)]"
        id="contact-title"
      >
        Contact us
      </h2>

      <div className="grid grid-cols-[minmax(170px,.62fr)_minmax(0,1fr)] gap-[clamp(60px,13vw,190px)] max-[700px]:grid-cols-1 max-[700px]:gap-10">
        <aside className="flex flex-col gap-8 pt-1 text-[11px] leading-[1.6] text-[#625b51]">
          <div>
            <p className="mb-1 mt-0 font-semibold text-[#28231f]">Cuveroo Atelier</p>
            <p className="m-0">Handcrafted in Morocco</p>
          </div>
          <div>
            <p className="mb-1 mt-0 font-semibold text-[#28231f]">Enquiries</p>
            <p className="m-0">Custom pieces<br />Wholesale<br />Hospitality projects</p>
          </div>
        </aside>

        <form className="grid grid-cols-2 gap-x-5 gap-y-7 max-[400px]:grid-cols-1">
          <fieldset className="col-span-full m-0 grid grid-cols-2 gap-5 border-0 p-0 max-[400px]:col-span-1 max-[400px]:grid-cols-1">
            <legend className="mb-3 p-0 text-[10px] font-semibold text-[#28231f]">Name <span className="text-[#9a6b4c]">(required)</span></legend>
            <label className="grid gap-2 text-[10px] text-[#736e65]">
              <span>First name</span>
              <input className="h-8 border-0 border-b border-[#b9b0a5] bg-transparent px-0 text-[13px] text-[#211f1b] outline-none transition-colors placeholder:text-[#aaa197] focus:border-b-2 focus:border-[#a9653e]" autoComplete="given-name" name="firstName" required />
            </label>
            <label className="grid gap-2 text-[10px] text-[#736e65]">
              <span>Last name</span>
              <input className="h-8 border-0 border-b border-[#b9b0a5] bg-transparent px-0 text-[13px] text-[#211f1b] outline-none transition-colors placeholder:text-[#aaa197] focus:border-b-2 focus:border-[#a9653e]" autoComplete="family-name" name="lastName" required />
            </label>
          </fieldset>

          <label className="col-span-full grid gap-2 text-[10px] font-semibold text-[#28231f] max-[400px]:col-span-1">
            <span>Service</span>
            <select className="h-9 w-full appearance-none border-0 border-b border-[#b9b0a5] bg-transparent px-0 text-[12px] font-normal text-[#625b51] outline-none transition-colors focus:border-b-2 focus:border-[#a9653e]" defaultValue="" name="service" required>
              <option disabled value="">Choose a service</option>
              {services.map((service) => <option key={service} value={service}>{service}</option>)}
            </select>
          </label>

          <label className="col-span-full grid gap-2 text-[10px] font-semibold text-[#28231f] max-[400px]:col-span-1">
            <span>Email <span className="font-normal text-[#9a6b4c]">(required)</span></span>
            <input className="h-9 border-0 border-b border-[#b9b0a5] bg-transparent px-0 text-[13px] font-normal text-[#211f1b] outline-none transition-colors placeholder:text-[#aaa197] focus:border-b-2 focus:border-[#a9653e]" autoComplete="email" name="email" required type="email" />
          </label>

          <label className="col-span-full flex items-center gap-2 text-[10px] text-[#736e65] max-[400px]:col-span-1">
            <input className="h-3.5 w-3.5 accent-[#a9653e]" name="updates" type="checkbox" />
            <span>Send me occasional news from Cuveroo</span>
          </label>

          <label className="col-span-full grid gap-2 text-[10px] font-semibold text-[#28231f] max-[400px]:col-span-1">
            <span>Project description</span>
            <textarea className="min-h-[76px] w-full resize-y border-0 border-b border-[#b9b0a5] bg-transparent px-0 py-1 text-[13px] font-normal leading-relaxed text-[#211f1b] outline-none transition-colors placeholder:text-[#aaa197] focus:border-b-2 focus:border-[#a9653e]" name="project" rows={3} />
          </label>

          <div className="col-span-full flex flex-wrap items-center gap-4 max-[400px]:col-span-1">
            <button className="inline-flex min-h-[38px] items-center justify-center rounded-full bg-[#211f1b] px-7 text-[11px] font-semibold text-white transition-colors hover:bg-[#4b3225] disabled:cursor-not-allowed disabled:opacity-100" disabled type="button">
              Submit
            </button>
            <p className="m-0 text-[10px] text-[#82786d]">Online submissions are coming soon.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
