import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.hash === path.replace('/', '');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/ttt_logo1.jpeg" 
              alt="TTT Systems Logo" 
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-ttt-black hidden sm:block">
              TTT Systems
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors relative ${
                  isActive(link.path)
                    ? 'text-ttt-red'
                    : 'text-ttt-black hover:text-ttt-red'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-ttt-red"
                    layoutId="navbar-indicator"
                  />
                )}
              </a>
            ))}
            <a
              href="/#contact"
              className="bg-ttt-red text-white px-6 py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6 text-ttt-black"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-red-50 text-ttt-red'
                    : 'text-ttt-black hover:bg-gray-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-ttt-red text-white px-4 py-2.5 rounded-lg font-medium text-center hover:bg-red-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;