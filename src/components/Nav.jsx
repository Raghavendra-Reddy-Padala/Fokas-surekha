import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const CATEGORIES = [
  {
    key: 'cataract', label: 'Cataract',
    services: [
      { key: 'phaco', label: 'Phaco' },
      { key: 'mics', label: 'MICS' },
      { key: 'femto-cataract', label: 'Femto Cataract' },
      { key: 'premium-lenses', label: 'Premium Lenses' },
      { key: 'multifocal-iols', label: 'Multifocal IOLs' },
      { key: 'toric-iols', label: 'Toric IOLs' },
    ],
  },
  {
    key: 'refractive', label: 'Refractive',
    services: [
      { key: 'lasik', label: 'LASIK' },
      { key: 'smile', label: 'SMILE' },
      { key: 'contoura-vision', label: 'Contoura Vision' },
      { key: 'icl', label: 'ICL' },
    ],
  },
  {
    key: 'retina', label: 'Retina',
    services: [
      { key: 'diabetic-retinopathy', label: 'Diabetic Retinopathy' },
      { key: 'retinal-detachment', label: 'Retinal Detachment' },
      { key: 'intravitreal-injections', label: 'Intravitreal Injections' },
      { key: 'oct', label: 'OCT' },
      { key: 'ffa', label: 'FFA' },
    ],
  },
  {
    key: 'cornea', label: 'Cornea',
    services: [
      { key: 'keratoconus', label: 'Keratoconus' },
      { key: 'cross-linking', label: 'Cross-linking' },
    ],
  },
]

export default function Nav({ menuOpen, onToggleMenu, onServiceClick }) {
  const navRef = useRef(null)
  const dropRef = useRef(null)
  const [forceClose, setForceClose] = useState(false)

  // Nav background on scroll
  useEffect(() => {
    const handler = () => {
      if (navRef.current) {
        navRef.current.style.background = window.scrollY > 80
          ? 'rgba(250,250,250,0.97)'
          : 'rgba(250,250,250,0.92)'
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Magnetic nav button
  useEffect(() => {
    const navBtn = document.querySelector('.nav-btn')
    if (!navBtn) return
    const onMove = (e) => {
      const r = navBtn.getBoundingClientRect()
      gsap.to(navBtn, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.4, ease: 'power2.out' })
    }
    const onLeave = () => gsap.to(navBtn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.5)' })
    navBtn.addEventListener('mousemove', onMove)
    navBtn.addEventListener('mouseleave', onLeave)
    return () => { navBtn.removeEventListener('mousemove', onMove); navBtn.removeEventListener('mouseleave', onLeave) }
  }, [])

  const closeDropdown = () => {
    setForceClose(true)
    setTimeout(() => setForceClose(false), 700)
    if (document.activeElement) document.activeElement.blur()
  }

  const handleCategoryClick = (e, catKey) => {
    e.preventDefault()
    closeDropdown()
    const target = document.getElementById('detailed-services')
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleServiceClick = (e, serviceKey) => {
    e.preventDefault()
    closeDropdown()
    setTimeout(() => onServiceClick(serviceKey), 200)
  }

  return (
    <nav ref={navRef} id="mainNav">
      <div className="nav-inner">
        <a className="nav-logo" href="#" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/fokusdark.png" alt="Fokus Logo" style={{ height: '40px', objectFit: 'contain' }} />
        </a>
        <ul className="nav-links">
          {/* <li><a href="#services">Expertise</a></li> */}
          <li className={`nav-dropdown${forceClose ? ' force-close' : ''}`} ref={dropRef}>
            <a href="#detailed-services">
              Services <span className="dropdown-arrow">▾</span>
            </a>
            <div className="dropdown-menu">
              {CATEGORIES.map((cat) => (
                <div className="dropdown-col" key={cat.key}>
                  <div
                    className="dropdown-col-title"
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => handleCategoryClick(e, cat.key)}
                  >
                    {cat.label}
                  </div>
                  <ul>
                    {cat.services.map((svc) => (
                      <li key={svc.key}>
                        <a
                          href="#detailed-services"
                          onClick={(e) => handleServiceClick(e, svc.key)}
                        >
                          {svc.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
          <li><a href="#founder">Our Story</a></li>
          <li><a href="#about">Fokus</a></li>
          <li><a href="#testimonials">Stories</a></li>
          <li>
            <a
              className="nav-btn"
              href="https://surekhahospitals.in/appointment"
              target="_blank"
              rel="noopener"
            >
              Book Appointment
            </a>
          </li>
        </ul>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          id="hamburger"
          aria-label="Toggle menu"
          onClick={onToggleMenu}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
