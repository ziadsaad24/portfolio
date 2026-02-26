import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsRef, projectsVisible] = useScrollAnimation({ threshold: 0.1 });

  const projects = [
    {
      icon: 'fas fa-graduation-cap',
      category: 'Web Application',
      year: '2025',
      title: 'School Management System',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      shortDesc: 'Comprehensive school administration platform with MVC architecture.',
      description: 'A complete school management system built with Laravel MVC for efficient academic administration.',
      role: 'This was my first large-scale project where I designed and implemented the entire system architecture. The biggest challenge was managing complex database relationships between students, teachers, classes, and parents. I studied Laravel deeply through YouTube tutorials but focused on understanding concepts rather than just copying code, which helped me adapt solutions to my specific needs.',
      features: [
        'Class and academic year management',
        'Student enrollment and tracking',
        'Teacher administration portal',
        'Parent communication system',
        'Fee management and reports'
      ],
      tech: ['PHP', 'Laravel', 'MySQL', 'Bootstrap', 'MVC'],
      github: 'https://github.com/ziadsaad24/school-management-system'
    },
    {
      icon: 'fas fa-heartbeat',
      category: 'Healthcare',
      year: '2026',
      title: 'Healix - Medical Records Platform',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      shortDesc: 'Healthcare solution for digitizing medical records and emergency access.',
      description: 'An innovative full-stack healthcare platform developed during a hackathon with React frontend and Laravel backend that revolutionizes medical record management.',
      role: 'Worked in a team of 4 (Data specialist, AI developer, UI designer, and myself as Backend). I developed the entire Laravel backend API and also built the React frontend integrated with our AI chatbot. This hackathon pushed me to work with new technologies under tight time constraints, and I successfully delivered a functional full-stack solution within 24 hours.',
      features: [
        'Digital medical records with vital patient information',
        'Emergency access via QR code cards',
        'AI-powered chatbot for first-aid guidance',
        'Secure patient data management',
        'Dashboard for tracking medical history'
      ],
      tech: ['React', 'Laravel', 'MySQL', 'AI Integration', 'QR Code'],
      github: 'https://github.com/ziadsaad24/healix'
    },
    {
      icon: 'fas fa-shopping-cart',
      category: 'E-commerce API',
      year: '2026 - In Progress',
      title: 'E-commerce Platform API',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      shortDesc: 'Full-featured RESTful API for e-commerce with advanced authentication & role-based access.',
      description: 'A comprehensive Laravel-based API system with complete authentication, multi-role management (Admin, Customer, Delivery), order processing, and integrated payment system.',
      role: 'Designed and developed the entire backend API architecture, implemented role-based permissions system, built order management workflow, and integrated payment gateway. Currently optimizing performance and adding advanced API features.',
      features: [
        'Complete authentication & authorization system',
        'Multi-role management (Admin, Customer, Delivery)',
        'Order processing & checkout workflow',
        'Payment gateway integration',
        'RESTful API with comprehensive endpoints'
      ],
      tech: ['Laravel', 'RESTful APIs', 'MySQL', 'Authentication', 'Payment Integration'],
      github: 'https://github.com/ziadsaad24/ecommerce-api'
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        nextProject();
      } else if (e.key === 'ArrowLeft') {
        prevProject();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextProject();
    }
    if (touchStart - touchEnd < -75) {
      // Swipe right
      prevProject();
    }
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Personal and academic projects I've built to learn and grow</p>
        </div>
        
        <div 
          ref={projectsRef}
          className={`projects-carousel ${projectsVisible ? 'animate-in' : ''}`}
        >
          <button className="carousel-nav prev" onClick={prevProject} aria-label="Previous project">
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="projects-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="project-card active" 
              key={currentIndex}
              style={{ '--card-gradient': currentProject.gradient }}
            >
              <div className="card-glow" style={{ background: currentProject.gradient }}></div>
              
              <div className="project-card-content">
                <div className="project-left-column">
                  <div className="project-header">
                    <div className="project-icon">
                      <i className={currentProject.icon}></i>
                    </div>
                    <div className="project-meta">
                      <span className="project-category">{currentProject.category}</span>
                      <span className="project-year">{currentProject.year}</span>
                    </div>
                  </div>
                  
                  <h3 className="project-title">{currentProject.title}</h3>
                  <p className="project-short-desc">{currentProject.shortDesc}</p>
                  <p className="project-description">{currentProject.description}</p>
                  
                  <div className="project-role">
                    <h4>{currentIndex === 0 ? 'My Role:' : 'My Role & Challenge:'}</h4>
                    <p>{currentProject.role}</p>
                  </div>
                </div>
                
                <div className="project-right-column">
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {currentProject.features.map((feature, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check-circle"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="project-tech">
                {currentProject.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="project-btn primary">
                  <i className="fab fa-github"></i>
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>

          <button className="carousel-nav next" onClick={nextProject} aria-label="Next project">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="carousel-indicators">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`indicator ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
