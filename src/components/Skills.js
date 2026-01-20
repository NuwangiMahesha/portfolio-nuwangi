import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'UI/UX']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'Firebase', 'REST APIs', 'Database Design']
    },
    {
      category: 'Mobile',
      skills: ['Kotlin', 'Android', 'React Native', 'Mobile UI']
    },
    {
      category: 'IoT & Hardware',
      skills: ['Arduino', 'IoT Systems', 'Embedded Systems', 'Sensor Integration']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Tableau', 'Oracle Database']
    },
    {
      category: 'Other',
      skills: ['C#', 'Data Warehousing', 'Project Management', 'Agile']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
