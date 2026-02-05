import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  Shield, 
  Check, 
  ArrowRight, 
  Sparkles,
  FileCheck,
  Stamp,
  Building2,
  PenTool,
  Layout,
  Printer,
  MessageSquare
} from 'lucide-react';

const brandingPackages = [
  {
    name: "Starter Package",
    price: "₦20,000",
    description: "Perfect for businesses starting their brand journey",
    features: [
      "Brand audit",
      "Content direction",
      "2 social media designs"
    ],
    highlighted: false,
    icon: Sparkles
  },
  {
    name: "Growth Package",
    price: "₦40,000",
    description: "Ideal for businesses ready to level up their brand",
    features: [
      "Brand refresh or identity",
      "4 social media designs with captions",
      "30-day content plan"
    ],
    highlighted: true,
    icon: PenTool
  },
  {
    name: "Authority Package",
    price: "₦60,000",
    description: "Complete brand system for established businesses",
    features: [
      "Full brand system",
      "Brand positioning strategy",
      "6 weeks of content support"
    ],
    highlighted: false,
    icon: Layout
  }
];

const compliancePackages = [
  {
    name: "Brand Name & Risk Check",
    price: "₦40,000",
    description: "Essential brand name verification and risk assessment",
    features: [
      "Brand name availability check",
      "Risk assessment report",
      "Recommendations for brand protection"
    ],
    highlighted: false,
    icon: FileCheck
  },
  {
    name: "Trademark & Brand Protection",
    price: "₦120,000 – ₦150,000",
    description: "Comprehensive trademark support and protection",
    features: [
      "Trademark search and analysis",
      "Application support",
      "Brand protection guidance",
      "Partnership with licensed professionals"
    ],
    highlighted: true,
    icon: Stamp
  },
  {
    name: "Brand Compliance & Governance",
    price: "₦250,000+",
    description: "Premium compliance for scaling businesses",
    features: [
      "Full compliance audit",
      "Governance framework",
      "Ongoing advisory support",
      "Legal partnership coordination"
    ],
    highlighted: false,
    icon: Building2
  }
];

const additionalServices = [
  { name: "Brand strategy & positioning", icon: MessageSquare },
  { name: "Brand identity systems & guidelines", icon: Layout },
  { name: "Content direction & communication frameworks", icon: PenTool },
  { name: "Printing of branded materials", icon: Printer }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('branding');

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold text-sm rounded-full mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Our Services
          </h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Comprehensive solutions ensuring your brand is visually appealing, strategically positioned, and legally secure for long-term growth.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('branding')}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'branding'
                ? 'bg-primary text-white shadow-xl'
                : 'bg-surface-light text-primary hover:bg-gray-200'
            }`}
          >
            <Palette className="w-5 h-5" />
            <span>Branding & Experience</span>
          </button>
          <button
            onClick={() => setActiveTab('compliance')}
            className={`flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'compliance'
                ? 'bg-primary text-white shadow-xl'
                : 'bg-surface-light text-primary hover:bg-gray-200'
            }`}
          >
            <Shield className="w-5 h-5" />
            <span>Brand Protection & Compliance</span>
          </button>
        </div>

        {/* Packages Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Tab Description */}
            <div className="text-center mb-10">
              {activeTab === 'branding' ? (
                <p className="text-lg text-muted max-w-2xl mx-auto">
                  We help brands define who they are, how they communicate, and how they show up across all touchpoints.
                </p>
              ) : (
                <p className="text-lg text-muted max-w-2xl mx-auto">
                  Preventive brand protection and compliance services delivered in partnership with licensed legal professionals.
                </p>
              )}
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {(activeTab === 'branding' ? brandingPackages : compliancePackages).map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-3xl p-8 transition-all duration-500 ${
                    pkg.highlighted
                      ? 'bg-primary text-white shadow-2xl scale-105 z-10'
                      : 'bg-white border border-gray-200 hover:border-accent hover:shadow-xl'
                  }`}
                >
                  {/* Popular badge */}
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-primary text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    pkg.highlighted ? 'bg-white/10' : 'bg-surface-light'
                  }`}>
                    <pkg.icon className={`w-7 h-7 ${pkg.highlighted ? 'text-accent' : 'text-secondary'}`} />
                  </div>

                  {/* Package Name */}
                  <h3 className={`text-xl font-display font-bold mb-2 ${
                    pkg.highlighted ? 'text-white' : 'text-primary'
                  }`}>
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span className={`text-3xl font-display font-bold ${
                      pkg.highlighted ? 'text-accent' : 'text-primary'
                    }`}>
                      {pkg.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className={`mb-6 ${pkg.highlighted ? 'text-gray-300' : 'text-muted'}`}>
                    {pkg.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.highlighted ? 'text-accent' : 'text-secondary'
                        }`} />
                        <span className={pkg.highlighted ? 'text-gray-200' : 'text-muted'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className={`block w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${
                      pkg.highlighted
                        ? 'bg-accent text-primary hover:bg-accent-light'
                        : 'bg-primary text-white hover:bg-secondary'
                    }`}
                  >
                    Get Started
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Additional Services (only for branding tab) */}
            {activeTab === 'branding' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-surface-light rounded-3xl p-8 md:p-12"
              >
                <h3 className="text-2xl font-display font-bold text-primary mb-8 text-center">
                  Additional Branding Services
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {additionalServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <span className="font-medium text-primary">{service.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Compliance disclaimer */}
            {activeTab === 'compliance' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-secondary/5 border border-secondary/20 rounded-2xl p-6 text-center"
              >
                <p className="text-muted text-sm">
                  <strong className="text-primary">Note:</strong> Our compliance services help brands avoid infringement, secure ownership, and operate with confidence. All legal and trademark-related services are provided as advisory and facilitative support in collaboration with licensed legal practitioners.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Custom Project CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-muted mb-4">Need a custom solution?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-secondary transition-colors group"
          >
            <span>Let's discuss your project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
