import ServicePageTemplate from '../components/ServicePageTemplate';

const ITInfrastructure = () => {
  const serviceData = {
    serviceNumber: "01",
    title: "IT",
    subtitle: "Infrastructure",
    description: "Enterprise-grade infrastructure architecture engineered for maximum performance, redundancy, and scalability. We build the backbone of your digital operations.",
    stats: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "24/7", label: "Monitoring" },
      { value: "<15min", label: "Response Time" }
    ],
    features: [
      { 
        icon: "🖥️", 
        title: "Server Infrastructure", 
        description: "High-performance server solutions from blade servers to rack-mounted systems with enterprise-grade reliability." 
      },
      { 
        icon: "💾", 
        title: "Storage Solutions", 
        description: "Scalable storage architectures including SAN, NAS, and object storage with automated tiering." 
      },
      { 
        icon: "☁️", 
        title: "Virtualization", 
        description: "Complete virtualization strategies using VMware vSphere, Hyper-V, and containerization platforms." 
      },
      { 
        icon: "🏢", 
        title: "Data Center Design", 
        description: "Complete data center planning, implementation, and optimization for maximum efficiency." 
      },
      { 
        icon: "💽", 
        title: "Backup & Recovery", 
        description: "Comprehensive backup strategies with automated scheduling and disaster recovery capabilities." 
      },
      { 
        icon: "📊", 
        title: "Performance Monitoring", 
        description: "24/7 infrastructure monitoring with real-time visibility, analytics, and predictive alerts." 
      }
    ],
    technologies: [
      "Dell PowerEdge", 
      "HPE ProLiant", 
      "VMware vSphere", 
      "Microsoft Hyper-V", 
      "NetApp Storage", 
      "Pure Storage", 
      "Veeam Backup", 
      "Cisco UCS", 
      "Nutanix", 
      "Docker", 
      "Kubernetes", 
      "Ansible"
    ],
    packages: [
      {
        name: 'Essential',
        description: 'For small businesses',
        features: [
          'Basic server infrastructure',
          'Standard storage solutions',
          'Managed switches & routers',
          'Standard backup solutions',
          'Business hours support',
          'Up to 10 users'
        ]
      },
      {
        name: 'Professional',
        description: 'For growing enterprises',
        popular: true,
        features: [
          'Advanced server infrastructure',
          'Enterprise storage (SAN/NAS)',
          'Full virtualization platform',
          'Enterprise backup & disaster recovery',
          '24/7 priority support',
          'Advanced monitoring & alerts',
          'Up to 100 users'
        ]
      },
      {
        name: 'Enterprise',
        description: 'For large organizations',
        features: [
          'Custom infrastructure design',
          'Multi-site data center architecture',
          'High-availability clustering',
          'Multi-site redundancy & failover',
          'Dedicated support team',
          'AI-powered monitoring & optimization',
          'Full virtualization suite',
          'Unlimited users',
          'White-glove service'
        ]
      }
    ],
    ctaTitle: "Ready to Build Your Infrastructure?",
    ctaDescription: "Let's discuss your requirements and architect a solution that powers your success."
  };

  return <ServicePageTemplate {...serviceData} />;
};

export default ITInfrastructure;