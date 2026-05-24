import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const sectionRef = useRef(null)

  // Particles canvas
  useEffect(() => {
    const canvas = document.getElementById('particles-canvas')
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    class Particle {
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.2 + 0.2
        this.speedY = -(Math.random() * 0.35 + 0.08)
        this.speedX = (Math.random() - 0.5) * 0.12
        this.opacity = Math.random() * 0.35 + 0.05
        this.life = 0; this.maxLife = Math.random() * 200 + 100
      }
      constructor() { this.reset() }
      update() { this.x += this.speedX; this.y += this.speedY; this.life++; if (this.life > this.maxLife || this.y < 0) this.reset() }
      draw() {
        ctx.save(); ctx.globalAlpha = this.opacity * (1 - this.life / this.maxLife)
        ctx.fillStyle = '#2E8B57'; ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill(); ctx.restore()
      }
    }
    const isMobile = window.innerWidth <= 768
    const particles = Array.from({ length: isMobile ? 40 : 80 }, () => new Particle())
    let raf
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      raf = requestAnimationFrame(animate)
    }
    animate()
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf) }
  }, [])

  return (
    <>
      <div id="progress" />
      <canvas id="particles-canvas" />
      <section>
        <div className="hero-section">
          <div className="hero-copy">
            <div className="hero-eyebrow">FOKUS EYE HOSPITAL · KOMPALLY, HYDERABAD</div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}>
              Best Eye Hospital in Kompally, Hyderabad | <br />
              <span className="word" style={{ fontSize: '0.8em' }}><em>Fokus Eye Hospital</em></span>
            </h1>
            <p className="hero-sub">
              Premier Ophthalmology: Precision Vision Redefined. Experience the future of advanced eye
              care in Kompally with state-of-the-art diagnostic technology and world-class care designed for your clarity.
              As the top eye hospital in Kompally, we bring global standards to your neighborhood.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="https://surekhahospitals.in/appointment" target="_blank" rel="noopener">
                Schedule Consultation →
              </a>
              <a className="btn-ghost" href="#services">Explore Treatments</a>
            </div>
            <div className="mobile-stats">
              <div className="mobile-stat"><div className="stat-num">98%</div><div className="stat-label">Success Rate</div></div>
              <div className="mobile-stat"><div className="stat-num">4.9★</div><div className="stat-label">Patient Rating</div></div>
              <div className="mobile-stat"><div className="stat-num">25yr</div><div className="stat-label">Experience</div></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-img-wrap">
              <img alt="Fokus Eye Hospital" src="/fokus.jpg" />
              <div className="hero-img-overlay" />
            </div>
            <div className="stat-card stat-card-1">
              <div className="stat-icon"><span className="material-symbols-outlined" style={{ fontSize: '16px' }}>visibility</span></div>
              <div><div className="stat-num">98%</div><div className="stat-label">Success Rate</div></div>
            </div>
            <div className="stat-card stat-card-2">
              <div className="stat-icon"><span className="material-symbols-outlined" style={{ fontSize: '16px' }}>star</span></div>
              <div>
                <div className="stat-num">4.9<span style={{ color: 'var(--primary)' }}>★</span></div>
                <div className="stat-label">Patient Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
