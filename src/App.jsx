import { useEffect, useState } from 'react'

const services = [
  {
    title: 'Executive Preventive Health Program',
    desc: 'Comprehensive physician-led screening, biomarker profiling, and risk mapping designed to detect concerns early and protect long-term health.',
    details: ['Annual and quarterly packages', 'Cardiometabolic and hormonal panels', 'Personalized prevention roadmap'],
    icon: '✚',
  },
  {
    title: 'Personalized IV & Recovery Therapy',
    desc: 'Doctor-supervised infusion protocols tailored to support energy, hydration, immune resilience, cognitive performance, and recovery.',
    details: ['Medical eligibility assessment', 'Premium pharmaceutical-grade ingredients', 'In-clinic monitoring for comfort and safety'],
    icon: '◈',
  },
  {
    title: 'Aesthetic and Regenerative Medicine',
    desc: 'Refined, medically grounded aesthetic treatments that enhance natural features while preserving healthy skin function and harmony.',
    details: ['Medical-grade injectables and skin therapies', 'Age-management treatment plans', 'Natural, conservative treatment philosophy'],
    icon: '◇',
  },
  {
    title: 'Longevity Care Membership',
    desc: 'An ongoing continuity model with scheduled reviews, progress tracking, and treatment optimization for sustained vitality over time.',
    details: ['Dedicated care coordinator', 'Data-driven progress evaluation', 'Integrated lifestyle and nutrition guidance'],
    icon: '∞',
  },
]

const gallerySlides = [
  {
    title: 'Private Consultation Suite',
    caption: 'Calm, confidential clinical consultations focused on your goals and medical history.',
    image:
      'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Premium Clinical Environment',
    caption: 'Designed to medical standards with an elevated hospitality experience.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Precision Diagnostics Partnership',
    caption: 'Advanced laboratory collaboration for accurate, timely, and actionable insights.',
    image:
      'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?auto=format&fit=crop&w=1400&q=80',
  },
]

const trustHighlights = [
  'Led by licensed physicians in preventive, aesthetic, and functional medicine',
  'Evidence-informed protocols with personalized clinical decision making',
  'Strict quality control, sterilization standards, and treatment documentation',
  'Partner laboratory network for advanced diagnostics and biomarker analysis',
]

const team = [
  {
    name: 'Dr. Alina Pratama, M.Biomed (AAM)',
    role: 'Medical Director, Preventive & Aesthetic Medicine',
    blurb: '14+ years of clinical practice with a focus on early risk intervention, metabolic optimization, and natural aesthetic outcomes.',
  },
  {
    name: 'Dr. Kevin Halim, Sp.PD',
    role: 'Internal Medicine Consultant',
    blurb: 'Specialized in cardiometabolic risk management, complex case review, and precision treatment planning for long-term health.',
  },
  {
    name: 'Nadia Wirawan, RN, CWC',
    role: 'Senior Wellness Care Coordinator',
    blurb: 'Coordinates client journeys end-to-end to ensure continuity, comfort, and measurable progress throughout treatment.',
  },
]

const certifications = ['Licensed Clinic Operations (Indonesia MOH)', 'ISO-aligned Clinical Safety SOPs', 'Good Clinical Practice Training', 'Continuous Medical Education Program']

const partners = ['Prodia Clinical Laboratory', 'BioMedica Diagnostics', 'PathLab Genomics', 'Prime Radiology Network']

const processSteps = [
  {
    title: 'Comprehensive Medical Consultation',
    detail:
      'A 45–60 minute physician session to understand your history, lifestyle, goals, and current concerns before any intervention is recommended.',
  },
  {
    title: 'Diagnostic Assessment & Baseline Mapping',
    detail:
      'Targeted bloodwork, body composition, and relevant examinations are performed to define your baseline and identify priorities objectively.',
  },
  {
    title: 'Personalized Treatment Planning',
    detail:
      'Your doctor develops a tailored plan combining preventive medicine, wellness therapies, and aesthetic options based on your risk profile.',
  },
  {
    title: 'Treatment, Monitoring, and Optimization',
    detail:
      'Care is delivered in phases with scheduled reviews, progress analytics, and plan refinement to ensure sustainable, high-quality outcomes.',
  },
]

