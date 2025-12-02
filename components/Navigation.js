'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '@/hooks/useTheme'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollY = window.pageYOffset

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight
        const sectionTop = section.offsetTop - 100
        const sectionId = section.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar" id="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>IGN</a>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
            <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
            <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
            <li><a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#experience')}>Experience</a></li>
            <li><a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#skills')}>Skills</a></li>
            <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
            <li><a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#education')}>Education</a></li>
            <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
          </ul>
          <div className="nav-controls">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              <span className="theme-icon-wrapper">
                <i className={`fas fa-sun sun-icon ${theme === 'light' ? 'active' : ''}`}></i>
                <i className={`fas fa-moon moon-icon ${theme === 'dark' ? 'active' : ''}`}></i>
              </span>
            </button>
            <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

