import { useState, useEffect } from 'react'
import { 
  X, 
  MapPin, 
  User, 
  Bed, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Cpu, 
  HardHat, 
  ArrowRight,
  Info
} from 'lucide-react'
import Button from '../shared/Button'

export default function ProjectDetailModal({ project, onClose }) {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0)

  useEffect(() => {
    setActivePhotoIdx(0)
  }, [project])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        setActivePhotoIdx((prev) => (prev - 1 + project.images.length) % project.images.length)
      } else if (e.key === 'ArrowRight') {
        setActivePhotoIdx((prev) => (prev + 1) % project.images.length)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  const images = project.images || [project.image]
  const hasMultiplePhotos = images.length > 1
  const activePhoto = images[activePhotoIdx] || project.image

  const isTech = project.division === 'tech'

  return (
    <div 
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="project-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project modal"
        >
          <X size={20} aria-hidden="true" />
        </button>

        {/* Modal Header */}
        <header className="project-modal-header">
          <div className="project-modal-badges">
            <span className={`project-division badge badge--${isTech ? 'tech' : 'construction'}`}>
              {isTech ? <Cpu size={14} aria-hidden="true" /> : <HardHat size={14} aria-hidden="true" />}
              {isTech ? 'Technology Division' : 'Construction Division'}
            </span>
            <span className={`project-status-chip ${project.status.toLowerCase().includes('progress') ? 'project-status-chip--progress' : 'project-status-chip--complete'}`}>
              <span className="status-dot" aria-hidden="true" />
              {project.status}
            </span>
          </div>

          <h2 id="modal-project-title" className="project-modal-title">
            {project.title}
          </h2>

          <div className="project-modal-meta">
            <div className="meta-item">
              <MapPin size={15} aria-hidden="true" />
              <span>{project.location}</span>
            </div>
            <span className="meta-sep" aria-hidden="true">•</span>
            <div className="meta-item">
              <User size={15} aria-hidden="true" />
              <span>
                {project.clientLocationPending ? (
                  <span className="text-pending" title="Client name is being retrieved; catalogued by location">
                    Client: Record Pending Verification
                  </span>
                ) : (
                  <span>Owner / Client: <strong>{project.client}</strong></span>
                )}
              </span>
            </div>
          </div>

          {project.clientLocationPending && (
            <div className="client-pending-notice" role="note">
              <Info size={15} aria-hidden="true" />
              <span>
                This development is archived under <strong>{project.location.split(',')[0]}</strong> while client ownership records are being updated.
              </span>
            </div>
          )}
        </header>

        {/* Media Gallery / Slideshow */}
        <section className="project-modal-gallery" aria-label="Project photo gallery">
          <div className="gallery-main-view">
            <img 
              src={activePhoto} 
              alt={`${project.title} — photo ${activePhotoIdx + 1} of ${images.length}`} 
              className="gallery-main-img" 
            />

            {hasMultiplePhotos && (
              <>
                <button
                  type="button"
                  className="gallery-nav gallery-nav-prev"
                  onClick={() => setActivePhotoIdx((prev) => (prev - 1 + images.length) % images.length)}
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={22} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="gallery-nav gallery-nav-next"
                  onClick={() => setActivePhotoIdx((prev) => (prev + 1) % images.length)}
                  aria-label="Next photo"
                >
                  <ChevronRight size={22} aria-hidden="true" />
                </button>
                <div className="gallery-counter">
                  Photo {activePhotoIdx + 1} of {images.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Strip */}
          {hasMultiplePhotos && (
            <div className="gallery-thumbnails" role="tablist" aria-label="Photo thumbnails">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={idx === activePhotoIdx}
                  className={`gallery-thumb-btn ${idx === activePhotoIdx ? 'active' : ''}`}
                  onClick={() => setActivePhotoIdx(idx)}
                  aria-label={`View photo ${idx + 1}`}
                >
                  <img src={img} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </section>

        {/* Specifications Grid */}
        {project.specs && (
          <section className="project-modal-specs">
            <h3 className="section-subheading">Project Specifications</h3>
            <div className="specs-grid">
              {project.specs.bedrooms && (
                <div className="spec-card">
                  <div className="spec-card-icon">
                    <Bed size={18} aria-hidden="true" />
                  </div>
                  <div className="spec-card-content">
                    <span className="spec-label">Capacity / Rooms</span>
                    <strong className="spec-value">{project.specs.bedrooms}</strong>
                  </div>
                </div>
              )}
              {project.specs.scope && (
                <div className="spec-card">
                  <div className="spec-card-icon">
                    <Layers size={18} aria-hidden="true" />
                  </div>
                  <div className="spec-card-content">
                    <span className="spec-label">Execution Scope</span>
                    <strong className="spec-value">{project.specs.scope}</strong>
                  </div>
                </div>
              )}
              {project.specs.location && (
                <div className="spec-card">
                  <div className="spec-card-icon">
                    <MapPin size={18} aria-hidden="true" />
                  </div>
                  <div className="spec-card-content">
                    <span className="spec-label">Site Location</span>
                    <strong className="spec-value">{project.specs.location}</strong>
                  </div>
                </div>
              )}
              {project.specs.foundation && (
                <div className="spec-card">
                  <div className="spec-card-icon">
                    <HardHat size={18} aria-hidden="true" />
                  </div>
                  <div className="spec-card-content">
                    <span className="spec-label">Foundation / Ground</span>
                    <strong className="spec-value">{project.specs.foundation}</strong>
                  </div>
                </div>
              )}
              {project.specs.stack && (
                <div className="spec-card">
                  <div className="spec-card-icon">
                    <Cpu size={18} aria-hidden="true" />
                  </div>
                  <div className="spec-card-content">
                    <span className="spec-label">Technical Stack</span>
                    <strong className="spec-value">{project.specs.stack}</strong>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Scope & Narrative */}
        <section className="project-modal-description">
          <h3 className="section-subheading">Engineering Scope &amp; Delivery</h3>
          <div className="description-text">
            {project.description.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* SmartTransit Deep Dive */}
        {project.innovations && (
          <section className="project-modal-innovations">
            <h3 className="section-subheading">Key Technical Innovations</h3>
            <div className="innovations-grid">
              {project.innovations.map((item, idx) => (
                <div key={idx} className="innovation-card">
                  <h4>{item.title}</h4>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Impact callouts if present */}
        {project.impact && (
          <section className="project-modal-impact">
            <h3 className="section-subheading">Target Stakeholder Impact</h3>
            <div className="impact-grid">
              {project.impact.map((item, idx) => (
                <div key={idx} className="impact-card">
                  <strong>{item.group}</strong>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Deliverables / Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="project-modal-metrics">
            <h3 className="section-subheading">Key Deliverables &amp; Outcomes</h3>
            <ul className="metrics-list">
              {project.metrics.map((metric, idx) => (
                <li key={idx} className="metric-item">
                  <CheckCircle size={16} className={`metric-icon metric-icon--${isTech ? 'tech' : 'construction'}`} aria-hidden="true" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Footer Actions */}
        <footer className="project-modal-footer">
          <Button 
            to="/contact" 
            variant="primary" 
            size="md"
          >
            Enquire About Similar Project <ArrowRight size={16} aria-hidden="true" />
          </Button>
          <button 
            type="button"
            className="btn btn-secondary btn-md"
            onClick={onClose}
          >
            Close Details
          </button>
        </footer>
      </div>
    </div>
  )
}
