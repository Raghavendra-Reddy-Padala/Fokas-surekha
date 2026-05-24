export default function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={`mobile-menu${isOpen ? ' open' : ''}`} id="mobileMenu">
      <a href="#services" onClick={onClose}>Expertise</a>
      <a href="#detailed-services" onClick={onClose}>Services</a>
      <a href="#founder" onClick={onClose}>Our Story</a>
      <a href="#about" onClick={onClose}>Fokus</a>
      <a href="#testimonials" onClick={onClose}>Stories</a>
      <a
        href="https://surekhahospitals.in/appointment"
        target="_blank"
        rel="noopener"
        className="mobile-cta"
        onClick={onClose}
      >
        Book Appointment
      </a>
      <div className="mobile-menu-footer">FOKUS · KOMPALLY</div>
    </div>
  )
}
