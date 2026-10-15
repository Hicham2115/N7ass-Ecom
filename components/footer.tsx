import Link from "next/link";
import { ArrowRight } from "lucide-react";

const footerLinks = [
  { title: "Shop", links: [["All objects", "#categories"], ["Lighting", "#categories"], ["Bathroom & spa", "#categories"], ["Garden & outdoor", "#categories"]] },
  { title: "Cuveroo", links: [["Our craft", "#story"], ["Journal", "#journal"], ["Wholesale & custom", "#custom"], ["Contact", "#contact"]] },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="brand-lockup footer-lockup" href="#home">
            <span aria-hidden="true" className="mb-0 h-px w-8 bg-[#d5a27c]" />
            <span className="brand-name">CUVEROO</span>
          </Link>
          <p>Authentic copper.<br />Timeless design.</p>
        </div>
        {footerLinks.map((group) => (
          <nav aria-label={group.title} key={group.title}>
            <h2>{group.title}</h2>
            <ul>{group.links.map(([label, href]) => <li key={label}><Link href={href}>{label}</Link></li>)}</ul>
          </nav>
        ))}
        <div className="footer-note">
          <p className="eyebrow">Keep in touch</p>
          <h2>Objects with a little more soul.</h2>
          <Link className="footer-contact-link" href="#contact">Contact Cuveroo <ArrowRight aria-hidden="true" size={15} /></Link>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Cuveroo</span><span>Objects for living</span></div>
    </footer>
  );
}
