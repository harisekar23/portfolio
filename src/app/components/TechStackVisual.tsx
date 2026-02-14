import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function TechStackVisual() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Technology items with colors matching their brand
  const usingNow = [
    { name: 'HTML5', color: '#E34F26', icon: '📄' },
    { name: 'CSS3', color: '#1572B6', icon: '🎨' },
    { name: 'JavaScript', color: '#F7DF1E', textColor: '#000' },
    { name: 'React', color: '#61DAFB', textColor: '#000' },
    { name: 'SASS', color: '#CF649A', icon: '💅' },
    { name: 'Bootstrap', color: '#7952B3', icon: '🅱️' },
    { name: 'Git', color: '#F05032', icon: '📦' },
    { name: 'Figma', color: '#F24E1E', icon: '🎯' },
  ];

  const learning = [
    { name: 'Node.js', color: '#539E43', icon: '🟢' },
    { name: 'TypeScript', color: '#3178C6', icon: '📘' },
    { name: 'MongoDB', color: '#47A248', icon: '🍃' },
    { name: 'MySQL', color: '#4479A1', icon: '🗄️' },
  ];

  const otherSkills = [
    { name: 'English C1/C2', color: '#4A90E2', icon: '🌐' },
    { name: 'Spanish B1', color: '#FFA500', icon: '🇪🇸' },
    { name: 'German A2', color: '#FF6B6B', icon: '🇩🇪' },
    { name: 'REST APIs', color: '#6366F1', icon: '🔌' },
  ];

  interface TechItemProps {
    name: string;
    color: string;
    textColor?: string;
    icon?: string;
    delay: number;
  }

  function TechItem({ name, color, textColor = '#fff', icon, delay }: TechItemProps) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.8 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.5, delay }}
        whileHover={{ scale: 1.1, y: -10 }}
        className="flex flex-col items-center group cursor-default"
      >
        {/* Icon/Logo Container */}
        <div
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex items-center justify-center mb-4 shadow-lg transition-all duration-300 group-hover:shadow-2xl relative overflow-hidden"
          style={{ backgroundColor: color }}
        >
          {/* Glow effect on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl"
            style={{ backgroundColor: color }}
          />
          <span className="text-5xl relative z-10">{icon || '💻'}</span>
        </div>
        {/* Label */}
        <span
          className="text-sm sm:text-base font-semibold text-center dark:text-white text-black group-hover:scale-110 transition-transform duration-300"
          style={{ letterSpacing: '0.1em' }}
        >
          {name}
        </span>
      </motion.div>
    );
  }

  return (
    <section id="tech-stack-visual" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent via-gray-100/50 dark:via-gray-900/50 to-transparent" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 dark:border-blue-500/20">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Skills
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 dark:text-white text-black">
            Technologies
          </h2>
        </motion.div>

        {/* Using Now Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-bold mb-12 dark:text-white text-black tracking-widest"
          >
            USING NOW:
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 sm:gap-12">
            {usingNow.map((tech, index) => (
              <TechItem key={tech.name} {...tech} delay={index * 0.1} />
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-2xl sm:text-3xl font-bold mb-12 dark:text-white text-black tracking-widest"
          >
            LEARNING:
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-12">
            {learning.map((tech, index) => (
              <TechItem key={tech.name} {...tech} delay={0.8 + index * 0.1} />
            ))}
          </div>
        </div>

        {/* Other Skills Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-2xl sm:text-3xl font-bold mb-12 dark:text-white text-black tracking-widest"
          >
            OTHER SKILLS:
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-12">
            {otherSkills.map((tech, index) => (
              <TechItem key={tech.name} {...tech} delay={1.2 + index * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
