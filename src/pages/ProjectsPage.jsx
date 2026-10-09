import { useEffect, useMemo, useState } from 'react'
import { HardHat, Cpu, MapPin, CheckCircle, Info, User, ArrowRight, Eye } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/shared/Button'
import ProjectCardSlideshow from '../components/projects/ProjectCardSlideshow'
import ProjectDetailModal from '../components/projects/ProjectDetailModal'
import { PROJECTS } from '../data/projects'
import { COMPANY } from '../data/company'
import '../styles/projects.css'

export default function ProjectsPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedProject, setSelectedProject] = useState(null)
  const [heroImageIndex, setHeroImageIndex] = useState(0)
  const filter = useMemo(() => {
    const division = new URLSearchParams(location.search).get('division')
    return division === 'construction' || division === 'tech' ? division : 'all'
  }, [location.search])

  const setProjectFilter = (nextFilter) => {
    const search = nextFilter === 'all' ? '' : `?division=${nextFilter}`
    navigate({ pathname: '/projects', search })
  }

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === 'all') return true
    return project.division === filter
  })

  const techCount = PROJECTS.filter(p => p.division === 'tech').length
  const constCount = PROJECTS.filter(p => p.division === 'construction').length
  const openProject = (project) => setSelectedProject(project)
  const heroImages = useMemo(() => (
    PROJECTS
      .filter(project => project.division === 'construction')
      .flatMap(project => project.images?.length ? project.images : [project.image])
      .filter(Boolean)
      .slice(0, 18)
  ), [])

  useEffect(() => {
    if (heroImages.length < 2) return undefined

    const intervalId = window.setInterval(() => {
      setHeroImageIndex((current) => (current + 1) % heroImages.length)
    }, 4200)

    return () => window.clearInterval(intervalId)
  }, [heroImages.length])

  return (
    <main className="projects-page">
      <Helmet>
        <title>Portfolio &amp; Projects | {COMPANY.shortName}</title>
        <meta 
          name="description" 
          content="Explore First Minds technology and real residential &amp; civil engineering construction projects in Botswana — including Mochudi, Kopong, Kanye, Morwa, Gaborone North, and Odi." 
        />
      </Helmet>

      {/* Hero Section */}
      <section
        className="projects-hero section-padding"
        style={{ '--projects-hero-bg': heroImages.length > 0 ? `url(${heroImages[heroImageIndex]})` : undefined }}
      >
        <div className="container">
          <div className="projects-hero-grid">
            <div className="hero-content">
              <span className="hero-eyebrow">
                <span className="hero-eyebrow-dot"></span>
                Verified Portfolio
              </span>
              <h1>Real Projects. Built for Botswana.</h1>
              <p className="hero-description">
                Browse our authentic residential builds, commercial infrastructure, and real-time digital transit platforms. Each development represents verified on-site engineering and rigorous execution.
              </p>
            </div>

            {heroImages.length > 0 && (
              <div className="projects-hero-slideshow" aria-label="Rotating photos from First Minds construction projects">
                {heroImages.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    alt=""
                    className={`projects-hero-slide ${index === heroImageIndex ? 'active' : ''}`}
                    aria-hidden="true"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ))}
                <div className="projects-hero-photo-count">
                  Project Photo {heroImageIndex + 1} of {heroImages.length}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects Content Section */}
      <section className="projects-content section-padding" aria-labelledby="portfolio-heading">
        <div className="container">
          <div className="projects-header-bar">
            <div>
              <h2 id="portfolio-heading" className="projects-heading-title">
                Active &amp; Completed Developments
              </h2>
              <p className="projects-heading-sub">
                Click any project card to view complete specifications, client details, and full photo gallery.
              </p>
            </div>
            <div className="projects-count-pill">
              Showing {filteredProjects.length} of {PROJECTS.length} Real Projects
            </div>
          </div>

          {/* Division Filter */}
          <div className="projects-filter" role="group" aria-label="Filter projects by division">
            <button 
              type="button"
              aria-pressed={filter === 'all'}
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setProjectFilter('all')}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button 
              type="button"
              aria-pressed={filter === 'construction'}
              className={`filter-btn ${filter === 'construction' ? 'active' : ''}`}
              onClick={() => setProjectFilter('construction')}
            >
              <HardHat size={16} aria-hidden="true" /> Construction Division ({constCount})
            </button>
            <button 
              type="button"
              aria-pressed={filter === 'tech'}
              className={`filter-btn ${filter === 'tech' ? 'active' : ''}`}
              onClick={() => setProjectFilter('tech')}
            >
              <Cpu size={16} aria-hidden="true" /> Technology Division ({techCount})
            </button>
          </div>

          {/* Grid or Empty State */}
          {filteredProjects.length === 0 ? (
            <div className="card-base empty-projects-card" role="status">
              <Info size={40} style={{ color: 'var(--color-tech)', marginBottom: 'var(--space-4)' }} />
              <h3>No Projects Match This Filter</h3>
              <p>
                There are currently no featured developments under this category.
              </p>
              <button 
                type="button"
                className="btn btn-primary"
                onClick={() => setProjectFilter('all')}
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="projects-grid" role="list">
              {filteredProjects.map(project => {
                const isTech = project.division === 'tech'
                return (
                  <article 
                    key={project.id} 
                    className="project-card" 
                    data-division={project.division}
                    data-project-id={project.id}
                    role="listitem"
                    onClick={() => openProject(project)}
                  >
                    {/* Slideshow Top */}
                    <ProjectCardSlideshow 
                      images={project.images} 
                      title={project.title} 
                      status={project.status} 
                    />

                    {/* Card Body */}
                    <div className="project-info">
                      {/* Division Badge & Location */}
                      <div className="project-top-meta">
                        <div className={`project-division badge badge--${isTech ? 'tech' : 'construction'}`}>
                          {isTech ? 'Technology' : 'Construction'}
                        </div>
                        <div className="project-location-tag">
                          <MapPin size={13} aria-hidden="true" />
                          <span>{project.location}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="project-card-title">{project.title}</h3>

                      {/* Client / Owner badge */}
                      <div className="project-client-badge">
                        <User size={13} aria-hidden="true" />
                        {project.clientLocationPending ? (
                          <span className="client-pending-text" title="Client name is being retrieved; catalogued by location">
                            Client: Record Pending (Archived by Location)
                          </span>
                        ) : (
                          <span>Client: <strong>{project.client}</strong></span>
                        )}
                      </div>

                      {/* Pill tags */}
                      {project.pillTags && (
                        <div className="project-pill-tags">
                          {project.pillTags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="project-pill-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Summary */}
                      <p className="project-summary-text">
                        {project.summary}
                      </p>

                      {/* Key Deliverables snippet */}
                      <div className="project-card-metrics">
                        {project.metrics.slice(0, 2).map((metric, idx) => (
                          <div key={idx} className="card-metric-row">
                            <CheckCircle 
                              size={14} 
                              className={`metric-icon metric-icon--${isTech ? 'tech' : 'construction'}`} 
                              aria-hidden="true" 
                            />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action Button */}
                      <div className="project-card-action">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm project-view-btn"
                          onClick={(e) => {
                            e.stopPropagation()
                            openProject(project)
                          }}
                          aria-haspopup="dialog"
                          aria-label={`View full specifications and photos for ${project.title}`}
                        >
                          <Eye size={15} aria-hidden="true" />
                          <span>View Details &amp; {project.images.length} {project.images.length === 1 ? 'Photo' : 'Photos'}</span>
                        </button>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal Popup */}
      {selectedProject && (
        <ProjectDetailModal 
          key={selectedProject.id}
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Final CTA */}
      <section className="cta-section" style={{ background: 'var(--color-white)', borderTop: '1px solid var(--color-border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'var(--text-4xl)', marginBottom: 'var(--space-3)', color: 'var(--color-navy)' }}>
            Have a Residential, Civil or Software Project in Mind?
          </h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--color-grey-dark)', maxWidth: '640px', margin: '0 auto var(--space-6)' }}>
            From single &amp; double-storey residences to agricultural facilities and intelligent mobility platforms, First Minds is ready to bring your project to reality.
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
