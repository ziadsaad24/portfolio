import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
  const [contactRef, contactVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">I'm actively looking for opportunities. Let's connect!</p>
        <div className="contact-content">
          <div 
            ref={contactRef}
            className={`contact-info ${contactVisible ? 'animate-in' : ''}`}
          >
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:ziko-saad2009@hotmail.com">ziko-saad2009@hotmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/ziad-saad24/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/ziad-saad24
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="contact-details">
                <h3>GitHub</h3>
                <a href="https://github.com/ziadsaad24" target="_blank" rel="noopener noreferrer">
                  github.com/ziadsaad24
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2026 Ziad Mohammed. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
