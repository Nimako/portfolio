'use client'

export default function Experience() {
  const experiences = [
    {
      title: 'Lead Backend Engineer',
      company: 'Pilgrim Consulting Group (TechHalo.ai)',
      date: 'Jan 2023 – Present',
      location: 'Accra, Ghana',
      details: [
        'Architected middleware backend engine using ASP.NET Zero to integrate frontend clients with AI engines, implementing multi-tenancy and RBAC',
        'Designed REST APIs with OAuth2 security and automated document ingestion pipeline for enterprise AI capabilities',
        'Built event-driven microservices with RabbitMQ and Redis, reducing latency by 30%',
        'Deployed scalable infrastructure on AWS (EC2, S3, RDS) with Dockerized services'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'TGL Systems (ECG Vending System)',
      date: '2021 – 2022',
      location: 'Accra, Ghana',
      details: [
        'Developed high-volume transaction APIs for electricity vending systems processing thousands of transactions daily',
        'Implemented secure payment integrations via Azure APIM and automated reconciliation workflows',
        'Reduced API response time by 40% through backend optimization and caching',
        'Deployed scalable Azure App Services and CI/CD pipelines via GitHub Actions'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'Axis Pension Group (Primus-Tech)',
      date: 'Jun 2020 – 2021',
      location: 'Accra, Ghana',
      details: [
        'Designed and developed Loan Management System automating approvals and repayments',
        'Launched USSD pension access system serving over 100,000 users with 99.9% uptime',
        'Mentored junior developers, improving code quality and delivery timelines by 25%'
      ]
    },
    {
      title: 'Senior Software Engineer',
      company: 'CediPay / Hisense Ghana',
      date: 'Oct 2019 – Oct 2021',
      location: 'Accra, Ghana',
      details: [
        'Engineered FinTech backend enabling mobile money transfers and merchant payments',
        'Integrated Firebase for real-time data and push notifications across merchant platforms',
        'Strengthened payment security with PCI DSS compliance measures'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-company">{exp.company}</span>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <p className="timeline-location">{exp.location}</p>
                <ul className="timeline-details">
                  {exp.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



