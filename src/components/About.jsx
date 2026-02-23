import React from 'react'

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Node.js', 'Figma', 'SEO Dasar']

const services = [
  {
    title: 'Landing Page Conversion',
    detail: 'Halaman promosi yang cepat dibuka, fokus pada CTA, dan siap iklan.',
  },
  {
    title: 'Company Profile Website',
    detail: 'Website profesional untuk meningkatkan trust dan kredibilitas brand.',
  },
  {
    title: 'UI Revamp',
    detail: 'Peremajaan tampilan aplikasi agar lebih modern dan konsisten.',
  },
]

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Tentang</p>
          <h2>Saya merancang pengalaman web yang bersih, jelas, dan dapat diukur hasilnya.</h2>
        </div>

        <div className="about-grid">
          <article className="panel">
            <h3>Profil Singkat</h3>
            <p>
              Fokus saya adalah mengubah kebutuhan bisnis menjadi antarmuka yang mudah dipahami pengguna. Setiap
              proyek dibangun dengan code yang terstruktur, performa baik, dan mudah dikembangkan.
            </p>
          </article>

          <article className="panel">
            <h3>Keahlian Inti</h3>
            <ul className="skill-list">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
