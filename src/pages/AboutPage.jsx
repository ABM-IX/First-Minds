import { Helmet } from 'react-helmet-async'
import { 
  Target, Globe, Award, Shield, Lightbulb, Users, CheckCircle, 
  BookOpen, Scale, Leaf, TrendingUp 
} from 'lucide-react'
import SectionHeader from '../components/shared/SectionHeader'
import CTASection from '../components/shared/CTASection'
import { COMPANY } from '../data/company'

const VALUE_ICONS = {
  'Excellence': Award,
  'Integrity': Shield,
  'Innovation': Lightbulb,
  'Quality': Target,
  'Reliability': CheckCircle,
  'Collaboration': Users,
  'Continuous Learning': BookOpen,
  'Accountability': Scale,
  'Sustainability': Leaf,
  'Customer Success': TrendingUp
}

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | {COMPANY.shortName}</title>
        <meta name="description" content={`Learn about ${COMPANY.name} — Multidisciplinary Technology and Infrastructure company in Botswana delivering intelligent solutions.`} />
      </Helmet>

      {/* ── PAGE HERO ─────────────────────────────────────────────────── */}
      <section className="about-hero section-navy" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <span className="page-header-eyebrow">About First Minds</span>
              <h1 id="about-heading">Built from Experience.<br />Driven by What Comes Next.</h1>
              <p className="about-hero-sub">
                First Minds is a Botswana-based company built on a foundation of construction and expanding into technology. We bring practical experience, engineering thinking and digital capability together to create solutions for the physical and digital world.
              </p>
            </div>

            <div className="about-hero-visual" aria-hidden="true">
              <img
                src="/images/About.png"
                alt=""
                className="about-hero-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND MANIFESTO ───────────────────────────────────────────── */}
      <section className="manifesto section-padding" aria-labelledby="manifesto-heading">
        <div className="container">
          <div className="manifesto-inner">
            <span className="section-eyebrow eyebrow--tech" id="manifesto-heading">
              Brand Position
            </span>
            <blockquote className="manifesto-quote">
              “We combine technology with real-world execution to create practical, scalable, and future-focused solutions. Every interaction with First Minds should reinforce our core promise: Building Intelligent Solutions.”
            </blockquote>
            <p className="manifesto-attribution">— {COMPANY.name}</p>
          </div>
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────────────────────── */}
      <section className="about-story section-padding section-surface" aria-labelledby="story-heading">
        <div className="container">
          <div className="about-story-grid">
            <div>
              <SectionHeader
                eyebrow="Our Story"
                title="Technology Meets Infrastructure."
                subtitle="First Minds was founded with a clear mandate: the companies best equipped to solve Africa's infrastructure challenges are those capable of bridging the physical and digital divide."
                align="left"
              />
              <p style={{ lineHeight: 1.75, marginTop: 'var(--space-4)', color: 'var(--theme-text-muted)' }}>
                Physical infrastructure without digital intelligence is quickly outpaced by modern operational demands. Conversely, software without deep integration into physical engineering fails to solve foundational challenges.
              </p>
              <p style={{ lineHeight: 1.75, marginTop: 'var(--space-3)', color: 'var(--theme-text-muted)' }}>
                First Minds operates with two synchronized divisions: First Minds Technologies and First Minds Construction. From smart grid automation and industrial IoT telemetry to commercial turnkey facilities and municipal civil infrastructure, we serve as a single, dependable engineering partner.
              </p>
            </div>
            <div className="about-story-image">
              <img
                src="/images/construction-team.jpg"
                alt="First Minds engineering infrastructure team in Botswana"
                loading="lazy"
                style={{ borderRadius: 'var(--radius-lg)', width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────────────────── */}
      <section className="mission-vision section-padding" aria-labelledby="mv-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Brand Essence"
            title="Vision &amp; Mission"
            eyebrowColor="construction"
          />

          <div className="mission-vision-grid">
            <div className="mv-card mv-card--vision">
              <div className="mv-card-icon">
                <Globe size={24} aria-hidden="true" />
              </div>
              <h3>Our Vision</h3>
              <p>
                {COMPANY.vision}
              </p>
            </div>

            <div className="mv-card mv-card--mission">
              <div className="mv-card-icon">
                <Target size={24} aria-hidden="true" />
              </div>
              <h3>Our Mission</h3>
              <p>
                {COMPANY.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ────────────────────────────────────────────────── */}
      <section className="about-values section-padding section-surface" aria-labelledby="values-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Brand Values"
            title="What Guides Our Work"
            subtitle="Ten foundational commitments that govern every blueprint, contract, and deployment."
          />

          <div className="values-grid" role="list">
            {COMPANY.values.map(({ title, description }) => {
              const Icon = VALUE_ICONS[title] || Shield
              return (
                <div key={title} className="value-card" role="listitem">
                  <div className="value-icon">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTASection
        title="Ready to Partner with First Minds?"
        subtitle="Speak directly with our technical and engineering directors about your upcoming project."
        primaryLabel="Get in Touch"
        primaryTo="/contact"
      />
    </>
  )
}
