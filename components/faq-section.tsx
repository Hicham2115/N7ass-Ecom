import Link from "next/link";
import { ArrowRight, Minus, Plus } from "lucide-react";

const questions = [
  {
    question: "Quels types de projets réalisez-vous ?",
    answer:
      "T.cap présente des cuisines, chambres, salons, rangements, carrelage et finitions intérieures ou extérieures.",
  },
  {
    question: "Les aménagements sont-ils faits sur mesure ?",
    answer:
      "Les projets sont adaptés à l’espace et aux besoins du client. Contactez T.cap pour décrire votre projet et demander un devis.",
  },
  {
    question: "Puis-je choisir les matériaux et les finitions ?",
    answer:
      "Les options dépendent du projet. Les publications montrent notamment du MDF, des finitions brillantes, des effets noyer, des plans de travail et du carrelage.",
  },
  {
    question: "Où se trouve T.cap ?",
    answer:
      "Le profil indique la zone industrielle de Selouane, près de Nador. Contactez l’équipe pour confirmer le déplacement dans votre ville.",
  },
  {
    question: "Comment demander un devis ?",
    answer:
      "Appelez le +212 661 872 150 ou envoyez votre demande via le formulaire en indiquant les dimensions et les finitions souhaitées.",
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
              Retrouvez les premières informations sur nos services et la zone
              d’intervention de T.cap.
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
