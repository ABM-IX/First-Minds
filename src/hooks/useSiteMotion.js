import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const REVEAL_SELECTORS = [
  '.section-padding',
  '.section-header',
  '.card-base',
  '.division-card',
  '.service-card',
  '.why-item',
  '.value-card',
  '.mv-card',
  '.project-card',
  '.process-step',
  '.about-story-image',
  '.contact-info-card',
  '.contact-form-container',
  '.cta-card'
]

const GROUP_SELECTORS = [
  '.grid-2',
  '.grid-3',
  '.divisions-grid',
  '.division-services-grid',
  '.why-grid',
  '.values-grid',
  '.mission-vision-grid',
  '.projects-grid',
  '.process-steps',
  '.who-we-are-stats'
]

export default function useSiteMotion() {
  const { pathname } = useLocation()

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealTargets = Array.from(document.querySelectorAll(REVEAL_SELECTORS.join(',')))
      .filter((el) => !el.closest('.division-hero, .hero, .about-hero, .contact-hero, .projects-hero'))
      .filter((el) => !el.matches('.projects-content'))

    const staggerGroups = Array.from(document.querySelectorAll(GROUP_SELECTORS.join(',')))

    staggerGroups.forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        child.style.setProperty('--reveal-delay', `${Math.min(index * 70, 280)}ms`)
      })
    })

    if (reduceMotion) {
      revealTargets.forEach((el) => el.classList.add('is-revealed'))
      return undefined
    }

    revealTargets.forEach((el) => {
      el.classList.add('scroll-reveal')
      if (el.matches('img, .about-story-image, .project-image, .division-hero-card-media')) {
        el.classList.add('scroll-reveal--image')
      }
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      })
    }, {
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px'
    })

    revealTargets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [pathname])
}
