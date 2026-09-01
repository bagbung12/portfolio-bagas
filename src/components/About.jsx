import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Sparkles, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-5 h-5 text-accentBlue" />,
      title: "PHP & Web Development",
      description: "Berpengalaman membangun aplikasi web dinamis dengan arsitektur PHP murni & arsitektur berbasis modul."
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: "Database Management",
      description: "Mahir membuat perancangan relational database MySQL, relasi antar tabel, dan optimasi query."
    },
    {
      icon: <Layout className="w-5 h-5 text-purple-400" />,
      title: "Admin Dashboard & CRUD",
      description: "Memiliki pengalaman langsung membuat dashboard kelola data pendaftaran, manajemen file, dan sistem booking."
    }
  ];

  return (
    <section id="tentang-detail" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-mono font-semibold tracking-wider text-accentBlue uppercase mb-2 block">
            Tentang Saya
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-textMain">
            Dedikasi Pengembangan Web Berbasis Solusi Real
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-bgCard/80 border border-borderDark hover:border-borderSoft hover:bg-bgCardHover transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-bgElevated border border-borderDark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-textMain mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-textMuted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
