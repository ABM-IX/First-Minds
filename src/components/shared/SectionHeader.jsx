/**
 * SectionHeader — eyebrow + heading + subtitle
 * align: 'center' | 'left'
 * eyebrowColor: 'tech' | 'construction' | 'navy' | 'grey'
 */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  eyebrowColor = 'tech',
  dark = false,
  className = ''
}) {
  return (
    <div
      className={[
        'section-header',
        align === 'left' ? 'text-left' : 'text-center',
        dark ? 'section-header--dark' : '',
        className
      ].filter(Boolean).join(' ')}
    >
      {eyebrow && (
        <span className={`section-eyebrow eyebrow--${eyebrowColor}`}>
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className="section-title">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="section-subtitle">
          {subtitle}
        </p>
      )}
    </div>
  )
}
