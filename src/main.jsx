import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  {
    title: 'AutoSonar',
    tag: 'IA · Automoción',
    description:
      'Aplicación orientada a identificar posibles averías de un vehículo a partir de sonidos, síntomas y datos básicos del coche.',
    status: 'Proyecto activo',
  },
  {
    title: 'TunnerLabAI',
    tag: 'IA · Tuning',
    description:
      'Herramienta para estimar potencia, par, coste y fiabilidad de distintas preparaciones de coche y moto.',
    status: 'En evolución',
  },
  {
    title: 'Servidor personal',
    tag: 'Homelab · Docker',
    description:
      'Entorno doméstico con servicios autoalojados, monitorización, almacenamiento, IA local y acceso remoto privado.',
    status: 'Operativo',
  },
  {
    title: 'AppRutasMoto',
    tag: 'Moto · Próximamente',
    description:
      'Próximo proyecto centrado en descubrir, guardar y compartir rutas para moto con una experiencia visual sencilla.',
    status: 'Siguiente proyecto',
  },
]

const skills = [
  'React',
  'Vite',
  'JavaScript',
  'Python',
  'Docker',
  'GitHub',
  'Netlify',
  'IA local',
  'Ollama',
  'Linux',
]

function App() {
  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#inicio">AdriMB200</a>
        <nav className="nav">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#skills">Tecnologías</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow">DESARROLLO · IA · AUTOMOCIÓN</span>
            <h1>
              Construyo proyectos que mezclan
              <span> software, máquinas e ideas reales.</span>
            </h1>
            <p>
              Este es mi espacio personal para reunir lo que voy creando:
              aplicaciones web, herramientas con inteligencia artificial,
              servidores y proyectos relacionados con coches y motos.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#proyectos">Ver proyectos</a>
              <a className="btn secondary" href="#contacto">Contactar</a>
            </div>
          </div>

          <div className="hero-card" aria-hidden="true">
            <div className="terminal-bar">
              <span></span><span></span><span></span>
            </div>
            <pre>
{`> whoami
AdriMB200

> interests
web · AI · cars · bikes · servers

> status
building things...`}
            </pre>
          </div>
        </section>

        <section className="section about" id="sobre-mi">
          <div>
            <span className="section-kicker">01 / SOBRE MÍ</span>
            <h2>Tecnología con una parte muy práctica.</h2>
          </div>
          <div className="about-text">
            <p>
              Me interesa especialmente crear cosas que pueda probar, romper,
              mejorar y volver a montar. No solo una web bonita, sino proyectos
              que tengan utilidad: una herramienta para coches, un servidor en
              casa, una IA local o, próximamente, una app pensada para salir en moto.
            </p>
            <p>
              Suelo trabajar con tecnologías web modernas y combinar desarrollo
              con infraestructura, automatización e inteligencia artificial.
            </p>
          </div>
        </section>

        <section className="section" id="proyectos">
          <span className="section-kicker">02 / PROYECTOS</span>
          <div className="section-heading">
            <h2>Lo que estoy construyendo.</h2>
            <p>Algunos proyectos terminan. Otros simplemente van creciendo.</p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <span>{project.status}</span>
                  <span className="arrow">↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div>
            <span className="section-kicker">03 / TECNOLOGÍAS</span>
            <h2>Herramientas que utilizo.</h2>
          </div>

          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section contact" id="contacto">
          <span className="section-kicker">04 / CONTACTO</span>
          <h2>¿Tienes una idea o quieres hablar de un proyecto?</h2>
          <p>
            Puedes sustituir estos enlaces por tu correo, GitHub, LinkedIn,
            Instagram o cualquier red que quieras mostrar públicamente.
          </p>
          <div className="contact-links">
            <a href="mailto:tu-email@ejemplo.com">Email ↗</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="#" onClick={(e) => e.preventDefault()}>LinkedIn ↗</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 AdriMB200</span>
        <span>Hecho con React + Vite</span>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
