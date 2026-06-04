import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import Skills   from "./components/Skills";
import Projects from "./components/Projects";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </BrowserRouter>
  );
}
