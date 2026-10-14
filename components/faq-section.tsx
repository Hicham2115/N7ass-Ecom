import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

const questions = [
  { question: "What can I find in the Cuveroo collection?", answer: "Lighting, decorative accents, bathroom and spa pieces, mirrors, wall art, and garden objects." },
  { question: "Can I ask for a custom piece?", answer: "Yes. Cuveroo welcomes custom enquiries. Share a few details about your idea in the contact section." },
  { question: "Do you work with wholesale buyers?", answer: "Cuveroo offers wholesale enquiries. Use the contact section to start a conversation." },
  { question: "How should I care for a copper piece?", answer: "Care can depend on the object and its finish. Contact Cuveroo for guidance on a specific piece." },
];

export function FaqSection() {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="faq-heading">
        <p className="eyebrow">A little more detail</p>
        <h2 id="faq-title">Questions, <em>answered.</em></h2>
        <p>Useful notes about the collection, custom work, and copper care.</p>
      </div>
      <div className="faq-layout">
        <div className="faq-list">
          {questions.map(({ question, answer }, index) => (
            <details className="faq-item" key={question} open={index === 0}>
              <summary><span>{question}</span><span className="faq-toggle" aria-hidden="true">+</span></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
        <aside className="faq-aside">
          <MessageCircle aria-hidden="true" size={24} />
          <p className="eyebrow">Still deciding?</p>
          <h3>We’re happy to help.</h3>
          <p>Ask about a piece, a finish, or a custom project.</p>
          <Link className="button button-light" href="#contact">Get in touch <ArrowRight aria-hidden="true" size={16} /></Link>
        </aside>
      </div>
    </section>
  );
}
