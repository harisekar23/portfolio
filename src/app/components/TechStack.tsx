import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface TechCategory {
  name: string;
  items: string[];
  color: string;
}

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const techCategories: TechCategory[] = [
    {
      name: 'Frontend',
      items: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Backend',
      items: ['Node.js', 'Express', 'REST APIs', 'SQL', 'PostgreSQL', 'MongoDB'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Tools & DevOps',
      items: ['Git', 'GitHub', 'Postman', 'CI/CD', 'DigitalOcean', 'Docker'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'Commerce',
      items: ['Salesforce Commerce Cloud', 'SFCC B2C', 'eCommerce APIs', 'Payment Integration'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="tech-stack" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 dark:border-blue-500/20">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 dark:text-white text-black">
            Tech Stack
          </h2>
          <p className="text-lg dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Modern technologies and tools I use to build robust applications
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.name}
                </h3>
                <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${category.color}`} />
              </div>

              {/* Tech Items */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + techIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group relative"
                  >
                    <div className="px-4 py-2 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/20 dark:text-gray-200 text-gray-800 text-sm font-medium hover:border-white/40 transition-all duration-300 cursor-default">
                      {tech}
                      {/* Hover Glow */}
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm dark:text-gray-400 text-gray-600 max-w-3xl mx-auto">
            Always learning and adapting to new technologies. The stack above represents my core competencies, 
            but I'm quick to pick up new tools and frameworks as projects require.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
