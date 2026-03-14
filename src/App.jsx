const services = [
  {
    title: 'Basic Medical Treatment',
    desc: 'Comprehensive primary care with trusted physicians, accurate diagnostics, and seamless continuity for your daily health needs.',
    icon: '✚',
  },
  {
    title: 'Lab & Vaksin',
    desc: 'Precision laboratory screening and vaccination programs designed for prevention, early detection, and long-term protection.',
    icon: '◈',
  },
  {
    title: 'Terapi IV',
    desc: 'Clinically supervised IV therapy to support hydration, recovery, immunity, vitality, and optimized functional wellness.',
    icon: '⬤',
  },
  {
    title: 'Estetika',
    desc: 'Advanced aesthetic treatments with medical-grade protocols for natural refinement, confidence, and rejuvenated appearance.',
    icon: '◇',
  },
  {
    title: 'Wellness',
    desc: 'Integrated wellness programs focusing on longevity, anti-aging support, and elevated quality of life through personalized care.',
    icon: '∞',
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
  return (
    <>
      <header className="header">
        <div className="container nav">
          <LogoMark />
          <nav>
            <a href="#about">About</a>
            <a href="#services">Layanan</a>
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
                QLA menghadirkan solusi medical wellness, preventive care, anti-aging, terapi kesehatan, dan estetika premium untuk membantu
                Anda menjalani hidup berkualitas dengan pendekatan personal dan profesional.
              </p>
              <div className="cta-group">
                <a className="btn btn-gold" href="#contact">
                  Konsultasi Sekarang
                </a>
                <a className="btn btn-outline" href="#services">
                  Lihat Layanan
                </a>
                <a className="btn btn-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer">
                  Chat via WhatsApp
                </a>
              </div>
            </div>
            <div className="hero-card">
              <span className="chip">Premium Care Guarantee</span>
              <h3>QLA Signature Promise</h3>
              <p>
                Luxury clinic meets modern wellness: high-standard care, precise assessment, and a warm premium experience for healthy aging
                and long-term vitality.
              </p>
              <ul>
                <li>Professional & trusted care</li>
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
              QLA (Quality Life without Aging) adalah brand kesehatan premium yang menggabungkan preventive medicine, anti-aging, terapi
              kesehatan, dan estetika modern. Fokus kami adalah personalized care berbasis assessment profesional agar setiap klien menerima
              solusi paling tepat untuk kualitas hidup yang lebih baik.
            </p>
          </div>
        </section>

        <section id="services" className="section alt">
          <div className="container">
            <p className="eyebrow">Divisi & Layanan Utama</p>
            <h2>Integrated Premium Services for Every Stage of Your Health Journey.</h2>
            <div className="services-grid">
              {services.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <a href="#contact">Pelajari Lebih Lanjut →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <p className="eyebrow">USP QLA</p>
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

        <section id="how" className="section alt">
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

        <section className="section">
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

        <section className="section alt">
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
                Konsultasi WhatsApp
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
            <h4>Navigasi</h4>
            <a href="#about">About</a>
            <a href="#services">Layanan</a>
            <a href="#how">How it Works</a>
          </div>
          <div>
            <h4>Kontak</h4>
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
          <small>Disclaimer: Layanan disesuaikan dengan hasil konsultasi medis profesional.</small>
        </div>
      </footer>
    </>
  )
}

export default App
