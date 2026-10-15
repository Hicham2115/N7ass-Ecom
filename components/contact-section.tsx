"use client";

import { useForm } from "@tanstack/react-form";
import { ArrowRight } from "lucide-react";
import { z } from "zod";

const nameSchema = z.string().trim().min(2, "Veuillez saisir votre nom.");
const emailSchema = z
  .string()
  .trim()
  .email("Veuillez saisir une adresse e-mail valide.");
const messageSchema = z
  .string()
  .trim()
  .min(10, "Pouvez-vous nous en dire un peu plus sur votre projet ?");

const contactSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  message: messageSchema,
});

export function ContactSection() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    validators: {
      onSubmit: contactSchema,
    },
  });

  return (
    <section
      aria-labelledby="contact-title"
      className="border-y border-[#e7ded3] bg-[#fcfaf6] px-[clamp(24px,7.2vw,150px)] pb-[clamp(64px,6.5vw,96px)] pt-[clamp(52px,5.5vw,80px)] max-[700px]:px-[6%] max-[700px]:pb-16 max-[700px]:pt-12"
      id="contact"
    >
      <div className="mx-auto">
        <p className="m-0 text-[clamp(12px,0.85vw,14px)] font-semibold uppercase tracking-[.19em] text-[#795237]">
          <span className="mr-2 text-[#b87343]">/</span>Contact
        </p>
        <h2
          className="mb-0 mt-6 max-w-[980px] font-sans text-[clamp(38px,4.5vw,60px)] font-semibold leading-[1.05] tracking-[-.05em] text-[#171614] max-[700px]:mt-5 max-[700px]:text-[clamp(38px,9vw,52px)]"
          id="contact-title"
        >
          Une question ? Écrivez-<span className="text-[#a9653e]">nous.</span>
        </h2>

        <form
          className="mt-[clamp(42px,5.5vw,78px)] grid gap-[clamp(30px,3.2vw,46px)] max-[700px]:mt-10 max-[700px]:gap-8"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            void form.handleSubmit();
          }}
        >
          <form.Field name="name" validators={{ onBlur: nameSchema }}>
            {(field) => (
              <label className="flex flex-wrap items-baseline gap-x-5 gap-y-2 font-sans text-[clamp(17px,1.25vw,21px)] leading-tight text-[#211f1b]">
                <span>Bonjour, je m’appelle</span>
                <input
                  aria-invalid={field.state.meta.errors.length > 0}
                  autoComplete="name"
                  className="h-[1.4em] min-w-[220px] flex-1 border-0 border-b-2 border-[#d3c9bd] bg-transparent px-1 text-[clamp(16px,1.2vw,20px)] font-normal text-[#211f1b] outline-none transition-colors duration-200 placeholder:text-[#aaa197] hover:border-[#b87343] max-[700px]:min-w-[160px]"
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="Votre nom"
                  value={field.state.value}
                />
                {field.state.meta.isTouched && field.state.meta.errors[0] && (
                  <span className="basis-full text-[13px] leading-5 text-[#9b382e]">
                    {field.state.meta.errors[0].message}
                  </span>
                )}
              </label>
            )}
          </form.Field>

          <form.Field name="email" validators={{ onBlur: emailSchema }}>
            {(field) => (
              <label className="flex flex-wrap items-baseline gap-x-5 gap-y-2 font-sans text-[clamp(17px,1.25vw,21px)] leading-tight text-[#211f1b]">
                <span>Vous pouvez me joindre à</span>
                <input
                  aria-invalid={field.state.meta.errors.length > 0}
                  autoComplete="email"
                  className="h-[1.4em] min-w-[220px] flex-1 border-0 border-b-2 border-[#d3c9bd] bg-transparent px-1 text-[clamp(16px,1.2vw,20px)] font-normal text-[#211f1b] outline-none transition-colors duration-200 placeholder:text-[#aaa197] hover:border-[#b87343] max-[700px]:min-w-[160px]"
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="vous@exemple.com"
                  type="email"
                  value={field.state.value}
                />
                <span aria-hidden="true" className="text-[#a9653e]">
                  !
                </span>
                {field.state.meta.isTouched && field.state.meta.errors[0] && (
                  <span className="basis-full text-[13px] leading-5 text-[#9b382e]">
                    {field.state.meta.errors[0].message}
                  </span>
                )}
              </label>
            )}
          </form.Field>

          <form.Field name="message" validators={{ onBlur: messageSchema }}>
            {(field) => (
              <label className="grid gap-5 font-sans">
                <span className="text-[clamp(12px,0.85vw,14px)] font-semibold uppercase tracking-[.17em] text-[#795237]">
                  Votre message
                </span>
                <textarea
                  aria-invalid={field.state.meta.errors.length > 0}
                  className="min-h-[clamp(76px,6vw,104px)] w-full resize-y border-0 border-b-2 border-[#d3c9bd] bg-transparent px-0 py-1 font-sans text-[clamp(16px,1.1vw,18px)] leading-[1.6] text-[#211f1b] outline-none placeholder:text-[#aaa197] max-[700px]:min-h-[88px]"
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={(event) => field.handleChange(event.target.value)}
                  placeholder="Comment pouvons-nous vous aider ?"
                  value={field.state.value}
                />
                {field.state.meta.isTouched && field.state.meta.errors[0] && (
                  <span className="text-[13px] leading-5 text-[#9b382e]">
                    {field.state.meta.errors[0].message}
                  </span>
                )}
              </label>
            )}
          </form.Field>

          <div className="flex flex-wrap items-center gap-5 border-t border-[#ded8d0] pt-[clamp(30px,3.2vw,44px)]">
            <button
              className="inline-flex min-h-[46px] min-w-[164px] items-center justify-center gap-4 bg-[#171614] px-6 font-sans text-[clamp(12px,0.82vw,13px)] font-medium uppercase tracking-[.07em] text-white shadow-[0_8px_22px_rgba(33,31,27,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#795237] disabled:cursor-not-allowed"
              disabled
              type="submit"
            >
              Envoyer ma demande <ArrowRight aria-hidden="true" size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
