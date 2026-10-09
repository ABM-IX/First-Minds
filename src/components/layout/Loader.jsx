import { useState, useEffect } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 650)
    return () => clearTimeout(timer)
  }, [])

  if (hidden) return null

  return (
    <div
      className={`page-loader ${hidden ? 'hidden' : ''}`}
      role="status"
      aria-label="First Minds — Building Intelligent Solutions"
    >
      <div className="loader-card">
        {/* Crisp white badge to make the navy, blue, and gold emblem pop with full contrast */}
        <div className="loader-badge" aria-hidden="true">
          <img
            src="/logo/fm-icon.svg"
            alt="First Minds Brand Emblem"
            className="loader-logo"
            width="88"
            height="88"
          />
        </div>

        {/* Company Identity */}
        <div className="loader-brand-info">
          <h2 className="loader-brand-name">FIRST MINDS</h2>
          <p className="loader-brand-tagline">Building Intelligent Solutions</p>
          <div className="loader-divisions" aria-hidden="true">
            <span className="loader-div-tech">Technology</span>
            <span className="loader-div-dot" />
            <span className="loader-div-construction">Infrastructure</span>
          </div>
        </div>

        {/* Dual-Accent Loading Bar */}
        <div className="loader-bar" aria-hidden="true">
          <div className="loader-bar-fill" />
        </div>
      </div>
    </div>
  )
}
