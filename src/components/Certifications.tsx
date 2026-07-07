import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Award } from 'lucide-react';

const CERTIFICATIONS_DATA = [
  {
    title: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: 'Oct 27, 2025'
  },
  {
    title: 'Oracle OCI 2025 Certified Data Science Professional',
    issuer: 'Oracle University',
    date: 'Oct 24, 2025'
  },
  {
    title: 'Web3 and Ethereum',
    issuer: 'Certification',
    date: 'Jun 2025'
  },
  {
    title: 'Machine Learning Fundamentals',
    issuer: 'Certification',
    date: 'Mar 2025'
  },
  {
    title: 'JavaScript Fundamentals',
    issuer: 'Certification',
    date: 'Feb 2025'
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-[var(--color-bg-primary)] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading title="Certifications" subtitle="Continuous learning and professional accreditations." />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-black/5 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[var(--color-highlight)]/20 flex items-center justify-center text-[#8c784f] mb-6">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 leading-snug">{cert.title}</h3>
                <p className="text-[var(--color-text-secondary)] font-medium text-sm">{cert.issuer}</p>
              </div>
              <div className="mt-6 pt-6 border-t border-black/5 flex justify-between items-center text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">
                <span>Issued</span>
                <span>{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
