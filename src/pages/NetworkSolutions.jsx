import ServicePageTemplate from '../components/ServicePageTemplate';

const NetworkSolutions = () => {
  const serviceData = {
    serviceNumber: "03",
    title: "Network",
    subtitle: "Solutions",
    description: "High-velocity network infrastructure delivering ultra-low latency, maximum throughput, and rock-solid reliability. We design, deploy, and manage networks that power digital transformation.",
    stats: [
      { value: "10Gbps+", label: "Bandwidth" },
      { value: "<5ms", label: "Latency" },
      { value: "99.99%", label: "Availability" }
    ],
    features: [
      { 
        icon: "🌐", 
        title: "LAN Infrastructure", 
        description: "High-speed local area networks with enterprise switching, VLANs, and quality of service." 
      },
      { 
        icon: "🔗", 
        title: "WAN Connectivity", 
        description: "Wide area networks with MPLS, VPN, and direct internet access for multi-site connectivity." 
      },
      { 
        icon: "📡", 
        title: "Wireless Solutions", 
        description: "Enterprise WiFi 6/6E deployments with seamless roaming and advanced security features." 
      },
      { 
        icon: "⚡", 
        title: "SD-WAN Deployment", 
        description: "Intelligent software-defined WAN with automatic traffic routing and optimization." 
      },
      { 
        icon: "🛡️", 
        title: "Network Security", 
        description: "Multi-layered security with next-generation firewalls, IDS/IPS, and threat prevention." 
      },
      { 
        icon: "📊", 
        title: "Network Monitoring", 
        description: "24/7 monitoring with real-time analytics, performance metrics, and proactive alerting." 
      }
    ],
    technologies: [
      "Cisco Catalyst", 
      "Juniper MX Series", 
      "Aruba Networks", 
      "Fortinet FortiGate", 
      "Palo Alto Networks", 
      "SolarWinds NPM",
      "Cisco Meraki",
      "Ubiquiti UniFi",
      "SD-WAN Solutions"
    ],
    packages: [
      {
        name: 'Foundation',
        description: 'For small offices',
        features: [
          'Basic LAN infrastructure',
          'Managed switches & routers',
          'WiFi deployment',
          'Firewall protection',
          'Standard support',
          'Up to 50 devices'
        ]
      },
      {
        name: 'Advanced',
        description: 'For growing businesses',
        popular: true,
        features: [
          'Enterprise LAN/WAN infrastructure',
          'SD-WAN implementation',
          'WiFi 6 deployment',
          'Advanced firewall & security',
          '24/7 network monitoring',
          'Priority support',
          'Up to 500 devices'
        ]
      },
      {
        name: 'Enterprise',
        description: 'For large organizations',
        features: [
          'Multi-site network architecture',
          'Custom network design',
          'High-availability redundancy',
          'Advanced security suite',
          'Dedicated network operations center',
          'White-glove support',
          '99.99% uptime SLA',
          'Unlimited devices'
        ]
      }
    ],
    ctaTitle: "Ready to Upgrade Your Network?",
    ctaDescription: "Let's design network infrastructure that powers your digital future with speed and reliability."
  };

  return <ServicePageTemplate {...serviceData} />;
};

export default NetworkSolutions;