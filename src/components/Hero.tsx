import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { NeuralNetwork3D } from './NeuralNetwork3D';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <NeuralNetwork3D />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for Internships & Roles
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E1E1E] to-[#6B6B6B]">
                Mohan Kumar B
              </span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-medium mb-8"
            >
              AI Engineer <span className="text-[#D9C8A9] px-2">|</span> Machine Learning Engineer <span className="text-[#D9C8A9] px-2">|</span> Data Scientist
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-[var(--color-text-secondary)] max-w-lg mb-10 leading-relaxed"
            >
              Enthusiastic and passionate engineer building secure, transparent, and scalable systems using Data Science, Machine Learning, and Blockchain technologies.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <a 
                href="#projects" 
                className="px-8 py-4 bg-[var(--color-accent)] text-white rounded-full font-medium flex items-center gap-2 hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="px-8 py-4 glass text-[var(--color-accent)] rounded-full font-medium flex items-center gap-2 hover:bg-white transition-all shadow-sm hover:shadow-md"
              >
                Download Resume <Download size={18} />
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center gap-6 mt-12"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-[#0077b5] transition-colors p-2 glass rounded-full" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-secondary)] hover:text-black transition-colors p-2 glass rounded-full" aria-label="GitHub">
                <Github size={22} />
              </a>
              <a href="mailto:mohan15vk@gmail.com" className="text-[var(--color-text-secondary)] hover:text-red-500 transition-colors p-2 glass rounded-full" aria-label="Email">
                <Mail size={22} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto lg:ml-auto lg:mr-0 w-full max-w-md aspect-[3/4]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D9C8A9]/30 to-transparent rounded-[2rem] transform rotate-3 scale-105 z-0"></div>
            <div className="absolute inset-0 glass-card rounded-[2rem] transform -rotate-2 z-0"></div>
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl z-10 bg-white">
              <img 
                src="/photo-placeholder.jpg" 
                alt="Mohan Kumar B" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
