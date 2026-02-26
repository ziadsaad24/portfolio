import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <i className="fas fa-code"></i>
            <span>Backend Developer</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Ziad Mohammed</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Building Robust<span className="typing-text"> Web Solutions</span>
          </h2>
          
          <p className="hero-description">
            Specialized in <strong>PHP & Laravel</strong>, crafting scalable backend systems, 
            RESTful APIs, and secure web applications. Passionate about clean code and 
            innovative problem-solving.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">5+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-value">PHP</div>
              <div className="stat-label">Laravel</div>
            </div>
            <div className="stat">
              <div className="stat-value">Open</div>
              <div className="stat-label">To Work</div>
            </div>
          </div>
          
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              <i className="fas fa-rocket"></i>
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              <i className="fas fa-envelope"></i>
              Get In Touch
            </button>
          </div>
          
          <div className="hero-social">
            <a href="https://github.com/ziadsaad24" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ziad-saad24/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="floating-card">
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="code-title">Backend.php</div>
              </div>
              <div className="code-snippet">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span className="code-keyword">class</span> 
                  <span className="code-class"> Developer</span>
                </div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="code-bracket">{'{'}</span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  <span className="code-indent">
                    <span className="code-keyword">public</span>
                    <span className="code-property"> $name</span>
                    <span className="code-operator"> = </span>
                    <span className="code-string">"Ziad"</span>
                    <span className="code-operator">;</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="code-indent">
                    <span className="code-keyword">public</span>
                    <span className="code-property"> $skills</span>
                    <span className="code-operator"> = [</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">5</span>
                  <span className="code-indent code-indent-2">
                    <span className="code-string">"PHP"</span>
                    <span className="code-operator">, </span>
                    <span className="code-string">"Laravel"</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">6</span>
                  <span className="code-indent">
                    <span className="code-operator">];</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">7</span>
                  <span className="code-bracket">{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
