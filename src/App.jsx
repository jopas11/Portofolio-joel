import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const profile = {
  name: 'Joel Pasaribu',
  role: 'Frontend Developer',
  location: 'Batam, Indonesia',
  availability: 'Tersedia untuk freelance',
  email: 'whyjo4@gmail.com',
}

const stats = [
  { label: 'Project Selesai', value: '5+' },
  { label: 'Client Repeat Order', value: '80%' },
  { label: 'Pengalaman', value: '0 Tahun' },
]

export default function App() {
  return (
    <div className="site-shell">
      <Header name={profile.name} />
      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Web Portfolio 2026</p>
              <h1 className="hero-title">
                Halo, saya <span>{profile.name}</span>. Saya membangun website cepat, rapi, dan fokus ke hasil bisnis.
              </h1>
              <p className="lead">
                Saya membantu UMKM, startup, dan personal brand membuat website profesional yang enak dipakai di semua
                ukuran layar.
              </p>
              <div className="hero-actions">
                <a className="btn" href="#projects">
                  Lihat Proyek
                </a>
                <a className="btn btn-outline" href="#contact">
                  Hubungi Saya
                </a>
              </div>
              <ul className="stat-list">
                {stats.map((item) => (
                  <li key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="hero-panel">
              <p className="status-pill">{profile.availability}</p>
              <ul className="quick-list">
                <li>
                  <strong>Role</strong>
                  <span>{profile.role}</span>
                </li>
                <li>
                  <strong>Lokasi</strong>
                  <span>{profile.location}</span>
                </li>
                <li>
                  <strong>Fokus</strong>
                  <span>React, UI/UX, SEO</span>
                </li>
              </ul>
            </aside>
          </div>
        </section>
        <About />
        <Projects />
        <Contact email={profile.email} />
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">(c) {new Date().getFullYear()} {profile.name}. Built with care.</div>
      </footer>
    </div>
  )
}
