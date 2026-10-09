import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Cpu, HardHat, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Button from '../components/shared/Button'
import SectionHeader from '../components/shared/SectionHeader'
import DivisionCard from '../components/shared/DivisionCard'
import CTASection from '../components/shared/CTASection'
import CountUpStat from '../components/shared/CountUpStat'
import { COMPANY } from '../data/company'
import { CAPABILITIES, PROCESS_STEPS } from '../data/capabilities'
import { PROJECTS } from '../data/projects'

const HERO_SLIDES = [
  {
    id: 'company',
    eyebrow: 'First Minds',
    accent: 'company',
    image: '/images/About.png',
    imageAlt: 'First Minds company signage',
    visualLabel: 'First Minds (Pty) Ltd',
    heading: (
      <>
        Where <span className="text-tech">Technology</span> Meets{' '}
        <span className="text-construction">Infrastructure</span>
      </>
    ),
    description:
      'First Minds brings software development and construction together under one company, delivering digital solutions and physical infrastructure for practical, real-world needs.',
    primaryLabel: 'Explore Services',
    primaryTo: '/#divisions-heading',
    secondaryLabel: 'Contact Us',
    secondaryTo: '/contact'
  },
  {
    id: 'technology',
    eyebrow: 'Technology Division',
    accent: 'tech',
    image: '/images/Projects/Technologies/SmartTransit/SmartTransit.png',
    imageAlt: 'SmartTransit brand graphic representing First Minds technology work',
    visualLabel: 'Technology Services',
    heading: 'Turning Technology Ideas Into Intelligent Solutions',
    description:
      'From website and application development to custom software, system development, and digital platforms, First Minds builds practical technology solutions around real needs.',
    primaryLabel: 'Explore Technology',
    primaryTo: '/technology',
    secondaryLabel: 'View Technology Projects',
    secondaryTo: '/projects?division=tech'
  },
  {
    id: 'construction',
    eyebrow: 'Construction & Civil Services',
    accent: 'construction',
    image: '/images/construction-lead.png',
    imageAlt: 'First Minds construction leadership inspecting a foundation site',
    visualLabel: 'Construction & Civil Services',
    heading: 'Building the Foundation of Tomorrow',
    description:
      'First Minds Construction supports residential builds, renovations, foundations, roofing, site works, and related civil delivery with practical attention to structure and durability.',
    primaryLabel: 'Explore Construction',
    primaryTo: '/construction',
    secondaryLabel: 'View Construction Projects',
    secondaryTo: '/projects?division=construction'
  }
]

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isHeroPaused, setIsHeroPaused] = useState(false)
  const [touchStartX, setTouchStartX] = useState(null)
  const featuredProjects = PROJECTS.slice(0, 2)
  const currentSlide = HERO_SLIDES[activeSlide]
  const metrics = [
    { value: 18, suffix: '+', label: 'Projects Delivered' },
    { value: 2, label: 'Integrated Divisions' },
    { value: 1, label: 'Botswana Headquarters' }
  ]

  useEffect(() => {
    if (isHeroPaused) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length)
    }, 6000)

    return () => window.clearInterval(intervalId)
  }, [isHeroPaused])

  const goToPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const goToNextSlide = () => {
    setActiveSlide((current) => (current + 1) % HERO_SLIDES.length)
  }

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return

    const touchEndX = event.changedTouches[0]?.clientX
    if (typeof touchEndX !== 'number') return

    const deltaX = touchStartX - touchEndX
    if (Math.abs(deltaX) > 48) {
      if (deltaX > 0) {
        goToNextSlide()
      } else {
        goToPreviousSlide()
      }
    }

    setTouchStartX(null)
  }

  return (
    <>
      <Helmet>
        <title>{COMPANY.shortName} — {COMPANY.tagline}</title>
        <meta name="description" content={`${COMPANY.name} — Multidisciplinary Technology and Infrastructure company in Botswana delivering intelligent solutions.`} />
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className={`hero hero--${currentSlide.accent}`}
        style={{ '--hero-image': `url(${currentSlide.image})` }}
        aria-labelledby="hero-heading"
        onFocus={() => setIsHeroPaused(true)}
        onBlur={() => setIsHeroPaused(false)}
        onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          className="hero-arrow-btn hero-arrow-btn--prev"
          onClick={goToPreviousSlide}
          aria-label="Show previous homepage message"
        >
          <ChevronLeft size={22} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="hero-arrow-btn hero-arrow-btn--next"
          onClick={goToNextSlide}
          aria-label="Show next homepage message"
        >
          <ChevronRight size={22} aria-hidden="true" />
        </button>
        <div className="container">
          <div className="hero-layout" key={currentSlide.id}>
            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-dot" />
                {currentSlide.eyebrow}
              </div>

              <h1 id="hero-heading">
                {currentSlide.heading}
              </h1>

              <p className="hero-description">
                {currentSlide.description}
              </p>

              <div className="hero-ctas">
                <Button to={currentSlide.primaryTo} variant="primary" size="lg">
                  {currentSlide.primaryLabel}
                </Button>
                <Button to={currentSlide.secondaryTo} variant="secondary" size="lg">
                  {currentSlide.secondaryLabel}
                </Button>
              </div>

            </div>

            <div className={`hero-visual hero-visual--${currentSlide.accent}`} aria-label={currentSlide.visualLabel}>
              <img
                src={currentSlide.image}
                alt={currentSlide.imageAlt}
                className="hero-visual-img"
                loading={activeSlide === 0 ? 'eager' : 'lazy'}
              />
              <div className="hero-visual-caption">
                <span className="hero-visual-dot" aria-hidden="true" />
                {currentSlide.visualLabel}
              </div>
            </div>
          </div>
        </div>
        <div className="hero-slide-controls" role="group" aria-label="Homepage hero messages">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-slide-control hero-slide-control--${slide.accent} ${activeSlide === index ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
              aria-pressed={activeSlide === index}
              aria-label={`Show ${slide.eyebrow} message`}
            >
              <span className="sr-only">{slide.eyebrow}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── WHO WE ARE ────────────────────────────────────────────────── */}
      <section className="who-we-are section-padding" aria-labelledby="who-heading">
        <div className="container">
          <div className="who-we-are-grid">
            <div className="who-we-are-text">
              <SectionHeader
                eyebrow="One Company"
                title="Two Areas of Expertise. Unified Delivery."
                subtitle="We integrate digital intelligence with physical infrastructure under one roof, providing public and private partners with streamlined, single-accountability execution."
                align="left"
                eyebrowColor="tech"
              />
              <div style={{ marginTop: 'var(--space-5)', display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <Button to="/about" variant="secondary">Learn Our Story</Button>
                <Button to="/contact" variant="primary">Partner With Us</Button>
              </div>
            </div>

            <div className="who-we-are-stats">
              {metrics.map(({ value, suffix, label }) => (
                <CountUpStat
                  key={label}
                  value={value}
                  suffix={suffix}
                  label={label}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVISIONS ─────────────────────────────────────────────────── */}
      <section className="divisions section-padding section-white" aria-labelledby="divisions-heading">
        <div className="container">
          <SectionHeader
            id="divisions-heading"
            eyebrow="Specialised Divisions"
            title="What We Do"
            subtitle="Two specialized divisions. One shared commitment to precision and quality."
            eyebrowColor="grey"
          />

          <div className="divisions-grid">
            <DivisionCard
              division="tech"
              icon={Cpu}
              title="First Minds Technologies"
              description="Website design and development, web applications, mobile applications, custom software, system development, digital platforms, automation, IoT, and technology integration."
              to="/technology"
              features={['Website & Web App Development', 'Mobile Application Development', 'Custom Software & Systems', 'Digital Platforms', 'Automation, IoT & Data Solutions']}
            />
            <DivisionCard
              division="construction"
              icon={HardHat}
              title="First Minds Construction"
              description="Residential construction, renovations, foundations, roofing, site works, civil works, and related construction delivery grounded in practical on-site execution."
              to="/construction"
              features={['Residential Construction', 'Renovations & Retrofitting', 'Foundations & Roofing', 'Civil Works & Earthworks', 'Electrical, Solar & MEP Systems']}
            />
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────────────────────── */}
      <section className="capabilities section-padding" aria-labelledby="capabilities-heading">
        <div className="container">
          <SectionHeader
            id="capabilities-heading"
            eyebrow="Integrated Capabilities"
            title="Core Expertise"
            subtitle="Disciplined engineering across the digital and physical landscape."
            eyebrowColor="navy"
          />

          <div className="grid-3" style={{ marginTop: 'var(--space-8)' }} role="list">
            {CAPABILITIES.map(({ label, icon: Icon, desc }) => (
              <div key={label} className="card-base" role="listitem">
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--space-4)', color: 'var(--color-navy)' }}>
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>{label}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey-dark)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────────────────────── */}
      <section className="featured-projects section-padding section-navy" aria-labelledby="featured-projects-heading">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <span className="eyebrow eyebrow--tech" style={{ marginBottom: 'var(--space-2)' }}>Verified Portfolio</span>
            <h2 id="featured-projects-heading" style={{ fontSize: 'var(--text-4xl)' }}>Featured Projects</h2>
          </div>
          
          <div className="grid-2">
            {featuredProjects.map(project => (
              <article key={project.id} className="project-card" data-division={project.division} data-project-id={project.id}>
                <div className="project-image" style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', background: '#0f172a' }}>
                  <img src={project.image} alt={project.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="project-status" style={{ position: 'absolute', top: 'var(--space-3)', left: 'var(--space-3)', background: 'rgba(15, 27, 46, 0.88)', backdropFilter: 'blur(6px)', color: 'var(--color-white)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-pill)', fontSize: 'var(--text-xs)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span 
                      style={{ 
                        width: '6px', 
                        height: '6px', 
                        borderRadius: '50%', 
                        background: project.status.toLowerCase().includes('progress') ? '#f59e0b' : '#10b981',
                        boxShadow: project.status.toLowerCase().includes('progress') ? '0 0 6px rgba(245, 158, 11, 0.7)' : '0 0 6px rgba(16, 185, 129, 0.7)'
                      }} 
                    />
                    {project.status}
                  </div>
                </div>
                <div className="project-info" style={{ padding: 'var(--space-5)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
                    <div className={`project-division badge badge--${project.division === 'tech' ? 'tech' : 'construction'}`}>
                      {project.division === 'tech' ? 'Technology' : 'Construction'}
                    </div>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-grey-dark)', fontWeight: 500 }}>
                      {project.location}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 'var(--text-xl)', color: 'var(--color-navy)', marginBottom: 'var(--space-2)' }}>{project.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey-dark)', lineHeight: 1.6 }}>
                    {project.summary}
                  </p>
                  <div style={{ marginTop: 'var(--space-4)', paddingTop: 'var(--space-3)', borderTop: '1px solid var(--color-border)' }}>
                    <Button to={`/projects?division=${project.division}`} variant="secondary" size="sm" style={{ width: '100%' }}>
                      Explore Project &amp; Photos <ArrowRight size={14} aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-6)' }}>
            <Button to="/projects" variant="secondary">
              View All {PROJECTS.length} Projects <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────── */}
      <section className="process section-padding" aria-labelledby="process-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Delivery Lifecycle"
            title="Our Process"
            subtitle="A disciplined, milestone-driven framework ensuring every project is delivered on schedule, on budget, and to specification."
            eyebrowColor="tech"
          />

          <div className="process-steps" role="list">
            {PROCESS_STEPS.map(({ step, label, desc }) => (
              <div key={step} className="process-step" role="listitem">
                <div className="process-step-number" aria-hidden="true">{step}</div>
                <div className="process-step-label">{label}</div>
                <div className="process-step-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <CTASection
        title="Ready to Build the Future?"
        subtitle="Connect with our technical and engineering leadership to discuss your upcoming technology or infrastructure requirements."
        primaryLabel="Contact Us"
        primaryTo="/contact"
      />
    </>
  )
}

