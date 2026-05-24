import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function NumbersSection() {
  useEffect(() => {
    const targets = document.querySelectorAll('.counter-target')
    if (targets.length === 0) return

    ScrollTrigger.create({
      trigger: '#numbers',
      start: 'top 85%',
      once: true,
      onEnter: () => {
        targets.forEach(el => {
          const endVal = parseInt(el.getAttribute('data-target') || '0', 10)
          gsap.to(el, {
            innerHTML: endVal,
            duration: 2.5,
            ease: 'power3.out',
            snap: { innerHTML: 1 },
            onUpdate: function () {
              el.innerHTML = Math.round(this.targets()[0].innerHTML)
            }
          })
        })
      }
    })
  }, [])

  return (
    <section className="numbers-section" id="numbers">
      <div className="numbers-inner">
        <div>
          <div className="num-value"><span className="counter-target" data-target="40000">0</span><span>+</span></div>
          <div className="num-label">Successful Surgeries</div>
        </div>
        <div>
          <div className="num-value"><span className="counter-target" data-target="150">0</span><span>k+</span></div>
          <div className="num-label">Happy Patients</div>
        </div>
        <div>
          <div className="num-value"><span className="counter-target" data-target="25">0</span><span>+</span></div>
          <div className="num-label">Years Legacy</div>
        </div>
        <div>
          <div className="num-value"><span className="counter-target" data-target="100">0</span><span>%</span></div>
          <div className="num-label">Advanced Tech</div>
        </div>
      </div>
    </section>
  )
}
