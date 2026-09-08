import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout } from 'lucide-react';
import TiltCard from './TiltCard';

export default function About() {
  const highlights = [
    {
      code: "01_BACKEND",
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      title: "PHP & Web Development",
      description: "Berpengalaman membangun aplikasi web dinamis dengan arsitektur PHP murni & arsitektur berbasis modul."
    },
    {
      code: "02_DATABASE",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: "Database Management",
      description: "Mahir membuat perancangan relational database MySQL, relasi antar tabel, dan optimasi query."
    },
    {
      code: "03_MANAGEMENT",
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      title: "Admin Dashboard & CRUD",
      description: "Memiliki pengalaman langsung membuat dashboard kelola data pendaftaran, manajemen file, dan sistem booking."
    }
  ];

  return (
    <section id="tentang-detail" className="py-16 relative z-10 bg-[#060a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">02 //</span>
            <span>PROFILE BRIEF &amp; STRENGTHS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Dedikasi Rekayasa Web Berbasis Solusi Real
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
            >
              <TiltCard className="h-full">
                <div className="p-6 rounded-2xl bg-[#090f1c] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-xl h-full flex flex-col justify-between group shadow-xl">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#060a12] border border-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/50 transition-transform">
                        {item.icon}
                      </div>
                      <span className="font-mono text-[10px] text-slate-500 tracking-wider">
                        {item.code}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
