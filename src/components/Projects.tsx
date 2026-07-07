import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const PROJECTS_DATA = [
  {
    title: 'Comparative Analysis of LLMs',
    date: 'Dec 2025',
    description: 'A comprehensive study comparing the accuracy, consistency, and prediction reliability of advanced LLMs including ChatGPT-5.1, Gemini-3.0, and Opus-4.5.',
    stack: ['Python', 'Data Analytics', 'Generative AI'],
    image: '/project-llm.jpg',
  },
  {
    title: 'Sales Data Analysis & Forecasting',
    date: '2025',
    description: 'Developed an end-to-end data pipeline to perform trend analysis and precise forecasting on large-scale sales datasets to drive business decisions.',
    stack: ['Python', 'SQL', 'Predictive Modeling'],
    image: '/project-sales.jpg',
  },
  {
    title: 'Guild Education - Scholarship Analysis',
    date: 'Dec 2024 - Jan 2025',
    description: 'Leveraged data analysis to systematically identify hidden gaps in scholarship awareness, providing actionable metrics to improve reach.',
    stack: ['Data Analysis', 'Visualization', 'Statistics'],
    image: '/project-scholarship.jpg',
  },
  {
    title: 'ML Prediction Suite',
    date: 'Jul 2025',
    description: 'A versatile machine learning suite encompassing three core models: IPL Match Prediction, Car Price Prediction, and Diabetes Prediction.',
    stack: ['Machine Learning', 'Python', 'Scikit-Learn'],
    image: '/project-ml.jpg',
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading title="Featured Projects" subtitle="A selection of my best analytical and predictive modeling work." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card rounded-[2rem] overflow-hidden border border-black/5 hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Placeholder */}
              <div className="h-64 w-full bg-black/5 relative overflow-hidden flex items-center justify-center">
                <Code2 size={48} className="text-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Links */}
                <div className="absolute bottom-6 right-6 flex gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform">
                    <Github size={20} />
                  </button>
                  <button className="p-3 bg-[var(--color-accent)] text-white rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <p className="text-[var(--color-text-secondary)] mb-6 text-sm leading-relaxed min-h-[60px]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-[#F8F5F0] text-[var(--color-accent)] text-xs font-semibold rounded-lg border border-black/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
