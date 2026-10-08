import { Helmet } from 'react-helmet-async'
import { HardHat, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/shared/SectionHeader'
import Button from '../components/shared/Button'
import CTASection from '../components/shared/CTASection'
import { CONSTRUCTION_SERVICES, WHY_CONSTRUCTION } from '../data/services'
import { COMPANY } from '../data/company'

export default function ConstructionPage() {
  return (
    <>
      <Helmet>
        <title>Construction Division | {COMPANY.shortName}</title>
        <meta name="description" content="First Minds Construction — Turnkey Commercial & Residential Construction, Civil Works, Infrastructure, and Architectural Engineering in Botswana." />
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="division-hero division-hero--construction section-navy" aria-labelledby="construction-heading">
        <div className="division-hero-accent" aria-hidden="true" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="division-hero-grid">
            <div className="division-hero-content">
              <div className="division-hero-badge">
                <HardHat size={14} aria-hidden="true" />
                First Minds Construction
              </div>
              <h1 id="construction-heading">
                Built with Precision.<br />Engineered to Endure.
              </h1>
              <p className="division-hero-sub">
                From deep foundations and commercial developments to arterial civil infrastructure — we deliver physical projects with rigorous craftsmanship, structural integrity, and generational durability.
              </p>
              <div className="hero-ctas">
                <Button to="/contact" variant="primary" size="lg">
                  Commission a Project
                </Button>
                <Button to="/projects" variant="secondary" size="lg">
                  Explore Infrastructure
                </Button>
              </div>
            </div>

            <div className="division-hero-profile-pane">
              <div className="division-hero-card">
                <div className="division-hero-card-media">
                  <img
                    src="/images/construction-lead.png"
                    alt="First Minds Construction Operations Director and Site Leadership on concrete foundation slab"
                    className="division-hero-card-img"
                    loading="eager"
                  />
                  <div className="division-hero-live-badge">
                    <span className="status-dot status-dot--complete" aria-hidden="true" />
                    <span>On-Site Supervision &amp; Engineering</span>
                  </div>
                </div>

                <div className="division-hero-card-meta">
                  <div className="division-hero-leader-name">Construction Leadership</div>
                  <div className="division-hero-leader-role">Director of Civil &amp; Structural Engineering</div>
                  <div className="division-hero-leader-tag">First Minds Construction Division • Botswana</div>
                  <p className="division-hero-quote">
                    "Every foundation, rebar grid, and structural wall is personally inspected on-site to exceed quality standards."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section className="division-services division-services--construction section-padding" aria-labelledby="construction-services-heading">
        <div className="container">
          <SectionHeader
            eyebrow="What We Build"
            title="Construction &amp; Civil Services"
            subtitle="Comprehensive physical engineering delivered with single-accountability management from blueprint to completion."
            eyebrowColor="construction"
          />

          <div className="division-services-grid" role="list">
            {CONSTRUCTION_SERVICES.map(({ icon: Icon, title, description, features }) => (
              <article key={title} className="service-card service-card--construction" role="listitem">
                <div className="service-card-icon">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="service-card-features" aria-label={`${title} features`}>
                  {features.map((f) => (
                    <li key={f} className="service-feature-item">
                      <span className="service-feature-dot service-card--construction" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────── */}
      <section className="division-why division-why--construction section-padding section-surface" aria-labelledby="why-construction-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Why First Minds"
            title="Construction You Can Count On."
            subtitle="Deep regional engineering expertise, transparent milestone schedules, and uncompromising safety."
            eyebrowColor="construction"
          />

          <div className="why-grid" role="list">
            {WHY_CONSTRUCTION.map(({ title, desc }) => (
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

      {/* ── PROJECT HIGHLIGHT IMAGE ───────────────────────────────────── */}
      <section className="section-padding" style={{ background: 'var(--color-surface)' }}>
        <div className="container">
          <div
            style={{
              borderRadius: 'var(--radius-2xl)',
              overflow: 'hidden',
              aspectRatio: '21/8',
              background: 'var(--color-navy)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1541888086225-c6b75c138804?auto=format&fit=crop&q=80&w=1400"
              alt="First Minds infrastructure construction project in Botswana"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTASection
        title="Ready to Break Ground on Your Vision?"
        subtitle="Speak with our civil engineers and structural directors about your upcoming site development."
        primaryLabel="Request Site Consultation"
        primaryTo="/contact"
      />
    </>
  )
}
