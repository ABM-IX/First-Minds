import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import Button from '../shared/Button'

// Logo paths
const LOGOS = {
  master: '/logo/fm-master.svg',
  tech: '/logo/fm-tech.svg',
  construction: '/logo/fm-construction.svg',
  icon: '/logo/fm-icon.svg'
}

const NAV_LINKS = [
  { to: '/',            label: 'Home',         exact: true },
  { to: '/about',       label: 'About' },
  { to: '/technology',  label: 'Technology',   division: 'tech' },
  { to: '/construction',label: 'Construction', division: 'construction' },
  { to: '/projects',    label: 'Projects' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Determine which division/context we are in
  const getDivisionData = () => {
    if (location.pathname.startsWith('/technology')) {
      return {
        iconSrc: LOGOS.icon,
        division: 'tech',
        label: 'TECHNOLOGIES',
        alt: 'First Minds Technologies'
      }
    }
    if (location.pathname.startsWith('/construction')) {
      return {
        iconSrc: LOGOS.icon,
        division: 'construction',
        label: 'CONSTRUCTION',
        alt: 'First Minds Construction'
      }
    }
    return {
      iconSrc: LOGOS.icon,
      division: 'master',
      label: 'INTELLIGENT SOLUTIONS',
      alt: 'First Minds — Building Intelligent Solutions'
    }
  }

  const { iconSrc, division, label: divisionLabel, alt: logoAlt } = getDivisionData()

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false)
  }, [location.pathname])

  const navShellClass = 'navbar-shell navbar-shell--solid'

  return (
    <>
      <header className={navShellClass} role="banner">
        <div className="navbar-inner">
          {/* Logo Brand Lockup */}
          <Link
            to="/"
            className="navbar-logo-link"
            aria-label="First Minds — Building Intelligent Solutions"
          >
            <img
              src={iconSrc}
              alt={logoAlt}
              className="navbar-logo-emblem"
              width="46"
              height="46"
            />
            <div className="navbar-logo-text-group">
              <span className="navbar-logo-title">FIRST MINDS</span>
              <span className={`navbar-logo-division navbar-logo-division--${division}`}>
                {divisionLabel}
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation">
            <ul className="navbar-links" role="list">
              {NAV_LINKS.map(({ to, label, exact, division }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={exact}
                    className={({ isActive }) =>
                      ['navbar-link', isActive ? 'active' : ''].filter(Boolean).join(' ')
                    }
                    data-division={division}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="navbar-cta">
            <Button to="/contact" variant="primary" size="sm">
              Contact Us
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`navbar-mobile ${menuOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ to, label, exact }) => (
          <NavLink
            key={to}
            to={to}
            end={exact}
            className={({ isActive }) =>
              ['navbar-mobile-link', isActive ? 'active' : ''].filter(Boolean).join(' ')
            }
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
        <div className="navbar-mobile-divider" />
        <Button
          to="/contact"
          variant="primary"
          className="navbar-mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Contact Us
        </Button>
      </nav>
    </>
  )
}
