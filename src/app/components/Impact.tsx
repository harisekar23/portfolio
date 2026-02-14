import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp, Zap, ShoppingCart, CheckCircle } from 'lucide-react';

interface MetricCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
  delay: number;
}

function MetricCard({ icon: Icon, value, label, description, delay }: MetricCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const target = parseInt(value.replace(/[^0-9]/g, ''));
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const displayValue = value.startsWith('+') 
    ? `+${count}${value.includes('%') ? '%' : ''}`
    : count;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
      
      <div className="relative">
        {/* Icon */}
        <div className="mb-6 p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-fit">
          <Icon className="w-8 h-8 text-blue-400" />
        </div>

        {/* Value */}
        <div className="text-5xl sm:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {displayValue}
        </div>

        {/* Label */}
        <h3 className="text-xl font-semibold mb-2 dark:text-white text-black">
          {label}
        </h3>

        {/* Description */}
        <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const metrics = [
    {
      icon: Zap,
      value: '+25%',
      label: 'Core Web Vitals',
      description: 'Performance improvement across key metrics including LCP, FID, and CLS',
    },
    {
      icon: ShoppingCart,
      value: '+12%',
      label: 'Cart Conversion',
      description: 'Increase in add-to-cart conversion through UX optimization',
    },
    {
      icon: TrendingUp,
      value: '+15%',
      label: 'BOPIS Completion',
      description: 'Improvement in Buy Online Pick-up In Store completion rate',
    },
    {
      icon: CheckCircle,
      value: '+27%',
      label: 'Accessibility Score',
      description: 'Boosted from 65% to 92% meeting WCAG 2.1 AA standards',
    },
  ];

  return (
    <section id="impact" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
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
              Measurable Results
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 dark:text-white text-black">
            Impact & Achievements
          </h2>
          <p className="text-lg dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Delivering tangible business value through engineering excellence
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              {...metric}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm dark:text-gray-400 text-gray-600 max-w-3xl mx-auto">
            These metrics represent real-world improvements achieved through systematic optimization, 
            data-driven decision making, and a deep understanding of both technical excellence and business goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
