import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { COMPANY } from '../../data/company'


// Social icons as inline SVG to avoid external icon library dependencies
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.498 1.451 5.438 1.453 5.485 0 9.948-4.461 9.951-9.95.002-2.66-1.033-5.161-2.909-7.04C17.25 1.777 14.748 1.045 12.09 1.045c-5.488 0-9.953 4.462-9.956 9.95-.001 2.024.528 4.004 1.532 5.728l-1.002 3.658 3.746-.982zm10.63-6.526c-.295-.148-1.749-.863-2.019-.962-.27-.099-.467-.148-.663.148-.196.297-.762.962-.934 1.16-.172.196-.344.222-.639.074-.295-.148-1.246-.459-2.373-1.464-.877-.782-1.47-1.747-1.642-2.044-.172-.297-.018-.458.13-.606.132-.133.294-.345.442-.519.148-.173.196-.296.295-.494.099-.197.05-.37-.025-.519-.074-.148-.663-1.6-.908-2.191-.238-.573-.48-.496-.663-.505-.171-.007-.368-.008-.565-.008-.196 0-.517.074-.787.37-.27.297-1.031 1.011-1.031 2.467 0 1.457 1.06 2.863 1.207 3.061.148.197 2.086 3.185 5.053 4.466.705.304 1.256.487 1.687.625.708.225 1.353.193 1.861.118.567-.085 1.749-.714 1.995-1.405.245-.69.245-1.282.172-1.405-.074-.123-.27-.197-.565-.346z" />
  </svg>
)

const COMPANY_LINKS = [
  { to: '/',            label: 'Home' },
  { to: '/about',       label: 'About Us' },
  { to: '/projects',    label: 'Projects' },
  { to: '/contact',     label: 'Contact' },
]

const DIVISION_LINKS = [
  { to: '/technology',   label: 'First Minds Technologies', cls: 'footer-link--tech' },
  { to: '/construction', label: 'First Minds Construction', cls: 'footer-link--construction' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-accent-bar" aria-hidden="true" />
      <div className="container">

        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link" aria-label="First Minds — Home">
              <div className="footer-logo-badge">
                <img
                  src="/logo/fm-icon.svg"
                  alt="First Minds Emblem"
                  className="footer-logo-emblem"
                  width="44"
                  height="44"
                />
                <div className="footer-brand-lockup">
                  <span className="footer-brand-title">FIRST MINDS</span>
                  <span className="footer-brand-subtitle">Technology & Infrastructure</span>
                </div>
              </div>
            </Link>
            <p className="footer-tagline">{COMPANY.tagline}</p>
            <p className="footer-description">
              {COMPANY.position}
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="footer-col-title">Company</h3>
            <ul className="footer-links" role="list">
              {COMPANY_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="footer-link">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Divisions */}
          <div>
            <h3 className="footer-col-title">Divisions</h3>
            <ul className="footer-links" role="list">
              {DIVISION_LINKS.map(({ to, label, cls }) => (
                <li key={to}>
                  <Link to={to} className={`footer-link ${cls}`}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="footer-col-title">Contact</h3>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <MapPin size={15} className="footer-contact-icon" aria-hidden="true" />
                <span>{COMPANY.contact.address}</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={15} className="footer-contact-icon" aria-hidden="true" />
                <a href={`tel:${COMPANY.contact.phoneRaw}`} aria-label={`Call ${COMPANY.name}`}>{COMPANY.contact.phone}</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={15} className="footer-contact-icon" aria-hidden="true" />
                <a href={`mailto:${COMPANY.contact.emailGeneral}`} aria-label={`Email ${COMPANY.name}`}>{COMPANY.contact.emailGeneral}</a>
              </div>
            </div>

            <div className="footer-socials">
              <a
                href="https://www.facebook.com/share/1BqGt91fNJ/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="First Minds on Facebook"
                className="footer-social-btn"
              >
                <FacebookIcon />
              </a>
              <a
                href={`https://wa.me/${COMPANY.contact.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with First Minds on WhatsApp"
                className="footer-social-btn"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>&copy; {year} First Minds (PTY) LTD. All rights reserved.</span>
          <div className="footer-bottom-links">
            <Link to="/about" className="footer-bottom-link">Privacy Policy</Link>
            <Link to="/contact" className="footer-bottom-link">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
