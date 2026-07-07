import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading title="Get In Touch" subtitle="Have a project in mind or want to explore opportunities? Let's talk." />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mt-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
            <p className="text-[var(--color-text-secondary)] mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F8F5F0] flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:mohan15vk@gmail.com" className="text-lg font-medium hover:text-[var(--color-highlight)] transition-colors">
                    mohan15vk@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F8F5F0] flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Phone</h4>
                  <a href="tel:+919488107502" className="text-lg font-medium hover:text-[var(--color-highlight)] transition-colors">
                    +91 94881 07502
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F8F5F0] flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-text-secondary)] uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-lg font-medium">
                    Krishnagiri, Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 glass-card p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium ml-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 rounded-xl bg-white/50 border border-black/10 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium ml-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 rounded-xl bg-white/50 border border-black/10 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="How can I help you?"
                  className="w-full px-5 py-4 rounded-xl bg-white/50 border border-black/10 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-5 py-4 rounded-xl bg-white/50 border border-black/10 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-[var(--color-accent)] text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-black transition-colors"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
