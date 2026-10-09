import { Helmet } from 'react-helmet-async'
import { Brain, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/shared/SectionHeader'
import Button from '../components/shared/Button'
import CTASection from '../components/shared/CTASection'
import { TECH_SERVICES, WHY_TECH } from '../data/services'
import { COMPANY } from '../data/company'

export default function TechnologyPage() {
  return (
    <>
      <Helmet>
        <title>Technology Division | {COMPANY.shortName}</title>
        <meta name="description" content="First Minds Technologies — Artificial Intelligence, Enterprise Software, IoT Telemetry, and Cloud Engineering in Botswana." />
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="division-hero division-hero--tech section-navy" aria-labelledby="tech-heading">
        <div className="division-hero-accent" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="division-hero-grid">
            <div className="division-hero-content">
          <div className="division-hero-badge">
            <Brain size={14} aria-hidden="true" />
            First Minds Technologies
          </div>
          <h1 id="tech-heading">
            Turning Technology Ideas Into Intelligent Solutions.
          </h1>
          <p className="division-hero-sub">
            From website design and development to web applications, mobile applications, custom software, system development, and digital platforms, First Minds builds practical technology around real needs.
          </p>
          <div className="hero-ctas">
            <Button to="/contact" variant="primary" size="lg">
              Consult an Engineer
            </Button>
            <Button to="/projects?division=tech" variant="secondary" size="lg">
              View Technology Projects
            </Button>
          </div>
            </div>

            <div className="division-hero-profile-pane">
              <div className="division-hero-card">
                <div className="division-hero-card-media">
                  <img
                    src="/images/ABM.png"
                    alt="First Minds Technologies professional engineering leadership"
                    className="division-hero-card-img"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="division-services division-services--tech section-padding" aria-labelledby="tech-services-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Specialized Capabilities"
            title="Technology Services"
            subtitle="Clear technology services for websites, web apps, mobile apps, custom systems, digital platforms, automation, IoT, and data-driven workflows."
            eyebrowColor="tech"
          />

          <div className="division-services-grid" role="list">
            {TECH_SERVICES.map(({ icon: Icon, title, description, features }) => (
              <article key={title} className="service-card service-card--tech" role="listitem">
                <div className="service-card-icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="service-card-features" aria-label={`${title} features`}>
                  {features.map((f) => (
                    <li key={f} className="service-feature-item">
                      <span className="service-feature-dot service-card--tech" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────── */}
      <section className="division-why division-why--tech section-padding section-surface" aria-labelledby="why-tech-heading">
        <div className="container">
          <SectionHeader
            eyebrow="The First Minds Advantage"
            title="Engineered for Scalability."
            subtitle="We integrate software intelligence with physical infrastructure realities."
          />

          <div className="why-grid" role="list">
            {WHY_TECH.map(({ title, desc }) => (
              <div key={title} className="why-item" role="listitem">
                <div className="why-item-icon">
                  <CheckCircle size={20} aria-hidden="true" />
                </div>
                <div className="why-item-content">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTASection
        title="Ready to Build Scalable Digital Infrastructure?"
        subtitle="Schedule a technical consultation with our software architects and data engineers."
        primaryLabel="Schedule Consultation"
        primaryTo="/contact"
      />
    </>
  )
}

