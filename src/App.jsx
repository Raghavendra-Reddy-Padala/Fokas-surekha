import { useState } from 'react'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Nav from './components/Nav'
import MobileMenu from './components/MobileMenu'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import FounderSection from './components/FounderSection'
import DetailedServicesSection from './components/DetailedServicesSection'
import AboutSection from './components/AboutSection'
import NumbersSection from './components/NumbersSection'
import EquipmentSection from './components/EquipmentSection'
import EmpanelmentsSection from './components/EmpanelmentsSection'
import GallerySection from './components/GallerySection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import gsap from 'gsap'

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(null)

  const handleLoaderComplete = () => {
    setLoaderDone(true)
    const tl = gsap.timeline()
    
    tl.to('.nav-logo', { opacity: 1, duration: 0.8, ease: 'power2.out' }, 0)
      .to('.nav-links a', { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }, 0.2)
      .to('.hero-visual', { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' }, 0.4)
      .to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.6)
      .to('.hero-title .word', { y: 0, duration: 0.8, stagger: 0.1, ease: 'power4.out' }, 0.8)
      .to('.hero-sub', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 1.2)
      .to('.hero-actions', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 1.4)
      .to('.stat-card', { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.5)' }, 1.5)
  }

  const handleServiceSelect = (serviceKey) => {
    setActiveService(serviceKey)
    
    // Quick scroll to the section to ensure it's in view
    const section = document.getElementById('detailed-services')
    if (section) {
      const rect = section.getBoundingClientRect()
      if (rect.top < 0 || rect.bottom > window.innerHeight) {
        window.scrollTo({
          top: window.scrollY + rect.top - 100, // 100px offset for nav
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <>
      <Cursor />
      {!loaderDone && <Loader onComplete={handleLoaderComplete} />}
      
      <Nav 
        menuOpen={menuOpen} 
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        onServiceClick={handleServiceSelect}
      />
      
      <MobileMenu 
        isOpen={menuOpen} 
        onClose={() => setMenuOpen(false)} 
      />
      
      <main>
        <Hero />
        {/* <ServicesSection /> */}
        <FounderSection />
        <AboutSection />
        <DetailedServicesSection 
          activeService={activeService} 
          onServiceSelect={handleServiceSelect}
          onClosePanel={() => setActiveService(null)}
        />
        <NumbersSection />
        <EquipmentSection />
        <EmpanelmentsSection />
        <GallerySection />
        <TestimonialsSection />
      </main>
      
      <Footer />
    </>
  )
}
