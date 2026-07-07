import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { FileCode, Shield, Bot, Link } from 'lucide-react';

const TECH_DATA = [
  { name: 'Python', icon: <FileCode size={32} />, color: '#3776AB', col: 1, row: 1 },
  { name: 'C++', icon: <FileCode size={32} />, color: '#00599C', col: 3, row: 1 },
  { name: 'JavaScript', icon: <FileCode size={32} />, color: '#F7DF1E', col: 2, row: 2 },
  { name: 'Ethereum', icon: <Link size={32} />, color: '#3C3C3D', col: 4, row: 2 },
  { name: 'Solidity', icon: <FileCode size={32} />, color: '#363636', col: 1, row: 3 },
  { name: 'Machine Learning', icon: <Bot size={32} />, color: '#FF6F00', col: 3, row: 3 },
  { name: 'Cyber Security', icon: <Shield size={32} />, color: '#1E1E1E', col: 2, row: 4 },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading title="Tech Stack" subtitle="Technologies I specialize in." />
        
        <div className="relative h-[400px] mt-16 max-w-4xl mx-auto flex items-center justify-center flex-wrap gap-6 md:gap-12">
          {TECH_DATA.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                type: 'spring',
                bounce: 0.4
              }}
              whileHover={{ 
                scale: 1.15, 
                rotate: [-5, 5, -5, 0],
                transition: { duration: 0.3 }
              }}
              className="w-24 h-24 md:w-32 md:h-32 glass-card rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
            >
              <div style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <span className="text-xs md:text-sm font-bold text-[var(--color-accent)]">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
