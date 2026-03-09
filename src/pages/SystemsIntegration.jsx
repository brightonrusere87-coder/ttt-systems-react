import ServicePageTemplate from '../components/ServicePageTemplate';

const SystemsIntegration = () => {
  const serviceData = {
    serviceNumber: "02",
    title: "Systems",
    subtitle: "Integration",
    description: "Unifying disparate systems into a cohesive, intelligent ecosystem. We connect, automate, and orchestrate your technology stack for seamless data flow and operational excellence.",
    stats: [
      { value: "500+", label: "API Integrations" },
      { value: "99.8%", label: "Success Rate" },
      { value: "60%", label: "Time Saved" }
    ],
    features: [
      { 
        icon: "🔗", 
        title: "API Development", 
        description: "Design and build robust RESTful and GraphQL APIs enabling seamless system communication." 
      },
      { 
        icon: "⚙️", 
        title: "Middleware Solutions", 
        description: "Enterprise service bus platforms that orchestrate complex integrations across your ecosystem." 
      },
      { 
        icon: "🔄", 
        title: "Data Synchronization", 
        description: "Real-time and batch data synchronization ensuring consistency across all platforms." 
      },
      { 
        icon: "🔌", 
        title: "Legacy Modernization", 
        description: "Bridge old and new systems seamlessly while preserving critical business functionality." 
      },
      { 
        icon: "🤖", 
        title: "Workflow Automation", 
        description: "Eliminate manual processes with intelligent automation and business process orchestration." 
      },
      { 
        icon: "🔒", 
        title: "Secure Integration", 
        description: "Enterprise-grade security for all data exchanges with encryption and access controls." 
      }
    ],
    technologies: [
      "MuleSoft", 
      "Dell Boomi", 
      "Apigee", 
      "Kong Gateway", 
      "RabbitMQ", 
      "Apache Kafka", 
      "Talend", 
      "Informatica",
      "Azure Logic Apps",
      "AWS Step Functions"
    ],
    packages: [
      {
        name: 'Starter',
        description: 'For basic integrations',
        features: [
          'Up to 5 system integrations',
          'RESTful API development',
          'Basic workflow automation',
          'Standard data mapping',
          'Email & phone support',
          'Monthly health reports'
        ]
      },
      {
        name: 'Business',
        description: 'For growing organizations',
        popular: true,
        features: [
          'Up to 15 system integrations',
          'ESB/Middleware implementation',
          'Advanced automation & workflows',
          'Real-time data synchronization',
          '24/7 monitoring & support',
          'API management platform',
          'Legacy system integration'
        ]
      },
      {
        name: 'Enterprise',
        description: 'For complex ecosystems',
        features: [
          'Unlimited system integrations',
          'Custom ESB architecture',
          'Legacy system modernization',
          'Multi-cloud integration',
          'Advanced security & compliance',
          'Dedicated integration architect',
          'White-glove implementation',
          'Custom SLA guarantees'
        ]
      }
    ],
    ctaTitle: "Ready to Connect Your Systems?",
    ctaDescription: "Let's design an integration strategy that transforms how your business operates."
  };

  return <ServicePageTemplate {...serviceData} />;
};

export default SystemsIntegration;