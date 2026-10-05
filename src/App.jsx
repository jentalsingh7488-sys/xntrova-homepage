import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      number: "01",
      icon: "◈",
      title: "Digital Marketing",
      text: "Build a stronger digital presence with campaigns designed to attract, engage and convert.",
    },
    {
      number: "02",
      icon: "⌘",
      title: "Web Development",
      text: "Fast, modern and responsive websites that turn visitors into loyal customers.",
    },
    {
      number: "03",
      icon: "◎",
      title: "SEO & Growth",
      text: "Improve your visibility, reach the right audience and grow your organic traffic.",
    },
    {
      number: "04",
      icon: "✦",
      title: "Branding & Creative",
      text: "Create a memorable brand identity that makes your business stand out.",
    },
  ];

  const benefits = [
    "Strategy-first approach",
    "Creative & technical expertise",
    "Transparent communication",
    "Results-focused execution",
  ];

  const projects = [
    {
      category: "Digital Growth",
      title: "Building brands that get noticed",
      text: "A complete digital strategy focused on visibility, engagement and measurable growth.",
      number: "01",
    },
    {
      category: "Web Experience",
      title: "Turning ideas into digital experiences",
      text: "Modern interfaces designed around users, business goals and conversion.",
      number: "02",
    },
    {
      category: "Brand Strategy",
      title: "Creating identities with purpose",
      text: "Strategic branding that communicates value and builds lasting recognition.",
      number: "03",
    },
  ];

  const testimonials = [
    {
      text: "Xntrova understood our vision and transformed it into a digital experience that truly represents our brand.",
      name: "Business Owner",
      role: "Founder & Director",
    },
    {
      text: "The team combines creativity with a clear understanding of business goals. The entire process felt professional.",
      name: "Marketing Lead",
      role: "Growth & Marketing",
    },
    {
      text: "From strategy to execution, everything was handled with attention to detail and a strong focus on results.",
      name: "Company Director",
      role: "Technology & Business",
    },
  ];

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="logo">
            XNTROVA<span>.</span>
          </a>

          <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Our Work</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Let's Talk <span>↗</span>
          </a>

          <button
            className={`menu-button ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero-section" id="home">
          <div className="hero-grid"></div>

          <div className="container hero-content">
            <div className="hero-tag">
              <span className="status-dot"></span>
              Digital solutions for ambitious brands
            </div>

            <h1>
              We build
              <br />
              <span>digital experiences</span>
              <br />
              that <em>move business.</em>
            </h1>

            <p className="hero-description">
              Xntrova is a digital marketing and technology agency helping
              businesses turn ideas into powerful digital experiences,
              meaningful connections and measurable growth.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-button">
                Start a project <span>↗</span>
              </a>

              <a href="#work" className="secondary-button">
                Explore our work <span>↓</span>
              </a>
            </div>

            <div className="hero-bottom">
              <div className="hero-stat">
                <strong>360°</strong>
                <span>Digital solutions</span>
              </div>

              <div className="hero-stat">
                <strong>Creative</strong>
                <span>Thinking & strategy</span>
              </div>

              <div className="hero-stat">
                <strong>Results</strong>
                <span>That matter</span>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="services-section section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">WHAT WE DO</span>
                <h2>
                  Everything you need
                  <br />
                  to <span>grow digitally.</span>
                </h2>
              </div>

              <p>
                From strategy and design to technology and marketing, we bring
                everything together under one roof.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top">
                    <span className="service-icon">{service.icon}</span>
                    <span className="service-number">{service.number}</span>
                  </div>

                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>

                  <a href="#contact" className="card-link">
                    Discover service <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section section" id="about">
          <div className="container about-grid">
            <div className="about-visual">
              <div className="visual-card">
                <span className="visual-small">XNTROVA</span>

                <div className="visual-circle">
                  <div className="circle-inner">X</div>
                </div>

                <span className="visual-year">DIGITAL<br />AGENCY</span>
              </div>

              <div className="floating-card">
                <strong>Ideas</strong>
                <span>→ Impact</span>
              </div>
            </div>

            <div className="about-content">
              <span className="eyebrow">ABOUT XNTROVA</span>

              <h2>
                Technology meets
                <br />
                <span>creative thinking.</span>
              </h2>

              <p className="large-text">
                We believe great digital experiences happen when strategy,
                creativity and technology work together.
              </p>

              <p>
                Xntrova helps businesses navigate the digital world with
                solutions that are not only visually impressive but also
                purposeful, practical and built for growth.
              </p>

              <a href="#contact" className="text-button">
                Know more about us <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="benefits-section section">
          <div className="container">
            <div className="benefits-heading">
              <span className="eyebrow">WHY XNTROVA</span>
              <h2>
                We don't just
                <br />
                <span>deliver. We care.</span>
              </h2>
            </div>

            <div className="benefits-content">
              <p>
                Your business deserves more than a template solution. We take
                time to understand your goals, your audience and your market
                before building a solution around them.
              </p>

              <div className="benefit-list">
                {benefits.map((benefit, index) => (
                  <div className="benefit-item" key={benefit}>
                    <span>0{index + 1}</span>
                    <strong>{benefit}</strong>
                    <i>↗</i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process-section section">
          <div className="container">
            <div className="section-heading process-heading">
              <div>
                <span className="eyebrow">OUR PROCESS</span>
                <h2>
                  From first idea
                  <br />
                  <span>to final impact.</span>
                </h2>
              </div>

              <p>
                A simple, transparent process designed to keep projects moving
                and ideas growing.
              </p>
            </div>

            <div className="process-line">
              <div className="process-step">
                <span>01</span>
                <div>
                  <h3>Discover</h3>
                  <p>We understand your business, audience and objectives.</p>
                </div>
              </div>

              <div className="process-step">
                <span>02</span>
                <div>
                  <h3>Plan</h3>
                  <p>We create a clear strategy and roadmap for success.</p>
                </div>
              </div>

              <div className="process-step">
                <span>03</span>
                <div>
                  <h3>Create</h3>
                  <p>Our designers, developers and marketers bring it to life.</p>
                </div>
              </div>

              <div className="process-step">
                <span>04</span>
                <div>
                  <h3>Grow</h3>
                  <p>We measure, improve and keep your digital growth moving.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="work-section section" id="work">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">SELECTED WORK</span>
                <h2>
                  Ideas brought
                  <br />
                  <span>to life.</span>
                </h2>
              </div>

              <p>
                A glimpse of how strategy, creativity and technology can come
                together to create meaningful digital experiences.
              </p>
            </div>

            <div className="projects">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-image">
                    <span className="project-number">{project.number}</span>
                    <div className="project-shape"></div>
                    <div className="project-label">{project.category}</div>
                  </div>

                  <div className="project-info">
                    <div>
                      <span>{project.category}</span>
                      <h3>{project.title}</h3>
                      <p>{project.text}</p>
                    </div>

                    <a href="#contact" className="round-arrow">↗</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonial-section section">
          <div className="container">
            <div className="testimonial-heading">
              <span className="eyebrow">CLIENT VOICES</span>
              <h2>
                Good work speaks
                <br />
                <span>for itself.</span>
              </h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((testimonial, index) => (
                <article className="testimonial-card" key={index}>
                  <div className="quote">“</div>

                  <p>{testimonial.text}</p>

                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container cta-content">
            <span className="eyebrow">LET'S CREATE SOMETHING</span>

            <h2>
              Have an idea?
              <br />
              <span>Let's make it happen.</span>
            </h2>

            <p>
              Tell us what you're building, where you want to go and what
              success looks like. We'll take it from there.
            </p>

            <a href="#contact" className="cta-button">
              Start a conversation <span>↗</span>
            </a>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section section" id="contact">
          <div className="container contact-grid">
            <div className="contact-intro">
              <span className="eyebrow">GET IN TOUCH</span>

              <h2>
                Let's talk about
                <br />
                your <span>next move.</span>
              </h2>

              <p>
                Have a project in mind? Fill out the form and tell us a little
                about it. We'd love to hear from you.
              </p>

              <div className="contact-details">
                <div>
                  <span>Email</span>
                  <a href="mailto:hello@xntrova.com">hello@xntrova.com</a>
                </div>

                <div>
                  <span>Website</span>
                  <a href="https://www.xntrova.com/" target="_blank" rel="noreferrer">
                    xntrova.com
                  </a>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <label>
                  Your name
                  <input type="text" placeholder="John Doe" />
                </label>

                <label>
                  Email address
                  <input type="email" placeholder="john@example.com" />
                </label>
              </div>

              <label>
                Company / Business
                <input type="text" placeholder="Your company name" />
              </label>

              <label>
                What can we help with?
                <select defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Digital Marketing</option>
                  <option>Web Development</option>
                  <option>SEO & Growth</option>
                  <option>Branding & Creative</option>
                </select>
              </label>

              <label>
                Tell us about your project
                <textarea
                  rows="5"
                  placeholder="A few words about your project..."
                ></textarea>
              </label>

              <button type="submit" className="submit-button">
                Send enquiry <span>↗</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <a href="#home" className="logo">
              XNTROVA<span>.</span>
            </a>

            <p>
              Digital experiences built for
              <br />
              ambitious businesses.
            </p>

            <a href="#home" className="back-top">
              Back to top ↑
            </a>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Xntrova Technologies. All rights reserved.</span>

            <div>
              <a href="#home">Privacy</a>
              <a href="#home">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;