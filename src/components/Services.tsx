import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Bot, LineChart, Binary, Eye, BarChart3, Settings, Layout, Sparkles, TrendingUp } from 'lucide-react';

const SERVICES_DATA = [
  { icon: <Bot size={24} />, title: 'AI Development', description: 'End-to-end artificial intelligence solutions customized for enterprise needs.' },
  { icon: <LineChart size={24} />, title: 'Machine Learning Models', description: 'Building, training, and deploying robust ML models for real-world applications.' },
  { icon: <Binary size={24} />, title: 'Deep Learning', description: 'Advanced neural network architectures for complex problem solving.' },
  { icon: <Eye size={24} />, title: 'Computer Vision', description: 'Image and video analysis models for object detection and recognition.' },
  { icon: <BarChart3 size={24} />, title: 'Data Analytics', description: 'Extracting meaningful insights and visualizing massive datasets.' },
  { icon: <Settings size={24} />, title: 'Python Automation', description: 'Streamlining workflows and tasks through intelligent Python scripting.' },
  { icon: <Layout size={24} />, title: 'Web Development', description: 'Full-stack development of modern, responsive, and secure web applications.' },
  { icon: <Sparkles size={24} />, title: 'Generative AI', description: 'Implementing cutting-edge LLMs and content generation systems.' },
  { icon: <TrendingUp size={24} />, title: 'Predictive Analytics', description: 'Forecasting future trends using historical data and statistical algorithms.' },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--color-bg-primary)] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading title="My Services" subtitle="Specialized solutions I offer to help your business grow." />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {SERVICES_DATA.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-black/5 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-[var(--color-accent)] mb-6 shadow-sm border border-black/5 group-hover:scale-110 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
