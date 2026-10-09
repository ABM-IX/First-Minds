import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Loader from './Loader'
import ScrollToTop from './ScrollToTop'
import ScrollProgress from './ScrollProgress'
import useSiteMotion from '../../hooks/useSiteMotion'

export default function Layout() {
  const { pathname } = useLocation()
  useSiteMotion()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1} style={{ outline: 'none' }}>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
