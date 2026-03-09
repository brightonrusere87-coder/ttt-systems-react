import ServicePageTemplate from '../components/ServicePageTemplate';

const CloudServices = () => {
  const serviceData = {
    serviceNumber: "05",
    title: "Cloud",
    subtitle: "Services",
    description: "Hybrid and multi-cloud strategies engineered for agility, resilience, and cost optimization. We architect, migrate, and manage cloud infrastructure that scales with your ambitions.",
    stats: [
      { value: "40%", label: "Cost Savings" },
      { value: "99.95%", label: "Uptime SLA" },
      { value: "10x", label: "Faster Deploy" }
    ],
    features: [
      { 
        icon: "☁️", 
        title: "Cloud Migration", 
        description: "Seamless migration from on-premise to cloud with minimal disruption using proven methodologies." 
      },
      { 
        icon: "🏗️", 
        title: "Cloud Architecture", 
        description: "Well-architected cloud solutions following best practices for security, reliability, and performance." 
      },
      { 
        icon: "📦", 
        title: "Containerization", 
        description: "Docker and Kubernetes implementations for portable, scalable application deployment." 
      },
      { 
        icon: "🔄", 
        title: "DevOps & CI/CD", 
        description: "Automated pipelines accelerating development, testing, and deployment with quality assurance." 
      },
      { 
        icon: "💾", 
        title: "Cloud Backup & DR", 
        description: "Cloud-based backup and disaster recovery ensuring business continuity with rapid recovery." 
      },
      { 
        icon: "💰", 
        title: "Cost Optimization", 
        description: "Continuous monitoring and optimization reducing cloud spend by 30-50% without performance impact." 
      }
    ],
    technologies: [
      "Amazon AWS", 
      "Microsoft Azure", 
      "Google Cloud Platform", 
      "Docker", 
      "Kubernetes",
      "Terraform", 
      "Jenkins", 
      "GitLab CI/CD",
      "AWS Lambda",
      "Azure Functions",
      "CloudWatch",
      "Datadog"
    ],
    packages: [
      {
        name: 'Starter',
        description: 'Cloud basics',
        features: [
          'Single cloud platform setup',
          'Basic migration support',
          'Infrastructure configuration',
          'Monthly cost reporting',
          'Business hours support',
          'Up to 10 workloads'
        ]
      },
      {
        name: 'Professional',
        description: 'Full cloud services',
        popular: true,
        features: [
          'Multi-cloud support (AWS, Azure, GCP)',
          'Complete migration services',
          'DevOps & CI/CD pipelines',
          'Cost optimization & FinOps',
          '24/7 cloud management',
          'Performance monitoring',
          'Disaster recovery setup',
          'Up to 100 workloads'
        ]
      },
      {
        name: 'Enterprise',
        description: 'Maximum cloud power',
        features: [
          'Hybrid/multi-cloud architecture',
          'Cloud-native application development',
          'Advanced automation & orchestration',
          'FinOps & governance framework',
          'Dedicated cloud architect',
          'White-glove migration services',
          'Custom SLA guarantees',
          'Unlimited workloads'
        ]
      }
    ],
    ctaTitle: "Ready to Accelerate with Cloud?",
    ctaDescription: "Let's design a cloud strategy that transforms your business capabilities and reduces costs."
  };

  return <ServicePageTemplate {...serviceData} />;
};

export default CloudServices;
