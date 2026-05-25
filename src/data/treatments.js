const PLACEHOLDER_IMG = 'https://media.istockphoto.com/id/2077095666/vector/default-placeholder-doctor-portrait-photo-avatar-on-gray-background-greyscale-healthcare.jpg?s=612x612&w=0&k=20&c=en2o7NAtzp_udRQhckeWozkwHiXGz5KCRhTzY3Vbhdo='
const Umashankar = '/doc.jpg'
const treatments = {
  phaco: {
    category: 'Cataract', icon: 'health_and_safety',
    title: 'Phacoemulsification (Phaco)',
    desc: 'Phacoemulsification is the gold-standard cataract removal technique. Using a tiny self-sealing incision of less than 3mm, an ultrasonic probe gently emulsifies the cloudy natural lens, which is then aspirated out. A premium foldable intraocular lens (IOL) is then inserted through the same micro-incision, restoring crystal-clear vision — often within 24 hours.',
    steps: [
      { title: 'Pre-operative Evaluation', desc: 'Biometry, corneal topography and OCT select the ideal IOL power for your eye.' },
      { title: 'Micro-Incision Entry', desc: 'A <3mm self-sealing corneal incision is created — no stitches required.' },
      { title: 'Ultrasonic Emulsification', desc: 'The phaco probe breaks the cloudy lens into micro-fragments using precisely controlled ultrasound energy.' },
      { title: 'IOL Implantation', desc: 'A folded premium IOL unfolds perfectly inside the capsular bag, immediately correcting vision.' },
    ],
    benefits: ['No-stitch, no-injection technique', 'Vision recovery within 24–48 hours', 'Suitable for all grades of cataract', 'Performed under topical anaesthesia', 'Minimal post-operative restrictions'],
    doctors: [
      { name: 'Dr. Umashankar Mamidi', qualification: 'M.S. (Ophthal)', speciality: 'Eye Specialist, Phaco & LASIK Surgeon', image: Umashankar },
      { name: 'Dr. Supreeth Mamidi', qualification: 'M.S. (Ophthalmology)', speciality: 'Cataract & Refractive Surgeon', image: PLACEHOLDER_IMG },
      { name: 'Dr. Hari Krishna', qualification: 'M.S. Ophthalmology', speciality: 'Cataract Surgeon', image: PLACEHOLDER_IMG },
    ],
  },
  mics: {
    category: 'Cataract', icon: 'health_and_safety',
    title: 'MICS — Micro-Incision Cataract Surgery',
    desc: 'MICS takes phaco surgery a step further with a sub-1mm bimanual incision approach. By separating irrigation and aspiration into two ultra-thin instruments, surgeons gain superior fluidic control — dramatically reducing trauma to delicate corneal endothelial cells and minimising surgically-induced astigmatism.',
    steps: [
      { title: 'Dual Micro-Port Entry', desc: 'Two incisions under 0.9mm allow separate irrigation and aspiration instruments.' },
      { title: 'Bimanual Technique', desc: 'The irrigating chopper and aspiration handpiece work in tandem for 360° access.' },
      { title: 'Nuclear Emulsification', desc: 'The hard nucleus is chopped and aspirated with minimal ultrasound energy.' },
      { title: 'Micro-IOL Implantation', desc: 'A specially designed micro-incision IOL is injected through the tiny port.' },
    ],
    benefits: ['Sub-1mm incisions — no sutures', 'Least surgically-induced astigmatism', 'Ideal for complex or dense cataracts', 'Faster endothelial cell recovery', 'Reduced inflammation post-surgery'],
    doctors: [
      { name: 'Dr. Umashankar Mamidi', qualification: 'M.S. (Ophthal)', speciality: 'Eye Specialist, Phaco & LASIK Surgeon', image: Umashankar },
      { name: 'Dr. Supreeth Mamidi', qualification: 'M.S. (Ophthalmology)', speciality: 'Cataract & Refractive Surgeon', image: PLACEHOLDER_IMG },
      { name: 'Dr. Hari Krishna', qualification: 'M.S. Ophthalmology', speciality: 'Cataract Surgeon', image: PLACEHOLDER_IMG },
    ],
  },
  'femto-cataract': {
    category: 'Cataract', icon: 'health_and_safety',
    title: 'Femtosecond Laser Cataract Surgery',
    desc: 'Femto Cataract surgery replaces the most technically demanding manual steps with computer-guided femtosecond laser precision. The laser creates perfectly sized, centred corneal incisions and capsulotomy, and pre-softens the nucleus — reducing the phaco energy required by up to 40%.',
    steps: [
      { title: 'OCT-Guided Laser Planning', desc: 'Real-time 3D OCT maps the entire eye so the laser operates with micron-level precision.' },
      { title: 'Laser Capsulotomy', desc: 'A perfectly circular, centred capsule opening every time — critical for premium IOL performance.' },
      { title: 'Nuclear Fragmentation', desc: 'The lens is pre-softened into segments, dramatically reducing ultrasound energy needed.' },
      { title: 'IOL Centration', desc: 'With the perfect capsulotomy, multifocal and toric IOLs sit exactly where needed.' },
    ],
    benefits: ['40% less ultrasound energy to the eye', 'Perfect capsulotomy every time', 'Ideal for premium IOL implantation', 'Laser-corrected corneal incisions', 'Faster visual rehabilitation'],
    doctors: [
      { name: 'Dr. Umashankar Mamidi', qualification: 'M.S. (Ophthal)', speciality: 'Eye Specialist, Phaco & LASIK Surgeon', image: Umashankar },
      { name: 'Dr. Supreeth Mamidi', qualification: 'M.S. (Ophthalmology)', speciality: 'Cataract & Refractive Surgeon', image: PLACEHOLDER_IMG },
    ],
  },
  'premium-lenses': {
    category: 'Cataract', icon: 'health_and_safety',
    title: 'Premium Intraocular Lenses',
    desc: 'Premium IOLs go far beyond restoring sight lost to cataract — they simultaneously correct pre-existing refractive error to potentially eliminate spectacle dependence. At Fokus we offer EDOF, enhanced monofocal, trifocal, multifocal and toric IOLs.',
    steps: [
      { title: 'Lifestyle Assessment', desc: 'We discuss your daily visual demands — reading, driving, screens — to identify the ideal lens.' },
      { title: 'Biometry & Topography', desc: 'IOLMaster 700 and corneal topography provide precise power calculations.' },
      { title: 'Lens Selection', desc: 'We select from EDOF, trifocal, multifocal or enhanced monofocal platforms as appropriate.' },
      { title: 'Surgical Implantation', desc: 'The lens is implanted through a micro-incision and centred precisely within the capsular bag.' },
    ],
    benefits: ['Reduced or zero spectacle dependence', 'Full range of vision — near to distance', 'Toric options correct astigmatism', 'UV and blue-light filtering options', 'Long-lasting, permanent correction'],
    doctors: [
      { name: 'Dr. Umashankar Mamidi', qualification: 'M.S. (Ophthal)', speciality: 'Eye Specialist, Phaco & LASIK Surgeon', image: Umashankar },
      { name: 'Dr. Supreeth Mamidi', qualification: 'M.S. (Ophthalmology)', speciality: 'Cataract & Refractive Surgeon', image: PLACEHOLDER_IMG },
    ],
  },
  'multifocal-iols': {
    category: 'Cataract', icon: 'health_and_safety',
    title: 'Multifocal IOLs',
    desc: 'Multifocal IOLs use diffractive or refractive optics to split incoming light into multiple focal points, enabling clear vision at near, intermediate and distance simultaneously — without glasses.',
    steps: [
      { title: 'Candidacy Assessment', desc: 'Pupil dynamics, corneal health and lifestyle needs are evaluated to confirm suitability.' },
      { title: 'Precise Power Calculation', desc: 'We use Barrett Universal II and Hill-RBF formulae for superior accuracy.' },
      { title: 'Cataract Extraction', desc: 'The cloudy lens is removed via phaco with minimal energy to preserve the cornea.' },
      { title: 'Multifocal Implantation', desc: 'The IOL is centred perfectly — centration within 0.1mm is critical for multifocal optics.' },
    ],
    benefits: ['Freedom from reading glasses', 'Clear vision at all distances', 'High patient satisfaction >95%', 'One-time permanent solution', 'Suitable for both eyes together'],
    doctors: [
      { name: 'Dr. Umashankar Mamidi', qualification: 'M.S. (Ophthal)', speciality: 'Eye Specialist, Phaco & LASIK Surgeon', image: Umashankar },
      { name: 'Dr. Supreeth Mamidi', qualification: 'M.S. (Ophthalmology)', speciality: 'Cataract & Refractive Surgeon', image: PLACEHOLDER_IMG },
      { name: 'Dr. Hari Krishna', qualification: 'M.S. Ophthalmology', speciality: 'Cataract Surgeon', image: PLACEHOLDER_IMG },
    ],
  },
  'toric-iols': {
    category: 'Cataract', icon: 'health_and_safety',
    title: 'Toric IOLs for Astigmatism',
    desc: 'A Toric IOL has a built-in cylinder correction aligned precisely to your corneal steep axis — neutralising astigmatism and delivering sharp, unaided distance vision alongside cataract correction.',
    steps: [
      { title: 'Corneal Topography', desc: 'Atlas and Pentacam map the astigmatic axis and magnitude with high precision.' },
      { title: 'Toric Power Calculation', desc: 'The Barrett Toric Formula determines the ideal cylinder power and axis.' },
      { title: 'Axis Marking', desc: 'The steep corneal meridian is marked pre-operatively with the patient seated.' },
      { title: 'Precision Alignment', desc: 'The IOL is rotated to the marked axis during surgery and verified intraoperatively.' },
    ],
    benefits: ['Corrects astigmatism at time of cataract surgery', 'Sharper unaided distance vision', 'Available in monofocal and multifocal platforms', 'No additional laser surgery needed', 'Stable, permanent astigmatic correction'],
    doctors: [
      { name: 'Dr. Umashankar Mamidi', qualification: 'M.S. (Ophthal)', speciality: 'Eye Specialist, Phaco & LASIK Surgeon', image: Umashankar },
      { name: 'Dr. Hari Krishna', qualification: 'M.S. Ophthalmology', speciality: 'Cataract Surgeon', image: PLACEHOLDER_IMG },
    ],
  },
  lasik: {
    category: 'Refractive', icon: 'visibility',
    title: 'LASIK — Laser In-Situ Keratomileusis',
    desc: 'LASIK is the world\'s most popular vision correction procedure. A femtosecond laser creates a thin corneal flap, an excimer laser reshapes the stroma to correct your prescription, and the flap is repositioned — no stitches, functional vision within hours.',
    steps: [
      { title: 'Pre-operative Screening', desc: 'Corneal topography, pachymetry, aberrometry and tear-film analysis confirm candidacy.' },
      { title: 'Femtosecond Flap Creation', desc: 'A precise, customised corneal flap is created without any blade — in under 15 seconds.' },
      { title: 'Excimer Laser Ablation', desc: 'The excimer laser reshapes the cornea to your exact prescription in 30–60 seconds.' },
      { title: 'Flap Repositioning', desc: 'The flap is placed back seamlessly. It adheres naturally — no sutures needed.' },
    ],
    benefits: ['Vision improved within hours', 'Painless procedure under numbing drops', 'Treats up to −10D myopia & ±6D astigmatism', 'Stable results within 1–3 months', 'Over 95% achieve 20/20 or better'],
    doctors: [
      { name: 'Dr. Umashankar Mamidi', qualification: 'M.S. (Ophthal)', speciality: 'Eye Specialist, Phaco & LASIK Surgeon', image: PLACEHOLDER_IMG },
      { name: 'Dr. Supreeth Mamidi', qualification: 'M.S. (Ophthalmology)', speciality: 'Refractive Surgeon', image: PLACEHOLDER_IMG },
      { name: 'Dr. Sanjita Mamidi', qualification: 'MBBS', speciality: 'Ophthalmologist', image: PLACEHOLDER_IMG },
    ],
  },
  smile: {
    category: 'Refractive', icon: 'visibility',
    title: 'SMILE — Small Incision Lenticule Extraction',
    desc: 'SMILE is a flapless, keyhole refractive procedure. The femtosecond laser sculpts a tiny disc of corneal tissue (lenticule) inside the intact cornea, which is extracted through a 2–4mm arc incision. No flap means less dry eye and a stronger post-operative cornea.',
    steps: [
      { title: 'Lenticule Planning', desc: 'Corneal topography and wavefront data define the exact lenticule shape required.' },
      { title: 'Femtosecond Lenticule Cut', desc: 'The Visumax laser creates the lenticule and a tiny arc-shaped access incision in under 25 seconds.' },
      { title: 'Lenticule Separation', desc: 'The surgeon gently separates the lenticule planes with a blunt instrument.' },
      { title: 'Lenticule Extraction', desc: 'The disc is removed through the 2–4mm incision — no flap, no hinges, no blades.' },
    ],
    benefits: ['Completely flapless — no flap complications', 'Less dry eye than LASIK', 'Stronger biomechanical post-op cornea', 'Suitable for contact sport athletes', 'Fast recovery — back to normal in 1–2 days'],
    doctors: [
      { name: 'Dr. Supreeth Mamidi', qualification: 'M.S. (Ophthalmology)', speciality: 'Refractive Surgeon', image: PLACEHOLDER_IMG },
      { name: 'Dr. Umashankar Mamidi', qualification: 'M.S. (Ophthal)', speciality: 'Eye Specialist, Phaco & LASIK Surgeon', image: PLACEHOLDER_IMG },
    ],
  },
  'contoura-vision': {
    category: 'Refractive', icon: 'visibility',
    title: 'Contoura Vision — Topography-Guided LASIK',
    desc: 'Contoura Vision maps 22,000 unique elevation points across your cornea and corrects not just your spectacle prescription but also micro-irregularities — often delivering vision better than any optical correction could previously provide.',
    steps: [
      { title: 'Corneal Topography Mapping', desc: '22,000 data points from your corneal surface are captured and loaded into the laser.' },
      { title: 'Treatment Plan Customisation', desc: 'The ablation profile is individually computed for your unique corneal shape.' },
      { title: 'Wavefront-Optimised Ablation', desc: 'The excimer laser treats both the prescription and corneal irregularities simultaneously.' },
      { title: 'Visual Quality Enhancement', desc: 'Patients often report sharper, brighter and more contrast-rich vision than ever before.' },
    ],
    benefits: ['Maps 22,000 individual corneal points', 'Corrects prescription + corneal irregularities', 'Highest visual quality outcomes', 'Reduced glare and halos at night', 'FDA-approved for superior results'],
    doctors: [
      { name: 'Dr. Umashankar Mamidi', qualification: 'M.S. (Ophthal)', speciality: 'Eye Specialist, Phaco & LASIK Surgeon', image: Umashankar },
      { name: 'Dr. Supreeth Mamidi', qualification: 'M.S. (Ophthalmology)', speciality: 'Refractive Surgeon', image: PLACEHOLDER_IMG },
    ],
  },
  icl: {
    category: 'Refractive', icon: 'visibility',
    title: 'ICL — Implantable Collamer Lens',
    desc: 'ICL is ideal for patients unsuitable for laser correction due to thin corneas, high myopia, or dry eyes. A biocompatible collamer lens is implanted between the iris and the natural lens through a 3mm incision. The procedure is additive and reversible.',
    steps: [
      { title: 'Candidacy Evaluation', desc: 'Anterior chamber depth, endothelial cell count and ACD-to-white measurement confirm suitability.' },
      { title: 'ICL Sizing', desc: 'The lens vault height is determined from precise biometry to ensure safe aqueous flow.' },
      { title: 'Lens Implantation', desc: 'Through a 3mm incision, the rolled lens is injected and unfolds perfectly behind the iris.' },
      { title: 'Post-Op Verification', desc: 'Vault height and IOP are measured at 24 hours and one week to ensure optimal positioning.' },
    ],
    benefits: ['Suitable for high myopia up to −20D', 'Reversible — lens can be removed or replaced', 'No corneal tissue removed', 'Preserves natural reading vision', 'Excellent night vision quality'],
    doctors: [
      { name: 'Dr. Siddartha Reddy', qualification: 'ICL Surgeon', speciality: 'Permanent Contact Lens Specialist', image: PLACEHOLDER_IMG },
      { name: 'Dr. Supreeth Mamidi', qualification: 'M.S. (Ophthalmology)', speciality: 'Refractive Surgeon', image: PLACEHOLDER_IMG },
    ],
  },
  'diabetic-retinopathy': {
    category: 'Retina', icon: 'ophthalmology',
    title: 'Diabetic Retinopathy Management',
    desc: 'Diabetic retinopathy is the leading cause of preventable blindness in working-age adults. At Fokus, we offer a comprehensive programme from early detection with wide-field retinal imaging and OCT, to laser photocoagulation and intravitreal anti-VEGF therapy.',
    steps: [
      { title: 'Screening & Grading', desc: 'Ultra-widefield fundus photography and OCT classify disease severity (mild, moderate, severe NPDR or PDR).' },
      { title: 'Anti-VEGF Injections', desc: 'Ranibizumab, Bevacizumab or Aflibercept injections suppress retinal neovascularisation and macular oedema.' },
      { title: 'Laser Photocoagulation', desc: 'Pan-retinal photocoagulation (PRP) for proliferative disease; focal/grid laser for macular oedema.' },
      { title: 'Vitreoretinal Surgery', desc: 'Pars plana vitrectomy for vitreous haemorrhage or tractional retinal detachment.' },
    ],
    benefits: ['Early detection prevents vision loss', 'Anti-VEGF reverses macular oedema', 'Laser prevents new vessel growth', 'Integrated diabetology co-management', 'Regular monitoring protocol included'],
    doctors: [
      { name: 'Dr. Syed Saifuddin Adeel', qualification: 'M.S. Medical Retina', speciality: 'Retina & Vitreous Surgeon', image: PLACEHOLDER_IMG },
      { name: 'Dr. Hari Krishna', qualification: 'M.S. Ophthalmology', speciality: 'Ophthalmologist', image: PLACEHOLDER_IMG },
    ],
  },
  'retinal-detachment': {
    category: 'Retina', icon: 'ophthalmology',
    title: 'Retinal Detachment Repair',
    desc: 'Retinal detachment is a medical emergency. Without prompt surgery, permanent vision loss occurs. Fokus offers same-day surgical intervention: pneumatic retinopexy, scleral buckling, and pars plana vitrectomy with gas or silicone oil tamponade.',
    steps: [
      { title: 'Urgent Assessment', desc: 'B-scan ultrasound and wide-field imaging map the detachment extent and locate any breaks.' },
      { title: 'Surgical Strategy', desc: 'We choose between pneumatic retinopexy, scleral buckling or vitrectomy based on break location.' },
      { title: 'Vitrectomy & Tamponade', desc: 'The vitreous is removed, retina reattached under perfluorocarbon liquid, and tamponaded with gas or oil.' },
      { title: 'Endolaser Retinopexy', desc: 'Laser is applied around all breaks to create permanent adhesion after reattachment.' },
    ],
    benefits: ['Same-day emergency surgical access', 'High reattachment success rate >95%', 'Vitrectomy, buckling & pneumatic options', 'Silicone oil or gas tamponade as needed', 'Thorough post-op follow-up protocol'],
    doctors: [
      { name: 'Dr. Syed Saifuddin Adeel', qualification: 'M.S. Medical Retina', speciality: 'Retina & Vitreous Surgeon', image: PLACEHOLDER_IMG },
    ],
  },
  'intravitreal-injections': {
    category: 'Retina', icon: 'ophthalmology',
    title: 'Intravitreal Injections',
    desc: 'Intravitreal injections deliver anti-VEGF drugs, corticosteroids or antibiotics directly into the vitreous cavity — achieving therapeutic concentrations at the retina that oral or topical medications cannot reach.',
    steps: [
      { title: 'OCT & Clinical Review', desc: 'Macular OCT and visual acuity are measured at every visit to guide treatment decisions.' },
      { title: 'Sterile Preparation', desc: 'Povidone-iodine conjunctival preparation, sterile drape and speculum placement.' },
      { title: 'Injection Delivery', desc: 'A fine 30-gauge needle delivers the drug into the mid-vitreous through the pars plana in seconds.' },
      { title: 'Post-injection Monitoring', desc: 'IOP check at 20 minutes; reviewed at 4–6 weeks for the next OCT-guided decision.' },
    ],
    benefits: ['Treats AMD, DME, RVO and uveitis', 'Anti-VEGF, steroid and antibiotic options', 'Rapid, painless office procedure', 'OCT-guided treat-and-extend protocol', 'Preserves and often improves vision'],
    doctors: [
      { name: 'Dr. Syed Saifuddin Adeel', qualification: 'M.S. Medical Retina', speciality: 'Retina & Vitreous Surgeon', image: PLACEHOLDER_IMG },
      { name: 'Dr. Hari Krishna', qualification: 'M.S. Ophthalmology', speciality: 'Ophthalmologist', image: PLACEHOLDER_IMG },
    ],
  },
  oct: {
    category: 'Retina', icon: 'ophthalmology',
    title: 'OCT — Optical Coherence Tomography',
    desc: 'OCT is a non-contact, non-invasive imaging technology that produces micron-resolution cross-sectional images of all retinal layers. At Fokus we use swept-source OCT with wide-field angiography (OCTA) capability.',
    steps: [
      { title: 'Patient Preparation', desc: 'No dilation required for standard OCT. Pupils may be dilated for enhanced depth imaging (EDI-OCT).' },
      { title: 'Scan Acquisition', desc: 'A 5–10 second scan captures a detailed map of all retinal layers from ILM to Bruch\'s membrane.' },
      { title: 'Layer Analysis', desc: 'Automated segmentation quantifies ganglion cell layer, RNFL thickness and subretinal fluid volumes.' },
      { title: 'Report & Monitoring', desc: 'Serial OCTs track disease progression or treatment response with quantitative trend analysis.' },
    ],
    benefits: ['Non-invasive — no injections or dye', 'Micron-level retinal layer resolution', 'Detects early AMD, glaucoma, DME', 'OCTA option shows retinal vasculature', 'Results available immediately'],
    doctors: [
      { name: 'Dr. Syed Saifuddin Adeel', qualification: 'M.S. Medical Retina', speciality: 'Retina & Vitreous Surgeon', image: PLACEHOLDER_IMG },
      { name: 'Dr. Hari Krishna', qualification: 'M.S. Ophthalmology', speciality: 'Ophthalmologist', image: PLACEHOLDER_IMG },
    ],
  },
  ffa: {
    category: 'Retina', icon: 'ophthalmology',
    title: 'FFA — Fundus Fluorescein Angiography',
    desc: 'FFA uses an intravenous fluorescent dye to dynamically map retinal and choroidal circulations. High-speed fundus photography captures filling patterns, leakage points, areas of ischaemia and neovascularisation — directly guiding treatment.',
    steps: [
      { title: 'Dye Injection', desc: 'Sodium fluorescein is injected into a peripheral vein. The entire procedure takes 10–15 minutes.' },
      { title: 'Transit Phase Imaging', desc: 'Rapid sequence photographs capture the arterial, arteriovenous and venous phases of retinal filling.' },
      { title: 'Leakage & Ischaemia Mapping', desc: 'Areas of vascular leakage, retinal non-perfusion and neovascularisation are precisely localised.' },
      { title: 'Treatment Guidance', desc: 'The angiogram directly guides focal laser, PRP or intravitreal injection target areas.' },
    ],
    benefits: ['Dynamic map of retinal blood flow', 'Precisely localises leakage and ischaemia', 'Guides laser and anti-VEGF treatment', 'Detects early neovascularisation', 'Combined with ICGA for choroidal analysis'],
    doctors: [
      { name: 'Dr. Syed Saifuddin Adeel', qualification: 'M.S. Medical Retina', speciality: 'Retina & Vitreous Surgeon', image: PLACEHOLDER_IMG },
    ],
  },
  keratoconus: {
    category: 'Cornea', icon: 'blur_circular',
    title: 'Keratoconus Management',
    desc: 'Keratoconus is a progressive ectasia where the cornea thins and bulges into a cone shape. At Fokus we offer the full spectrum: spectacles for early stages, rigid gas-permeable and scleral lenses, ICRS implantation, and corneal cross-linking to halt progression.',
    steps: [
      { title: 'Pentacam & Topography', desc: 'Elevation maps, curvature indices (Kmax, BSCVA) and pachymetry classify severity and progression rate.' },
      { title: 'Contact Lens Fitting', desc: 'Custom rigid gas-permeable or scleral lenses neutralise irregular astigmatism for functional vision.' },
      { title: 'ICRS Implantation', desc: 'Ferrara or Keraring segments are implanted to flatten the cone and regularise topography.' },
      { title: 'Cross-linking', desc: 'CXL stiffens the corneal stroma to halt ectasia progression permanently.' },
    ],
    benefits: ['Full spectrum from glasses to surgery', 'ICRS reduces irregular astigmatism', 'Cross-linking halts progression', 'Scleral lenses for comfort & clarity', 'Keratoplasty available if advanced'],
    doctors: [
      { name: 'Dr. Umashankar Mamidi', qualification: 'M.S. (Ophthal)', speciality: 'Eye Specialist & Cornea Surgeon', image: PLACEHOLDER_IMG },
      { name: 'Dr. Supreeth Mamidi', qualification: 'M.S. (Ophthalmology)', speciality: 'Cornea & Refractive Surgeon', image: PLACEHOLDER_IMG },
    ],
  },
  'cross-linking': {
    category: 'Cornea', icon: 'blur_circular',
    title: 'Corneal Cross-Linking (CXL)',
    desc: 'Corneal cross-linking is the only proven treatment that stops keratoconus from getting worse. Riboflavin drops are applied to the cornea and exposed to calibrated UV-A light, creating new covalent bonds between collagen fibrils and stiffening the stroma.',
    steps: [
      { title: 'Epithelial Removal (Standard CXL)', desc: 'The central 9mm of corneal epithelium is removed to allow full riboflavin penetration.' },
      { title: 'Riboflavin Saturation', desc: 'Riboflavin 0.1% drops are instilled every 2 minutes for 30 minutes until full stromal saturation.' },
      { title: 'UV-A Irradiation', desc: '365nm UV-A at 3 mW/cm² (standard) or 9 mW/cm² (accelerated) for 30 or 10 minutes respectively.' },
      { title: 'Bandage Contact Lens', desc: 'A therapeutic bandage lens is fitted for epithelial healing over 3–5 days.' },
    ],
    benefits: ['Only treatment proven to halt progression', 'Preserves existing vision permanently', 'Standard and accelerated protocols', 'Transepithelial (no-touch) option available', 'Long-term stability demonstrated at 10 years'],
    doctors: [
      { name: 'Dr. Umashankar Mamidi', qualification: 'M.S. (Ophthal)', speciality: 'Eye Specialist & Cornea Surgeon', image: PLACEHOLDER_IMG },
      { name: 'Dr. Supreeth Mamidi', qualification: 'M.S. (Ophthalmology)', speciality: 'Cornea & Refractive Surgeon', image: PLACEHOLDER_IMG },
    ],
  },
}

export default treatments
