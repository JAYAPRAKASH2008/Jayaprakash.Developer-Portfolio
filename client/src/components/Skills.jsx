import "./Skills.css";

// Icon URLs from devicons (no install needed — just img tags)
const SKILLS = [
  {
    title: "Frontend Development",
    pills: [
      { name: "HTML5",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React.js",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Bootstrap",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    ],
  },
  {
    title: "Programming Languages",
    pills: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    ],
  },
  {
    title: "AI & Machine Learning",
    pills: [
      { name: "YOLOv8",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "OpenCV",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
      { name: "Generative AI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "ResNet50",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "MediaPipe",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    title: "Backend & Deployment",
    pills: [
      { name: "FastAPI",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Streamlit",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Hugging Face", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    title: "Database & Cloud",
    pills: [
      { name: "MySQL",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "AWS",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    ],
  },
  {
    title: "Tools & Workflow",
    pills: [
      { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Jupyter",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">

        <div className="section-header reveal">
          <h2 className="section-title grad-text">Skills &amp; Technologies</h2>
          <p className="section-sub">Technologies I've used across real projects and internships.</p>
          <div className="section-line" />
        </div>

        <div className="skills__grid">
          {SKILLS.map((group, i) => (
            <div key={group.title} className={`skill-card reveal d${(i % 4) + 1}`}>
              <h3 className="skill-card__title">{group.title}</h3>
              <div className="skill-card__pills">
                {group.pills.map((p) => (
                  <span key={p.name} className="tech-pill">
                    <img src={p.icon} alt={p.name} className="pill-icon" onError={(e) => e.target.style.display = "none"} />
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
