import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUp,
  Heart
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: "Brand Strategy", href: "#services" },
    { name: "Brand Identity", href: "#services" },
    { name: "Content Direction", href: "#services" },
    { name: "Print Materials", href: "#services" },
    { name: "Trademark Support", href: "#services" },
    { name: "Brand Compliance", href: "#services" }
  ];

  const company = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "How We Work", href: "#how-we-work" },
    { name: "Contact", href: "#contact" }
  ];

  const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 w-full bg-gradient-to-r from-secondary via-accent to-secondary"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.jpeg" 
                alt="AMDA Global Solution" 
                className="h-12 w-auto rounded"
              />
              <div>
                <h3 className="text-xl font-display font-bold">AMDA</h3>
                <p className="text-sm text-gray-400">Global Solution</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building Scalable and Protected Brands. A brand strategy, experience, and compliance advisory firm serving Nigeria and Africa.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 group"
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full group-hover:bg-accent transition-colors"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full group-hover:bg-accent transition-colors"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+2347077798418" className="text-gray-400 hover:text-white transition-colors">
                  +234 707 779 8418
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:info@amdaglobal.com" className="text-gray-400 hover:text-white transition-colors">
                  info@amdaglobal.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  No. 19, Famous Street,<br />
                  Ushafa, Abuja, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="bg-white/5 rounded-xl p-6">
            <h5 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              Legal Disclaimer
            </h5>
            <p className="text-gray-400 text-sm leading-relaxed">
              AMDA Global Solution is not a law firm. All legal and trademark-related services are provided as advisory and facilitative support in collaboration with licensed legal practitioners. Court representation and statutory fees are not included unless otherwise stated.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} AMDA Global Solution. All rights reserved.
          </p>
          
          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-accent text-primary rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
