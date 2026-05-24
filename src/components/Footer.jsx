export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-logo">Fokus.</div>
            <p className="footer-desc">
              Pioneering advanced ophthalmic care in Kompally. Combining world-class surgical expertise with compassionate patient care to preserve and perfect your vision.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {/* <li><a href="#services">Our Expertise</a></li> */}
              <li><a href="#detailed-services">Services</a></li>
              <li><a href="#founder">Our Story</a></li>
              <li><a href="https://surekhahospitals.in/appointment" target="_blank" rel="noopener">Book Appointment</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Treatments</h4>
            <ul>
              <li><a href="#detailed-services">Cataract Surgery</a></li>
              <li><a href="#detailed-services">Refractive / LASIK</a></li>
              <li><a href="#detailed-services">Retina Care</a></li>
              <li><a href="#detailed-services">Cornea Treatments</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <p>
              123 Healthcare Avenue<br />
              Kompally, Hyderabad 500014<br />
              +91 98765 43210<br />
              care@fokuseye.com
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Fokus Eye Hospital. All rights reserved.</p>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
