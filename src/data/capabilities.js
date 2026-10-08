import { Brain, Code2, Server, Zap, Cloud, Radio, HardHat, Network, Activity } from 'lucide-react'

/**
 * Core Capabilities & Execution Methodology
 */
export const CAPABILITIES = [
  {
    id: 'ai-analytics',
    label: 'Artificial Intelligence',
    icon: Brain,
    division: 'technology',
    desc: 'Machine learning, predictive models, and automated decision-making engines tailored to operational workflows.'
  },
  {
    id: 'software-eng',
    label: 'Software Engineering',
    icon: Code2,
    division: 'technology',
    desc: 'Custom enterprise applications, robust API architectures, and resilient digital platforms.'
  },
  {
    id: 'business-systems',
    label: 'Business Systems',
    icon: Server,
    division: 'technology',
    desc: 'ERP, CRM, and bespoke operational platforms that centralize and streamline organizational processes.'
  },
  {
    id: 'automation',
    label: 'Process Automation',
    icon: Zap,
    division: 'technology',
    desc: 'Workflow automation and RPA systems that minimize repetitive overhead and accelerate throughput.'
  },
  {
    id: 'cloud',
    label: 'Cloud Infrastructure',
    icon: Cloud,
    division: 'technology',
    desc: 'Cloud-native infrastructure design, secure data pipelines, and scalable enterprise architecture.'
  },
  {
    id: 'iot-telemetry',
    label: 'IoT & Telemetry',
    icon: Radio,
    division: 'technology',
    desc: 'Sensor arrays and real-time telemetry systems for smart monitoring and predictive asset maintenance.'
  },
  {
    id: 'civil-engineering',
    label: 'Civil Works',
    icon: HardHat,
    division: 'construction',
    desc: 'Structural engineering, earthworks, and commercial site development built to precise standards.'
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure Development',
    icon: Network,
    division: 'construction',
    desc: 'Large-scale transit, municipal utilities, and public-private infrastructure built for longevity.'
  },
  {
    id: 'digital-transformation',
    label: 'Integrated Modernization',
    icon: Activity,
    division: 'both',
    desc: 'End-to-end modernization bridging physical facilities with digital intelligence.'
  }
]

export const PROCESS_STEPS = [
  {
    step: '01',
    label: 'Discover',
    desc: 'Comprehensive needs analysis, stakeholder alignment, and feasibility evaluation.'
  },
  {
    step: '02',
    label: 'Design',
    desc: 'Architectural blueprints, technical specifications, and user-centric systems modeling.'
  },
  {
    step: '03',
    label: 'Build',
    desc: 'Disciplined engineering, rigorous QA, and quality-controlled physical construction.'
  },
  {
    step: '04',
    label: 'Deploy',
    desc: 'Staged rollout, site commissioning, system validation, and seamless handover.'
  },
  {
    step: '05',
    label: 'Support',
    desc: 'Long-term maintenance, telemetry monitoring, and proactive continuous optimization.'
  }
]
