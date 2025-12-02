'use client'

import { useState } from 'react'

export default function Projects() {
  const [imageErrors, setImageErrors] = useState({})

  const projects = [
    {
      title: 'TechHalo.ai',
      description: 'Enterprise-grade AI-powered knowledge management platform with multi-tenant architecture, automated workflows, and document ingestion pipeline. Features intelligent AI Chatbot and AI-Assisted Voice Processing System for insurance operations.',
      technologies: ['ASP.NET Core', 'RabbitMQ', 'Redis', 'AWS'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
      badge: { icon: 'fa-brain', text: 'AI Platform' },
      placeholder: 'fa-robot'
    },
    {
      title: 'ECG Electricity Vending System',
      description: 'Mission-critical utility payment solution for prepaid and postpaid electricity purchases. Integrated with multiple payment options, vendor APIs, and automated reconciliation system for real-time transaction validation.',
      technologies: ['C#', 'Azure APIM', 'Azure App Services', 'GitHub Actions'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
      badge: { icon: 'fa-money-bill-wave', text: 'FinTech' },
      placeholder: 'fa-bolt'
    }
  ]

  const handleImageError = (projectIndex) => {
    setImageErrors(prev => ({ ...prev, [projectIndex]: true }))
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Recent Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {!imageErrors[index] ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className="project-placeholder">
                    <i className={`fas ${project.placeholder}`}></i>
                  </div>
                )}
                <div className="project-overlay">
                  <div className="project-badge">
                    <i className={`fas ${project.badge.icon}`}></i>
                    <span>{project.badge.text}</span>
                  </div>
                  <div className="project-links">
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

