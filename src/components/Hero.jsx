import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Sparkles, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 dot-pattern opacity-30"></div>
        
        {/* Decorative lines */}
        <svg className="absolute bottom-0 left-0 w-full h-32 text-white/5" preserveAspectRatio="none" viewBox="0 0 1440 100">
          <path fill="currentColor" d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-gray-300">Brand Strategy & Compliance Advisory</span>
            </motion.div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-6">
              Building{' '}
              <span className="text-gradient">Scalable</span>
              <br />
              and{' '}
              <span className="text-gradient-blue">Protected</span>
              <br />
              Brands
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              A brand strategy, experience, and compliance advisory firm helping businesses build brands that are 
              <span className="text-white font-semibold"> clear, credible, scalable, and legally protected.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary inline-flex items-center justify-center"
              >
                Explore Services
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">100+</div>
                <div className="text-sm text-gray-400">Brands Built</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-1">Africa</div>
                <div className="text-sm text-gray-400">Service Coverage</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">360°</div>
                <div className="text-sm text-gray-400">Brand Solutions</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main feature card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="card-glass p-8 mb-6"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">Brand Strategy & Experience</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Define who you are, how you communicate, and how you show up across all touchpoints.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">Brand Identity</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">Content Strategy</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">Print Materials</span>
                </div>
              </motion.div>

              {/* Secondary feature card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="card-glass p-8 ml-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-2">Brand Protection & Compliance</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Preventive brand protection and compliance services to help businesses build legally safe brands.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">Trademark Support</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">Brand Governance</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">Risk Assessment</span>
                </div>
              </motion.div>

              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-xs tracking-widest mb-2">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
