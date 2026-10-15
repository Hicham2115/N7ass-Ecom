const services = ["Custom piece", "Wholesale", "Hospitality project", "Other"];

export function ContactSection() {
  return (
    <section
      className="bg-[#fcfaf6] px-[max(5vw,calc((100vw-1440px)/2))] pb-16 pt-[clamp(44px,5vw,68px)] max-[980px]:px-[4%] max-[700px]:px-[5%] max-[700px]:pb-12"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="grid grid-cols-[minmax(220px,.7fr)_minmax(0,1.3fr)] gap-[clamp(32px,5vw,72px)] max-[700px]:grid-cols-1 max-[700px]:gap-8">
        <aside className="flex flex-col gap-7 pt-1 text-[16px] leading-[1.65] text-[#655f58]">
          <div className="mb-1">
            <p className="m-0 text-[11px] font-bold uppercase tracking-[.16em] text-[#b87343]">
              Let’s talk about your project
            </p>
            <h2
              className="mb-0 mt-3 font-[Georgia,Times_New_Roman,serif] text-[clamp(52px,6vw,78px)] font-normal leading-[.98] tracking-[-.045em] text-[#211f1b] max-[700px]:text-[clamp(44px,10vw,60px)]"
              id="contact-title"
            >
              Contact <em className="text-[#b87343]">us</em>
            </h2>
          </div>
          <div>
            <p className="mb-2 mt-0 font-[Georgia,Times_New_Roman,serif] text-[22px] text-[#28231f]">
              Cuveroo, Morocco
            </p>
            <p className="m-0">Handcrafted in Morocco</p>
          </div>
          <div>
            <p className="mb-2 mt-0 text-[12px] font-bold uppercase tracking-[.12em] text-[#a4613a]">
              We can help with
            </p>
            <p className="m-0">
              Custom pieces
              <br />
              Wholesale orders
              <br />
              Hospitality projects
            </p>
          </div>
          <p className="m-0 max-w-[330px] border-t border-[#d8cbbd] pt-5 text-[15px] leading-[1.75] text-[#736e65]">
            Tell us a little about what you have in mind and we’ll help you find
            the right next step.
          </p>
        </aside>

        <div className="border-t border-[#d8cbbd] pt-4">
          <h3 className="mb-5 mt-0 font-[Georgia,Times_New_Roman,serif] text-[26px] font-normal leading-tight text-[#28231f] max-[700px]:text-[23px]">
            Tell us what you’re planning
          </h3>
          <form className="grid grid-cols-2 gap-x-6 gap-y-5 max-[400px]:grid-cols-1">
            <fieldset className="col-span-full m-0 grid grid-cols-2 gap-x-5 gap-y-2 border-0 p-0 max-[400px]:col-span-1 max-[400px]:grid-cols-1">
              <legend className="col-span-full mb-1 p-0 text-[12px] font-bold text-[#28231f]">
                Name{" "}
                <span className="font-normal text-[#9a6b4c]">(required)</span>
              </legend>
              <label className="grid gap-1 text-[12px] text-[#625b51]">
                <span>First name</span>
                <input
                  className="h-9 border-0 border-b border-[#b9b0a5] bg-transparent px-0 text-[15px] text-[#211f1b] outline-none transition-colors placeholder:text-[#aaa197] focus:border-b-2 focus:border-[#a9653e]"
                  autoComplete="given-name"
                  name="firstName"
                  required
                />
              </label>
              <label className="grid gap-1 text-[12px] text-[#625b51]">
                <span>Last name</span>
                <input
                  className="h-9 border-0 border-b border-[#b9b0a5] bg-transparent px-0 text-[15px] text-[#211f1b] outline-none transition-colors placeholder:text-[#aaa197] focus:border-b-2 focus:border-[#a9653e]"
                  autoComplete="family-name"
                  name="lastName"
                  required
                />
              </label>
            </fieldset>

            <label className="col-span-full grid gap-1 text-[12px] font-semibold text-[#28231f] max-[400px]:col-span-1">
              <span>Service</span>
              <select
                className="h-9 w-full appearance-none border-0 border-b border-[#b9b0a5] bg-transparent px-0 text-[15px] font-normal text-[#625b51] outline-none transition-colors focus:border-b-2 focus:border-[#a9653e]"
                defaultValue=""
                name="service"
                required
              >
                <option disabled value="">
                  Choose a service
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label className="col-span-full grid gap-1 text-[12px] font-semibold text-[#28231f] max-[400px]:col-span-1">
              <span>
                Email{" "}
                <span className="font-normal text-[#9a6b4c]">(required)</span>
              </span>
              <input
                className="h-9 border-0 border-b border-[#b9b0a5] bg-transparent px-0 text-[15px] font-normal text-[#211f1b] outline-none transition-colors placeholder:text-[#aaa197] focus:border-b-2 focus:border-[#a9653e]"
                autoComplete="email"
                name="email"
                required
                type="email"
              />
            </label>

            <label className="col-span-full flex items-center gap-2.5 text-[13px] text-[#736e65] max-[400px]:col-span-1">
              <input
                className="h-4 w-4 accent-[#a9653e]"
                name="updates"
                type="checkbox"
              />
              <span>Send me occasional news from Cuveroo</span>
            </label>

            <label className="col-span-full grid gap-1 text-[12px] font-semibold text-[#28231f] max-[400px]:col-span-1">
              <span>Project description</span>
              <textarea
                className="min-h-[84px] w-full resize-y border-0 border-b border-[#b9b0a5] bg-transparent px-0 py-1 text-[15px] font-normal leading-relaxed text-[#211f1b] outline-none transition-colors placeholder:text-[#aaa197] focus:border-b-2 focus:border-[#a9653e]"
                name="project"
                rows={3}
              />
            </label>

            <div className="col-span-full flex flex-wrap items-center gap-5 max-[400px]:col-span-1">
              <button
                className="inline-flex min-h-[48px] items-center justify-center border border-[#b87343] bg-[#b87343] px-6 text-[12px] font-bold uppercase tracking-[.07em] text-white transition-colors hover:bg-[#985c35] disabled:cursor-not-allowed disabled:opacity-65"
                disabled
                type="button"
              >
                Submit enquiry
              </button>
              <p className="m-0 text-[12px] text-[#82786d]">
                Online submissions are coming soon.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
