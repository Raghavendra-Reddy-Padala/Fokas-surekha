export default function TreatmentPanel({ data, onClose }) {
  if (!data) return null

  return (
    <div className="detail-panel visible">
      <div className="detail-panel-inner">
        <button className="detail-close" onClick={onClose} aria-label="Close details">✕</button>
        <div className="detail-top">
          <div className="detail-icon">
            <span className="material-symbols-outlined">{data.icon}</span>
          </div>
          <div>
            <div className="detail-badge">{data.category}</div>
            <h3 className="detail-title">{data.title}</h3>
          </div>
        </div>
        <div className="detail-body">
          <div className="detail-main">
            <p className="detail-desc">{data.desc}</p>
            <div className="detail-steps-title">How We Treat It</div>
            <div className="detail-steps">
              {data.steps.map((step, idx) => (
                <div className="detail-step" key={idx}>
                  <div className="detail-step-num">{idx + 1}</div>
                  <div>
                    <h5>{step.title}</h5>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="detail-sidebar">

            {/* Our Expert Doctors */}
            {data.doctors && data.doctors.length > 0 && (
              <div className="detail-doctors">
                <div className="detail-steps-title" style={{ marginBottom: '1rem' }}>Our Expert Doctors</div>
                <div className="detail-doctors-list">
                  {data.doctors.map((doc, idx) => (
                    <div className="detail-doctor-card" key={idx}>
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="detail-doctor-img"
                      />
                      <div className="detail-doctor-info">
                        <div className="detail-doctor-name">{doc.name}</div>
                        <div className="detail-doctor-qual">{doc.qualification}</div>
                        <div className="detail-doctor-spec">{doc.speciality}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="detail-steps-title" style={{ marginBottom: '1.25rem' }}>Key Benefits</div>
            <div className="detail-benefits">
              {data.benefits.map((benefit, idx) => (
                <div className="detail-benefit" key={idx}>{benefit}</div>
              ))}
            </div>
            <div className="detail-cta">
              <a className="btn-primary" href="https://surekhahospitals.in/appointment" target="_blank" rel="noopener">
                Book Consultation →
              </a>
              <span className="detail-cta-text">No wait time. Expert care.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
