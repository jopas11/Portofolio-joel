import React from 'react'

export default function Header({ name }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#home">
          {name}
        </a>
        <nav className="nav-links" aria-label="Navigasi utama">
          <a href="#about">Tentang</a>
          <a href="#projects">Proyek</a>
          <a href="#contact">Kontak</a>
        </nav>
      </div>
    </header>
  )
}
