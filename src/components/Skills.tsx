import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Terminal, Cpu, Database, Blocks } from 'lucide-react';

const SKILLS_DATA = [
  {
    category: 'Programming Languages',
    icon: <Terminal size={20} />,
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C++', level: 85 },
      { name: 'C', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 90 },
    ]
  },
  {
    category: 'AI & Machine Learning',
    icon: <Cpu size={20} />,
    skills: [
      { name: 'Data Preprocessing', level: 95 },
      { name: 'Prediction Models', level: 90 },
      { name: 'Data Analysis', level: 85 },
    ]
  },
  {
    category: 'Blockchain & Web3',
    icon: <Blocks size={20} />,
    skills: [
      { name: 'Ethereum', level: 75 },
      { name: 'Smart Contracts (Solidity)', level: 70 },
      { name: 'DApps', level: 65 },
    ]
  },
  {
    category: 'Tools & Technologies',
    icon: <Database size={20} />,
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Microsoft Excel', level: 95 },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {SKILLS_DATA.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-black/5">
                <div className="p-2 bg-[#F8F5F0] rounded-lg text-[var(--color-accent)]">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold">{group.category}</h3>
              </div>
              
              <div className="space-y-6">
                {group.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-[var(--color-text-secondary)] font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#F8F5F0] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                        className="h-full bg-[var(--color-accent)] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
