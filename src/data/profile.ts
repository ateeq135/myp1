export const profile = {
  name: "Ateeq ur Rehman",
  location: "Edinburgh, United Kingdom",
  email: "ateeq-ur-rehman@sms.ed.ac.uk",
  phone: "+44 (0) 7716 863355",

  // Used in Hero (About card)
  about: `A PhD researcher at the University of Edinburgh (UoE), with thesis submitted and viva scheduled for 20 January 2026, specialising in the study of fabric architecture in natural structures to design multifunctional bio-inspired materials, predominantly for textile applications. I hold MSc and BSc degrees in Textile Engineering from the National Textile University (NTU), Pakistan. Prior to my doctoral studies, I served as a Lecturer at NTU for seven years and contributed to teaching, research and academic administration. I am an Associate Fellow of the Higher Education Academy (AFHEA) and have experience teaching multidisciplinary engineering subjects at the University of Edinburgh.`,

  research_interests: [
    "Bio-inspired materials and structures",
    "Natural fibre architectures (e.g., silk cocoons)",
    "Mechanical behaviour of fibrous materials",
    "Textile and composite materials",
    "Material characterisation and testing",
    "Functional and multifunctional textiles",
  ],

  links: [
    { label: "ORCID", href: "https://orcid.org/0000-0001-7323-3866" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ateeq135/" },
  ],

  // Shown as cards in the "Research" section (merged research + selected publications)
  research_cards: [
    {
      title: "The puncture resistance of Bombyx mori silk cocoons",
      subtitle: "Composites Part A: Applied Science and Manufacturing (2025) · Article",
      description: "Investigation of puncture resistance mechanisms in natural silk cocoon architectures.",
      image: "assets/research/placeholder.png",
      link: "#",
      tags: ["Silk cocoons", "Puncture resistance", "Bio-inspired"],
    },
    {
      title: "The stab resistance of Bombyx mori silk cocoons",
      subtitle: "Macromolecular Materials and Engineering (2025) · Article",
      description: "Analysis of energy absorption and failure mechanisms under stab loading.",
      image: "assets/research/placeholder.png",
      link: "#",
      tags: ["Stab resistance", "Natural structures"],
    },
    {
      title: "Mode III tear resistance of Bombyx mori silk cocoons",
      subtitle: "ACS Materials Au 4(4) (2024) · Article",
      description: "Characterisation of tear resistance and structural hierarchy in silk cocoons.",
      image: "assets/research/placeholder.png",
      link: "#",
      tags: ["Tear resistance", "Hierarchy"],
    },
    {
      title: "Bombyx mori silk cocoons: structure, composition, and mechanical properties",
      subtitle: "Under review · Oxford Open Materials Science",
      description: "Comprehensive overview of cocoon structure–property relationships (under review).",
      image: "assets/research/placeholder.png",
      link: "#",
      tags: ["Review", "Structure–property"],
    },
    {
      title: "Fabrication of Recycled Polycarbonate Fibre for Thermal Signature Reduction in Camouflage Textiles",
      subtitle: "Polymers 14(10) (2022) · Article",
      description: "Development of recycled polymer fibres for thermal signature reduction in textile applications.",
      image: "assets/research/placeholder.png",
      link: "#",
      tags: ["Recycled fibres", "Camouflage textiles"],
    },
    {
      title: "Apparel and Home Textiles (Book Chapter)",
      subtitle: "In Advanced Textile Testing Techniques · CRC Press (2018)",
      description: "Contribution on testing approaches for apparel and home textile materials.",
      image: "assets/research/placeholder.png",
      link: "#",
      tags: ["Textile testing", "Book chapter"],
    },
  ],

  experience: [
    {
      role: "Assistant Teacher",
      org: "University of Edinburgh",
      where: "Edinburgh, UK",
      start: "2022-01-01",
      end: "2024-12-01",
      tags: ["Teaching", "Demonstration", "Marking"],
      bullets: [
        "Teaching support, laboratory demonstration and marking across multidisciplinary engineering courses.",
      ],
    },
    {
      role: "Lecturer (On Study Leave)",
      org: "National Textile University (NTU)",
      where: "Pakistan",
      start: "2014-10-01",
      end: "2021-03-01",
      tags: ["Teaching", "Research", "Administration"],
      bullets: [
        "Delivered undergraduate and postgraduate teaching in textile and garment engineering.",
        "Contributed to departmental academic administration and research activities.",
      ],
    },
    {
      role: "Manager / Deputy Manager / Assistant Manager",
      org: "Leathertex · Musterhaft · Chenab · US Apparels · Nishat Chunian",
      where: "Pakistan",
      start: "2006-06-01",
      end: "2014-10-01",
      tags: ["Industrial engineering", "Process optimisation", "Production planning"],
      bullets: [
        "Industrial engineering, process optimisation and production planning across apparel organisations.",
      ],
    },
    {
      role: "Consultant",
      org: "Multiple Organisations",
      where: "Pakistan",
      start: "2017-07-01",
      end: "2020-08-01",
      tags: ["Process improvement"],
      bullets: ["Consultancy focused on process improvement initiatives."],
    },
  ],

  education: [
    {
      degree: "PhD Engineering (Materials) — Thesis Submitted",
      org: "University of Edinburgh",
      where: "United Kingdom",
      start: "2021-01-01",
      // show “Present” (viva scheduled Jan 2026) by omitting end
    },
    {
      degree: "MSc Textile Engineering",
      org: "National Textile University (NTU)",
      where: "Pakistan",
      start: "2017-01-01",
      end: "2017-12-01",
    },
    {
      degree: "BSc Textile Engineering",
      org: "National Textile University (NTU)",
      where: "Pakistan",
      start: "2006-01-01",
      end: "2006-12-01",
    },
  ],

  skills: [
    {
      group: "Manufacturing",
      items: [
        "Textiles", "Textile wet processing", "Composite laminates",
        "Hot press & curing", "Polymer processing", "Apparel & wearables",
      ],
    },
    {
      group: "Material Testing & Characterisation",
      items: [
        "MTS", "Instron UTM", "Micro tensile testing",
        "SEM", "3D microscopy", "DMTA", "DSC",
      ],
    },
    {
      group: "CAD & Simulation",
      items: ["SolidWorks", "Solid Edge", "Fusion 360", "Abaqus CAE"],
    },
    {
      group: "Data & Analysis",
      items: ["OriginPro", "Minitab", "Fiji (ImageJ)", "Microsoft Excel"],
    },
    {
      group: "Research & Project Skills",
      items: [
        "Literature review", "Research methodologies", "Data collection & analysis",
        "Project management", "Academic writing & publishing", "Presentation of findings",
      ],
    },
    {
      group: "Operations & Management",
      items: [
        "Manufacturing operations", "Production management", "Capacity planning",
        "Scheduling", "Inventory management", "Process improvement",
      ],
    },
  ],

  // Displayed as “Awards & Professional Development” list
  awards: [
    { title: "Associate Fellow of the Higher Education Academy (AFHEA)", org: "Advance HE", date: "2023-01-01" },
    { title: "Board Member, Natural Materials Association (NMA)", org: "IOM3 (UK)", date: "2023-01-01" },
  ],

  // Displayed under the same section (as Professional Development list)
  professional_development: [
        { title: "Associate Fellow of the Higher Education Academy (AFHEA)", role: "Advance HE · PR268588", start: "2023-01-01", end: "2023-01-01" },
        { title: "Board Member, Natural Materials Association (NMA)", role: "IOM3 (UK) · 681282", start: "2023-01-01", end: "2023-01-01" },

    { title: "Supervising Projects and Dissertations", role: "Training · University of Edinburgh", start: "2022-01-01", end: "2022-01-01" },
    { title: "Tutors and Laboratory Demonstrators Induction (2021–2022)", role: "Training · University of Edinburgh", start: "2021-09-01", end: "2021-09-01" },
    { title: "Development of Robot from E-waste", role: "Training · University of Edinburgh", start: "2021-01-01", end: "2021-01-01" },
    { title: "TRIZ tools and techniques", role: "Training · NTU", start: "2018-01-01", end: "2018-01-01" },
    { title: "Developing Instructors’ Competency of Garment Technology Training Institutes (KOICA)", role: "Training · South Korea", start: "2017-01-01", end: "2017-01-01" },
  ],
    professional_full: {
    memberships: [
      "Associate Fellowship of the Higher Education Academy (AFHEA) – PR268588",
      "Board Member, Natural Materials Association (NMA), IOM3 (UK) – 681282",
    ],
    training_conducted: [
      "Short course: Apparel Manufacturing Technology – NTU (2018)",
      "Industrial Stitching Machine Operator Training – NTU (2017)",
      "Garment Manufacturing Training – NTU (2016, 2017)",
      "Garment Sizing & Pattern Making – NTU (2016)",
    ],
    training_attended: [
      "Supervising Projects and Dissertations – University of Edinburgh (2022)",
      "Tutors and Laboratory Demonstrators Induction – UoE (2021)",
      "Development of Robot from E-waste – UoE (2021)",
      "TRIZ tools and techniques – NTU (2018)",
      "KOICA: Developing Instructors’ Competency – South Korea (2017)",
      "Smart Materials: The Materials of Future – NTU (2017)",
      "Research and Inferential Statistics – NTU (2017)",
      "Outcome-Based Education – NTU (2016)",
      "WRAP, ISO-14001 & ISO-9001 – NTU (2006)",
      "ISO-9000 Quality Management System – Pakistan (2005)",
    ],
    leadership: {
      positions: [
        "Member, Faculty Board of Studies – NTU (2018–2019)",
        "Convener, Departmental Societies – NTU (2019)",
        "Member, Self-Assessment Team, BS Textile & Apparel Merchandising – NTU (2018)",
        "Coordinator, BS Textile Engineering and BS Textile & Apparel Merchandising – NTU (2017)",
        "Departmental purchase lead – NTU (2017)",
      ],
      events: [
        "Organiser, 5th International Conference on Value Addition and Innovation in Textiles (COVITEX) – NTU (2019)",
        "Organiser, Open Day – NTU (2018)",
        "Organiser, International Conference on Technical Textiles – NTU (2017)",
        "Organiser, Energy Management in Textile and Clothing Industry – NTU (2015)",
      ],
    },
  },

} as const
