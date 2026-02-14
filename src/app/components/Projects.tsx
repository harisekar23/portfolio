import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  problem: string;
  solution: string;
  impact: string;
  techStack: string[];
  delay: number;
}

function ProjectCard({ title, category, problem, solution, impact, techStack, delay }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
    >
      {/* Project Image Placeholder */}
      <div className="relative h-48 sm:h-64 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50" />
        <div className="relative text-6xl font-bold opacity-20 dark:text-white text-black">
          {'</>'}
        </div>
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20">
          <span className="text-xs font-medium text-white">{category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 dark:text-white text-black group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        {/* Problem → Solution → Impact */}
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-sm font-semibold text-red-400 mb-1">Problem</h4>
            <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">{problem}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-blue-400 mb-1">Solution</h4>
            <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">{solution}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-green-400 mb-1">Impact</h4>
            <p className="text-sm dark:text-gray-400 text-gray-600 leading-relaxed">{impact}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:text-gray-300 text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href="#"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 dark:text-white text-black hover:border-blue-500 hover:bg-white/10 transition-all duration-300 group/btn"
          >
            <Github className="w-4 h-4" />
            <span className="text-sm font-medium">Code</span>
          </a>
          <a
            href="#"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group/btn"
          >
            <span className="text-sm font-medium">Live Demo</span>
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'eCommerce Performance Optimization',
      category: 'Performance',
      problem: 'Slow page load times and poor Core Web Vitals affecting conversion rates and user experience.',
      solution: 'Implemented code splitting, lazy loading, image optimization, and caching strategies.',
      impact: '+25% improvement in Core Web Vitals and +12% increase in conversion rates.',
      techStack: ['React', 'Node.js', 'Lighthouse', 'Webpack', 'CDN'],
    },
    {
      title: 'Order Management System',
      category: 'Full-Stack',
      problem: 'Client needed a custom system to manage orders, inventory, and customer relationships.',
      solution: 'Built a full-stack application with real-time updates, role-based access, and analytics dashboard.',
      impact: 'Reduced order processing time by 40% and improved inventory accuracy.',
      techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'WebSocket'],
    },
    {
      title: 'Headless Commerce API Integration',
      category: 'API Development',
      problem: 'Legacy system needed modern API layer for mobile and third-party integrations.',
      solution: 'Designed and implemented RESTful APIs with comprehensive documentation and testing.',
      impact: 'Enabled seamless integration with 5+ third-party services and mobile apps.',
      techStack: ['Node.js', 'Express', 'REST', 'Swagger', 'JWT'],
    },
    {
      title: 'Accessibility Compliance Project',
      category: 'Accessibility',
      problem: 'Website failing WCAG compliance with accessibility score of 65%.',
      solution: 'Conducted audit, implemented semantic HTML, ARIA labels, keyboard navigation, and screen reader support.',
      impact: 'Achieved 92% accessibility score and WCAG 2.1 AA compliance.',
      techStack: ['React', 'ARIA', 'axe-core', 'WCAG 2.1'],
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
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
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 dark:text-white text-black">
            Projects
          </h2>
          <p className="text-lg dark:text-gray-400 text-gray-600 max-w-2xl mx-auto">
            Real-world applications built with modern technologies and best practices
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 0.1} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 dark:text-white text-black hover:border-blue-500 hover:bg-white/10 transition-all duration-300 group"
          >
            <span className="font-medium">View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}