import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Briefcase } from 'lucide-react';

const EXPERIENCE_DATA = [
  {
    company: 'Samkhya.ai',
    role: 'Research Intern (Blockchain & Quantum Computing)',
    duration: '01/12/2025 – 31/12/2025',
    responsibilities: [
      'Worked on pioneering blockchain and quantum integration projects bridging Web2 and Web3 architectures.'
    ]
  },
  {
    company: 'TITAN Company',
    role: 'Analytics and Insights Intern',
    duration: '08/12/2025 – 08/01/2026',
    responsibilities: [
      'Applied advanced machine learning techniques to complex business datasets to extract actionable insights.'
    ]
  },
  {
    company: 'INTERNPE',
    role: 'AIML Intern',
    duration: '07/07/2025 – 03/08/2025',
    responsibilities: [
      'Worked on comprehensive machine learning pipelines including data preprocessing, model training, and performance evaluation.'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <SectionHeading title="Experience" subtitle="My professional journey and internships." />
        
        <div className="relative mt-16">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-black/10"></div>
          
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-24px] md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-[#FCFAF7] border-4 border-white shadow-md flex items-center justify-center z-10">
                <Briefcase size={18} className="text-[var(--color-accent)]" />
              </div>
              
              <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                <div className="glass-card p-8 rounded-2xl relative inline-block w-full text-left">
                  <span className="inline-block px-3 py-1 bg-[var(--color-highlight)]/20 text-[#8c784f] text-xs font-bold tracking-wider rounded-full mb-4">
                    {exp.duration}
                  </span>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <h4 className="text-[var(--color-text-secondary)] text-lg font-medium mb-4 flex items-center gap-2">
                    {exp.company}
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((req, i) => (
                      <li key={i} className="text-[var(--color-text-secondary)] text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-[var(--color-highlight)] mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
