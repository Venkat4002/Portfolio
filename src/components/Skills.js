import React from 'react';
import './Skills.css'; // Ensure you have the appropriate CSS for styling

const Skills = () => {
  const skills = [
    { name: 'Java', level: 85 },
    { name: 'Python', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'NetSuite ERP', level:80},
    { name: 'SAP CLOUD', level:80},
    { name: 'VBA MACROS', level:80},
    { name: 'TypeScript', level: 80 },
    { name: 'SQL', level: 70 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Angular', level: 70 },
    { name: 'React.js', level: 80 },
    { name: 'Spring Boot', level: 80 },
    { name: 'Hibernate', level: 75 },
    { name: 'Node.js', level: 65 },
    { name: 'MySQL', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Azure', level: 65 },
    { name: 'AWS', level: 70 },
    { name: 'Git', level: 90 },
    { name: 'Jenkins', level: 70 },
    { name: 'Docker', level: 75 },
    { name: 'Kubernetes', level: 60 },
    { name: 'EXCEL', level:80},
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-name">{skill.name}</div>
            <div className="skill-bar-container">
              <div
                className="skill-bar"
                style={{ width: `${skill.level}%` }}
              >
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
