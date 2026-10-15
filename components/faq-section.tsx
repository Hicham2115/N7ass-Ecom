import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";

const questions = [
  {
    question: "Que trouve-t-on dans la collection Cuveroo ?",
    answer:
      "Des luminaires, objets décoratifs, pièces pour la salle de bain et le spa, miroirs, décorations murales et objets de jardin.",
  },
  {
    question: "Puis-je demander une pièce sur mesure ?",
    answer:
      "Oui. Cuveroo réalise des pièces sur mesure. Décrivez-nous votre idée dans la section contact.",
  },
  {
    question: "Puis-je choisir une finition ou des dimensions ?",
    answer:
      "Les dimensions et les finitions possibles dépendent de la pièce. Parlez-nous de votre projet et nous vous guiderons parmi les options.",
  },
  {
    question: "Travaillez-vous avec des professionnels et des revendeurs ?",
    answer:
      "Nous étudions les demandes des professionnels et les commandes en gros. Utilisez le formulaire de contact pour nous en parler.",
  },
  {
    question: "Comment entretenir une pièce en cuivre ?",
    answer:
      "L’entretien dépend de l’objet et de sa finition. Contactez Cuveroo pour obtenir des conseils adaptés à votre pièce.",
  },
];

export function FaqSection() {
  return (
    <section
      className=" px-[max(5vw,calc((100vw-1440px)/2))] py-[76px] max-[980px]:px-[4%] max-[700px]:px-[5%] max-[700px]:py-[55px]"
      aria-labelledby="faq-title"
    >
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)] md:gap-[clamp(42px,7vw,100px)]">
        <div className="flex flex-col items-start gap-8">
          <div className="max-w-[500px]">
            <p className="m-0 text-[clamp(11px,0.78vw,13px)] font-bold uppercase tracking-[.19em] text-[#b87343]">
              Bon à savoir
            </p>
            <h2
              className="mb-0 mt-4 font-sans text-[clamp(38px,4vw,56px)] font-semibold leading-[1.04] tracking-[-.05em] text-[#211f1b]"
              id="faq-title"
            >
              Vos questions sur notre savoir-faire.
            </h2>
          </div>
          <div className="max-w-[440px] border-t border-[#d9cfc0] pt-5">
            <p className="mb-5 mt-0 text-[14px] leading-[1.7] text-[#655f58]">
              Du choix d’une finition à l’entretien du cuivre, retrouvez ici
              quelques réponses utiles.
            </p>
            <Link
              className="group inline-flex min-h-[46px] !text-white items-center justify-center gap-[14px] border border-[#b87343] bg-[#b87343] px-5 text-[clamp(12px,0.85vw,14px)] font-bold uppercase tracking-[.07em]  transition-colors duration-200 hover:bg-[#985c35] active:scale-[.99]"
              href="#contact"
            >
              Écrivez-nous{" "}
              <ArrowRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-[3px]"
                size={16}
              />
            </Link>
          </div>
        </div>
        <div
          className="grid w-full content-start gap-3"
          role="group"
          aria-label="Questions fréquentes"
        >
          {questions.map(({ question, answer }, index) => (
            <details
              className="group overflow-hidden border border-[#e7dfd5] bg-[#fffdfa] px-6 transition-colors duration-200 open:border-[#c89b79] max-[700px]:px-[18px]"
              key={question}
              open={index === 0}
            >
              <summary className="flex min-h-[74px] cursor-pointer list-none items-center justify-between gap-5 text-[14px] font-semibold leading-[1.45] transition-colors hover:text-[#985c35] group-open:text-[#985c35] [&::-webkit-details-marker]:hidden max-[700px]:min-h-[66px] max-[700px]:gap-[14px] max-[700px]:text-[clamp(15px,1.05vw,17px)]">
                <span>{question}</span>
                <span
                  className="grid h-[30px] w-[30px] flex-[0_0_30px] place-items-center border border-[#c9b9a8] text-[#655f58] transition-colors group-open:border-[#b87343] group-open:text-[#b87343]"
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
              <p className="mb-6 mr-[50px] mt-[-1px] max-w-[610px] text-[clamp(15px,1.05vw,17px)] leading-[1.7] text-[#625c55] max-[700px]:mr-[40px]">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
