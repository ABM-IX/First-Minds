import Button from './Button'

/**
 * CTASection — Compact floating call-to-action card with clean separation from footer
 * title: string
 * subtitle: string
 * primaryLabel: string
 * primaryTo: route string
 * secondaryLabel: string (optional)
 * secondaryTo: route string (optional)
 */
export default function CTASection({
  title = "Let's Build Something Extraordinary Together.",
  subtitle = 'Whether it\'s technology, infrastructure, or both — First Minds has the expertise to deliver.',
  primaryLabel = 'Contact Us',
  primaryTo = '/contact',
  secondaryLabel = 'View Our Projects',
  secondaryTo = '/projects'
}) {
  return (
    <section className="cta-wrapper" aria-labelledby="cta-heading">
      <div className="container">
        <div className="cta-card">
          <div className="cta-card-content">
            <h2 id="cta-heading" className="cta-card-title">{title}</h2>
            <p className="cta-card-subtitle">{subtitle}</p>
            <div className="cta-buttons">
              <Button to={primaryTo} variant="white">
                {primaryLabel}
              </Button>
              {secondaryLabel && secondaryTo && (
                <Button to={secondaryTo} variant="ghost">
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
