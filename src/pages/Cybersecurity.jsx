import ServicePageTemplate from '../components/ServicePageTemplate';

const Cybersecurity = () => {
  const serviceData = {
    serviceNumber: "04",
    title: "Cyber",
    subtitle: "Security",
    description: "Multi-layered defense systems protecting your digital assets against advanced persistent threats, ransomware, and zero-day exploits. We secure your perimeter, endpoints, and everything in between.",
    stats: [
      { value: "99.97%", label: "Threats Blocked" },
      { value: "<60sec", label: "Response Time" },
      { value: "24/7/365", label: "SOC Monitoring" }
    ],
    features: [
      { 
        icon: "🛡️", 
        title: "Perimeter Defense", 
        description: "Next-generation firewalls with deep packet inspection, threat prevention, and application control." 
      },
      { 
        icon: "💻", 
        title: "Endpoint Protection", 
        description: "Advanced EDR/XDR with AI-powered threat detection, behavioral analysis, and automated response." 
      },
      { 
        icon: "👁️", 
        title: "24/7 SOC Monitoring", 
        description: "Security Operations Center with expert analysts monitoring threats and coordinating response." 
      },
      { 
        icon: "🔐", 
        title: "Identity & Access", 
        description: "Multi-factor authentication, single sign-on, and zero-trust access control securing identities." 
      },
      { 
        icon: "📧", 
        title: "Email & Web Security", 
        description: "Advanced filtering stopping phishing, malware, and spam. Secure web gateway blocking threats." 
      },
      { 
        icon: "🔍", 
        title: "Vulnerability Management", 
        description: "Continuous scanning, risk assessment, and remediation guidance keeping systems hardened." 
      }
    ],
    technologies: [
      "Palo Alto Networks", 
      "Fortinet FortiGate", 
      "CrowdStrike Falcon", 
      "SentinelOne", 
      "Splunk Enterprise",
      "IBM QRadar", 
      "Okta", 
      "Duo Security",
      "Proofpoint",
      "Mimecast",
      "Tenable Nessus",
      "Qualys"
    ],
    packages: [
      {
        name: 'Essential',
        description: 'Basic protection',
        features: [
          'Firewall & antivirus',
          'Email security',
          'Patch management',
          'Monthly security reports',
          'Business hours support',
          'Up to 25 users'
        ]
      },
      {
        name: 'Advanced',
        description: 'Comprehensive security',
        popular: true,
        features: [
          'Next-gen firewall & IPS',
          'EDR/XDR endpoint protection',
          'SIEM monitoring',
          'Vulnerability scanning',
          '24/7 SOC monitoring',
          'Incident response',
          'Compliance reporting',
          'Up to 250 users'
        ]
      },
      {
        name: 'Enterprise',
        description: 'Maximum protection',
        features: [
          'Dedicated SOC team',
          'Advanced threat hunting',
          'Penetration testing',
          'Zero-trust architecture',
          'Compliance management (ISO 27001, GDPR)',
          'Dedicated CISO support',
          'Custom security training',
          'Unlimited users',
          'White-glove service'
        ]
      }
    ],
    ctaTitle: "Ready to Fortify Your Defenses?",
    ctaDescription: "Let's build a security program that protects your business from modern threats and ensures compliance."
  };

  return <ServicePageTemplate {...serviceData} />;
};

export default Cybersecurity;