import { useState, useEffect } from "react";
import "./Navbar.css";

const LINKS = ["Home", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [active,   setActive]   = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (l) => {
    setActive(l); setOpen(false);
    document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <div className="nav__logo">
          <span className="nav__logo-icon">JP</span>
          <span className="nav__logo-text">Jayaprakash C</span>
        </div>
        <ul className="nav__links">
          {LINKS.map((l) => (
            <li key={l}>
              <button className={`nav__link ${active === l ? "nav__link--active" : ""}`} onClick={() => go(l)}>
                {l}
              </button>
            </li>
          ))}
        </ul>
        <button className="nav__hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
      {open && (
        <div className="nav__mobile">
          {LINKS.map((l) => (
            <button key={l} className={`nav__mobile-link ${active === l ? "nav__link--active" : ""}`} onClick={() => go(l)}>
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
