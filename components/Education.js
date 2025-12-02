'use client'

export default function Education() {
  const education = [
    {
      degree: 'B.Tech. Telecommunication Engineering',
      institution: 'Koforidua Technical University',
      date: '2015 – 2017',
      details: 'Specialized in telecommunications systems and network engineering'
    },
    {
      degree: 'B.Sc. Computer Science',
      institution: 'Koforidua Technical University',
      date: '2011 – 2015',
      details: 'Foundation in computer science principles, algorithms, and software engineering'
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-date">{edu.date}</p>
              <p className="education-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



