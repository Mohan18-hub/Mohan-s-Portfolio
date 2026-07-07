import { useState, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { SectionHeading } from './SectionHeading';

const STATS = [
  { label: 'Projects', value: 12, suffix: '+' },
  { label: 'Internships', value: 3, suffix: '' },
  { label: 'Certifications', value: 5, suffix: '+' },
  { label: 'Technologies', value: 15, suffix: '+' },
  { label: 'Research Papers', value: 2, suffix: '' },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = value / (duration / 16); // 60 FPS
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold font-heading text-[var(--color-accent)]">
      {count}{suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section className="py-16 bg-[var(--color-highlight)]/10 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {STATS.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 glass rounded-2xl"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-sm font-medium text-[var(--color-text-secondary)] mt-2 uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
