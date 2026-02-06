"use client";
import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiDocumentText, HiHome, HiBriefcase, HiCog8Tooth, HiRocketLaunch, HiAcademicCap, HiUser, HiEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const ManifestSidebar = () => (
  <aside className="page-sidebar manifest-sidebar-light">
    <div className="manifest-header">
      <h2 className="manifest-title">SYSTEM<br />MANIFEST</h2>
      <div className="manifest-subtitle">
        <span>V.2024.ALFA</span>
        <span><span className="manifest-status-dot" />LIVE</span>
      </div>
    </div>
    <div className="manifest-group">
      <label className="manifest-label"><span className="pill">01</span> DIRECTORY / સૂચિ</label>
      <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }} className="manifest-nav-item">
        <span className="nav-item-content">
          <HiHome className="nav-icon" />
          Home
        </span>
        <span className="manifest-arrow">→</span>
      </a>
      <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection("experience"); }} className="manifest-nav-item">
        <span className="nav-item-content">
          <HiBriefcase className="nav-icon" />
          Experience
        </span>
        <span className="manifest-arrow">→</span>
      </a>
      <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection("skills"); }} className="manifest-nav-item">
        <span className="nav-item-content">
          <HiCog8Tooth className="nav-icon" />
          Skills
        </span>
        <span className="manifest-arrow">→</span>
      </a>
      <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }} className="manifest-nav-item">
        <span className="nav-item-content">
          <HiRocketLaunch className="nav-icon" />
          Projects
        </span>
        <span className="manifest-arrow">→</span>
      </a>
      <a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection("education"); }} className="manifest-nav-item">
        <span className="nav-item-content">
          <HiAcademicCap className="nav-icon" />
          Education
        </span>
        <span className="manifest-arrow">→</span>
      </a>
      <a href="#beyond code" onClick={(e) => { e.preventDefault(); scrollToSection("beyond code"); }} className="manifest-nav-item">
        <span className="nav-item-content">
          <HiUser className="nav-icon" />
          Context
        </span>
        <span className="manifest-arrow">→</span>
      </a>
    </div>
    
    <div className="manifest-group">
      <label className="manifest-label"><span className="pill">02</span> LINKS / કડીઓ</label>
      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="manifest-nav-item">
        <span className="nav-item-content">
          <HiDocumentText className="nav-icon" />
          Resume
        </span>
        <span className="manifest-arrow">↗</span>
      </a>
      <a href="https://github.com/laganipatel" target="_blank" rel="noopener noreferrer" className="manifest-nav-item">
        <span className="nav-item-content">
          <FaGithub className="nav-icon" />
          GitHub
        </span>
        <span className="manifest-arrow">↗</span>
      </a>
      <a href="https://linkedin.com/in/laganipatel" target="_blank" rel="noopener noreferrer" className="manifest-nav-item">
        <span className="nav-item-content">
          <FaLinkedin className="nav-icon" />
          LinkedIn
        </span>
        <span className="manifest-arrow">↗</span>
      </a>
      <a href="mailto:lagani.dev@proton.me" className="manifest-nav-item" style={{ borderBottom: "none" }}>
        <span className="nav-item-content">
          <HiEnvelope className="nav-icon" />
          Email
        </span>
        <span className="manifest-arrow">↗</span>
      </a>
    </div>
  </aside>
);

