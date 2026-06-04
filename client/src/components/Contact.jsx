import { useState } from "react";
import "./Contact.css";

const INIT = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form,   setForm]   = useState(INIT);
  const [status, setStatus] = useState("idle");

  const change = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm(INIT);
      setTimeout(() => setStatus("idle"), 5001);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header reveal">
          <h2 className="section-title grad-text">Let's Connect</h2>
          <p className="section-sub">Have a project in mind or just want to say hello?</p>
          <div className="section-line" />
        </div>

        <div className="contact__inner">
          {/* Info cards */}
          <div className="contact__cards reveal d1">
            {[
              { icon:"✉️", cls:"pink",   title:"Email",        val:"jayaprakashc074@gmail.com" },
              { icon:"📍", cls:"blue",   title:"Location",     val:"Theni, Tamil Nadu, India"  },
              { icon:"📱", cls:"green",  title:"Phone",        val:"+91 80727 55618"           },
              { icon:"💼", cls:"purple", title:"Availability", val:"Open to Internships", dot:true },
            ].map((c) => (
              <div key={c.title} className="contact__card">
                <div className={`contact__card-icon contact__card-icon--${c.cls}`}>{c.icon}</div>
                <div>
                  <h4>{c.title}</h4>
                  {c.dot
                    ? <p className="contact__avail"><span className="contact__dot" />{c.val}</p>
                    : <p>{c.val}</p>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="contact__form reveal d2" onSubmit={submit} noValidate>
            <div className="contact__form-row">
              <div className="contact__field">
                <label>Name</label>
                <input name="name" type="text" placeholder="Your name" value={form.name} onChange={change} required />
              </div>
              <div className="contact__field">
                <label>Email</label>
                <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={change} required />
              </div>
            </div>
            <div className="contact__field">
              <label>Subject</label>
              <input name="subject" type="text" placeholder="What's this about?" value={form.subject} onChange={change} required />
            </div>
            <div className="contact__field">
              <label>Message</label>
              <textarea name="message" rows={5} placeholder="Tell me about your project..." value={form.message} onChange={change} required />
            </div>
            <button type="submit" className={`btn btn--pink contact__submit ${status === "loading" ? "contact__submit--loading" : ""}`} disabled={status === "loading"}>
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
            {status === "success" && <p className="contact__msg contact__msg--success">✅ Message sent! I'll get back to you soon.</p>}
            {status === "error"   && <p className="contact__msg contact__msg--error">❌ Failed to send. Please email me directly.</p>}
          </form>
        </div>

        {/* Socials */}
        <div className="contact__socials reveal d3">
          <h3 className="contact__socials-title">Social Profiles</h3>
          <div className="contact__socials-grid">
            {[
              { label:"GitHub",    href:"https://github.com/JAYAPRAKASH2008",                   icon:"fab fa-github"    },
              { label:"LinkedIn",  href:"https://www.linkedin.com/in/jayaprakash-c-059b87311/", icon:"fab fa-linkedin"  },
              { label:"Twitter",   href:"https://x.com/JPRAKASH2008",                           icon:"fab fa-x-twitter" },
              { label:"Portfolio", href:"https://jayaprakashc-portfolio.netlify.app/",           icon:"fas fa-globe"     },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-card">
                <i className={s.icon} />{s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
