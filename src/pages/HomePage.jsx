import { Helmet } from 'react-helmet-async'
import { Cpu, HardHat, ArrowRight } from 'lucide-react'
import Button from '../components/shared/Button'
import SectionHeader from '../components/shared/SectionHeader'
import DivisionCard from '../components/shared/DivisionCard'
import CTASection from '../components/shared/CTASection'
import { COMPANY } from '../data/company'
import { CAPABILITIES, PROCESS_STEPS } from '../data/capabilities'
import { PROJECTS } from '../data/projects'

export default function HomePage() {
  const featuredProjects = PROJECTS.slice(0, 2)

  return (
    <>
      <Helmet>
        <title>{COMPANY.shortName} — {COMPANY.tagline}</title>
        <meta name="description" content={`${COMPANY.name} — Multidisciplinary Technology and Infrastructure company in Botswana delivering intelligent solutions.`} />
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow" aria-hidden="true">
              <span className="hero-eyebrow-dot" />
              {COMPANY.tagline}
            </div>

            <h1 id="hero-heading">
              Where{' '}
              <span className="text-tech">Technology</span>
              {' '}Meets{' '}
              <span className="text-construction">Infrastructure</span>
            </h1>

            <p className="hero-description">
              {COMPANY.position}
            </p>

            <div className="hero-ctas">
              <Button to="/technology" variant="primary" size="lg">
                Explore Technology
              </Button>
              <Button to="/construction" variant="secondary" size="lg">
                Explore Construction
              </Button>
            </div>
          </div>
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
              {COMPANY.stats.map(({ value, label }) => (
                <div key={label} className="stat-item">
                  <div className="stat-value">{value}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVISIONS ─────────────────────────────────────────────────── */}
      <section className="divisions section-padding section-navy" aria-labelledby="divisions-heading">
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
              description="Engineering intelligent digital systems — from machine learning analytics and custom web/mobile platforms to industrial IoT telemetry and automated enterprise workflows."
              to="/technology"
              features={['Artificial Intelligence & ML', 'Enterprise Software Engineering', 'Business Automation', 'IoT & Telemetry Solutions', 'Strategic IT Consulting']}
            />
            <DivisionCard
              division="construction"
              icon={HardHat}
              title="First Minds Construction"
              description="Precision civil and structural engineering — delivering commercial facilities, housing developments, drainage networks, and arterial infrastructure built for generational endurance."
              to="/construction"
              features={['Commercial & Residential Construction', 'Architectural & BIM Design', 'Civil Works & Earthworks', 'Renovation & Retrofitting', 'Electrical, Solar & MEP Systems']}
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
            <span className="eyebrow eyebrow--tech" style={{ marginBottom: 'var(--space-2)' }}>In Development</span>
            <h2 id="featured-projects-heading" style={{ fontSize: 'var(--text-4xl)' }}>Featured Projects</h2>
          </div>
          
          <div className="grid-2">
            {featuredProjects.map(project => (
              <article key={project.id} className="project-card" data-division={project.division}>
                <div className="project-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-status">
                    <span className="status-dot"></span>
                    {project.status}
                  </div>
                </div>
                <div className="project-info">
                  <div className={`project-division badge badge--${project.division === 'tech' ? 'tech' : 'construction'}`}>
                    {project.division === 'tech' ? 'Technology' : 'Construction'}
                  </div>
                  <h3>{project.title}</h3>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.7)', marginTop: 'var(--space-2)' }}>
                    {project.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-6)' }}>
            <Button to="/projects" variant="secondary">
              View All Projects <ArrowRight size={16} aria-hidden="true" />
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