export default function Home() {
  useEffect(() => {}, []);

  return (
    <div className="page-with-sidebar">
      <div className="page-main bg-cream text-[#2a2a28]">
      {/* Landing */}
      <section id="home" className="min-h-screen relative bg-[#EBE5DD] landing-framed">
        <div className="landing-grid-bg" aria-hidden="true" />
        <div className="landing-app-container">
          <div className="landing-main-stage">
            <div className="landing-tech-mark tm-tl">NODE.082<br />DEPLOYMENT_A</div>
            <div className="landing-tech-mark tm-tr">LATENCY.MS<br />12.04</div>
            <div className="landing-tech-mark tm-bl">USER_ID: 0x99A<br />LOC: NC_CA</div>
            <div className="landing-tech-mark tm-br">COMPUTE<br />DISTRIBUTED</div>

            <div className="relative z-10">
              <motion.h1
                className="landing-hero-title"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                LAGANI<br />PATEL
              </motion.h1>
              <motion.p
                className="landing-hero-tagline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              >
                Building intelligent systems is my craft; analyzing films is my escape. Technically a Master of Science, but practically a student of everything else.
              </motion.p>
            </div>

            <div className="landing-neural-viz">
              <svg width="100%" height="100%" viewBox="0 0 600 600" className="w-full h-full">
                <g className="links">
                  <line x1="100" y1="200" x2="300" y2="100" className="link" />
                  <line x1="100" y1="300" x2="300" y2="100" className="active-link" />
                  <line x1="100" y1="400" x2="300" y2="100" className="link" />
                  <line x1="100" y1="200" x2="300" y2="300" className="link" />
                  <line x1="100" y1="300" x2="300" y2="300" className="active-link" />
                  <line x1="100" y1="400" x2="300" y2="300" className="link" />
                  <line x1="300" y1="100" x2="500" y2="300" className="active-link" />
                  <line x1="300" y1="300" x2="500" y2="300" className="active-link" />
                  <line x1="100" y1="300" x2="500" y2="300" className="link" strokeDasharray="4 4" />
                </g>
                <g className="nodes">
                  <rect x="95" y="195" width="10" height="10" className="node" />
                  <rect x="95" y="295" width="10" height="10" className="node" fill="var(--landing-accent)" />
                  <rect x="95" y="395" width="10" height="10" className="node" />
                  <rect x="295" y="95" width="10" height="10" className="node" />
                  <rect x="295" y="295" width="10" height="10" className="node" />
                  <rect x="495" y="295" width="10" height="10" className="node" fill="var(--landing-accent)" />
                </g>
                <circle cx="300" cy="300" r="250" fill="none" stroke="var(--landing-grid-strong)" strokeWidth="0.5" strokeDasharray="10 10" />
                <text x="115" y="305" fontSize="8" fill="var(--landing-fg)" opacity="0.7">INPUT_LAYER_01</text>
                <text x="315" y="305" fontSize="8" fill="var(--landing-fg)" opacity="0.7">HIDDEN_OPTIM_02</text>
                <text x="515" y="305" fontSize="8" fill="var(--landing-fg)" opacity="0.7">OUTPUT_PROB</text>
              </svg>
            </div>
          </div>
        </div>
        <div className="landing-vert-text-wrap" aria-hidden="true">
          <span className="landing-vert-bar" />
          <span className="landing-vert-text">AI_SOFTWARE_ENGINEER // કાર્યસંગ્રહ // LAGANI_PATEL</span>
        </div>
      </section>

    {/* Experience — PROFESSIONAL TRAJECTORY */}
    <section id="experience" className="min-h-screen relative bg-[#EBE5DD] px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16">
      <div className="landing-grid-bg" aria-hidden="true" />
      <div className="relative z-10 max-w-4xl">
        <div className="landing-tech-mark section-tech-mark tm-tl">LOG.EXP v4<br />SEQUENTIAL_CHRONO</div>

        <h2 className="section-hero-title">PROFESSIONAL TRAJECTORY</h2>

        {[
          { date: "JAN 2026 – PRESENT", role: "AI SOFTWARE ENGINEER", org: "FINOPTIMA SOLUTIONS", desc: "End-to-end AI system architecture and deployment. Developing scalable machine learning pipelines for financial optimization, implementing MLOps workflows, and building production-ready AI applications with focus on real-time inference and model monitoring." },
          { date: "OCT 2024 – JULY 2025", role: "DATA SCIENTIST", org: "NC MUSEUM OF NATURAL SCIENCES", desc: "AI-driven wildlife monitoring solutions. Depth estimation algorithms for 100K+ camera trap images achieving 30% accuracy improvement and 40% reduction in manual processing across 50+ research sites." },
          { date: "FEB 2024 – AUG 2024", role: "ML ENGINEER", org: "NC STATE UNIVERSITY // MAE DEPT", desc: "Thermal conductivity prediction models using MATLAB/Python. Processed 30K+ data points with ensemble learning methods delivering 25% accuracy boost and 40% faster simulation workflows." },
          { date: "JAN 2023 – MAY 2023", role: "SOFTWARE ENGINEER INTERN", org: "CARINGHUMANS", desc: "Full-stack development with responsive UI/UX design. Built RESTful APIs for real-time profile booking system using HTML5, CSS3, JavaScript with seamless user experience." },
        ].map((job) => (
          <div key={job.role} className="trajectory-entry">
            <div className="trajectory-content">
              <h3 className="trajectory-role">{job.role}</h3>
              <div className="trajectory-org">{job.org}</div>
              <p className="trajectory-desc">{job.desc}</p>
            </div>
            <div className="trajectory-date">{job.date}</div>
          </div>
        ))}
      </div>
    </section>

      {/* Skills — TECHNICAL COMPETENCIES */}
      <section id="skills" className="min-h-screen relative bg-[#EBE5DD] px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16">
        <div className="landing-grid-bg" aria-hidden="true" />
        <div className="relative z-10 max-w-6xl">
          <div className="landing-tech-mark section-tech-mark tm-tl">LOG.SKILLS v2<br />COMPETENCY_MATRIX</div>

          <h2 className="section-hero-title">TECHNICAL COMPETENCIES</h2>

          <div className="skills-grid">
            {[
              { 
                title: "Machine Learning", 
                items: ["PyTorch", "Hugging Face", "TensorFlow", "SKLearn", "OpenCV", "Pandas", "NumPy"] 
              },
              { 
                title: "Backend", 
                items: ["Node.js", "Express.js", "Flask", "Django", "FastAPI", "GraphQL"] 
              },
              { 
                title: "Databases", 
                items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Elasticsearch"] 
              },
              { 
                title: "DevOps & Cloud", 
                items: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform"] 
              },
              { 
                title: "Frontend", 
                items: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "JavaScript"] 
              },
              { 
                title: "Mobile", 
                items: ["React Native", "Expo", "Swift", "Jetpack Compose"] 
              }
            ].map((category, i) => (
              <div key={category.title} className="skills-category-simple">
                <h3 className="skills-category-title-simple">{category.title}</h3>
                <ul className="skills-list-simple">
                  {category.items.map((skill) => (
                    <li key={skill} className="skill-item-simple">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects — DEVELOPMENT PORTFOLIO */}
      <section id="projects" className="min-h-screen relative bg-[#EBE5DD] px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16">
        <div className="landing-grid-bg" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl">
          <div className="landing-tech-mark section-tech-mark tm-tl">LOG.PROJ v3<br />SEQUENTIAL_BUILD</div>

          <h2 className="section-hero-title">DEVELOPMENT PORTFOLIO</h2>

          {[
            { 
              title: "FINOPTIMA AI TRADING PLATFORM", 
              period: "2026", 
              stack: "PYTHON // PYTORCH // KAFKA // KUBERNETES",
              desc: "Real-time algorithmic trading platform with ML-driven market prediction models. Built scalable microservices architecture processing 100K+ transactions/second with sub-millisecond latency.",
              github: null
            },
            { 
              title: "AI-DRIVEN IMAGE COMPRESSION", 
              period: "2024", 
              stack: "PYTORCH // VQ-VAE // GANS // DIFFUSION",
              desc: "Generative models for image compression achieving 15% SSIM improvement and 20% perceptual loss reduction over JPEG/WebP standards.",
              github: null
            },
            { 
              title: "SHANTI AI VOICE AGENT", 
              period: "2024", 
              stack: "NEXTJS // PRISMA // OPENAI // WEBRTC",
              desc: "Voice-first AI companion with session memory and function calling. Real-time audio processing with OpenAI integration and persistent conversation context.",
              github: "https://github.com/Lagani21/shanti_ai_voice_agent"
            },
            { 
              title: "ANTAR iOS SCHEDULING APP", 
              period: "2023", 
              stack: "SWIFT // IOS // INSTAGRAM_API",
              desc: "Native iOS app for automated social media scheduling. Content calendar management with analytics dashboard and Instagram API integration.",
              github: "https://github.com/Lagani21/Antar"
            },
          ].map((project) => (
            <div key={project.title} className="trajectory-entry">
              <div className="trajectory-content">
                <h3 className="trajectory-role">{project.title}</h3>
                <div className="trajectory-org">
                  {project.stack}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="ml-4 text-[var(--landing-accent)] text-sm font-medium hover:underline"
                    >
                      GITHUB →
                    </a>
                  )}
                </div>
                <p className="trajectory-desc">{project.desc}</p>
              </div>
              <div className="trajectory-date">{project.period}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Education — ACADEMIC BACKGROUND */}
      <section id="education" className="min-h-screen relative bg-[#EBE5DD] px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16">
        <div className="landing-grid-bg" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl">
          <div className="landing-tech-mark section-tech-mark tm-tl">LOG.EDU v2<br />ACADEMIC_HISTORY</div>

          <h2 className="section-hero-title">ACADEMIC BACKGROUND</h2>

          <div className="academic-section">
            <div className="academic-entry">
              <div className="academic-header">
                <h3 className="academic-degree">MASTER OF COMPUTER SCIENCE</h3>
                <span className="academic-period">AUG 2023 — MAY 2025</span>
              </div>
              <div className="academic-institution">NORTH CAROLINA STATE UNIVERSITY, RALEIGH, NORTH CAROLINA</div>
              <div className="academic-details">
                <div className="academic-detail-item">Specialization in Data Science</div>
                <div className="academic-detail-item">Coursework: Software Engineering, Object-Oriented Programming, Cloud Computing and Statistics</div>
              </div>
            </div>

            <div className="academic-entry">
              <div className="academic-header">
                <h3 className="academic-degree">BACHELOR OF TECHNOLOGY</h3>
                <span className="academic-period">AUG 2019 — MAY 2023</span>
              </div>
              <div className="academic-institution">PANDIT DEENDAYAL ENERGY UNIVERSITY, GANDHINAGAR, INDIA</div>
              <div className="academic-details">
                <div className="academic-detail-item">Information and Communication Technology Engineering</div>
                <div className="academic-detail-item">Coursework: Data Structures & Algorithms, Operating Systems and Database Management Systems</div>
              </div>
            </div>

            {/* <div className="academic-entry">
              <div className="academic-header">
                <h3 className="academic-degree">CERTIFICATIONS</h3>
                <span className="academic-period">2023 — 2026</span>
              </div>
              <div className="academic-details">
                <div className="academic-detail-item">AWS Solutions Architect Professional, Kubernetes Application Developer (CKAD), Google Cloud ML Engineer</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Beyond Code — CONTEXT */}
      <section id="beyond code" className="min-h-screen relative bg-[#EBE5DD] px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16">
        <div className="landing-grid-bg" aria-hidden="true" />
        <div className="relative z-10 max-w-5xl">
          <div className="landing-tech-mark section-tech-mark tm-tl">USER.BIO v4<br />IDENT_RECORDS</div>

          <h2 className="section-hero-title">CONTEXT</h2>

          <div className="identity-layout">
            <div className="identity-image-section">
              <div className="identity-image-container">
                <Image
                  src="/test_image.jpg"
                  alt="Lagani Patel"
                  width={300}
                  height={400}
                  className="identity-image"
                  priority
                />
                <div className="identity-sub-id">SUB_ID: LAGANI_V_001</div>
              </div>
            </div>

            <div className="identity-content-section">
              <div className="identity-philosophy-quote">
                <div className="quote-content">
                  "The powerful play goes on, and you may contribute a verse."<br />
                  — Walt Whitman
                </div>
              </div>

              <div className="identity-bio">
                <p>
                  I'm 23. I write code, but I also try to live a life that requires no compiling.
                </p>
                <p>
                  I've cut my teeth as an event manager, running 100+ events where I juggled logistics, AV tech, and high-pressure problem-solving. It taught me to think on my feet in ways a computer never could.
                </p>
                <p>
                  My downtime is usually spent behind a lens or in front of a movie screen. I also enjoy cooking and reading poetry. [Note: I only read poetry. My code might be poetic, but my actual poems are a syntax error waiting to happen.]
                </p>
              </div>

              <div className="identity-divider"></div>

              <div className="identity-core-philosophy">
                <div className="philosophy-divider"></div>
                <span className="identity-label">CORE PHILOSOPHY</span>
                <div className="philosophy-content">
                  Guided by intention. Grounded in simplicity.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <ManifestSidebar />
    </div>
  );
}
