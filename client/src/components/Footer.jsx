import "./Footer.css";

const NAV   = ["Home", "Skills", "Projects", "Contact"];
const SOCIALS = [
  { href:"https://github.com/JAYAPRAKASH2008",                   icon:"fab fa-github"    },
  { href:"https://www.linkedin.com/in/jayaprakash-c-059b87311/", icon:"fab fa-linkedin"  },
  { href:"https://x.com/JPRAKASH2008",                           icon:"fab fa-x-twitter" },
];

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer__grid">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-icon">JP</span>
            <span className="footer__logo-text">Jayaprakash C</span>
          </div>
          <p>Software Engineer creating digital experiences that matter. Focused on performance, accessibility, and clean interfaces.</p>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" className="footer__social">
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="footer__col">
          <h4>Navigation</h4>
          <ul className="footer__links">
            {NAV.map((n) => (
              <li key={n}>
                <button onClick={() => scrollTo(n)} className="footer__link">— {n}</button>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div className="footer__col">
          <h4>Connect</h4>
          <ul className="footer__links">
            <li><a href="https://github.com/JAYAPRAKASH2008" target="_blank" rel="noreferrer" className="footer__link">— GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/jayaprakash-c-059b87311/" target="_blank" rel="noreferrer" className="footer__link">— LinkedIn</a></li>
            <li><a href="mailto:jayaprakashc074@gmail.com" className="footer__link">— Email</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom — "Made with India" removed */}
      <div className="container footer__bottom">
        <p>© 2025 Jayaprakash C. All rights reserved.</p>
      </div>
    </footer>
  );
}
