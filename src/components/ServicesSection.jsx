export default function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="services-inner">
        <div className="services-header">
          <div className="section-label" style={{ justifyContent: 'center' }}>Our Expertise</div>
          <h2 className="section-title">Advanced Eye Care Solutions</h2>
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.9rem', marginTop: '1rem' }}>
            As a leading ophthalmology hospital in kompally, hyderabad, we provide specialized treatments for every vision need.
          </p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"><span className="material-symbols-outlined">visibility</span></div>
            <h3>Laser Vision Correction (LASIK)</h3>
            <p>State-of-the-art lasik surgery in kompally and PRK procedures customized to your unique corneal topography for impeccable results at our eye clinic in kompally.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><span className="material-symbols-outlined">health_and_safety</span></div>
            <h3>Cataract Surgery in Kompally</h3>
            <p>Premium lens implants and minimally invasive techniques to restore clarity and vibrance to your vision at the best eye hospital in kompally.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><span className="material-symbols-outlined">ophthalmology</span></div>
            <h3>Comprehensive Eye Exams</h3>
            <p>Deep diagnostic scans utilizing OCT technology to detect and manage conditions before they impact your vision at our eye hospital in kompally.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
