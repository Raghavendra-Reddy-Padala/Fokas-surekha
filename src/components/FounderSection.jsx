export default function FounderSection() {
  return (
    <section className="founder-section" id="founder">
      <div className="founder-inner">
        <div className="founder-header">
          <div className="section-label" style={{ justifyContent: 'center' }}>Meet The Founder</div>
          <h2 className="section-title">Visionary Leadership</h2>
        </div>
        <div className="founder-card">
          <div className="founder-img-side">
            <div className="founder-blob" />
            <div className="founder-img-wrap">
              <img alt="Dr. Uma Shankar - Top Eye Specialist in Kompally" src="/doc.jpg" />
              <div className="founder-badge">
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '18px' }}>verified</span>
                Chief Surgeon
              </div>
            </div>
          </div>
          <div className="founder-content">
            <div className="founder-quote">
              "True vision care goes beyond the eye—it's about restoring the vividness of life. Every patient deserves surgical precision combined with profound empathy."
            </div>
            <div className="founder-divider" />
            <h3 className="founder-name">Dr. Uma Shankar</h3>
            <div className="founder-role">Founder & Chief Ophthalmologist in Kompally</div>
            <p className="founder-bio">
              With over 25 years of surgical experience, Dr. Uma Shankar trained at Johns Hopkins and
              completed his fellowship at Moorfields Eye Hospital, London. Together with his wife, Dr. Surekha, they
              established Fokus Eye Hospital as a specialized wing of Surekha Multi Speciality Hospital to provide
              advanced eye care in kompally
            </p>
            <div className="founder-stats">
              <div className="fstat">
                <span className="fstat-num">25+</span>
                <span className="fstat-label">Years Experience</span>
              </div>
              <div className="fstat">
                <span className="fstat-num">40k+</span>
                <span className="fstat-label">Surgeries</span>
              </div>
              <div className="fstat">
                <span className="fstat-num">3</span>
                <span className="fstat-label">Global Fellowships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
