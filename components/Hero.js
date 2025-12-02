'use client'

export default function Hero() {
  const handleResumeClick = (e) => {
    e.preventDefault()
    alert('Resume download functionality - Replace with actual resume file path')
  }

  const handleContactClick = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contact')
    if (target) {
      const headerOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="status-badge">
              <span className="status-dot"></span>
              <span>Open to new opportunities</span>
            </div>
            <h1 className="hero-name">
              Senior Backend Engineer
              <span className="gradient-text">architecting scalable AI & SaaS platforms.</span>
            </h1>
            <p className="hero-tagline">
              Results-driven Backend and Full Stack Engineer with 9+ years of experience designing and 
              delivering enterprise SaaS platforms, FinTech APIs, and AI-driven systems. Proven success in 
              architecting scalable, secure, and high-performance cloud infrastructures.
            </p>
            <div className="hero-buttons">
              <a href="#" className="btn btn-primary" onClick={handleResumeClick}>
                Download Resume
                <i className="fas fa-download"></i>
              </a>
              <a href="#contact" className="btn btn-secondary" onClick={handleContactClick}>Contact Me</a>
            </div>
            <div className="hero-tags">
              <div className="tag-item">
                <span className="tag-dot"></span>
                <span>Enterprise SaaS</span>
              </div>
              <div className="tag-item">
                <span className="tag-dot"></span>
                <span>AI-Driven Systems</span>
              </div>
              <div className="tag-item">
                <span className="tag-dot"></span>
                <span>FinTech & Cloud</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-glow"></div>
            <div className="hero-card-content">
              <div className="hero-avatar-wrapper">
                <div className="hero-avatar">
                  <img
                    src="/isaac.png"
                    alt="Isaac Gyasi Nimako"
                  />
                </div>
              </div>
              <div className="hero-card-info">
                <h2>Isaac Gyasi Nimako</h2>
                <p>Senior Backend Engineer · Full Stack</p>
                <p className="hero-card-desc">9+ years building enterprise SaaS platforms, FinTech APIs, and AI-driven systems.</p>
              </div>
              <div className="hero-card-stats">
                <div className="stat-box">
                  <span className="stat-label">Primary</span>
                  <span className="stat-value">C# · ASP.NET</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Backend</span>
                  <span className="stat-value">.NET · Node · Python</span>
                </div>
                <div className="stat-box">
                  <span className="stat-label">Cloud</span>
                  <span className="stat-value">AWS · Azure</span>
                </div>
              </div>
              <div className="hero-card-footer">
                <div className="footer-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Accra, Ghana</span>
                </div>
                <div className="footer-item">
                  <i className="fas fa-code"></i>
                  <span>Microservices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

