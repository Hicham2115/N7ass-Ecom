import { ArrowRight, Mail, MessageSquare } from "lucide-react";

export function ContactSection() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-copy">
        <p className="eyebrow">Let’s talk copper</p>
        <h2 id="contact-title">Tell us what<br /><em>you have in mind.</em></h2>
        <p>Whether you’re choosing a piece for home or exploring custom and wholesale work, start a conversation with Cuveroo.</p>
        <div className="contact-note"><Mail aria-hidden="true" size={17} /><span>Product, custom, and wholesale enquiries</span></div>
      </div>
      <div className="contact-form-wrap">
        <form className="contact-form">
          <label>
            <span>Your name</span>
            <input autoComplete="name" name="name" placeholder="Name" />
          </label>
          <label>
            <span>Your email</span>
            <input autoComplete="email" name="email" placeholder="you@example.com" type="email" />
          </label>
          <label className="message-field">
            <span>Your message</span>
            <textarea name="message" placeholder="Tell us a little about your project" rows={4} />
          </label>
          <p className="form-note"><MessageSquare aria-hidden="true" size={14} /> Form delivery needs a Cuveroo inbox or submission endpoint.</p>
          <button className="button button-copper" type="button" disabled>
            Send enquiry <ArrowRight aria-hidden="true" size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
