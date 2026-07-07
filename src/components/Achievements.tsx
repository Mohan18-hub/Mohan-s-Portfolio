import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Trophy } from 'lucide-react';

const ACHIEVEMENTS_DATA = [
  {
    title: 'Top Performer - AIML Internship',
    date: 'August 2025',
    description: 'Recognized for building highly accurate ML models during the INTERNPE internship.'
  },
  {
    title: 'Blockchain Research Grant',
    date: 'February 2025',
    description: 'Awarded a small grant for academic research on Web2 and Web3 integration architectures.'
  },
  {
    title: 'Hackathon Winner - Smart Contracts',
    date: 'November 2024',
    description: 'Secured first place in a college-level hackathon for developing a secure Ethereum DApp prototype.'
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[var(--color-bg-primary)] relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <SectionHeading title="Achievements" subtitle="Awards, recognitions, and milestones." />
        
        <div className="mt-16 space-y-6">
          {ACHIEVEMENTS_DATA.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 md:p-8 rounded-2xl flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-[#D9C8A9]/20 flex items-center justify-center shrink-0 mt-1">
                <Trophy size={20} className="text-[#8c784f]" />
              </div>
              
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-sm font-bold text-[var(--color-highlight)] mt-1 sm:mt-0">{item.date}</span>
                </div>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
