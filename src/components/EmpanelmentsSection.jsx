export default function EmpanelmentsSection() {
  const logos = [
    { name: 'Aarogyasri', src: '/arogyashree.jpg' },
    { name: 'Aarogyasri', src: '/arogyashree.jpg' },
    { name: 'Aarogyasri', src: '/arogyashree.jpg' },
    { name: 'Aarogyasri', src: '/arogyashree.jpg' },
    { name: 'Aarogyasri', src: '/arogyashree.jpg' },
    { name: 'Aarogyasri', src: '/arogyashree.jpg' },
  ]

  return (
    <section className="empanelments-section" id="empanelments">
      <div className="empanelments-inner">
        <div className="empanelments-header">
          <div className="section-label" style={{ justifyContent: 'center' }}>Empanelments</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Trusted by Government & Insurers</h2>
        </div>
        
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {/* Original Items */}
            {logos.map((logo, idx) => (
              <div className="carousel-item" key={idx}>
                <div className="logo-box">
                  <img src={logo.src} alt={logo.name} />
                </div>
                <div className="logo-name">{logo.name}</div>
              </div>
            ))}
            {/* Duplicated Items for seamless loop */}
            {logos.map((logo, idx) => (
              <div className="carousel-item" key={`dup-${idx}`}>
                <div className="logo-box">
                  <img src={logo.src} alt={logo.name} />
                </div>
                <div className="logo-name">{logo.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
