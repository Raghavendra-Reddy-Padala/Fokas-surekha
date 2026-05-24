import { useEffect } from 'react'
import TreatmentPanel from './TreatmentPanel'
import treatmentsData from '../data/treatments'

export default function DetailedServicesSection({ activeService, onServiceSelect, onClosePanel }) {
  const activeData = activeService ? treatmentsData[activeService] : null

  // Auto-close on scroll away
  useEffect(() => {
    const handleScroll = () => {
      if (!activeService) return
      const section = document.getElementById('detailed-services')
      if (!section) return
      
      const rect = section.getBoundingClientRect()
      const threshold = window.innerHeight * 0.3
      
      if (rect.top > threshold || rect.bottom < threshold) {
        onClosePanel()
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeService, onClosePanel])

  return (
    <section className="detailed-services-section" id="detailed-services">
      <div className={`detailed-services-inner ${activeService ? 'detail-mode' : ''}`}>
        <div className="detailed-services-header">
          <div className="section-label" style={{ justifyContent: 'center' }}>Comprehensive Care</div>
          <h2 className="section-title">Centers of Excellence</h2>
        </div>
        
        {/* The 4 Category Cards */}
        <div className="detailed-services-grid">
          
          {/* Cataract Card */}
          <div className="ds-card">
            <div className="ds-card-icon"><span className="material-symbols-outlined">health_and_safety</span></div>
            <h3 className="ds-card-title">Cataract</h3>
            <p className="ds-card-desc">Advanced micro-incision and laser-assisted cataract surgery with premium intraocular lenses for visual freedom.</p>
            <div className="ds-divider" />
            <div className="ds-service-item" onClick={() => onServiceSelect('phaco')}>Phacoemulsification</div>
            <div className="ds-service-item" onClick={() => onServiceSelect('mics')}>MICS (Micro-Incision)</div>
            <div className="ds-service-item" onClick={() => onServiceSelect('femto-cataract')}>Femto Laser Cataract</div>
            <div className="ds-service-item" onClick={() => onServiceSelect('premium-lenses')}>Premium Lenses</div>
            <div className="ds-service-item" onClick={() => onServiceSelect('multifocal-iols')}>Multifocal IOLs</div>
            <div className="ds-service-item" onClick={() => onServiceSelect('toric-iols')}>Toric IOLs</div>
          </div>

          {/* Refractive Card */}
          <div className="ds-card">
            <div className="ds-card-icon"><span className="material-symbols-outlined">visibility</span></div>
            <h3 className="ds-card-title">Refractive</h3>
            <p className="ds-card-desc">State-of-the-art laser vision correction to permanently eliminate your dependence on glasses and contact lenses.</p>
            <div className="ds-divider" />
            <div className="ds-service-item" onClick={() => onServiceSelect('lasik')}>LASIK</div>
            <div className="ds-service-item" onClick={() => onServiceSelect('smile')}>SMILE</div>
            <div className="ds-service-item" onClick={() => onServiceSelect('contoura-vision')}>Contoura Vision</div>
            <div className="ds-service-item" onClick={() => onServiceSelect('icl')}>ICL (Implantable Lens)</div>
          </div>

          {/* Retina Card */}
          <div className="ds-card">
            <div className="ds-card-icon"><span className="material-symbols-outlined">ophthalmology</span></div>
            <h3 className="ds-card-title">Retina</h3>
            <p className="ds-card-desc">Expert diagnosis and medical/surgical management of complex vitreo-retinal and macular diseases.</p>
            <div className="ds-divider" />
            <div className="ds-service-item" onClick={() => onServiceSelect('diabetic-retinopathy')}>Diabetic Retinopathy</div>
            <div className="ds-service-item" onClick={() => onServiceSelect('retinal-detachment')}>Retinal Detachment</div>
            <div className="ds-service-item" onClick={() => onServiceSelect('intravitreal-injections')}>Intravitreal Injections</div>
            <div className="ds-service-item" onClick={() => onServiceSelect('oct')}>OCT Scanning</div>
            <div className="ds-service-item" onClick={() => onServiceSelect('ffa')}>FFA</div>
          </div>

          {/* Cornea Card */}
          <div className="ds-card">
            <div className="ds-card-icon"><span className="material-symbols-outlined">blur_circular</span></div>
            <h3 className="ds-card-title">Cornea</h3>
            <p className="ds-card-desc">Advanced treatments for corneal diseases, dystrophies and keratoconus to restore ocular surface integrity.</p>
            <div className="ds-divider" />
            <div className="ds-service-item" onClick={() => onServiceSelect('keratoconus')}>Keratoconus</div>
            <div className="ds-service-item" onClick={() => onServiceSelect('cross-linking')}>Corneal Cross-linking</div>
          </div>
          
        </div>

        {/* Detail Panel */}
        <TreatmentPanel data={activeData} onClose={onClosePanel} />
        
      </div>
    </section>
  )
}
