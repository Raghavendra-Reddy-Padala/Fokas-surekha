import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null)

  useEffect(() => {
    const loaderEl = loaderRef.current
    const loaderLine = document.getElementById('loader-line')
    const loaderCounter = document.getElementById('loader-counter')
    let count = 0

    gsap.fromTo('#loader-text', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })

    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 12) + 3
      if (count >= 100) { count = 100; clearInterval(interval) }
      if (loaderCounter) loaderCounter.textContent = String(count).padStart(3, '0')
      if (loaderLine) loaderLine.style.width = (count * 2) + 'px'
    }, 40)

    setTimeout(() => {
      gsap.to(loaderEl, {
        yPercent: -100, duration: 1.1, ease: 'power4.inOut',
        onComplete: () => {
          loaderEl.style.display = 'none'
          onComplete()
        },
      })
    }, 2400)
  }, [onComplete])

  return (
    <div id="loader" ref={loaderRef}>
      <div id="loader-text">
        <img src="/fokus.webp" alt="Fokus Logo" style={{ height: '60px', objectFit: 'contain' }} />
      </div>
      <div id="loader-line" />
      <div id="loader-counter">000</div>
    </div>
  )
}
