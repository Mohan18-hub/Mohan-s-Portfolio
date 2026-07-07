import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--color-bg-primary)] py-12 border-t border-black/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <a href="#" className="text-2xl font-bold tracking-tighter block mb-2">
            Mohan<span className="text-[var(--color-highlight)]">.</span>
          </a>
          <p className="text-[var(--color-text-secondary)] text-sm">
            &copy; {new Date().getFullYear()} Mohan Kumar B. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-medium text-[var(--color-text-secondary)]">
          <a href="#about" className="hover:text-[var(--color-accent)] transition-colors">About</a>
          <a href="#projects" className="hover:text-[var(--color-accent)] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[var(--color-accent)] transition-colors">Contact</a>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="text-[var(--color-accent)]" />
        </button>
        
      </div>
    </footer>
  );
}
