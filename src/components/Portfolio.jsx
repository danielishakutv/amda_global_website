import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Lightbulb, 
  PenTool, 
  Rocket, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discovery & Consultation",
    description: "We begin by understanding your business, goals, target audience, and current brand positioning through in-depth conversations.",
    color: "bg-secondary"
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy Development",
    description: "Based on our discovery, we develop a comprehensive brand strategy that aligns with your business objectives and market positioning.",
    color: "bg-accent"
  },
  {
    number: "03",
    icon: PenTool,
    title: "Creative Execution",
    description: "Our team brings the strategy to life through creative design, content development, and brand identity systems.",
    color: "bg-emerald-500"
  },
  {
    number: "04",
    icon: Rocket,
    title: "Implementation & Launch",
    description: "We help implement your brand across all touchpoints—digital, print, and physical—ensuring consistency and impact.",
    color: "bg-purple-500"
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Review & Optimize",
    description: "Post-launch, we review performance, gather feedback, and provide recommendations for continuous brand improvement.",
    color: "bg-rose-500"
  }
];

const workValues = [
  {
    title: "Remote-First",
    description: "We operate as a lean, remote-first agency, enabling efficient service delivery without geographical limitations."
  },
  {
    title: "Partner-Based Model",
    description: "We collaborate with licensed professionals and industry experts to deliver comprehensive solutions."
  },
  {
    title: "Systems & Accountability",
    description: "We prioritize professional systems and accountability, ensuring transparent communication throughout."
  }
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="py-24 bg-surface-light relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-semibold text-sm rounded-full mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            How We Work
          </h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A systematic approach to building brands that are intentional, scalable, and protected.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Step card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  {/* Number badge */}
                  <div className={`${step.color} text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center mb-4`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 ${step.color}/10 rounded-xl flex items-center justify-center mb-4`}>
                    <step.icon className={`w-7 h-7 ${step.color === 'bg-secondary' ? 'text-secondary' : step.color === 'bg-accent' ? 'text-accent' : step.color === 'bg-emerald-500' ? 'text-emerald-500' : step.color === 'bg-purple-500' ? 'text-purple-500' : 'text-rose-500'}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-display font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Work Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="gradient-primary rounded-3xl p-10 md:p-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-10 text-center">
                Our Operating Model
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                {workValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-display font-bold text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-white mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-accent text-primary font-bold px-8 py-4 rounded-xl hover:bg-accent-light transition-all duration-300 shadow-lg"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeWork;
