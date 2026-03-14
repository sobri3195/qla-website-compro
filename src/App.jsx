import { useEffect, useState } from 'react'

const services = [
  {
    title: 'Basic Medical Treatment',
    desc: 'Comprehensive primary care with trusted physicians, accurate diagnostics, and seamless continuity for your daily health needs.',
    icon: '✚',
  },
  {
    title: 'Lab & Vaccination',
    desc: 'Precision laboratory screening and vaccination programs designed for prevention, early detection, and long-term protection.',
    icon: '◈',
  },
  {
    title: 'IV Therapy',
    desc: 'Clinically supervised IV therapy to support hydration, recovery, immunity, vitality, and optimized functional wellness.',
    icon: '⬤',
  },
  {
    title: 'Aesthetic Medicine',
    desc: 'Advanced aesthetic treatments with medical-grade protocols for natural refinement, confidence, and rejuvenated appearance.',
    icon: '◇',
  },
  {
    title: 'Wellness Programs',
    desc: 'Integrated wellness programs focusing on longevity, anti-aging support, and elevated quality of life through personalized care.',
    icon: '∞',
  },
]

const gallerySlides = [
  {
    title: 'Personalized Consultation Experience',
    caption: 'One-on-one consultation designed around your health goals and lifestyle.',
    image:
      'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Modern Clinical Environment',
    caption: 'Elegant facilities with professional standards for comfort, safety, and trust.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Holistic Wellness Monitoring',
    caption: 'Continuous follow-up to help you build healthier habits and long-term vitality.',
    image:
      'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1400&q=80',
  },
]

const steps = ['Consultation', 'Assessment', 'Personalized Recommendation', 'Treatment & Follow-up']

const reasons = [
  'Trusted professionals with high clinical standards',
  'Personalized treatment designed around your goals',
  'Premium service experience in a modern environment',
  'Holistic wellness approach for healthy aging',
  'AI-assisted personalization for smarter care insights',
]

const testimonials = [
  {
    quote:
      'QLA transformed the way I approach health. The care plan felt premium, thoughtful, and deeply personal.',
    name: 'Nadia A.',
    role: 'Private Client',
  },
  {
    quote:
      'From consultation to follow-up, every detail reflected clinical excellence and a truly elegant wellness experience.',
    name: 'Ricky H.',
    role: 'Executive Professional',
  },
]

const whatsappNumber = '6281234567890'
const whatsappHref = `https://wa.me/${whatsappNumber}`

function LogoMark() {
  return (
    <div className="logo" aria-label="QLA Logo">
      <span className="plus">+</span>
      <span className="letters">QLA</span>
    </div>
  )
}

