import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'IT Infrastructure',
      description: 'Enterprise-grade infrastructure architecture designed for maximum performance, redundancy, and scalability.',
      icon: '🖥️',
      tags: ['Servers', 'Storage', 'Virtualization'],
      path: '/services/it-infrastructure'
    },
    {
      id: 2,
      title: 'Systems Integration',
      description: 'Seamless integration protocols connecting disparate platforms into unified, efficient business ecosystems.',
      icon: '🔗',
      tags: ['API', 'Middleware', 'Automation'],
      path: '/services/systems-integration'
    },
    {
      id: 3,
      title: 'Network Solutions',
      description: 'High-velocity network infrastructure ensuring ultra-low latency and maximum throughput across your organization.',
      icon: '🌐',
      tags: ['LAN/WAN', 'SD-WAN', '5G'],
      path: '/services/network-solutions'
    },
    {
      id: 4,
      title: 'Cybersecurity',
      description: 'Multi-layered defense systems protecting your digital assets against advanced persistent threats.',
      icon: '🛡️',
      tags: ['Firewall', 'Encryption', 'SOC'],
      path: '/services/cybersecurity'
    },
    {
      id: 5,
      title: 'Cloud Services',
      description: 'Hybrid and multi-cloud strategies engineered for agility, resilience, and cost optimization.',
      icon: '☁️',
      tags: ['AWS', 'Azure', 'GCP'],
      path: '/services/cloud-services'
    },
    {
      id: 6,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and rapid-response support ensuring zero-downtime operations.',
      icon: '🔧',
      tags: ['Helpdesk', 'Monitoring', 'SLA'],
      path: '/services/support-247'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-red-50 text-ttt-red text-sm font-semibold mb-4"
          >
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-ttt-black mb-4"
          >
            Our Service <span className="text-ttt-red">Matrix</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-ttt-grey max-w-3xl mx-auto"
          >
            Comprehensive IT solutions tailored to your business needs
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Link to={service.path}>
                <div className="h-full bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-ttt-red hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  {/* Icon & Number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-5xl">{service.icon}</div>
                    <div className="text-gray-300 text-2xl font-bold group-hover:text-ttt-red transition-colors">
                      {String(service.id).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-ttt-black mb-4 group-hover:text-ttt-red transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-ttt-grey mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full group-hover:bg-red-50 group-hover:text-ttt-red transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center text-ttt-red opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold mr-2">Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;