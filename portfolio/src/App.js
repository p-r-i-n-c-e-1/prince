import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  // Contact form state
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Contact form handler
  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setFormStatus(null);
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setFormStatus('Message sent successfully!');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setFormStatus('Failed to send message.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={`portfolio ${isLoaded ? 'loaded' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">PRINCE</div>
          <div className="nav-links">
          <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="hero">
        <div className="hero-flex">
          <div className="hero-text-content">
            <h1 className="hero-title">Hi, I'm Prince NKUNDIMANA</h1>
            <h2 className="hero-subtitle">IT Student at University of Rwanda</h2>
            <p className="hero-description">
              Passionate about technology and software development. Currently pursuing my degree in Information Technology, focusing on building innovative solutions and expanding my knowledge in the field.
            </p>
            <div className="hero-social-links">
              <a href="https://github.com/p-r-i-n-c-e-1" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/prince-nkundimana-251337285" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="hero-get-in-touch-wrapper">
              <a href="#contact" className="hero-get-in-touch-btn">Get in Touch</a>
            </div>
          </div>
          <div className="hero-profile-pic">
            <img src="/profile.jpg" alt="Prince NKUNDIMANA" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I am an ambitious and results-driven IT student at the University of Rwanda,
            specializing in web development, graphic design and passionate about
            integrating technical expertise with innovative business, IT solutions. With a
            strong foundation in technology, I thrive in dynamic environments that allow me
            to apply creative problem-solving and leadership skills.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2 className="skills-section-title">My Skills</h2>
        <div className="skills-section-center">
          <div className="skills-cards-grid">
            <div className="skills-card">
              <div className="skills-card-icon" style={{color: '#3b82f6'}}>
                <span role="img" aria-label="frontend">💻</span>
              </div>
              <h3>Frontend</h3>
              <ul className="skills-list">
                <li><span role="img" aria-label="React">⚛️</span> React.js</li>
                <li><span role="img" aria-label="JavaScript">🟨</span> JavaScript</li>
                <li><span role="img" aria-label="Tailwind">📦</span>Tailwind</li>
                <li><span role="img" aria-label="HTML5">🟧</span> HTML5</li>
                <li><span role="img" aria-label="CSS3">🟦</span> CSS3</li>
              </ul>
            </div>
            <div className="skills-card">
              <div className="skills-card-icon" style={{color: '#a259fa'}}>
                <span role="img" aria-label="backend">🗄️</span>
              </div>
              <h3>Backend</h3>
              <ul className="skills-list">
                <li><span role="img" aria-label="Node.js">🟩</span> Node.js</li>
                <li><span role="img" aria-label="MySQL">🍃</span> MySQL</li>
                <li><span role="img" aria-label="PostgreSQL">🐘</span> PostgreSQL</li>
                <li><span role="img" aria-label="REST API">🔗</span> REST API</li>
              </ul>
            </div>
            <div className="skills-card">
              <div className="skills-card-icon" style={{color: '#22c55e'}}>
                <span role="img" aria-label="tools">🛠️</span>
              </div>
              <h3>Tools</h3>
              <ul className="skills-list">
                <li><span role="img" aria-label="Git">🟧</span> Git</li>
                <li><span role="img" aria-label="GitHub">🐙</span> GitHub</li>
                <li><span role="img" aria-label="Figma">🎨</span> Figma</li>
                <li><span role="img" aria-label="CLI">⌨️</span> CLI</li>
              </ul>
            </div>
            <div className="skills-card">
              <div className="skills-card-icon" style={{color: '#f59e42'}}>
                <span role="img" aria-label="other">⭐</span>
              </div>
              <h3>Other</h3>
              <ul className="skills-list">
                <li><span role="img" aria-label="Data Analysis">📈</span> Data Analysis</li>
                <li><span role="img" aria-label="UI/UX Design">🖌️</span> UI/UX Design</li>
                <li><span role="img" aria-label="Cloud Services">☁️</span> Cloud Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-icon">📖</div>
            <h3>Library Management System</h3>
            <p className="tech-stack">React, Tailwind CSS, JavaScript, Node with Express</p>
            <p className="description">A responsive Library Management website with books management, borrowing book functionality, borrowed and submitted book with thier Identfications and user authentication.</p>
            <div className="project-links">
              <a href="https://github.com/p-r-i-n-c-e-1" target="_blank" rel="noopener noreferrer">View Code</a>
              <a href="https://librarymanagement-vjgy.onrender.com/" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
                    <div className="project-card">
            <div className="project-icon">🧱</div>
            <h3>Medlink Healthcare System</h3>
            <p className="tech-stack">React, Tailwind CSS, JavaScript, Node with Express</p>
            <p className="description">MedLink is a smart healthcare system that enables patients to book appointments, chat with doctors, receive health updates, and access care even via USSD making healthcare more accessible and efficient.</p>
            <div className="project-links">
              <a href="https://github.com/p-r-i-n-c-e-1" target="_blank" rel="noopener noreferrer">View Code</a>
              <a href="https://medlink-ai-client.vercel.app/about" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-icon">🎨</div>
            <h3>Design Mobile App</h3>
            <p className="tech-stack">Figma</p>
            <p className="description">This is a mobile app design for an event sekeer, where users can search for event and get information about each event and he or she can buy or book by payink ang get the tickets. There is function where you can add new event and add all details related to that new event.</p>
            <div className="project-links">
              <a href="https://www.figma.com/design/ydHpXID2B4Biu5YqWq7pB7/EventSekeer?node-id=0-1&p=f&t=mtqwPFT1PJeYD2FP-0" target="_blank" rel="noopener noreferrer">View Designs</a>
            </div>
          </div>

             <div className="project-card">
            <div className="project-icon">🎨</div>
            <h3>Design News Website</h3>
            <p className="tech-stack">Figma</p>
            <p className="description">This is a newspaper website design for an update news and trending ones, where users can search for news. There is function where you can like, comments and subscribe to each new update and add all details related to that breaking news.</p>
            <div className="project-links">
              <a href="https://www.figma.com/design/P7GIhO1WCFNFMOQny0oJMg/Newspaperproject?node-id=0-1&p=f&t=4buRBBwqkCDPjrXB-0" target="_blank" rel="noopener noreferrer">View Designs</a>
            </div>
          </div>
        
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <h3>Get in Touch</h3>
            <p><span className="icon">📍</span> Kigali, Rwanda</p>
            <p><span className="icon">📧</span> princenkundimana026@gmail.com</p>
            <p><span className="icon">📱</span> +250 783 879 744</p>
            <div className="social-links">
              <a href="https://github.com/p-r-i-n-c-e-1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                {/* Official GitHub SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle'}}>
                  <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/prince-nkundimana-251337285" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                {/* Official LinkedIn SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle'}}>
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
                </svg>
              </a>
            </div>
            <div className="follow-me-section">
              <h4>Follow Me</h4>
              <div className="follow-icons">
                <a href="https://www.linkedin.com/in/prince-nkundimana-251337285" target="_blank" rel="noopener noreferrer" className="follow-icon" aria-label="LinkedIn">
                  {/* Official LinkedIn SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
                  </svg>
                </a>
                <a href="https://github.com/p-r-i-n-c-e-1" target="_blank" rel="noopener noreferrer" className="follow-icon" aria-label="GitHub">
                  {/* Official GitHub SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
                  </svg>
                </a>
                <a href=" https://x.com/Princvaliant12?t=ErY3GDSnWoSFwRATQAQM7Q&s=08 " target="_blank" rel="noopener noreferrer" className="follow-icon" aria-label="Twitter">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1.64a9.09 9.09 0 0 1-2.88 1.1A4.48 4.48 0 0 0 16.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64 1.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 0 1 .96 6.1v.06c0 2.13 1.52 3.91 3.54 4.31-.37.1-.76.16-1.16.16-.28 0-.55-.03-.82-.08.55 1.72 2.16 2.97 4.07 3A9.05 9.05 0 0 1 0 19.54a12.8 12.8 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z"/></svg>
                </a>
                <a href=" https://www.instagram.com/prince_valiant1?igsh=YzljYTk1ODg3Zg== " target="_blank" rel="noopener noreferrer" className="follow-icon" aria-label="Instagram">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-card">
            <h3>Send Me a Message</h3>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleFormChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleFormChange} required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleFormChange} required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" value={form.message} onChange={handleFormChange} required></textarea>
              </div>
              <button type="submit" className="submit-btn" disabled={sending}>
                <span style={{marginRight: '0.5rem', display: 'inline-flex', verticalAlign: 'middle'}}>
                  {/* Paper plane SVG icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </span>
                <span style={{fontStyle: 'oblique'}}>{sending ? 'Sending...' : 'Send Message'}</span>
              </button>
              {formStatus && (
                <div style={{ marginTop: '1rem', color: formStatus.includes('success') ? 'green' : 'red', fontWeight: 500 }}>
                  {formStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Prince NKUNDIMANA. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

