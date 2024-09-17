import React from 'react';
import './Skills.css'; // Import the custom CSS file

const skills = [
  { name: 'JavaScript', level: '95%' },
  { name: 'React.js', level: '80%' },
  { name: 'HTML', level: '95%' },
  { name: 'CSS', level: '80%' },
  { name: 'Next.js', level: '75%' },
  { name: 'Express.js', level: '85%' },
  { name: 'MySQL', level: '97%' },
  { name: 'Tailwind CSS', level: '85%' },
  { name: 'MongoDB', level: '80%' },
  { name: ' Figma', level: '80%' },
  { name: 'Node.js', level: '80%' },
  { name: 'MUI Materials', level: '80%' },
  { name: 'Authentication (JWT, JSON Web Tokens)', level: '90%' },
  { name: ' API Development', level: '80%' },
  { name: 'Creativity', level: '80%' },

  
];

const Skills = () => (
  <section id="skills" className="bg-gray-100 py-8">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">{skill.name}</span>
              {/* <span className="text-gray-700">{skill.level}</span> */}
            </div>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;