function App() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % gallerySlides.length)
    }, 4500)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    setActiveSlide(index)
  }

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % gallerySlides.length)
  }

  const previousSlide = () => {
    setActiveSlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length)
  }

  return (
    <>
      <header className="header">
        <div className="container nav">
          <LogoMark />
          <nav>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#how">How it Works</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href={whatsappHref} className="btn btn-sm btn-whatsapp" target="_blank" rel="noreferrer">
            WhatsApp Admin
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Premium Medical Wellness</p>
              <h1>Quality Life without Aging with Trusted, Modern, and Elegant Care.</h1>
              <p className="lead">
                QLA delivers premium medical wellness solutions, preventive care, anti-aging support, health therapy, and aesthetic medicine
                to help you enjoy a higher quality of life through personalized and professional care.
              </p>
              <div className="cta-group">
                <a className="btn btn-gold" href="#contact">
                  Book a Consultation
                </a>
                <a className="btn btn-outline" href="#services">
                  Explore Services
                </a>
                <a className="btn btn-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
                  Chat via WhatsApp
                </a>
              </div>
            </div>
            <div className="hero-card">
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
                alt="Doctor consulting with a patient in a modern clinic"
              />
              <span className="chip">Premium Care Guarantee</span>
              <h3>QLA Signature Promise</h3>
              <p>
                Luxury clinic meets modern wellness: high-standard care, precise assessment, and a warm premium experience for healthy aging
                and long-term vitality.
              </p>
              <ul>
                <li>Professional and trusted care</li>
                <li>Personalized treatment roadmap</li>
                <li>Premium service experience</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-col">
            <div>
              <p className="eyebrow">About QLA</p>
              <h2>Elevating Preventive Care, Aesthetics, and Wellness into One Premium Ecosystem.</h2>
            </div>
            <p>
              QLA (Quality Life without Aging) is a premium health brand that combines preventive medicine, anti-aging support, health
              therapy, and modern aesthetic treatments. Our focus is professional assessment-based personalized care so every client receives
              the right solution for better quality of life.
            </p>
          </div>
        </section>

        <section id="services" className="section alt">
          <div className="container">
            <p className="eyebrow">Core Divisions & Services</p>
            <h2>Integrated Premium Services for Every Stage of Your Health Journey.</h2>
            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <a href="#contact">Learn More →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="container">
            <p className="eyebrow">Image Gallery</p>
            <h2>QLA Facilities and Care Experience</h2>
            <div className="slider" aria-label="QLA image slideshow">
              <button type="button" className="slider-btn" onClick={previousSlide} aria-label="Previous slide">
                ←
              </button>
              <figure className="slide-card">
                <img src={gallerySlides[activeSlide].image} alt={gallerySlides[activeSlide].title} />
                <figcaption>
                  <strong>{gallerySlides[activeSlide].title}</strong>
                  <span>{gallerySlides[activeSlide].caption}</span>
                </figcaption>
              </figure>
              <button type="button" className="slider-btn" onClick={nextSlide} aria-label="Next slide">
                →
              </button>
            </div>
            <div className="slider-dots" role="tablist" aria-label="Select slide">
              {gallerySlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  className={index === activeSlide ? 'dot active' : 'dot'}
                  onClick={() => goToSlide(index)}
                  aria-label={`View slide ${index + 1}`}
                  aria-selected={index === activeSlide}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <p className="eyebrow">QLA Value Proposition</p>
            <h2>Where Clinical Credibility Meets Luxury Wellness Experience.</h2>
            <div className="usp-grid">
              {reasons.map((reason) => (
                <div key={reason} className="usp-item">
                  <span>+</span>
                  <p>{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="section">
          <div className="container">
            <p className="eyebrow">How It Works</p>
            <h2>Simple, Structured, and Personal.</h2>
            <div className="steps">
              {steps.map((step, idx) => (
                <div key={step} className="step-card">
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                  <h3>{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <p className="eyebrow">Why Choose QLA</p>
            <h2>Designed for Individuals Who Value Health, Elegance, and Longevity.</h2>
            <div className="check-grid">
              {reasons.map((item) => (
                <div key={item} className="check-item">
                  <strong>✓</strong>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow">Testimonials & Trust</p>
            <h2>Trusted by Clients Seeking Premium, Long-Term Health Outcomes.</h2>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <blockquote key={item.name}>
                  “{item.quote}”
                  <footer>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
            <div className="stats">
              <div>
                <strong>98%</strong>
                <span>Client Satisfaction</span>
              </div>
              <div>
                <strong>87%</strong>
                <span>Repeat Clients</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Care Coordination</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section cta">
          <div className="container cta-box">
            <h2>Start Your Personalized Wellness Journey with QLA Today.</h2>
            <p>Book your consultation and discover a premium path toward healthier aging, better vitality, and refined confidence.</p>
            <div className="cta-group">
              <a className="btn btn-gold" href="mailto:admin@qla.co.id">
                Book Appointment
              </a>
              <a className="btn btn-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <a className="floating-wa" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat via WhatsApp">
        WhatsApp
      </a>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <LogoMark />
            <p>Quality Life without Aging — premium medical wellness and personalized care for healthier, longer living.</p>
          </div>
          <div>
            <h4>Navigation</h4>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#how">How it Works</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:admin@qla.co.id">admin@qla.co.id</a>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
              +62 812 3456 7890
            </a>
            <p>Jakarta, Indonesia</p>
          </div>
          <div>
            <h4>Social</h4>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">YouTube</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <small>© {new Date().getFullYear()} QLA. All rights reserved.</small>
          <small>Disclaimer: Services are provided based on professional medical consultation results.</small>
        </div>
      </footer>
    </>
  )
}

export default App
