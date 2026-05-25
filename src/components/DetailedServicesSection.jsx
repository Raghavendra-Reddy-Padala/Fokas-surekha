import TreatmentPanel from './TreatmentPanel'
import treatmentsData from '../data/treatments'

const eyeImages = {
  cataract: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Cataract_in_human_eye.png/400px-Cataract_in_human_eye.png",
    alt: "Cataract in human eye"
  },
  refractive: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/LASIK_surgery.jpg/400px-LASIK_surgery.jpg",
    alt: "LASIK laser refractive surgery"
  },
  retina: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Fundus_photograph_of_normal_right_eye.jpg/400px-Fundus_photograph_of_normal_right_eye.jpg",
    alt: "Fundus photograph of retina"
  },
  cornea: {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Keratoconus_cornea.jpg/400px-Keratoconus_cornea.jpg",
    alt: "Cornea keratoconus"
  }
}

export default function DetailedServicesSection({ activeService, onServiceSelect, onClosePanel }) {
  const activeData = activeService ? treatmentsData[activeService] : null

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
            <div className="ds-card-icon">
              <img
                src={eyeImages.cataract.src}
                alt={eyeImages.cataract.alt}
                style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #e0eaf4' }}
              />
            </div>
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
            <div className="ds-card-icon">
              <img
                src={eyeImages.refractive.src}
                alt={eyeImages.refractive.alt}
                style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #e0eaf4' }}
              />
            </div>
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
            <div className="ds-card-icon">
              <img
                src={eyeImages.retina.src}
                alt={eyeImages.retina.alt}
                style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #e0eaf4' }}
              />
            </div>
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
            <div className="ds-card-icon">
              <img
                src={eyeImages.cornea.src}
                alt={eyeImages.cornea.alt}
                style={{ width: '64px', height: '64px', objectFit: 'cover', borderRadius: '50%', border: '2px solid #e0eaf4' }}
              />
            </div>
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