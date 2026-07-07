import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Brain, Database, ShieldCheck, Zap } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: <Brain size={24} />,
    title: 'AI & Machine Learning',
    description: 'Developing predictive models and analyzing data using modern ML techniques.'
  },
  {
    icon: <Database size={24} />,
    title: 'Data Science',
    description: 'Transforming raw data into actionable insights and trend forecasts.'
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Blockchain & Web3',
    description: 'Building secure, transparent, and scalable decentralized applications.'
  },
  {
    icon: <Zap size={24} />,
    title: 'IoT & Cyber Security',
    description: 'Integrating secure protocols in connected devices and systems.'
  }
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading title="About Me" subtitle="A brief introduction to who I am and what I do." />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 prose prose-lg text-[var(--color-text-secondary)]"
          >
            <p className="text-xl leading-relaxed text-[var(--color-accent)] font-medium mb-6">
              I am an enthusiastic engineer specializing in Data Science, Machine Learning, and Blockchain technology.
            </p>
            <p className="mb-6">
              Currently pursuing my B.E. in Computer Science and Engineering with a specialization in IoT and Cyber Security at SNS College of Engineering. My academic journey has been fueled by a profound passion for emerging technologies.
            </p>
            <p className="mb-8">
              I am actively learning Ethereum smart contract development using Solidity to explore the vast potential of decentralized applications (DApps). My ultimate goal is to architect and build secure, transparent, and highly scalable systems that solve real-world problems.
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-xl font-medium hover:bg-black transition-colors"
            >
              Let's Connect
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {HIGHLIGHTS.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#F8F5F0] flex items-center justify-center text-[#1E1E1E] mb-6 shadow-sm border border-black/5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
