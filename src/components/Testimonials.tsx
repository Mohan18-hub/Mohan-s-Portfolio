import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Dr. Sarah Jenkins',
    role: 'Lead Data Scientist at TITAN Company',
    content: 'Mohan is an exceptional talent. His ability to preprocess complex datasets and derive actionable insights during his internship was remarkable. A true asset to any data team.',
    image: '/avatar-1.jpg'
  },
  {
    name: 'Rajesh Kumar',
    role: 'CTO, Samkhya.ai',
    content: 'His research on bridging Web2 and Web3 architectures using Quantum computing principles was outstanding. Mohan possesses a rare combination of deep technical skills and innovative thinking.',
    image: '/avatar-2.jpg'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading title="Testimonials" subtitle="What professionals say about my work." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-10 rounded-3xl relative"
            >
              <Quote size={40} className="text-[#D9C8A9]/30 absolute top-8 right-8" />
              
              <p className="text-lg text-[var(--color-accent)] font-medium italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#F8F5F0] overflow-hidden border-2 border-white shadow-sm flex items-center justify-center font-bold text-xl text-[var(--color-text-secondary)]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-accent)]">{testimonial.name}</h4>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
