export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-content">
          <div className="section-label">Why Choose Fokus</div>
          <h2 className="section-title" style={{ marginBottom: '2.5rem' }}>Where Precision Meets Compassion</h2>
          
          <div className="feature-row">
            <span className="material-symbols-outlined feature-icon">biotech</span>
            <div>
              <h4>State-of-the-Art Technology</h4>
              <p>We invest in the world's most advanced ophthalmic diagnostic and surgical platforms, ensuring unparalleled accuracy and surgical safety.</p>
            </div>
          </div>
          
          <div className="feature-row">
            <span className="material-symbols-outlined feature-icon">psychology</span>
            <div>
              <h4>Sub-Specialty Expertise</h4>
              <p>Our team comprises fellowship-trained specialists dedicated to specific parts of the eye, offering deeper knowledge and better outcomes.</p>
            </div>
          </div>
          
          <div className="feature-row">
            <span className="material-symbols-outlined feature-icon">volunteer_activism</span>
            <div>
              <h4>Patient-Centric Care</h4>
              <p>We believe in transparent communication. You will understand your diagnosis, your options, and what to expect at every single step.</p>
            </div>
          </div>
        </div>
        
        <div className="about-img-wrap">
          <img alt="Fokus Eye Hospital Infrastructure" src="/whychosse.jpg" />
        </div>
      </div>
    </section>
  )
}
