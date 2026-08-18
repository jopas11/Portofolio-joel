import React, { useState, useEffect } from 'react'

export default function Header({ name }) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 680) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#home">
          {name}
        </a>
        <button
          className={`hamburger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Navigasi utama">
          <a href="#about" onClick={closeMenu}>Tentang</a>
          <a href="#projects" onClick={closeMenu}>Proyek</a>
          <a href="#contact" onClick={closeMenu}>Kontak</a>
        </nav>
      </div>
    </header>
  )
}
