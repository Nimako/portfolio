'use client'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <p>
              Results-driven Backend and Full Stack Engineer with 9+ years of experience designing and 
              delivering enterprise SaaS platforms, FinTech APIs, and AI-driven systems. Proven success in 
              architecting scalable, secure, and high-performance cloud infrastructures using C#, ASP.NET 
              Core, and modern distributed systems.
            </p>
            <p>
              Skilled in microservices, multi-tenancy, and DevOps practices, with a strong track record of 
              improving system efficiency, reliability, and team productivity. Experienced in building 
              event-driven architectures, implementing OAuth2 security, and deploying scalable infrastructure 
              on AWS and Azure.
            </p>
            <p>
              I value thoughtful communication, mentorship, and consistent, incremental improvement. I am most
              effective in environments where ownership, autonomy, and quality are prioritized.
            </p>
          </div>
          <div className="about-cards">
            <div className="about-card">
              <span className="about-card-label">EXPERIENCE</span>
              <h3 className="about-card-value">9+ years</h3>
              <p className="about-card-desc">Building enterprise SaaS platforms, FinTech APIs, and AI-driven systems.</p>
            </div>
            <div className="about-card">
              <span className="about-card-label">SPECIALIZATIONS</span>
              <ul className="about-card-list">
                <li>Enterprise SaaS</li>
                <li>Microservices & Multi-tenancy</li>
                <li>AI-Driven Systems</li>
                <li>FinTech & Payment Systems</li>
              </ul>
            </div>
            <div className="about-card">
              <span className="about-card-label">APPROACH</span>
              <p className="about-card-desc">Pragmatic, test-driven, and performance-aware, with strong focus on observability.</p>
            </div>
            <div className="about-card">
              <span className="about-card-label">WORKING STYLE</span>
              <p className="about-card-desc">Autonomous, collaborative, and comfortable driving projects from design to launch.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



