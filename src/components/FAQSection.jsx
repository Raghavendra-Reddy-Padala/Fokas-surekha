import { useState } from 'react'

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Fokus Eye Hospital?',
        a: 'Fokus Eye Hospital is a super-speciality eye care and LASIK centre established in 1995, operating as a unit of Surekha Hospital in Kompally, Hyderabad. We offer comprehensive ophthalmic services — from cataract and refractive surgery to retina care, cornea treatments, and advanced diagnostics — all under one roof.'
      },
      {
        q: 'Where is Fokus Eye Hospital located?',
        a: 'We are located in Kompally, Hyderabad. You can visit us or call us at +91 91772 84142 to get directions or book your appointment.'
      },
      {
        q: 'How do I book an appointment?',
        a: 'You can book an appointment online through our website at surekhahospitals.in/appointment, call us directly at +91 91772 84142, or walk in during our clinic hours. Our team will guide you to the right specialist based on your eye concern.'
      },
      {
        q: 'Is Fokus accredited or empanelled with insurance providers?',
        a: 'Yes. Fokus Eye Hospital is empanelled with Aarogyasri, government health schemes, and several insurance providers. Please contact our front desk to confirm your specific insurance plan before your visit.'
      },
    ]
  },
  {
    category: 'Cataract Surgery',
    questions: [
      {
        q: 'How do I know if I need cataract surgery?',
        a: 'Common signs include blurry or cloudy vision, difficulty seeing at night, colours appearing faded, and frequent changes in your eyeglass prescription. Our specialists will perform a comprehensive eye examination to confirm whether surgery is needed and recommend the best technique.'
      },
      {
        q: 'What is the difference between Phaco, MICS, and Femto cataract surgery?',
        a: 'Phacoemulsification (Phaco) uses ultrasound through a 3mm incision and is the gold standard. MICS (Micro-Incision Cataract Surgery) uses a sub-1mm bimanual approach for even less trauma. Femto Cataract replaces key manual steps with a computer-guided femtosecond laser, offering the highest precision. The right choice depends on your eye\'s condition and lens preference.'
      },
      {
        q: 'Will I need glasses after cataract surgery?',
        a: 'With standard monofocal IOLs, you will likely need reading glasses for near tasks. However, with our premium multifocal or EDOF (Extended Depth of Focus) lenses, most patients achieve spectacle independence for both near and far vision. We will help you select the best IOL for your lifestyle.'
      },
      {
        q: 'How long does cataract surgery take and what is recovery like?',
        a: 'The surgery itself typically takes 15–20 minutes per eye. Most patients notice significant vision improvement within 24–48 hours. You can resume light activities the same day; strenuous activities and swimming should be avoided for 2–4 weeks.'
      },
    ]
  },
  {
    category: 'LASIK & Refractive Surgery',
    questions: [
      {
        q: 'Am I a candidate for LASIK?',
        a: 'You may be suitable for LASIK if you are 18 or older, have a stable prescription for at least one year, have adequate corneal thickness, and no significant eye diseases. Patients with thin corneas, high prescriptions, or dry eyes may be better suited to SMILE or ICL. Our comprehensive screening will determine the right option for you.'
      },
      {
        q: 'What is the difference between LASIK, SMILE, and Contoura Vision?',
        a: 'LASIK creates a corneal flap and reshapes the stroma. SMILE is completely flapless, making it safer for active individuals. Contoura Vision is topography-guided LASIK that maps 22,000 corneal points, correcting both your prescription and corneal irregularities for potentially the sharpest vision possible.'
      },
      {
        q: 'Is refractive surgery permanent?',
        a: 'Yes — LASIK, SMILE, and Contoura Vision provide permanent correction of your current prescription. However, natural age-related changes (like presbyopia after 40) may still require reading glasses later in life. ICL is also a permanent but fully reversible option.'
      },
      {
        q: 'What is ICL and who is it for?',
        a: 'ICL (Implantable Collamer Lens) is ideal for patients who are not candidates for laser surgery due to thin corneas, very high myopia (up to −20D), or significant dry eyes. A biocompatible lens is placed between the iris and your natural lens through a tiny incision — no tissue is removed and the procedure is completely reversible.'
      },
    ]
  },
  {
    category: 'Retina & Cornea',
    questions: [
      {
        q: 'What are the warning signs of a retinal problem?',
        a: 'Watch for sudden floaters, flashes of light, a curtain or shadow over part of your vision, or distorted straight lines. These can indicate retinal detachment, diabetic retinopathy, or macular degeneration — all of which require urgent evaluation. Please call us immediately if you experience these symptoms.'
      },
      {
        q: 'What is Keratoconus and can it be treated?',
        a: 'Keratoconus is a progressive condition where the cornea thins and bulges into a cone shape, causing distorted vision. At Fokus, we offer the full spectrum of management: rigid gas-permeable lenses, scleral lenses, Intracorneal Ring Segments (ICRS), and Corneal Cross-Linking (CXL) — the only proven treatment to halt its progression permanently.'
      },
      {
        q: 'Does corneal cross-linking hurt?',
        a: 'The procedure itself is painless as numbing drops are applied. You may experience mild discomfort, light sensitivity, and blurry vision for 3–5 days after the epithelium heals. A bandage contact lens is placed to aid healing, and most patients return to normal activities within a week.'
      },
    ]
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)
  const [activeCategory, setActiveCategory] = useState('General')

  const currentFaqs = faqs.find(f => f.category === activeCategory)?.questions || []

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setOpenIndex(null)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="faq-inner">
        <div className="faq-header">
          <div className="section-label" style={{ justifyContent: 'center' }}>Got Questions?</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="faq-subtitle">Everything you need to know before your visit — answered clearly by our team.</p>
        </div>

        {/* Category Tabs */}
        <div className="faq-tabs">
          {faqs.map(f => (
            <button
              key={f.category}
              className={`faq-tab${activeCategory === f.category ? ' active' : ''}`}
              onClick={() => handleCategoryChange(f.category)}
            >
              {f.category}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="faq-list">
          {currentFaqs.map((item, idx) => (
            <div
              key={idx}
              className={`faq-item${openIndex === idx ? ' open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{item.q}</span>
                <div className="faq-icon">
                  <span>{openIndex === idx ? '−' : '+'}</span>
                </div>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="faq-cta">
          <p>Still have questions? Our team is happy to help.</p>
          <a
            className="btn-primary"
            href="https://surekhahospitals.in/appointment"
            target="_blank"
            rel="noopener"
          >
            Book a Consultation →
          </a>
        </div>
      </div>
    </section>
  )
}
