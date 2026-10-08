import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, CheckCircle, Send, AlertCircle, Clock, RefreshCw } from 'lucide-react'
import { COMPANY } from '../data/company'

const SUBJECTS = [
  'Technology Services & AI',
  'Construction & Civil Infrastructure',
  'Integrated Multidisciplinary Project',
  'Enterprise Partnership',
  'General Enquiry'
]

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState(null)

  const validate = () => {
    const errs = {}
    if (!form.firstName.trim()) errs.firstName = 'First name is required.'
    if (!form.lastName.trim()) errs.lastName = 'Last name is required.'
    if (!form.email.trim()) {
      errs.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please provide a valid corporate or personal email address.'
    }
    if (!form.subject) errs.subject = 'Please select a primary subject.'
    if (!form.message.trim()) {
      errs.message = 'Project message or enquiry details are required.'
    } else if (form.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your project.'
    }
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
    if (serverError) setServerError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      const firstField = Object.keys(validationErrors)[0]
      const element = document.getElementById(firstField)
      if (element) element.focus()
      return
    }

    setLoading(true)
    setServerError(null)

    try {
      // Simulate enterprise submission network latency
      await new Promise((resolve) => setTimeout(resolve, 900))
      setSubmitted(true)
    } catch {
      setServerError('An unexpected network error occurred while transmitting your request. Please retry or contact us directly via phone or email.')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    setErrors({})
    setSubmitted(false)
    setServerError(null)
  }

  return (
    <>
      <Helmet>
        <title>Contact Our Engineers | {COMPANY.shortName}</title>
        <meta name="description" content={`Connect with ${COMPANY.name}. Submit an RFP, schedule a site evaluation, or consult our software and civil engineering directors.`} />
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section className="contact-hero section-navy" aria-labelledby="contact-heading">
        <div className="container">
          <span className="page-header-eyebrow">Direct Consultation</span>
          <h1 id="contact-heading">Let's Talk Engineering.</h1>
          <p className="contact-hero-sub">
            Whether you are planning a digital platform, breaking ground on physical infrastructure, or require an integrated feasibility study — our leadership team is ready.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ───────────────────────────────────────────── */}
      <section className="contact-section section-padding" aria-label="Contact information and enquiry form">
        <div className="container">
          <div className="contact-grid">

            {/* Corporate Info Panel */}
            <aside aria-label="Office locations and contact lines">
              <div className="contact-info">
                <div className="contact-info-card">
                  <div className="contact-info-item">
                    <div className="contact-info-icon" aria-hidden="true">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="contact-info-label">Headquarters</div>
                      <span className="contact-info-value">{COMPANY.contact.address}</span>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon" aria-hidden="true">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="contact-info-label">Direct Telephone</div>
                      <a href={`tel:${COMPANY.contact.phoneRaw}`} className="contact-info-value" aria-label={`Call ${COMPANY.name}`}>
                        {COMPANY.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon" aria-hidden="true">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="contact-info-label">Corporate Email</div>
                      <a href={`mailto:${COMPANY.contact.emailGeneral}`} className="contact-info-value" aria-label={`Email ${COMPANY.name}`}>
                        {COMPANY.contact.emailGeneral}
                      </a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon" aria-hidden="true">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="contact-info-label">Operating Hours</div>
                      <span className="contact-info-value">{COMPANY.contact.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="card-base" style={{ marginTop: 'var(--space-4)', padding: 'var(--space-4)', borderLeft: '3px solid var(--color-tech)' }}>
                  <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, marginBottom: 'var(--space-1)', color: 'var(--color-navy)' }}>
                    Enterprise Turnaround
                  </h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-grey-dark)', margin: 0, lineHeight: 1.5 }}>
                    All formal tender solicitations and project consultations are reviewed by our engineering directors with formal response within one business day.
                  </p>
                </div>
              </div>
            </aside>

            {/* Form Container */}
            <div className="contact-form-container card-base">
              {submitted ? (
                /* Success State Contract */
                <div 
                  className="contact-success" 
                  role="status" 
                  aria-live="polite"
                  style={{ textAlign: 'center', padding: 'var(--space-8) var(--space-4)' }}
                >
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--color-tech-light)', color: 'var(--color-tech)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-4)' }}>
                    <CheckCircle size={36} aria-hidden="true" />
                  </div>
                  <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--color-navy)', marginBottom: 'var(--space-2)' }}>
                    Message Dispatched Successfully
                  </h2>
                  <p style={{ color: 'var(--color-grey-dark)', maxWidth: '480px', margin: '0 auto var(--space-6)', lineHeight: 1.6 }}>
                    Thank you, <strong style={{ color: 'var(--color-navy)' }}>{form.firstName}</strong>. Your enquiry regarding <strong style={{ color: 'var(--color-navy)' }}>{form.subject}</strong> has been transmitted to our project team. We will review the details and reach out via <strong>{form.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn btn-secondary"
                  >
                    <RefreshCw size={16} aria-hidden="true" style={{ marginRight: 'var(--space-2)' }} />
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                /* Initial & Interactive State */
                <form onSubmit={handleSubmit} noValidate aria-label="Project enquiry form">
                  <div style={{ marginBottom: 'var(--space-6)' }}>
                    <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--color-navy)', marginBottom: 'var(--space-1)' }}>
                      Send an Enquiry
                    </h2>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-grey-dark)' }}>
                      Complete the parameters below to connect directly with the relevant division.
                    </p>
                  </div>

                  {serverError && (
                    <div className="alert-box" style={{ background: '#FEE2E2', border: '1px solid #EF4444', borderRadius: 'var(--radius-md)', padding: 'var(--space-3)', marginBottom: 'var(--space-4)', display: 'flex', gap: 'var(--space-2)', color: '#991B1B' }} role="alert">
                      <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div style={{ fontSize: 'var(--text-sm)' }}>{serverError}</div>
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">
                        First Name <span aria-hidden="true" style={{ color: '#DC2626' }}>*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        disabled={loading}
                        aria-invalid={Boolean(errors.firstName)}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                        className={errors.firstName ? 'input-error' : ''}
                      />
                      {errors.firstName && (
                        <div id="firstName-error" className="field-error-msg" role="alert">
                          {errors.firstName}
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastName">
                        Last Name <span aria-hidden="true" style={{ color: '#DC2626' }}>*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        disabled={loading}
                        aria-invalid={Boolean(errors.lastName)}
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                        className={errors.lastName ? 'input-error' : ''}
                      />
                      {errors.lastName && (
                        <div id="lastName-error" className="field-error-msg" role="alert">
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">
                        Work or Personal Email <span aria-hidden="true" style={{ color: '#DC2626' }}>*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        disabled={loading}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={errors.email ? 'input-error' : ''}
                      />
                      {errors.email && (
                        <div id="email-error" className="field-error-msg" role="alert">
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number (Optional)</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        disabled={loading}
                        placeholder="+267 ..."
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      Enquiry Subject <span aria-hidden="true" style={{ color: '#DC2626' }}>*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      disabled={loading}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      className={errors.subject ? 'input-error' : ''}
                    >
                      <option value="">Select an engineering area...</option>
                      {SUBJECTS.map((sub) => (
                        <option key={sub} value={sub}>{sub}</option>
                      ))}
                    </select>
                    {errors.subject && (
                      <div id="subject-error" className="field-error-msg" role="alert">
                        {errors.subject}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Project Scope &amp; Requirements <span aria-hidden="true" style={{ color: '#DC2626' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      disabled={loading}
                      placeholder="Briefly outline your objectives, site location, timeline, or technical specifications..."
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={errors.message ? 'input-error' : ''}
                    />
                    {errors.message && (
                      <div id="message-error" className="field-error-msg" role="alert">
                        {errors.message}
                      </div>
                    )}
                  </div>

                  <div style={{ marginTop: 'var(--space-6)' }}>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary btn-lg"
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-2)' }}
                    >
                      {loading ? (
                        <>
                          <RefreshCw size={18} className="animate-spin" aria-hidden="true" />
                          <span>Transmitting Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} aria-hidden="true" />
                          <span>Transmit Project Enquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
