import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    title: 'The Future of AI: Integrating LLMs with Web3',
    date: 'February 15, 2026',
    category: 'Artificial Intelligence',
    readTime: '6 min read',
    image: '/blog-1.jpg',
    excerpt: 'Exploring how large language models can interact securely with smart contracts to enable new decentralized paradigms.'
  },
  {
    title: 'Optimizing Machine Learning Pipelines in Python',
    date: 'January 28, 2026',
    category: 'Machine Learning',
    readTime: '8 min read',
    image: '/blog-2.jpg',
    excerpt: 'A deep dive into advanced data preprocessing techniques and model evaluation strategies using Scikit-Learn and Pandas.'
  },
  {
    title: 'Understanding Ethereum Smart Contracts',
    date: 'December 10, 2025',
    category: 'Blockchain',
    readTime: '5 min read',
    image: '/blog-3.jpg',
    excerpt: 'A beginner-friendly guide to understanding the architecture of EVM, Solidity, and deploying your first DApp.'
  }
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-[var(--color-bg-primary)] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeading title="Latest Insights" subtitle="Thoughts, tutorials, and research findings." />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {BLOG_POSTS.map((post, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border border-black/5 flex flex-col"
            >
              <div className="h-48 bg-[#EAE5D9] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                {/* Fallback image placeholder */}
                <div className="w-full h-full flex items-center justify-center text-[#D9C8A9] font-bold text-4xl transform group-hover:scale-110 transition-transform duration-500">
                  {post.category.charAt(0)}
                </div>
                
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[var(--color-accent)] text-xs font-bold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-wider mb-4">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--color-highlight)]"></span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--color-highlight)] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm font-bold mt-auto group-hover:text-[var(--color-highlight)] transition-colors">
                  Read Article <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
