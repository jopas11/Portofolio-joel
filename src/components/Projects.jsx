import React from 'react'

const projects = [
  {
    title: 'KopiRasa Landing Page',
    type: 'Landing Page',
    summary: 'Meningkatkan konversi pesan WhatsApp lewat struktur hero, testimoni, dan CTA bertahap.',
    stack: ['React', 'Vite', 'CSS Modules'],
    live: 'https://example.com',
    repo: 'https://github.com/username/kopirasa-landing',
  },
  {
    title: 'Dashboard Inventaris Toko',
    type: 'Web App',
    summary: 'Memudahkan monitoring stok, laporan pembelian, dan notifikasi barang menipis.',
    stack: ['React', 'Node.js', 'MySQL'],
    live: 'https://example.com',
    repo: 'https://github.com/username/dashboard-inventaris',
  },
  {
    title: 'Website Profil Konsultan',
    type: 'Company Profile',
    summary: 'Desain profesional dengan performa tinggi dan struktur SEO untuk pencarian lokal.',
    stack: ['React', 'GSAP', 'Netlify'],
    live: 'https://example.com',
    repo: 'https://github.com/username/konsultan-profile',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Proyek</p>
          <h2>Beberapa project yang pernah saya kerjakan.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="stack-list">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
