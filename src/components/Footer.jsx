const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigate: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
      { name: 'Systems Integration', href: '/services/systems-integration' },
      { name: 'Network Solutions', href: '/services/network-solutions' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Cloud Services', href: '/services/cloud-services' },
      { name: '24/7 Support', href: '/services/support-247' }
    ],
    connect: [
      { name: 'Email', href: 'mailto:netthias@ttt-systems.com' },
      { name: '+27 68 154 0303', href: 'tel:+27681540303' },
      { name: '+27 10 210 7093', href: 'tel:+27102107093' },
      { name: '+27 11 886 0667', href: 'tel:+27118860667' }
    ]
  };

  return (
    <footer className="bg-ttt-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/ttt_logo1.jpeg" 
                alt="TTT Systems" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider font-semibold">
              Transforming Technology Together
            </p>
            <div className="flex items-start text-sm text-gray-400">
              <span className="mr-2">📍</span>
              <span>Randburg • Gauteng • South Africa</span>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {footerLinks.navigate.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-ttt-red transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-ttt-red transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-ttt-red transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>© {currentYear} TTT SYSTEMS</span>
              <span>|</span>
              <span>ALL RIGHTS RESERVED</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">SYSTEM ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;