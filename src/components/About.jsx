import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Rapid Deployment',
      description: 'Quick implementation with minimal disruption to your operations'
    },
    {
      icon: '🔒',
      title: 'Military-Grade Security',
      description: 'Enterprise-level protection for your critical infrastructure'
    },
    {
      icon: '📊',
      title: 'Performance-Driven',
      description: 'Measurable results that drive business growth'
    },
    {
      icon: '🤝',
      title: 'Lifecycle Partnership',
      description: 'Long-term support and continuous optimization'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-red-50 text-ttt-red text-sm font-semibold mb-4">
              Who We Are
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-ttt-black mb-6">
              Built for the Future of
              <span className="block text-ttt-red">Business Technology</span>
            </h2>
            <p className="text-lg text-ttt-grey mb-6 leading-relaxed">
              TTT Systems operates at the intersection of innovation and reliability. Based in Randburg, Gauteng, we architect enterprise-grade IT infrastructure that scales with your ambitions.
            </p>
            <p className="text-lg text-ttt-grey mb-8 leading-relaxed">
              Our certified engineers deploy cutting-edge solutions across systems integration, cybersecurity, cloud architecture, and digital transformation. We don't just implement technology—we engineer competitive advantage.
            </p>
            <a
              href="#contact"
              className="inline-block bg-ttt-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105"
            >
              Partner With Us
            </a>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-ttt-red"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-ttt-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-ttt-grey">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;