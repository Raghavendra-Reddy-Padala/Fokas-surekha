import { useRef } from 'react'

export default function EquipmentSection() {
  const sliderRef = useRef(null)

  const handleScroll = (dir) => {
    if (sliderRef.current) {
      const amount = sliderRef.current.clientWidth
      sliderRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
    }
  }

  const equipmentData = [
    {
      brand: 'Carl Zeiss',
      equipment: 'Lumera 700 Microscope',
      desc: 'Unmatched optical clarity and visualization for the most complex ophthalmic micro-surgeries.',
      image: 'https://placehold.co/600x400/f8fafc/64748b?text=Zeiss+Lumera'
    },
    {
      brand: 'Alcon',
      equipment: 'Constellation Vision System',
      desc: 'The global gold-standard platform for advanced vitreo-retinal and anterior segment procedures.',
      image: 'https://placehold.co/600x400/f8fafc/64748b?text=Alcon+Constellation'
    },
    {
      brand: 'Bausch & Lomb',
      equipment: 'Stellaris Elite',
      desc: 'Next-generation phacoemulsification technology for highly precise, minimally invasive cataract surgery.',
      image: 'https://placehold.co/600x400/f8fafc/64748b?text=Stellaris+Elite'
    },
    {
      brand: 'Topcon',
      equipment: 'Swept Source OCT',
      desc: 'Deep structural 3D imaging of the retina and optic nerve to detect microscopic anomalies.',
      image: 'https://placehold.co/600x400/f8fafc/64748b?text=Topcon+OCT'
    },
    {
      brand: 'Johnson & Johnson',
      equipment: 'Intralase Femtosecond',
      desc: '100% blade-free laser precision for LASIK and advanced refractive vision correction.',
      image: 'https://placehold.co/600x400/f8fafc/64748b?text=Intralase'
    },
    {
      brand: 'Nidek',
      equipment: 'Corneal Topography',
      desc: 'Highly precise 3D elevation mapping of the corneal surface for fully customized laser treatments.',
      image: 'https://placehold.co/600x400/f8fafc/64748b?text=Nidek+Topo'
    }
  ]

  return (
    <section className="equipment-section" id="equipment">
      <div className="equipment-inner">
        <div className="equipment-header-wrap">
          <div className="equipment-header">
            <div className="section-label">World-Class Technology</div>
            <h2 className="section-title">Powered by Global Innovators</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '1rem', maxWidth: '600px' }}>
              We exclusively partner with the world's leading medical technology companies to ensure our diagnostic accuracy and surgical safety remain unparalleled.
            </p>
          </div>
          {equipmentData.length > 4 && (
            <div className="slider-controls">
              <button className="slider-btn" onClick={() => handleScroll('left')} aria-label="Previous">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="slider-btn" onClick={() => handleScroll('right')} aria-label="Next">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          )}
        </div>
        
        <div className="equipment-slider" ref={sliderRef}>
          {equipmentData.map((item, idx) => (
            <div className="eq-card" key={idx}>
              <div className="eq-image-wrap">
                <img src={item.image} alt={item.equipment} />
              </div>
              <div className="eq-content">
                <div className="eq-brand">{item.brand}</div>
                <h4 className="eq-title">{item.equipment}</h4>
                <p className="eq-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
