import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Skills.css';

const Skills = () => {
  const [skillsRef, skillsVisible] = useScrollAnimation({ threshold: 0.1 });

  const skills = [
    { name: 'PHP', icon: 'devicon-php-plain', level: 'Intermediate' },
    { name: 'Laravel', icon: 'devicon-laravel-plain', level: 'Intermediate' },
    { name: 'MySQL', icon: 'devicon-mysql-plain', level: 'Intermediate' },
    { name: 'RESTful APIs', icon: 'fas fa-code', level: 'Intermediate' },
    { name: 'HTML/CSS', icon: 'devicon-html5-plain', level: 'Intermediate' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain', level: 'Basic' },
    { name: 'Python', icon: 'devicon-python-plain', level: 'Basic' },
    { name: 'Git', icon: 'devicon-git-plain', level: 'Intermediate' },
    { name: 'Linux', icon: 'devicon-linux-plain', level: 'Basic' },
    { name: 'Networking', icon: 'fas fa-network-wired', level: 'Basic' },
    { name: 'Pentesting', icon: 'fas fa-shield-alt', level: 'Basic' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">Technologies I work with to bring ideas to life</p>
        <div 
          ref={skillsRef}
          className={`skills-grid ${skillsVisible ? 'animate-in' : ''}`}
        >
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-wrapper">
                <i className={skill.icon}></i>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <span className={`skill-level ${skill.level.toLowerCase()}`}>{skill.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
