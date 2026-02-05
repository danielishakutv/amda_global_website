import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Rocket, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-light -skew-x-12 origin-top-right"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Who We Are
          </h2>
          <div className="section-divider mx-auto"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6 leading-tight">
              A Brand Strategy, Experience & Compliance Advisory Firm
            </h3>
            <p className="text-lg text-muted leading-relaxed mb-6">
              AMDA Global Solution is helping businesses build brands that are <span className="text-primary font-semibold">clear, credible, scalable, and legally protected</span>. We work with startups, SMEs, personal brands, and growing organizations across Nigeria and Africa.
            </p>
            <p className="text-lg text-muted leading-relaxed mb-8">
              We sit at the intersection of branding, strategy, and brand protection. Our services ensure that brands are not only visually appealing, but also strategically positioned and legally secure for long-term growth.
            </p>

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-surface-light rounded-xl">
                <Globe className="w-6 h-6 text-secondary" />
                <span className="font-semibold text-primary">Nigeria & Africa</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-surface-light rounded-xl">
                <Rocket className="w-6 h-6 text-accent" />
                <span className="font-semibold text-primary">Remote-First</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Vision & Mission Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Vision Card */}
            <div className="card-elevated p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Eye className="w-7 h-7 text-accent" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-primary">Our Vision</h4>
                </div>
                <p className="text-lg text-muted leading-relaxed">
                  To become the <span className="text-primary font-semibold">number one trusted African brand partner.</span>
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="card-elevated p-8 relative overflow-hidden group">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-secondary" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-primary">Our Mission</h4>
                </div>
                <p className="text-lg text-muted leading-relaxed">
                  To help businesses build <span className="text-primary font-semibold">intentional, scalable, and protected brands</span> through strategy-led thinking, creative excellence, and compliance-aligned solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Coverage Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-primary rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Serving Businesses Across Nigeria & International Markets
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              We operate as a lean, remote-first agency with a partner-based service model, prioritizing systems, professionalism, and accountability for efficient service delivery.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-accent text-primary font-bold px-8 py-4 rounded-lg hover:bg-accent-light transition-all duration-300"
            >
              Let's Work Together
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
