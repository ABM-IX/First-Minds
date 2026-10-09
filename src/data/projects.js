/**
 * Portfolio Data Model — Real First Minds Project Showcases
 * Authentic technology platforms and civil/residential engineering developments in Botswana.
 */

export const PROJECTS = [
  {
    id: 'smarttransit',
    title: 'SmartTransit Mobility Platform',
    client: 'First Minds R&D / Transport Innovation',
    division: 'tech',
    status: 'In Progress',
    category: 'Intelligent Mobility & Paratransit Telematics',
    location: 'Gaborone & Greater Botswana',
    summary: 'An intelligent, full-stack transit coordination and fleet telematics platform engineered for Southern Africa\'s paratransit ecosystem. Integrates real-time GPS tracking, algorithmic headway pacing, and multi-modal journey planning.',
    description: 'In emerging cities across Southern Africa, over 85% of motorized daily trips rely on decentralized paratransit—minibus combis, special cabs, and intercity coaches. Due to a lack of live scheduling and telematics, commuters face unpredictable 20–45 minute wait times, while operators waste fuel racing and bunching along identical corridors.\n\nSmartTransit bridges this critical gap. Engineered by First Minds, it provides an end-to-end Intelligent Transportation System (ITS) that synchronizes passengers, drivers, and municipal transit regulators into one unified, real-time mobility network.',
    specs: {
      bedrooms: 'N/A (Mobility Telematics System)',
      scope: 'Full-Stack Telematics, Algorithms & GIS Console',
      location: 'Gaborone & Regional Corridors',
      status: 'Active Development & Field Testing',
      stack: 'Flutter, Python FastAPI, WebSockets, PostGIS, React Leaflet',
      telemetry: 'Sub-second 1Hz Real-Time GPS Streaming'
    },
    pillTags: ['Real-Time Telematics', 'AI Fleet Spacing', 'Flutter Apps', 'FastAPI & WebSockets', 'PostGIS GIS', 'React Command Center'],
    metrics: [
      'Sub-second 1Hz Real-Time Telemetry Streaming',
      'Up to 40% Projected Reduction in Commuter Wait Times',
      'Algorithmic Anti-Bunching Headway Control Advisories',
      'Multi-Modal Dijkstra Graph Journey Planning & Fare Engine'
    ],
    innovations: [
      {
        title: 'Algorithmic Anti-Bunching Headway Control',
        detail: 'Employs mathematical headway regularization to broadcast real-time in-cab pacing advisories (MAINTAIN PACE, SLOW DOWN, HOLD) directly to combi drivers over low-latency WebSockets, mitigating platooning.'
      },
      {
        title: 'Speed-Floored Real-Time ETAs',
        detail: 'Replaces brittle linear tracking with a speed-floored arrival estimator that eliminates false infinite ETAs during rank dwell times and urban bottleneck congestion.'
      },
      {
        title: 'Multi-Modal Graph Journey Planner',
        detail: 'Integrates fixed-route combis, point-to-point charter taxis (k-NN spatial dispatch), and intercity coaches into a single Dijkstra graph solver that coordinates transfers and gazetted fares.'
      },
      {
        title: 'Regulatory Dispatch Command Center',
        detail: 'A high-performance desktop administrative console (React + Leaflet GIS) providing municipal authorities like DRTS with live fleet visualization, route density heatmaps, and automated statutory audit reporting.'
      }
    ],
    impact: [
      { group: 'For Commuters', text: 'Transparent live vehicle tracking, upfront statutory fares, and predictable departure times.' },
      { group: 'For Operators', text: 'Fuel savings, balanced passenger distribution, and automated on-demand hail dispatch.' },
      { group: 'For Regulators', text: 'First-ever digitized transit telemetry, route capacity metrics, and statutory safety enforcement data.' }
    ],
    images: [
      '/images/Projects/Technologies/SmartTransit/SmartTransit.png'
    ],
    image: '/images/Projects/Technologies/SmartTransit/SmartTransit.png'
  },
  {
    id: 'mrs-kopano-thela-residence',
    title: 'Mrs Kopano Thela Luxury Estate',
    client: 'Mrs Kopano Thela',
    division: 'construction',
    status: 'Completed',
    category: 'Luxury Residential Architecture & Build',
    location: 'Mochudi, Botswana',
    summary: 'A turnkey 5-bedroom luxury family estate in Mochudi featuring contemporary architectural massing, engineered reinforced raft foundations, expansive living wings, and premium exterior finishes.',
    description: 'This landmark 5-bedroom private residence in Mochudi was delivered turnkey by First Minds Construction from initial site clearance and leveling through to final architectural handover.\n\nStructural engineering included deep soil investigation, cast-in-place reinforced foundation footings, precision brickwork superstructures, structural timber roof truss fabrication, and integrated perimeter stormwater management. The interior features expansive open-plan entertainment spaces, dedicated family suites, and modern energy-efficient glazing.',
    specs: {
      bedrooms: '5 Bedrooms (Master En-Suite)',
      scope: 'Turnkey Architectural & Structural Delivery',
      location: 'Mochudi, Botswana',
      status: 'Completed & Handed Over',
      foundation: 'Engineered Reinforced Concrete Raft & Footings',
      roofing: 'Structural Timber Trusses & Heavy-Duty Tile Roofing'
    },
    pillTags: ['5 Bedrooms', 'Mochudi', 'Completed', 'Turnkey Build', 'Luxury Finishes'],
    metrics: [
      '5 En-Suite Bedrooms with Private Master Wing',
      '100% Turnkey Structural & Architectural Handover',
      'Engineered Reinforced Foundations & Perimeter Apron',
      'Custom Timber Roof Trusses with Thermal Insulation'
    ],
    images: [
      '/images/Projects/Constructions/Mrs%20Kopano%20Thela/20211118_112203.jpg',
      '/images/Projects/Constructions/Mrs%20Kopano%20Thela/20211118_112239.jpg',
      '/images/Projects/Constructions/Mrs%20Kopano%20Thela/20211118_112318.jpg',
      '/images/Projects/Constructions/Mrs%20Kopano%20Thela/20220125_161113.jpg',
      '/images/Projects/Constructions/Mrs%20Kopano%20Thela/20220125_161123.jpg',
      '/images/Projects/Constructions/Mrs%20Kopano%20Thela/20220127_172623.jpg',
      '/images/Projects/Constructions/Mrs%20Kopano%20Thela/20220330_164244.jpg',
      '/images/Projects/Constructions/Mrs%20Kopano%20Thela/20220406_170815.jpg',
      '/images/Projects/Constructions/Mrs%20Kopano%20Thela/20220406_170853.jpg'
    ],
    image: '/images/Projects/Constructions/Mrs%20Kopano%20Thela/20211118_112203.jpg'
  },
  {
    id: 'mr-bonno-double-storey',
    title: 'Mr Bonno Double-Storey Residence',
    client: 'Mr Bonno',
    division: 'construction',
    status: 'Completed',
    category: 'Multi-Storey Residential Engineering',
    location: 'Kopong, Botswana',
    summary: 'An elegant 4-bedroom double-storey residence in Kopong engineered with reinforced concrete suspended slabs, structural load-bearing brickwork, and panoramic upper balconies.',
    description: 'A distinguished multi-level residential development in Kopong requiring specialized structural engineering. First Minds executed deep column footings, reinforced concrete support columns, and an engineered suspended reinforced concrete slab to carry the upper level living quarters.\n\nThe residence combines structural resilience with refined architectural aesthetics, incorporating upper viewing terraces, high-clearance ceilings, extensive waterproofing barriers, and modern mechanical, electrical, and plumbing (MEP) systems.',
    specs: {
      bedrooms: '4 Bedrooms (Multi-Level)',
      scope: 'Double-Storey Structural Build & Suspended Slab',
      location: 'Kopong, Botswana',
      status: 'Completed & Handed Over',
      foundation: 'Reinforced Column Footings & Strip Foundations',
      structure: 'Cast-in-Place Concrete Columns, Beams & Suspended Slab'
    },
    pillTags: ['Double Storey', '4 Bedrooms', 'Kopong', 'Suspended Slab', 'Completed'],
    metrics: [
      'Engineered Reinforced Concrete Suspended Slab',
      '4 Spacious Bedrooms with Upper Living Terrace',
      'Heavy-Duty Structural Load Paths & Soil Stabilization',
      'Complete Plumbing, Electrical & Finishing Integration'
    ],
    images: [
      '/images/Projects/Constructions/Mr%20Bonno/20210427_085746.jpg',
      '/images/Projects/Constructions/Mr%20Bonno/20210427_085814.jpg',
      '/images/Projects/Constructions/Mr%20Bonno/20211130_190421.jpg',
      '/images/Projects/Constructions/Mr%20Bonno/20220105_180321.jpg',
      '/images/Projects/Constructions/Mr%20Bonno/20220131_075517.jpg'
    ],
    image: '/images/Projects/Constructions/Mr%20Bonno/20210427_085746.jpg'
  },
  {
    id: 'g-north-residence',
    title: 'Gaborone North Residential Development',
    client: 'Client Record: Pending Verification',
    clientLocationPending: true,
    division: 'construction',
    status: 'Completed',
    category: 'Modern Residential Architecture & Build',
    location: 'Gaborone North, Botswana',
    summary: 'A contemporary 4-bedroom home in Gaborone North designed for modern urban living, featuring precision structural brickwork, engineered timber roof framing, and landscaped perimeter concrete.',
    description: 'Located in the prime residential corridor of Gaborone North, this turnkey 4-bedroom home reflects First Minds\' commitment to quality craftsmanship. Built from greenfield foundations, the project included trenching, cast foundation slabs, high-density brick masonry, and precision truss carpentry.\n\nThe exterior features durable plaster coatings engineered for Botswana\'s seasonal climate variations, along with complete perimeter drainage and hardscaping.',
    specs: {
      bedrooms: '4 Bedrooms',
      scope: 'Greenfield Turnkey Residential Construction',
      location: 'Gaborone North, Botswana',
      status: 'Completed',
      foundation: 'Solid Concrete Strip Footings & Reinforced Floor Bed',
      clientStatus: 'Owner record pending verification (recorded by location)'
    },
    pillTags: ['4 Bedrooms', 'Gaborone North', 'Completed', 'Turnkey Build'],
    metrics: [
      '4 Bedroom Contemporary Family Layout',
      'Quality Greenfield Turnkey Execution',
      'Engineered Timber Roof Trusses & Modern Render',
      'Integrated Stormwater Runoff Mitigation'
    ],
    images: [
      '/images/Projects/Constructions/G%20north/20210519_154045.jpg',
      '/images/Projects/Constructions/G%20north/20210527_163849.jpg',
      '/images/Projects/Constructions/G%20north/20210630_130606.jpg',
      '/images/Projects/Constructions/G%20north/20210630_175427.jpg',
      '/images/Projects/Constructions/G%20north/20210707_170255.jpg',
      '/images/Projects/Constructions/G%20north/20210921_080049.jpg',
      '/images/Projects/Constructions/G%20north/20211021_161346.jpg',
      '/images/Projects/Constructions/G%20north/20211021_161413.jpg'
    ],
    image: '/images/Projects/Constructions/G%20north/20210519_154045.jpg'
  },
  {
    id: 'kopong-restoration',
    title: 'Kopong Residential Restoration & Modernization',
    client: 'Client Record: Pending Verification',
    clientLocationPending: true,
    division: 'construction',
    status: 'Completed',
    category: 'Structural Renovation & Restoration',
    location: 'Kopong, Botswana',
    summary: 'A full-scope structural renovation and modernization of a 4-bedroom home in Kopong, resolving foundational settling, overhauling roof structures, and renewing interior living spaces.',
    description: 'Restoration projects demand meticulous engineering diagnosis. On this Kopong property, First Minds evaluated structural settling, stabilized footings, replaced compromised roofing timber, and applied reinforced masonry crack repair.\n\nThe property was comprehensively renewed with upgraded electrical wiring, modernized plumbing lines, fresh interior plastering, and weather-resistant external coatings, giving the structure a brand new lifecycle.',
    specs: {
      bedrooms: '4 Bedrooms (Restored & Modernized)',
      scope: 'Full Structural Overhaul & Interior Rejuvenation',
      location: 'Kopong, Botswana',
      status: 'Completed',
      structuralWork: 'Footing Underpinning, Crack Stitching & Truss Upgrades',
      clientStatus: 'Owner record pending verification (recorded by location)'
    },
    pillTags: ['4 Beds Restoration', 'Kopong', 'Structural Overhaul', 'Completed'],
    metrics: [
      'Comprehensive 4-Bedroom Structural Rehabilitation',
      'Foundational Stabilization & Crack Remediation',
      'Overhauled Roof Structure & Weatherproofing',
      'Modernized Interior Living & Utility Spaces'
    ],
    images: [
      '/images/Projects/Constructions/kopong/20210502_175252.jpg',
      '/images/Projects/Constructions/kopong/20210502_180008.jpg',
      '/images/Projects/Constructions/kopong/20210507_172840.jpg',
      '/images/Projects/Constructions/kopong/DAD%20(1)%20(112).jpg',
      '/images/Projects/Constructions/kopong/DAD%20(1)%20(114).jpg',
      '/images/Projects/Constructions/kopong/DAD%20(1)%20(34).jpg'
    ],
    image: '/images/Projects/Constructions/kopong/20210502_175252.jpg'
  },
  {
    id: 'mr-basakani-facility',
    title: 'Mr Basakani Agricultural Poultry Facility',
    client: 'Mr Basakani',
    division: 'construction',
    status: 'Completed',
    category: 'Commercial Agricultural Construction',
    location: 'Kanye, Botswana',
    summary: 'A 120 m² (20m × 6m) commercial poultry production house engineered in Kanye with high-strength washable concrete slabs, optimized ventilation, and thermal protection.',
    description: 'Modern agricultural infrastructure requires specialized sanitation and climatic engineering. This 20m × 6m poultry facility in Kanye was constructed with an industrial-grade concrete slab sloped for efficient hygienic washdowns.\n\nThe superstructure features corrosion-resistant framing, biosecurity access points, durable perimeter dwarf walls, and passive cross-ventilation designed to regulate interior temperatures during extreme Southern African heatwaves.',
    specs: {
      bedrooms: 'Commercial Agro Facility (120 m²)',
      dimensions: '20m Length × 6m Width',
      scope: 'Commercial Poultry Infrastructure Build',
      location: 'Kanye, Botswana',
      status: 'Completed & Operational',
      flooring: 'High-Strength Concrete Washdown Slab'
    },
    pillTags: ['Poultry Facility', '20m × 6m (120 m²)', 'Kanye', 'Agricultural Infra', 'Completed'],
    metrics: [
      '20m × 6m High-Capacity Agricultural Footprint',
      'Sanitary High-Strength Washdown Concrete Slab',
      'Engineered Cross-Ventilation for Bioclimatic Control',
      'Durable Weatherproof Structural Framing'
    ],
    images: [
      '/images/Projects/Constructions/Mr%20Basakani/20260116_162945.jpg',
      '/images/Projects/Constructions/Mr%20Basakani/20260127_185451.jpg',
      '/images/Projects/Constructions/Mr%20Basakani/20260129_134404.jpg',
      '/images/Projects/Constructions/Mr%20Basakani/20260204_192107.jpg',
      '/images/Projects/Constructions/Mr%20Basakani/20260205_192500.jpg',
      '/images/Projects/Constructions/Mr%20Basakani/IMG_20260113_154157.jpg',
      '/images/Projects/Constructions/Mr%20Basakani/IMG_20260120_082349.jpg'
    ],
    image: '/images/Projects/Constructions/Mr%20Basakani/20260116_162945.jpg'
  },
  {
    id: 'ms-lepodise-residence',
    title: 'Ms Lepodise Residence',
    client: 'Ms Lepodise',
    division: 'construction',
    status: 'Completed',
    category: 'Residential Architecture & Construction',
    location: 'Kopong, Botswana',
    summary: 'A compact and energy-conscious 2-bedroom residential build in Kopong, engineered for efficient space utilization, durability, and cost-effective maintenance.',
    description: 'Demonstrating that First Minds applies the exact same structural diligence to compact homes as to large estates, the Ms Lepodise residence in Kopong features solid reinforced foundation footings, vapor barrier protection, and high-quality masonry.\n\nEvery square meter was optimized for practical family living with light-filled bedrooms, a modern bathroom, and an integrated living and culinary space built for generational durability.',
    specs: {
      bedrooms: '2 Bedrooms',
      scope: 'Complete Turnkey Residential Build',
      location: 'Kopong, Botswana',
      status: 'Completed & Handed Over',
      foundation: 'Solid Strip Footings with Damp-Proof Membrane',
      roofing: 'Treated Timber Trusses & Durable Sheeting'
    },
    pillTags: ['2 Bedrooms', 'Kopong', 'Turnkey Build', 'Completed'],
    metrics: [
      '2 Bedroom Optimized Functional Floorplan',
      'Robust Structural Masonry & Vapor Protection',
      'Smooth Interior Plaster & Quality Ceramic Tiling',
      'Delivered On Schedule within Budget'
    ],
    images: [
      '/images/Projects/Constructions/Ms%20Lepodise/20241215_141513.jpg',
      '/images/Projects/Constructions/Ms%20Lepodise/20241215_141548.jpg',
      '/images/Projects/Constructions/Ms%20Lepodise/20250124_155435.jpg',
      '/images/Projects/Constructions/Ms%20Lepodise/20250124_155503.jpg',
      '/images/Projects/Constructions/Ms%20Lepodise/20250124_155524.jpg',
      '/images/Projects/Constructions/Ms%20Lepodise/20250124_155557.jpg',
      '/images/Projects/Constructions/Ms%20Lepodise/20250430_104334.jpg',
      '/images/Projects/Constructions/Ms%20Lepodise/20251203_161602.jpg',
      '/images/Projects/Constructions/Ms%20Lepodise/20251212_131504.jpg',
      '/images/Projects/Constructions/Ms%20Lepodise/20260323_160904.jpg'
    ],
    image: '/images/Projects/Constructions/Ms%20Lepodise/20241215_141513.jpg'
  },
  {
    id: 'odi-matebeleng-residence',
    title: 'Odi-Matebeleng Residential Development',
    client: 'Client Record: Pending Verification',
    clientLocationPending: true,
    division: 'construction',
    status: 'Completed',
    category: 'Modern Residential Architecture & Build',
    location: 'Odi / Matebeleng, Botswana',
    summary: 'A 4-bedroom residential project in the Odi-Matebeleng area, built with durable masonry construction, expansive living areas, and clean architectural lines.',
    description: 'Constructed in the peaceful Odi / Matebeleng region, this 4-bedroom home combines traditional structural solidity with modern residential functionality. The project covered site excavation, reinforced concrete foundations, exterior and partition brickwork, roof assembly, and full architectural finishing.\n\nAttention was placed on natural ventilation, robust external plastering, and perimeter ground sloping to protect foundations against heavy summer rains.',
    specs: {
      bedrooms: '4 Bedrooms',
      scope: 'Turnkey Residential Construction',
      location: 'Odi / Matebeleng, Botswana',
      status: 'Completed',
      structure: 'Solid Brick Superstructure & Timber Trusses',
      clientStatus: 'Owner record pending verification (recorded by location)'
    },
    pillTags: ['4 Bedrooms', 'Odi Matebeleng', 'Completed', 'Turnkey Build'],
    metrics: [
      '4 Spacious Family Bedrooms with En-Suite',
      'Heavy-Duty Structural Masonry Construction',
      'Complete Civil Foundation & Drainage Works',
      'High-Durability Exterior Coatings'
    ],
    images: [
      '/images/Projects/Constructions/Odi%20Matebeleng/20241206_161940.jpg',
      '/images/Projects/Constructions/Odi%20Matebeleng/20241206_162012.jpg',
      '/images/Projects/Constructions/Odi%20Matebeleng/20250813_101949.jpg'
    ],
    image: '/images/Projects/Constructions/Odi%20Matebeleng/20241206_161940.jpg'
  },
  {
    id: 'mr-lolo-residence',
    title: 'Mr Lolo Residence',
    client: 'Mr Lolo',
    division: 'construction',
    status: 'Completed',
    category: 'Residential Construction',
    location: 'Morwa, Botswana',
    summary: 'A 4-bedroom family home in Morwa characterized by balanced proportions, robust structural masonry, and high-quality exterior finishes.',
    description: 'Delivered in Morwa, this 4-bedroom home features quality civil foundation work, precision-laid brickwork, solid timber roof truss support, and comprehensive plumbing and electrical integration.\n\nFrom footing excavation to roof sheeting and interior fixtures, First Minds managed every trade to deliver a durable, comfortable residence.',
    specs: {
      bedrooms: '4 Bedrooms',
      scope: 'Turnkey Greenfield Residential Build',
      location: 'Morwa, Botswana',
      status: 'Completed & Handed Over',
      foundation: 'Engineered Concrete Strip Footings',
      roofing: 'Treated Structural Timber Framing'
    },
    pillTags: ['4 Bedrooms', 'Morwa', 'Completed', 'Turnkey Build'],
    metrics: [
      '4 Bedroom Balanced Family Layout',
      'Engineered Footings & Structural Walls',
      'Complete Interior & Exterior Finishes',
      'Turnkey Handover in Morwa'
    ],
    images: [
      '/images/Projects/Constructions/Mr%20Lolo/20210812_170257.jpg',
      '/images/Projects/Constructions/Mr%20Lolo/20210825_165451.jpg',
      '/images/Projects/Constructions/Mr%20Lolo/20211116_160701.jpg'
    ],
    image: '/images/Projects/Constructions/Mr%20Lolo/20210812_170257.jpg'
  },
  {
    id: 'mr-botlhoko-residence',
    title: 'Mr Botlhoko Residence',
    client: 'Mr Botlhoko',
    division: 'construction',
    status: 'Completed',
    category: 'Residential Construction',
    location: 'Kopong, Botswana',
    summary: 'A comfortable 3-bedroom family residence built in Kopong, featuring solid reinforced concrete foundations and clean, contemporary interior design.',
    description: 'A dedicated 3-bedroom residential build in Kopong. First Minds managed site clearing, trenching, foundation cast, brick superstructures, roof truss installations, and full architectural finishes on schedule.\n\nThe home was delivered turnkey with tailored electrical circuits, modern sanitaryware, and smooth perimeter paving.',
    specs: {
      bedrooms: '3 Bedrooms',
      scope: 'Turnkey Residential Construction',
      location: 'Kopong, Botswana',
      status: 'Completed & Handed Over',
      foundation: 'Concrete Strip Foundations & Hardcore Fill',
      finishes: 'Ceramic Tiling & Smooth Plaster'
    },
    pillTags: ['3 Bedrooms', 'Kopong', 'Completed', 'Turnkey Build'],
    metrics: [
      '3 Bedroom Functional Family Layout',
      'Reinforced Strip Footings & Solid Concrete Slab',
      'Quality Electrical & Sanitary Installation',
      'Completed On Schedule in Kopong'
    ],
    images: [
      '/images/Projects/Constructions/Mr%20Botlhoko/20211006_073614.jpg',
      '/images/Projects/Constructions/Mr%20Botlhoko/20211006_073653.jpg',
      '/images/Projects/Constructions/Mr%20Botlhoko/DAD%20(1)%20(29).jpg'
    ],
    image: '/images/Projects/Constructions/Mr%20Botlhoko/20211006_073614.jpg'
  },
  {
    id: 'mr-bonni-residence',
    title: 'Mr Bonni Residential Development',
    client: 'Mr Bonni',
    division: 'construction',
    status: 'Under Development',
    category: 'Structural Concrete & Residential Construction',
    location: 'Botswana',
    summary: 'A premium residential build for Mr Bonni featuring heavy-duty concrete foundation slabs, engineered rebar grid reinforcement, and quality masonry walls.',
    description: 'Showcasing First Minds\' structural engineering prowess, this project highlights our rigorous groundwork: comprehensive site compaction, steel rebar reinforcement grids, damp-proof membranes, and precision concrete pouring before erecting heavy masonry superstructures.',
    specs: {
      bedrooms: 'Residential Estate',
      scope: 'Heavy Structural Concrete & Masonry Build',
      location: 'Botswana',
      status: 'Under Development (Foundation & Groundworks)',
      foundation: 'Reinforced Concrete Slab with BRC Steel Mesh',
      structure: 'High-Density Structural Brickwork'
    },
    pillTags: ['Structural Concrete', 'Rebar Grids', 'Botswana', 'Under Development'],
    metrics: [
      'Engineered Concrete Slab with High-Yield Steel Reinforcement',
      'Heavy-Duty Masonry Superstructure Execution',
      'Rigorous On-Site Quality Assurance & Leveling',
      'Long-Term Structural Load Assurance'
    ],
    images: [
      '/images/Projects/Constructions/Mr%20Bonni/20260814_162351.jpg',
      '/images/Projects/Constructions/Mr%20Bonni/20260820_120029.jpg',
      '/images/Projects/Constructions/Mr%20Bonni/20260903_172748.jpg',
      '/images/Projects/Constructions/Mr%20Bonni/20260904_123359.jpg',
      '/images/Projects/Constructions/Mr%20Bonni/20260904_123427.jpg'
    ],
    image: '/images/Projects/Constructions/Mr%20Bonni/20260814_162351.jpg'
  },
  {
    id: 'mr-dikgwe-residence',
    title: 'Mr Dikgwe Residential Development',
    client: 'Mr Dikgwe',
    division: 'construction',
    status: 'Under Development',
    category: 'Residential Architecture & Masonry',
    location: 'Botswana',
    summary: 'High-standard residential construction for Mr Dikgwe, incorporating robust brick masonry, precision door/window lintels, and timber roof trusses.',
    description: 'A residential construction project for Mr Dikgwe covering complete civil foundation trenching, bricklaying, concrete lintel placement, and engineered timber roof erection.\n\nEvery structural phase was inspected to ensure vertical alignment, structural tie-in, and weatherproofing.',
    specs: {
      bedrooms: 'Residential Home',
      scope: 'Greenfield Civil & Superstructure Execution',
      location: 'Botswana',
      status: 'Under Development (Superstructure & Roofing)',
      masonry: 'High-Strength Concrete Blocks & Mortar',
      roofing: 'Engineered Timber Truss System'
    },
    pillTags: ['Precision Masonry', 'Truss Roofing', 'Botswana', 'Under Development'],
    metrics: [
      'Precision Structural Masonry & Alignment',
      'Engineered Roof Truss & Waterproofing System',
      'Standard-Compliant Plumbing & Electrical Conduit Routing',
      'Turnkey Residential Completion'
    ],
    images: [
      '/images/Projects/Constructions/Mr%20Dikgwe/20250118_170227.jpg',
      '/images/Projects/Constructions/Mr%20Dikgwe/20250118_171940.jpg',
      '/images/Projects/Constructions/Mr%20Dikgwe/20250617_163014.jpg'
    ],
    image: '/images/Projects/Constructions/Mr%20Dikgwe/20250118_170227.jpg'
  },
  {
    id: 'mrs-keitumetse-residence',
    title: 'Mrs Keitumetse Residence',
    client: 'Mrs Keitumetse',
    division: 'construction',
    status: 'Completed',
    category: 'Residential Architecture & Construction',
    location: 'Botswana',
    summary: 'Contemporary family residence built for Mrs Keitumetse, emphasizing structural durability, clean architectural proportions, and modern finishing.',
    description: 'Turnkey residential delivery in Botswana managing foundation trenching, steel reinforcement, brickwork, roof structure, and finishing coats to highest workmanship standards.\n\nIncludes complete internal service rough-ins, ceiling insulation, smooth skimming, and durable exterior paint application.',
    specs: {
      bedrooms: 'Residential Home',
      scope: 'Turnkey Residential Construction',
      location: 'Botswana',
      status: 'Completed',
      structure: 'Concrete Foundations & Solid Brick Superstructure',
      finishes: 'Smooth Interior Skim & Weatherproof Exterior'
    },
    pillTags: ['Turnkey Build', 'Modern Finishes', 'Botswana', 'Completed'],
    metrics: [
      'Turnkey Residential Architecture & Execution',
      'Quality Concrete & Masonry Workmanship',
      'Complete Weatherproof Enclosure & Insulation',
      'Handed Over to Client Specification'
    ],
    images: [
      '/images/Projects/Constructions/Mrs%20Keitumetse/20250114_101150.jpg',
      '/images/Projects/Constructions/Mrs%20Keitumetse/20250212_104853.jpg',
      '/images/Projects/Constructions/Mrs%20Keitumetse/20250212_105028.jpg'
    ],
    image: '/images/Projects/Constructions/Mrs%20Keitumetse/20250114_101150.jpg'
  }
]
