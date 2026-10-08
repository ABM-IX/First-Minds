import { useState } from 'react'
import { ArrowRight, HardHat, Cpu, MapPin, CheckCircle, Info, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import Button from '../components/shared/Button'
import { PROJECTS } from '../data/projects'
import { COMPANY } from '../data/company'
import '../styles/projects.css'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'all') return true
    return project.division === filter
  })

  const techCount = PROJECTS.filter(p => p.division === 'tech').length
  const constCount = PROJECTS.filter(p => p.division === 'construction').length

  return (
    <main className="projects-page">
      <Helmet>
        <title>Portfolio &amp; Projects | {COMPANY.shortName}</title>
        <meta name="description" content="Explore First Minds technology and construction engineering projects in Botswana — AI, Smart Grids, Civil Works, and Commercial Infrastructure." />
      </Helmet>

      {/* Hero Section */}
      <section className="projects-hero section-padding">
        <div className="container">
          <div className="hero-content">
            <span className="hero-eyebrow">
              <span className="hero-eyebrow-dot"></span>
              Engineering Portfolio
            </span>
            <h1>Building the Future.</h1>
            <p className="hero-description">
              We translate strategic vision into resilient physical infrastructure and scalable digital systems. Explore active developments across Botswana and the Southern African region.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Content Section */}
      <section className="projects-content section-padding" aria-labelledby="portfolio-heading">
        <div className="container">
          <div className="projects-header-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
            <h2 id="portfolio-heading" style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-navy)' }}>
              Projects Overview
            </h2>
            <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey-dark)', fontWeight: 500 }}>
              Showing {filteredProjects.length} of {PROJECTS.length} Developments
            </div>
          </div>

          {/* Division Filter */}
          <div className="projects-filter" role="tablist" aria-label="Filter projects by division">
            <button 
              role="tab"
              aria-selected={filter === 'all'}
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button 
              role="tab"
              aria-selected={filter === 'tech'}
              className={`filter-btn ${filter === 'tech' ? 'active' : ''}`}
              onClick={() => setFilter('tech')}
            >
              <Cpu size={16} aria-hidden="true" /> Technology ({techCount})
            </button>
            <button 
              role="tab"
              aria-selected={filter === 'construction'}
              className={`filter-btn ${filter === 'construction' ? 'active' : ''}`}
              onClick={() => setFilter('construction')}
            >
              <HardHat size={16} aria-hidden="true" /> Construction ({constCount})
            </button>
          </div>

          {/* Grid or Empty State */}
          {filteredProjects.length === 0 ? (
            <div className="card-base" style={{ textAlign: 'center', padding: 'var(--space-10) var(--space-4)', maxWidth: '500px', margin: '0 auto' }} role="status">
              <Info size={40} style={{ color: 'var(--color-tech)', marginBottom: 'var(--space-4)' }} />
              <h3 style={{ marginBottom: 'var(--space-2)' }}>No Projects Match This Filter</h3>
              <p style={{ color: 'var(--color-grey-dark)', marginBottom: 'var(--space-5)' }}>
                There are currently no featured developments under this category.
              </p>
              <button 
                className="btn btn-primary"
                onClick={() => setFilter('all')}
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="projects-grid" role="list">
              {filteredProjects.map(project => (
                <article 
                  key={project.id} 
                  className="project-card" 
                  data-division={project.division}
                  role="listitem"
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="project-status">
                      <span className="status-dot" aria-hidden="true"></span>
                      {project.status}
                    </div>
                  </div>
                  <div className="project-info">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
                      <div className={`project-division badge badge--${project.division === 'tech' ? 'tech' : 'construction'}`}>
                        {project.division === 'tech' ? 'Technology' : 'Construction'}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: 'var(--text-xs)', color: 'var(--color-grey-dark)' }}>
                        <MapPin size={12} aria-hidden="true" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                    <h3>{project.title}</h3>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey-dark)', marginBottom: 'var(--space-4)', lineHeight: 1.6 }}>
                      {project.description}
                    </p>

                    {/* Key Metrics */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)', borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                      {project.metrics.slice(0, 2).map((metric, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--color-navy)' }}>
                          <CheckCircle size={13} style={{ color: project.division === 'tech' ? 'var(--color-tech)' : 'var(--color-construction)', flexShrink: 0 }} aria-hidden="true" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSelectedProject(project)}
                      style={{ width: '100%' }}
                      aria-haspopup="dialog"
                    >
                      View Specifications
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="modal-overlay" 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 27, 46, 0.75)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--space-4)'
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div 
            className="card-base"
            style={{
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              padding: 'var(--space-6)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-xl)'
            }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: 'var(--space-4)',
                right: 'var(--space-4)',
                background: 'var(--color-surface)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--color-navy)'
              }}
              aria-label="Close project specifications"
            >
              <X size={20} />
            </button>

            <div className={`project-division badge badge--${selectedProject.division === 'tech' ? 'tech' : 'construction'}`} style={{ marginBottom: 'var(--space-2)' }}>
              {selectedProject.division === 'tech' ? 'Technology Division' : 'Construction Division'}
            </div>

            <h2 id="modal-project-title" style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-2)', color: 'var(--color-navy)' }}>
              {selectedProject.title}
            </h2>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-grey-dark)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-4)' }}>
              <MapPin size={16} aria-hidden="true" />
              <span>{selectedProject.location}</span>
              <span>•</span>
              <span style={{ color: 'var(--color-navy)', fontWeight: 600 }}>{selectedProject.status}</span>
            </div>

            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--space-4)' }} 
            />

            <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--color-navy)' }}>
              Scope &amp; Technical Execution
            </h3>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey-dark)', lineHeight: 1.7, marginBottom: 'var(--space-5)' }}>
              {selectedProject.description}
            </p>

            <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-2)', color: 'var(--color-navy)' }}>
              Key Performance Deliverables
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
              {selectedProject.metrics.map((metric, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-navy)' }}>
                  <CheckCircle size={16} style={{ color: selectedProject.division === 'tech' ? 'var(--color-tech)' : 'var(--color-construction)', flexShrink: 0 }} />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <Button to="/contact" variant="primary" size="sm">
                Discuss Similar Project
              </Button>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Final CTA */}
      <section className="cta-section" style={{ background: 'var(--color-white)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-3)', color: 'var(--color-navy)' }}>
            Have an Infrastructure or Software Project?
          </h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-grey-dark)', maxWidth: '640px', margin: '0 auto var(--space-6)' }}>
            Whether digital systems, civil engineering, or an integrated multi-disciplinary deployment, our engineering teams are ready.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-3)' }}>
            <Button to="/contact" variant="primary" size="lg">
              Discuss Your Project <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
