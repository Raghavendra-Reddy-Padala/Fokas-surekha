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
            <a href="https://www.facebook.com/profile.php?id=61588476756999" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/surekha_hospital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/surekha-multi-speciality-hospital/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.youtube.com/@SurekhaMultiSpecialityHospital" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
