import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedList from "./AnimatedList/AnimatedList";

const ServicePageTemplate = ({ 
  serviceNumber,
  title,
  subtitle,
  description,
  stats,
  features,
  technologies,
  packages,
  ctaTitle,
  ctaDescription
}) => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-red-50 text-ttt-red text-sm font-semibold mb-4">
              Service Module {serviceNumber}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-ttt-black mb-6">
              {title} <span className="text-ttt-red">{subtitle}</span>
            </h1>
            <p className="text-xl text-ttt-grey mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-8 mb-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-ttt-red">{stat.value}</div>
                  <div className="text-sm text-ttt-grey">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="#contact" className="bg-ttt-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all">
                Request Consultation
              </a>
              <Link to="/" className="bg-white text-ttt-black px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 hover:border-ttt-red transition-all">
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section with AnimatedList */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ttt-black mb-4">
              Core <span className="text-ttt-red">Capabilities</span>
            </h2>
          </div>

          <AnimatedList
            items={features.map(feature => (
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-ttt-black mb-2">{feature.title}</h3>
                  <p className="text-ttt-grey">{feature.description}</p>
                </div>
              </div>
            ))}
            showGradients={true}
            displayScrollbar={true}
            enableArrowNavigation={false}
          />
        </div>
      </section>

      {/* Technologies */}
      {technologies && technologies.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-ttt-black mb-4">
                Technology <span className="text-ttt-red">Stack</span>
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-6 py-3 bg-white rounded-lg border-2 border-gray-200 hover:border-ttt-red transition-colors"
                >
                  <span className="font-semibold text-ttt-black">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ttt-black mb-4">
              Service <span className="text-ttt-red">Packages</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 border-2 ${
                  pkg.popular ? 'border-ttt-red shadow-xl' : 'border-gray-200'
                } hover:shadow-xl transition-all relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-ttt-red text-white px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-ttt-black mb-2">{pkg.name}</h3>
                <p className="text-ttt-grey mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-ttt-red mr-2">✓</span>
                      <span className="text-ttt-grey">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-ttt-red text-white hover:bg-red-700'
                      : 'bg-gray-100 text-ttt-black hover:bg-gray-200'
                  }`}
                >
                  Request Quote
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-ttt-red to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">{ctaTitle}</h2>
          <p className="text-xl mb-8 opacity-90">{ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:netthias@ttt-systems.com"
              className="bg-white text-ttt-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Email Us
            </a>
            <a
              href="tel:+27681540303"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-ttt-red transition-all"
            >
              Call: +27 68 154 0303
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;