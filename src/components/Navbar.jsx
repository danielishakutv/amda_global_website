import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'How We Work', href: '#how-we-work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'solid-nav py-3' : 'glass-nav py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/logo.jpeg" 
            alt="AMDA Global Solution" 
            className="h-10 w-auto rounded"
          />
          <div className={`font-display font-bold tracking-tight transition-colors ${isScrolled ? 'text-white' : 'text-primary'}`}>
            <span className="text-xl">AMDA</span>
            <span className={`text-sm block -mt-1 font-medium ${isScrolled ? 'text-gray-300' : 'text-secondary'}`}>
              Global Solution
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide hover:text-accent transition-colors relative group ${
                isScrolled ? 'text-gray-200' : 'text-primary'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-primary'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-white' : 'text-primary'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 top-0 bg-primary z-40 flex flex-col lg:hidden"
          >
            {/* Mobile Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img 
                  src="/logo.jpeg" 
                  alt="AMDA Global Solution" 
                  className="h-10 w-auto rounded"
                />
                <span className="text-xl font-display font-bold text-white">AMDA</span>
              </div>
              <button
                className="text-white focus:outline-none p-2"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col items-center justify-center flex-1 space-y-6 px-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl text-white font-display font-semibold hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 px-10 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-accent-light transition-colors text-xl"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </motion.a>
            </div>

            {/* Mobile Footer */}
            <div className="px-6 py-6 border-t border-white/10 text-center">
              <p className="text-gray-400 text-sm">info@amdaglobal.com</p>
              <p className="text-gray-500 text-xs mt-1">Nigeria & International (Africa)</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
