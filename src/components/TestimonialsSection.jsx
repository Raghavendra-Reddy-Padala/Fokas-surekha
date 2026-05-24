export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div className="section-label" style={{ justifyContent: 'center' }}>Patient Stories</div>
          <h2 className="section-title">Through Their Eyes</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p>"I had my LASIK here and the experience was nothing short of miraculous. The attention to detail from the initial scans to the post-op care made me feel completely at ease."</p>
            <div className="testimonial-author">
              <div className="author-avatar"><img alt="Reviewer" src="https://i.pravatar.cc/100?img=1" /></div>
              <div>
                <div className="author-name">Anjali Rao</div>
                <div className="author-role">LASIK Patient</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p>"Dr. Uma Shankar operated on my mother's cataracts. He used the femto laser and premium multifocal lenses. She is reading without glasses for the first time in 20 years."</p>
            <div className="testimonial-author">
              <div className="author-avatar"><img alt="Reviewer" src="https://i.pravatar.cc/100?img=33" /></div>
              <div>
                <div className="author-name">Suresh Reddy</div>
                <div className="author-role">Cataract Patient Family</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-mark">"</div>
            <p>"The diagnosis of diabetic retinopathy was scary, but the retina team at Fokus explained my treatment plan perfectly. My vision has stabilized completely under their care."</p>
            <div className="testimonial-author">
              <div className="author-avatar"><img alt="Reviewer" src="https://i.pravatar.cc/100?img=12" /></div>
              <div>
                <div className="author-name">Prakash Kumar</div>
                <div className="author-role">Retina Patient</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
