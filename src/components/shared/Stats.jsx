/**
 * Stats — row of key statistics
 * stats: Array<{ value: string, label: string }>
 */
export default function Stats({ stats, dark = false }) {
  return (
    <div
      className="who-we-are-stats"
      role="list"
      aria-label="Company statistics"
    >
      {stats.map(({ value, label }) => (
        <div
          key={label}
          className="stat-item"
          role="listitem"
          style={dark ? {
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)'
          } : undefined}
        >
          <div
            className="stat-value"
            style={dark ? { color: 'var(--color-white)' } : undefined}
          >
            {value}
          </div>
          <div
            className="stat-label"
            style={dark ? { color: 'rgba(255,255,255,0.5)' } : undefined}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  )
}

