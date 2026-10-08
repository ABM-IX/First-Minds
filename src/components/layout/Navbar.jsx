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

  // Determine which logo and alt to show based on current route
  const getLogoData = () => {
    if (location.pathname.startsWith('/technology')) {
      return { src: LOGOS.tech, alt: 'First Minds Technologies' }
    }
    if (location.pathname.startsWith('/construction')) {
      return { src: LOGOS.construction, alt: 'First Minds Construction' }
    }
    return { src: LOGOS.master, alt: 'First Minds — Building Intelligent Solutions' }
  }

  const { src: logoSrc, alt: logoAlt } = getLogoData()

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false)
  }, [location.pathname])

  const navShellClass = 'navbar-shell navbar-shell--solid'

  return (
    <>
      {/* Skip to content — accessibility */}
      <a href="#main-content" className="skip-link">Skip to content</a>

      <header className={navShellClass} role="banner">
        <div className="navbar-inner">
          {/* Logo */}
          <Link
            to="/"
            className="navbar-logo-link"
            aria-label="First Minds — Home"
          >
            <img
              src={logoSrc}
              alt={logoAlt}
              className="navbar-logo-img"
              width="73"
              height="44"
            />
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
