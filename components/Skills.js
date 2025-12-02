'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend',
      skills: ['C#', 'ASP.NET Core', 'PHP', 'Node.js', 'Python', 'REST / gRPC']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'JavaScript', 'HTML5 / CSS3', 'Tailwind']
    },
    {
      title: 'Databases & Data',
      skills: ['MSSQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'RabbitMQ', 'Kafka']
    },
    {
      title: 'DevOps & Cloud',
      skills: ['AWS', 'Azure', 'Docker', 'CI/CD', 'GitHub Actions', 'Terraform']
    }
  ]

  const proficiencies = [
    { name: 'C# / ASP.NET Core', level: 'Advanced', percentage: 95 },
    { name: 'Microservices & Distributed Systems', level: 'Advanced', percentage: 90 },
    { name: 'AWS & Azure Cloud', level: 'Advanced', percentage: 85 },
    { name: 'React.js & Frontend', level: 'Intermediate', percentage: 70 },
    { name: 'Database Design & SQL', level: 'Advanced', percentage: 88 }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <div>
            <h2 className="skills-title">Key Skills</h2>
            <p className="skills-subtitle">A selection of technologies and tools I work with regularly.</p>
          </div>
        </div>
        <div className="skills-content">
          <div className="skills-categories">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3>{category.title}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="skills-proficiencies">
            <div className="proficiencies-header">
              <h3 className="proficiencies-title">Core Proficiencies</h3>
              <span className="proficiencies-note">self-assessed</span>
            </div>
            <div className="proficiencies-list">
              {proficiencies.map((proficiency, index) => (
                <div key={index} className="proficiency-item">
                  <div className="proficiency-header">
                    <span className="proficiency-name">{proficiency.name}</span>
                    <span className="proficiency-level">{proficiency.level}</span>
                  </div>
                  <div className="proficiency-bar">
                    <div className="proficiency-fill" style={{ width: `${proficiency.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="proficiencies-footer">
              <div className="proficiency-attribute">
                <i className="fas fa-users"></i>
                <span>Mentoring & technical leadership</span>
              </div>
              <div className="proficiency-attribute">
                <i className="fas fa-check-double"></i>
                <span>Test-driven development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



