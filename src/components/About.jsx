import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const [aboutRef, aboutVisible] = useScrollAnimation({ threshold: 0.1 });
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const paragraphs = [
    {
      type: 'text',
      text: "I'm a **final-year Statistics & Computer Science student** at Faculty of Science (graduating 2026), specializing in **Backend Development** with **PHP** and **Laravel**. Through hands-on academic and personal projects, I've built full-stack systems with MVC architecture, RESTful APIs, and secure database design."
    },
    {
      type: 'text',
      text: "My technical journey includes developing a **School Management System** and contributing to **Healix**—a healthcare platform with QR-based emergency medical record access—during a competitive hackathon. I've also participated in the **ECPC (Egyptian Collegiate Programming Contest)**, which strengthened my **problem-solving** and algorithmic thinking skills."
    },
    {
      type: 'text',
      text: "I have practical knowledge in **Linux systems**, **networking fundamentals**, and **security testing basics**. My statistical background combined with programming expertise gives me a unique perspective on data-driven development. I'm actively seeking a **Junior Backend Developer** role where I can contribute and grow professionally."
    },
    {
      type: 'learning',
      text: "**What I'm Currently Learning:** I'm constantly working on new projects to expand my skill set, with a focus on deepening my knowledge of **RESTful API design patterns** and **advanced Laravel features**. I'm also exploring more advanced topics in backend development to ensure I'm ready to contribute effectively in a professional environment."
    }
  ];

  // Auto-scroll paragraphs
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [paragraphs.length]);

  const nextParagraph = () => {
    setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
  };

  const prevParagraph = () => {
    setCurrentParagraph((prev) => (prev - 1 + paragraphs.length) % paragraphs.length);
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Passionate backend developer with a unique blend of statistics and programming expertise</p>
        <div 
          ref={aboutRef}
          className={`about-content ${aboutVisible ? 'animate-in' : ''}`}
        >
          <div className="about-main-content">
            <div className="about-carousel-wrapper">
              <button className="about-nav prev" onClick={prevParagraph} aria-label="Previous">
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <div className="about-paragraph-slider">
                <p className="about-paragraph active" key={currentParagraph}>
                  {paragraphs[currentParagraph].text.split(/(\*\*.*?\*\*)/).map((part, idx) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={idx}>{part.slice(2, -2)}</strong>;
                    }
                    return part;
                  })}
                </p>
              </div>
              
              <button className="about-nav next" onClick={nextParagraph} aria-label="Next">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            
            <div className="about-indicators">
              {paragraphs.map((_, idx) => (
                <button
                  key={idx}
                  className={`about-indicator ${idx === currentParagraph ? 'active' : ''}`}
                  onClick={() => setCurrentParagraph(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item" style={{ animationDelay: '0.1s' }}>
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Built</div>
            </div>
            <div className="stat-item" style={{ animationDelay: '0.3s' }}>
              <div className="stat-number">ECPC</div>
              <div className="stat-label">Participant</div>
            </div>
            <div className="stat-item" style={{ animationDelay: '0.5s' }}>
              <div className="stat-number">Ready</div>
              <div className="stat-label">To Work</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
