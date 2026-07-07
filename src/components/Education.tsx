import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { GraduationCap } from 'lucide-react';

const EDUCATION_DATA = [
  {
    degree: 'Bachelor of Engineering (B.E.) in Computer Science',
    institution: 'SNS College of Engineering',
    duration: '09/2024 – 2028',
    details: 'Specialization: IoT and Cyber Security including Blockchain Technology'
  },
  {
    degree: 'Senior Secondary Education (XII)',
    institution: 'Sri Saraswathi Vidyalaya Matric Hr. Sec. School',
    duration: '03/2024',
    details: 'Score: 89%'
  },
  {
    degree: 'Secondary Education (X)',
    institution: 'Sri Saraswathi Vidyalaya Matric Hr. Sec. School',
    duration: '05/2022',
    details: 'Score: 94%'
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 relative bg-[var(--color-bg-primary)]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <SectionHeading title="Education" subtitle="My academic background and qualifications." />
        
        <div className="mt-16 space-y-8">
          {EDUCATION_DATA.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 md:p-10 rounded-2xl flex flex-col md:flex-row gap-6 items-start md:items-center hover:-translate-y-1 transition-transform"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F8F5F0] flex items-center justify-center shrink-0 border border-black/5">
                <GraduationCap size={28} className="text-[var(--color-accent)]" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-2xl font-bold">{edu.degree}</h3>
                  <span className="text-sm font-medium px-4 py-1.5 bg-[var(--color-highlight)]/20 text-[#8c784f] rounded-full mt-2 md:mt-0 inline-block w-fit">
                    {edu.duration}
                  </span>
                </div>
                <h4 className="text-[var(--color-text-secondary)] text-lg mb-3">{edu.institution}</h4>
                <p className="text-sm text-[var(--color-accent)] font-medium bg-black/5 px-4 py-2 rounded-lg inline-block">
                  {edu.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
