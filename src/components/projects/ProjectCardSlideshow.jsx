import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Images } from 'lucide-react'

export default function ProjectCardSlideshow({ images = [], title = '', status = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef(null)

  const hasMultiple = images.length > 1
  const currentImg = images[currentIndex] || images[0]
  const isSmartTransit = currentImg?.includes('/SmartTransit/')

  useEffect(() => {
    if (!hasMultiple || isPaused) return

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [hasMultiple, isPaused, images.length])

  const handlePrev = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handleDotClick = (e, idx) => {
    e.stopPropagation()
    setCurrentIndex(idx)
  }

  return (
    <div 
      className="project-card-slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label={`${title} image slideshow`}
    >
      <div className={`slideshow-image-wrapper ${isSmartTransit ? 'slideshow-image-wrapper--logo' : ''}`}>
        <img
          src={currentImg}
          alt={`${title} — photo ${currentIndex + 1} of ${images.length}`}
          loading="lazy"
          className="slideshow-img"
        />

        {/* Status Badge */}
        {status && (
          <div className="project-status-badge">
            <span 
              className={`status-dot ${status.toLowerCase().includes('progress') ? 'status-dot--progress' : 'status-dot--complete'}`} 
              aria-hidden="true"
            />
            <span>{status}</span>
          </div>
        )}

        {/* Photo Counter Badge */}
        {hasMultiple && (
          <div className="slideshow-counter-badge" aria-label={`Photo ${currentIndex + 1} of ${images.length}`}>
            <Images size={12} aria-hidden="true" />
            <span>{currentIndex + 1} / {images.length}</span>
          </div>
        )}

        {/* Interactive Arrows */}
        {hasMultiple && (
          <div className="slideshow-controls" aria-label="Slideshow navigation">
            <button
              type="button"
              className="slideshow-nav-btn slideshow-nav-prev"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={16} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="slideshow-nav-btn slideshow-nav-next"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        )}

        {/* Pagination Dots */}
        {hasMultiple && images.length <= 8 && (
          <div className="slideshow-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`slideshow-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={(e) => handleDotClick(e, idx)}
                aria-label={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
