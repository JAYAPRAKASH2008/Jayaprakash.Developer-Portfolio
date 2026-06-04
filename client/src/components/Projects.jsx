import { useState } from "react";
import "./Projects.css";

const PROJECTS = [
  {
    id: 1,
    title: "Real-Time ASL Translation System",
    category: "Accessibility AI",
    shortDesc: "Real-time hand gesture recognition that converts American Sign Language into written English text using deep learning.",
    emoji: "🤟",
    color: "#4f8eff",
    tags: ["Python", "CNN", "Bi-LSTM", "Transformer", "OpenCV", "MediaPipe"],
    features: [
      "Live webcam feed with real-time keypoint detection using MediaPipe",
      "Sequence modeling with Transformer / Bi-LSTM for dynamic gesture translation",
      "Low-latency output enabling seamless communication for deaf community",
      "Seq2Seq architecture for continuous sign-to-text conversion",
    ],
    techStack: ["Python", "OpenPose", "CNN", "Bi-LSTM", "Transformer", "Seq2Seq", "OpenCV", "MediaPipe"],
    live: null,
    code: "https://github.com/JAYAPRAKASH2008",
  },
  {
    id: 2,
    title: "Vehicle Damage Assessment System",
    category: "Insurance Tech",
    shortDesc: "AI pipeline that detects vehicle damage, classifies severity, and auto-generates PDF cost-estimate reports for insurance claims.",
    emoji: "🚗",
    color: "#a259ff",
    tags: ["Python", "YOLOv8", "ResNet50", "FastAPI", "Streamlit"],
    features: [
      "Trained YOLOv8 on 4,000+ annotated images — detects bumper, door, fender damage",
      "Achieved mAP@0.5 of 0.82 for damage type detection (dent, scratch, crack)",
      "Fine-tuned ResNet50 classifies severity: Minor / Moderate / Severe",
      "Auto-generates itemized PDF reports with cost estimates via ReportLab",
      "Deployed as FastAPI REST API with Streamlit UI on Hugging Face Spaces",
    ],
    techStack: ["Python", "YOLOv8", "ResNet50", "OpenCV", "FastAPI", "Streamlit", "Grad-CAM", "ReportLab", "Hugging Face"],
    live: "https://huggingface.co",
    code: "https://github.com/JAYAPRAKASH2008",
  },
  {
    id: 3,
    title: "Smart Cook — AI Recipe Generator",
    category: "Generative AI",
    shortDesc: "AI-powered chatbot that generates personalized recipes based on your ingredients, dietary preferences, and health goals.",
    emoji: "🍳",
    color: "#00e5c0",
    tags: ["HTML5", "CSS3", "JavaScript", "GenAI API", "Python"],
    features: [
      "GenAI integration for intelligent, personalized recipe suggestions",
      "Dietary restrictions and health goal filtering",
      "Real-time API response rendering in the UI",
      "Fully responsive mobile-first design",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "GenAI API", "Python"],
    live: "#",
    code: "https://github.com/JAYAPRAKASH2008/Food-suggestion",
  },
  {
    id: 4,
    title: "AI Health Assistant",
    category: "Healthcare AI",
    shortDesc: "Analyzes user symptoms and provides personalized health recommendations with disease insights and medication guidance.",
    emoji: "❤️",
    color: "#e91e8c",
    tags: ["HTML5", "CSS3", "JavaScript", "REST API", "GenAI"],
    features: [
      "Symptom checker powered by GenAI for instant disease analysis",
      "Real-time medication and treatment recommendations",
      "Preventive healthcare tips based on user profile",
      "Clean, accessible UI designed for all users",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "GenAI API", "REST API"],
    live: "#",
    code: "https://github.com/JAYAPRAKASH2008/health-care",
  },
];

export default function Projects() {
  const [active, setActive] = useState(null);

  const open  = (p) => { setActive(p); document.body.style.overflow = "hidden"; };
  const close = ()  => { setActive(null); document.body.style.overflow = ""; };

  return (
    <section id="projects" className="projects">
      <div className="container">

        <div className="section-header reveal">
          <h2 className="section-title grad-text">Projects</h2>
          <p className="section-sub">Things I've built — click any card to see key features &amp; tech stack.</p>
          <div className="section-line" />
        </div>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              className={`proj-card reveal d${(i % 3) + 1}`}
              onClick={() => open(p)}
            >
              {/* Thumbnail */}
              <div className="proj-thumb" style={{ "--accent": p.color }}>
                <span className="proj-thumb-bg">{p.emoji}</span>
                <div className="proj-thumb-content">
                  <span className="proj-thumb-emoji">{p.emoji}</span>
                  <h3 className="proj-thumb-title">{p.title}</h3>
                </div>

                {/* Tech tag bubbles on hover */}
                <div className="proj-tags-row">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="proj-tag-chip">{t}</span>
                  ))}
                  {p.tags.length > 3 && (
                    <span className="proj-tag-chip">+{p.tags.length - 3}</span>
                  )}
                </div>
              </div>

              {/* Card body */}
              <div className="proj-body">
                <span className="proj-category">{p.category}</span>
                <h3 className="proj-title">{p.title}</h3>
                <p className="proj-desc">{p.shortDesc}</p>
                <button className="proj-view-btn">
                  View details <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
      {active && (
        <div className="modal-overlay" onClick={close}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>

            {/* Modal header */}
            <div className="modal-head" style={{ "--accent": active.color }}>
              <span className="modal-emoji">{active.emoji}</span>
              <div className="modal-head-text">
                <span className="modal-category">{active.category}</span>
                <h2 className="modal-title">{active.title}</h2>
              </div>
              <button className="modal-close" onClick={close}>✕</button>
            </div>

            <div className="modal-body">
              <p className="modal-desc">{active.shortDesc}</p>

              {/* Key Features */}
              <div className="modal-section">
                <h4 className="modal-section-title">✦ Key Features</h4>
                <ul className="modal-features">
                  {active.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="modal-section">
                <h4 className="modal-section-title">⚙ Tech Stack</h4>
                <div className="modal-stack">
                  {active.techStack.map((t) => (
                    <span key={t} className="modal-stack-pill">{t}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="modal-links">
                {active.live && (
                  <a href={active.live} target="_blank" rel="noreferrer" className="btn btn--pink">
                    Live Demo
                  </a>
                )}
                <a href={active.code} target="_blank" rel="noreferrer" className="btn btn--ghost">
                  View Code
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
