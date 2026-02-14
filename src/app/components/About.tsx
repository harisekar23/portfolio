import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code, Zap, Users, Target } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const highlights = [
    {
      icon: Code,
      title: 'Full Lifecycle Developer',
      description: 'From initial design to post-production support, I handle the complete development cycle.',
    },
    {
      icon: Users,
      title: 'Agile Team Player',
      description: 'Experienced in collaborative environments using Agile methodologies and modern workflows.',
    },
    {
      icon: Zap,
      title: 'Performance Mindset',
      description: 'Strong focus on debugging, optimization, and delivering fast, efficient applications.',
    },
    {
      icon: Target,
      title: 'Business Impact Driven',
      description: 'Engineering decisions guided by measurable business outcomes and user experience.',
    },
  ];

  const journey = [
    { year: '2021', title: 'Started Full-Stack Journey', description: 'Began professional development career' },
    { year: '2022', title: 'eCommerce Specialist', description: 'Focused on Salesforce Commerce Cloud' },
    { year: '2023', title: 'Performance Expert', description: 'Specialized in optimization & accessibility' },
    { year: '2024', title: 'Freelance Engineer', description: 'Building custom solutions for clients' },
  ];

  const techStack = [
    'React.js',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'REST APIs',
    'SQL',
    'Git',
    'Salesforce Commerce Cloud',
  ];

  return (
    <section id="about" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 dark:text-white text-black">
            About Me
          </h2>
          <p className="text-lg dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            3+ years of building scalable web applications with a focus on performance and business impact
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-fit group-hover:scale-110 transition-transform">
                <highlight.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white text-black">
                {highlight.title}
              </h3>
              <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 dark:text-white text-black text-center">
            Core Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 dark:border-blue-500/20 dark:text-gray-200 text-gray-800 text-sm font-medium hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Career Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative"
        >
          <h3 className="text-2xl font-bold mb-12 dark:text-white text-black text-center">
            Career Journey
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {journey.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {item.year}
                </div>
                <h4 className="text-lg font-semibold mb-2 dark:text-white text-black">
                  {item.title}
                </h4>
                <p className="text-sm dark:text-gray-400 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}