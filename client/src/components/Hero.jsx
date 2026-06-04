import "./Hero.css";

import profileImage from "../../public/Enhanced_Photo.jpeg";

import resumeUrl from "../../public/jayaprakash-Resume(e).pdf";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      <div className="container hero__inner">
        {/* LEFT */}
        <div className="hero__left">
          <div className="hero__tag">
            <span className="hero__dot" />
            Open to Internships &amp; Full-time Roles
          </div>

          <h1 className="hero__name">
            Hi, I'm <span className="grad-text">Jayaprakash</span>
          </h1>

          <p className="hero__role">Software Engineer &amp; AI Builder</p>

          <p className="hero__desc">
            Frontend developer with hands-on experience across 3 internships and
            AI/ML projects. I build responsive web apps and intelligent systems
            using React, Python, and deep learning.
          </p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn--pink">
              View Projects
            </a>
            <a
              href={resumeUrl}
              className="btn btn--ghost"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </div>

          <div className="hero__stats">
            {[
              { num: "3", label: "Internships" },
              { num: "4+", label: "Projects Built" },
              { num: "8.0", label: "CGPA" },
              { num: "AWS", label: "Certified" },
            ].map((s) => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-num grad-text">{s.num}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero__right">
          <div className="hero__ring">
            <div className="hero__ring-inner">
              <img src={profileImage} alt="Jayaprakash C" />
            </div>
          </div>
          <a
            href="https://github.com/JAYAPRAKASH2008"
            target="_blank"
            rel="noreferrer"
            className="hero__float hero__float--gh"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.1.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jayaprakash-c-059b87311/"
            target="_blank"
            rel="noreferrer"
            className="hero__float hero__float--li"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#0077b5">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.55V9H3.56v11.45z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__mouse" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