const testimonials = [
  {
    quote:
      'QLA feels like a private medical club with real clinical depth. My physician explained every recommendation with data, and the follow-up has been exceptional.',
    name: 'Grace T.',
    role: 'Entrepreneur, 41',
  },
  {
    quote:
      'I came for preventive screening and stayed for the continuity of care. The team is discreet, meticulous, and genuinely focused on long-term health.',
    name: 'Armand S.',
    role: 'Regional Executive, 48',
  },
  {
    quote:
      'The aesthetic approach is sophisticated and conservative. Results look natural, and every treatment was handled with clear medical guidance.',
    name: 'Melissa K.',
    role: 'Private Client, 37',
  },
]

const faqs = [
  {
    q: 'Who is QLA best suited for?',
    a: 'QLA is ideal for adults who prioritize preventive health, longevity planning, medically guided aesthetic care, and personalized treatment continuity.',
  },
  {
    q: 'Do I need laboratory tests before treatment?',
    a: 'Not always. Your physician will determine which diagnostics are clinically appropriate. We only recommend tests that directly support safe and effective decisions.',
  },
  {
    q: 'Are treatments personalized or package-based?',
    a: 'Both are available. We offer structured programs for convenience, but every plan is adjusted to your medical profile, goals, and progress over time.',
  },
  {
    q: 'How often should I follow up?',
    a: 'Follow-up frequency depends on your program and baseline findings. Most clients review progress every 4–12 weeks to ensure measurable improvement.',
  },
  {
    q: 'Can international or out-of-town clients access QLA?',
    a: 'Yes. We provide pre-visit coordination, consolidated treatment scheduling, and digital follow-up support where clinically appropriate.',
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

  return (
    <>
      <header className="header">
        <div className="container nav">
          <LogoMark />
          <nav>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#credibility">Credibility</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href={whatsappHref} className="btn btn-sm btn-whatsapp" target="_blank" rel="noreferrer">
            Concierge WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">QLA — Premium Medical Wellness Clinic</p>
              <h1>Preventive Medicine, Refined Aesthetics, and Longevity Care—Delivered with Clinical Precision.</h1>
              <p className="lead">
                QLA combines physician-led preventive care, evidence-based wellness therapy, and sophisticated aesthetic medicine in one
                integrated clinic experience. Every recommendation is personalized, data-informed, and designed for sustainable health.
              </p>
              <div className="cta-group">
                <a className="btn btn-gold" href="#contact">
                  Book Private Consultation
                </a>
                <a className="btn btn-outline" href="#services">
                  View Signature Services
                </a>
              </div>
              <div className="hero-metrics">
                <div>
                  <strong>40+ yrs</strong>
                  <span>Combined Clinical Experience</span>
                </div>
                <div>
                  <strong>1:1</strong>
                  <span>Personalized Physician Attention</span>
                </div>
                <div>
                  <strong>Partnered</strong>
                  <span>Advanced Diagnostic Laboratories</span>
                </div>
              </div>
            </div>
            <div className="hero-card">
              <img
                className="hero-image"
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
                alt="Doctor consultation in a premium clinic"
              />
              <span className="chip">Doctor-Led. Discreet. Personalized.</span>
              <h3>QLA Signature Standard</h3>
              <p>
                We unite high medical standards with a calm, private patient experience—so your care feels both scientifically rigorous and
                deeply personal.
              </p>
              <ul>
                {trustHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-col">
            <div>
              <p className="eyebrow">Our Value Proposition</p>
              <h2>A Unified Clinic for Prevention, Performance, Aesthetics, and Healthy Longevity.</h2>
            </div>
            <p>
              QLA is built for discerning clients who expect more than isolated treatments. We provide a complete medical wellness ecosystem:
              early detection, targeted intervention, aesthetic refinement, and ongoing health optimization under one trusted clinical team.
            </p>
          </div>
        </section>

        <section id="services" className="section alt">
          <div className="container">
            <p className="eyebrow">Signature Services</p>
            <h2>Clinically Structured Programs Tailored to Your Health Priorities.</h2>
            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <ul>
                    {service.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="container">
            <p className="eyebrow">Clinic Experience</p>
            <h2>Inside QLA: Professional, Private, and Comfortably Premium.</h2>
            <div className="slider" aria-label="QLA image slideshow">
              <button
                type="button"
                className="slider-btn"
                onClick={() => setActiveSlide((prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length)}
                aria-label="Previous slide"
              >
                ←
              </button>
              <figure className="slide-card">
                <img src={gallerySlides[activeSlide].image} alt={gallerySlides[activeSlide].title} />
                <figcaption>
                  <strong>{gallerySlides[activeSlide].title}</strong>
                  <span>{gallerySlides[activeSlide].caption}</span>
                </figcaption>
              </figure>
              <button
                type="button"
                className="slider-btn"
                onClick={() => setActiveSlide((prev) => (prev + 1) % gallerySlides.length)}
                aria-label="Next slide"
              >
                →
              </button>
            </div>
            <div className="slider-dots" role="tablist" aria-label="Select slide">
              {gallerySlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  className={index === activeSlide ? 'dot active' : 'dot'}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`View slide ${index + 1}`}
                  aria-selected={index === activeSlide}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="credibility" className="section alt">
          <div className="container">
            <p className="eyebrow">Medical Credibility</p>
            <h2>Trusted by Clients Who Require Clinical Excellence and Discretion.</h2>
            <div className="credibility-grid">
              <article className="panel">
                <h3>Doctor & Team Credentials</h3>
                <div className="team-list">
                  {team.map((member) => (
                    <div key={member.name}>
                      <h4>{member.name}</h4>
                      <p className="team-role">{member.role}</p>
                      <p>{member.blurb}</p>
                    </div>
                  ))}
                </div>
              </article>
              <article className="panel">
                <h3>Certifications & Compliance</h3>
                <ul className="badge-list">
                  {certifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3>Partner Laboratories</h3>
                <ul className="badge-list">
                  {partners.map((partner) => (
                    <li key={partner}>{partner}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <p className="eyebrow">4-Step Care Journey</p>
            <h2>Transparent, Data-Informed, and Fully Personalized.</h2>
            <div className="steps">
              {processSteps.map((step, idx) => (
                <div key={step.title} className="step-card">
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <p className="eyebrow">Client Testimonials</p>
            <h2>What Clients Appreciate Most About QLA.</h2>
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
                <span>Client Satisfaction Score</span>
              </div>
              <div>
                <strong>90%</strong>
                <span>Program Continuation Rate</span>
              </div>
              <div>
                <strong>&lt;24h</strong>
                <span>Concierge Response Time</span>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="container">
            <p className="eyebrow">Professional FAQ</p>
            <h2>Common Questions Before Your First Visit.</h2>
            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.q}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section cta">
          <div className="container cta-box">
            <h2>Begin Your Personalized QLA Care Plan.</h2>
            <p>
              Schedule a private consultation to receive physician guidance on preventive health, aesthetic medicine, and long-term vitality.
            </p>
            <div className="cta-group">
              <a className="btn btn-gold" href="mailto:admin@qla.co.id">
                Request Appointment
              </a>
              <a className="btn btn-outline" href={whatsappHref} target="_blank" rel="noreferrer">
                Speak with Concierge
              </a>
            </div>
          </div>
        </section>
      </main>

      <a className="floating-wa" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Chat via WhatsApp">
        WhatsApp Concierge
      </a>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <LogoMark />
            <p>QLA — Quality Life without Aging. Premium medical wellness for preventive care, aesthetics, and longevity.</p>
            <p>
              <strong>Clinic Address:</strong> Sentral Senayan II, 17th Floor, Jl. Asia Afrika No.8, Jakarta 10270
            </p>
            <p>
              <strong>Hours:</strong> Monday–Saturday, 08:00–20:00 WIB
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#about">About QLA</a>
            <a href="#services">Signature Services</a>
            <a href="#credibility">Medical Credibility</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:admin@qla.co.id">admin@qla.co.id</a>
            <a href="tel:+6281234567890">+62 812 3456 7890</a>
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp Concierge
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
              View on Google Maps
            </a>
          </div>
          <div>
            <h4>Clinical Information</h4>
            <p>License No: QLA-JKT-MED-2026</p>
            <p>Emergency referral support available</p>
            <p>By appointment for privacy and quality of care</p>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <small>© {new Date().getFullYear()} QLA. All rights reserved.</small>
          <small>All treatments are provided after medical evaluation and informed consent.</small>
        </div>
      </footer>
    </>
  )
}

export default App
