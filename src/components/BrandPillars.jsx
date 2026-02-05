import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Shield, Users, CheckCircle, Handshake, MessageSquare } from 'lucide-react';

const pillars = [
  {
    icon: Lightbulb,
    title: "Strategy-First Approach",
    description: "Every brand solution begins with deep strategy. We don't just create visuals—we build intentional brand systems designed for growth.",
    color: "bg-accent/10",
    iconColor: "text-accent"
  },
  {
    icon: Shield,
    title: "Compliance-Aware Building",
    description: "We integrate brand protection from day one, ensuring your brand is not only beautiful but legally secure and sustainable.",
    color: "bg-secondary/10",
    iconColor: "text-secondary"
  },
  {
    icon: CheckCircle,
    title: "Clear Service Boundaries",
    description: "Professional systems with transparent processes. You always know what to expect, when to expect it, and how we'll deliver.",
    color: "bg-emerald-500/10",
    iconColor: "text-emerald-500"
  },
  {
    icon: Handshake,
    title: "Partner-Driven Expertise",
    description: "We collaborate with licensed professionals and industry experts to deliver comprehensive solutions across all touchpoints.",
    color: "bg-purple-500/10",
    iconColor: "text-purple-500"
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Open, honest, and accountable communication throughout every project. No surprises, just results.",
    color: "bg-rose-500/10",
    iconColor: "text-rose-500"
  },
  {
    icon: Users,
    title: "Client-Centric Focus",
    description: "Your success is our success. We work as an extension of your team, invested in your brand's long-term growth.",
    color: "bg-cyan-500/10",
    iconColor: "text-cyan-500"
  }
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const BrandPillars = () => {
  return (
    <section className="py-24 bg-surface-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 line-pattern"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            Why Work With Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Why Choose AMDA
          </h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            We bring together strategy, creativity, and compliance to build brands that stand the test of time.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <pillar.icon className={`w-8 h-8 ${pillar.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {pillar.description}
              </p>

              {/* Hover accent line */}
              <div className="mt-6 w-0 h-1 bg-accent rounded-full group-hover:w-16 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-primary transition-colors group"
          >
            <span>Explore Our Services</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandPillars;
