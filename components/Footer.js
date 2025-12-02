'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; {currentYear} Isaac Gyasi Nimako. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/isaac-gyasi-1a6657106/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/nimako" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

