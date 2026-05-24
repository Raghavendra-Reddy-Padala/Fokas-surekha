export default function GallerySection() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-inner">
        <div className="gallery-header">
          <div>
            <div className="section-label">Our Facility</div>
            <h2 className="section-title">Designed for Healing</h2>
          </div>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img alt="Fokus Reception" src="/gal2.jpg" />
            <div className="gallery-overlay" />
          </div>
          <div className="gallery-item">
            <img alt="Consultation Room" src="/gal1.jpg" />
            <div className="gallery-overlay" />
          </div>
          <div className="gallery-item">
            <img alt="Diagnostic Center" src="/gal4.jpg" />
            <div className="gallery-overlay" />
          </div>
          <div className="gallery-item">
            <img alt="Operation Theatre" src="/gal3.jpg" />
            <div className="gallery-overlay" />
          </div>
        </div>
      </div>
    </section>
  )
}
