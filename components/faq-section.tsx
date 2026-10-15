import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";

const questions = [
  {
    question: "What can I find in the Cuveroo collection?",
    answer:
      "Lighting, decorative accents, bathroom and spa pieces, mirrors, wall art, and garden objects.",
  },
  {
    question: "Can I ask for a custom piece?",
    answer:
      "Yes. Cuveroo welcomes custom enquiries. Share a few details about your idea in the contact section.",
  },
  {
    question: "Can I choose a finish or size?",
    answer:
      "Custom sizing and finish options can depend on the piece. Tell us what you have in mind and we’ll guide you through the possibilities.",
  },
  {
    question: "Do you work with wholesale buyers?",
    answer:
      "Cuveroo offers wholesale enquiries. Use the contact section to start a conversation.",
  },
  {
    question: "How should I care for a copper piece?",
    answer:
      "Care can depend on the object and its finish. Contact Cuveroo for guidance on a specific piece.",
  },
];

export function FaqSection() {
  return (
    <section
      className="bg-[#f8f4ee] px-[max(5vw,calc((100vw-1440px)/2))] py-[76px] max-[980px]:px-[4%] max-[700px]:px-[5%] max-[700px]:py-[55px]"
      aria-labelledby="faq-title"
    >
      <div className="grid grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)] items-stretch gap-[clamp(42px,7vw,110px)] max-[700px]:grid-cols-1 max-[700px]:gap-[34px]">
        <div className="flex flex-col justify-between gap-11 py-[5px] max-[700px]:gap-6">
          <div className="m-0 max-w-[580px]">
            <p className="m-0 text-[9px] font-bold uppercase tracking-[.19em] text-[#b87343]">
              Good to know
            </p>
            <h2
              className="mb-0 mt-[14px] font-sans text-[clamp(40px,4.3vw,62px)] font-semibold leading-[1.06] tracking-[-.055em] text-[#211f1b] max-[700px]:max-w-[520px] max-[700px]:text-[clamp(37px,9vw,49px)]"
              id="faq-title"
            >
              General questions
              <br />
              asked by our customers.
            </h2>
          </div>
          <div className="max-w-[480px]">
            <p className="mb-[22px] mt-0 text-[13px] leading-[1.65] text-[#655f58] max-[700px]:mb-[18px]">
              Our team is here to help with clear answers about the collection,
              custom pieces, and copper care.
            </p>
            <Link
              className="group inline-flex min-h-[46px] items-center justify-center gap-[14px] border border-[#b87343] bg-[#b87343] px-5 text-[10px] font-bold uppercase tracking-[.07em] text-white transition-colors duration-200 hover:bg-[#985c35] active:scale-[.99]"
              href="#contact"
            >
              Contact Cuveroo{" "}
              <ArrowRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-[3px]"
                size={16}
              />
            </Link>
          </div>
        </div>
        <div
          className="grid content-start gap-[14px] max-[700px]:gap-[10px]"
          role="group"
          aria-label="Frequently asked questions"
        >
          {questions.map(({ question, answer }, index) => (
            <details
              className="group overflow-hidden rounded-[10px] border border-[rgba(50,42,34,.045)] bg-white px-7 shadow-[0_4px_18px_rgba(45,37,29,.025)] transition-[border-color,box-shadow] duration-200 open:border-[rgba(184,115,67,.23)] open:shadow-[0_8px_26px_rgba(45,37,29,.065)] max-[700px]:px-[18px]"
              key={question}
              open={index === 0}
            >
              <summary className="flex min-h-[82px] cursor-pointer list-none items-center justify-between gap-5 text-[15px] font-semibold leading-[1.45] transition-colors hover:text-[#b87343] group-open:text-[#b87343] [&::-webkit-details-marker]:hidden max-[700px]:min-h-[70px] max-[700px]:gap-[14px] max-[700px]:text-[13px]">
                <span>{question}</span>
                <span
                  className="grid h-[34px] w-[34px] flex-[0_0_34px] place-items-center rounded-full border border-[#716d68] text-[#282521] transition-colors group-open:border-[#b87343] group-open:text-[#b87343] max-[700px]:h-[30px] max-[700px]:w-[30px] max-[700px]:basis-[30px]"
                  aria-hidden="true"
                >
                  <Plus
                    className="group-open:hidden"
                    size={19}
                    strokeWidth={1.5}
                  />
                  <Minus
                    className="hidden group-open:block"
                    size={19}
                    strokeWidth={1.5}
                  />
                </span>
              </summary>
              <p className="mb-[26px] mr-[54px] mt-[-1px] max-w-[610px] text-[14px] leading-[1.7] text-[#625c55] max-[700px]:mr-[42px] max-[700px]:text-[11px]">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
