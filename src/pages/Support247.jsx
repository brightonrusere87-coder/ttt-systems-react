import ServicePageTemplate from '../components/ServicePageTemplate';

const Support247 = () => {
  const serviceData = {
    serviceNumber: "06",
    title: "24/7",
    subtitle: "Support",
    description: "Round-the-clock monitoring and rapid-response support ensuring zero-downtime operations. Our expert technicians keep your systems running at peak performance 24/7/365.",
    stats: [
      { value: "24/7/365", label: "Availability" },
      { value: "<15min", label: "Response Time" },
      { value: "99.9%", label: "Resolution Rate" }
    ],
    features: [
      { 
        icon: "📞", 
        title: "24/7 Helpdesk", 
        description: "Multi-channel support via phone, email, chat, and portal with expert technicians always available." 
      },
      { 
        icon: "📊", 
        title: "Proactive Monitoring", 
        description: "Real-time monitoring of servers, networks, applications, and endpoints catching issues early." 
      },
      { 
        icon: "🔧", 
        title: "Patch Management", 
        description: "Automated patch deployment for operating systems and applications keeping systems secure." 
      },
      { 
        icon: "🖥️", 
        title: "Remote Support", 
        description: "Secure remote access for rapid problem resolution without onsite visits, saving time and costs." 
      },
      { 
        icon: "💾", 
        title: "Backup Monitoring", 
        description: "Daily verification of backup jobs ensuring your data is protected and recoverable when needed." 
      },
      { 
        icon: "🔄", 
        title: "Scheduled Maintenance", 
        description: "Regular maintenance windows for updates, optimization, and preventive tasks minimizing downtime." 
      }
    ],
    technologies: [
      "ServiceNow", 
      "Zendesk", 
      "ConnectWise Manage", 
      "Datto RMM",
      "Nagios", 
      "Zabbix", 
      "PRTG Network Monitor",
      "TeamViewer",
      "AnyDesk",
      "PagerDuty",
      "Opsgenie",
      "Jira Service Desk"
    ],
    packages: [
      {
        name: 'Basic',
        description: 'Business hours support',
        features: [
          '8x5 helpdesk support (Mon-Fri)',
          'Email & phone support',
          'Remote assistance',
          'Monthly reporting',
          '4-hour response SLA',
          'Up to 25 users'
        ]
      },
      {
        name: 'Premium',
        description: '24/7 comprehensive support',
        popular: true,
        features: [
          '24/7/365 helpdesk',
          'Multi-channel support',
          'Proactive monitoring',
          'Patch management',
          '15-minute response SLA',
          'Monthly health reports',
          'Backup verification',
          'Up to 250 users'
        ]
      },
      {
        name: 'Enterprise',
        description: 'White-glove service',
        features: [
          'Dedicated support team',
          'Priority response (<5 minutes)',
          'Custom SLA agreements',
          'Onsite support included',
          'Strategic IT consulting',
          'Quarterly business reviews',
          'Account manager',
          'Unlimited users',
          '99.9% uptime guarantee'
        ]
      }
    ],
    ctaTitle: "Ready for Always-On Support?",
    ctaDescription: "Let's ensure your IT operations never sleep with our expert 24/7 monitoring and support."
  };

  return <ServicePageTemplate {...serviceData} />;
};

export default Support247;