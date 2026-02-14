import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Database, Zap, Headphones, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  delay: number;
}

function ServiceCard({ icon: Icon, title, description, features, delay }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300" />
      
      <div className="relative">
        {/* Icon */}
        <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-fit group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-blue-400" />
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-bold mb-3 dark:text-white text-black group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm dark:text-gray-400 text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              <span className="text-sm dark:text-gray-300 text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:gap-3 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function FreelanceServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Code,
      title: 'Full Web App Development',
      description: 'End-to-end development of modern web applications from concept to deployment.',
      features: [
        'Custom frontend with React.js and modern frameworks',
        'Backend API development with Node.js/Express',
        'Database design and implementation',
        'Responsive design for all devices',
        'Integration with third-party services',
      ],
    },
    {
      icon: Database,
      title: 'API Development',
      description: 'Robust and scalable REST APIs designed for performance and maintainability.',
      features: [
        'RESTful API architecture',
        'Comprehensive API documentation',
        'Authentication and authorization',
        'Rate limiting and security',
        'Testing and validation',
      ],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Systematic audits and improvements to make your application faster and more efficient.',
      features: [
        'Core Web Vitals optimization',
        'Code splitting and lazy loading',
        'Image and asset optimization',
        'Caching strategies',
        'Lighthouse audits and improvements',
      ],
    },
    {
      icon: Headphones,
      title: 'Post-Production Support',
      description: 'Ongoing maintenance and support to keep your application running smoothly.',
      features: [
        'Bug fixes and troubleshooting',
        'Feature enhancements',
        'Performance monitoring',
        'Security updates',
        'Documentation and training',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 dark:border-blue-500/20">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What I Offer
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 dark:text-white text-black">
            Freelance Services
          </h2>
          <p className="text-lg dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Professional development services tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.1} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/30 dark:border-blue-500/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-3 dark:text-white text-black">
              Ready to Start Your Project?
            </h3>
            <p className="dark:text-gray-300 text-gray-700 mb-6">
              Let's discuss how I can help bring your vision to life with clean, scalable code.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Let's Talk
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
