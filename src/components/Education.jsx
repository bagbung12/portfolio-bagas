import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, CheckCircle2, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Education() {
  const { experiences, education } = portfolioData;

  return (
    <section id="pengalaman" className="py-20 relative z-10 bg-[#060a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Index Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">05 //</span>
            <span>CAREER TIMELINE &amp; EDUCATION</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-white">
            Riwayat Pengalaman &amp; Latar Belakang Akademis
          </h2>
        </motion.div>

        {/* Two Columns Layout: Experience & Education */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Column 1: Pengalaman Profesional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-6 text-lg font-bold text-white font-display">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <h3>Pengalaman Profesional</h3>
            </div>

            {experiences.map((exp, idx) => (
              <TiltCard key={idx} className="flex-1">
                <div className="p-6 sm:p-8 rounded-2xl bg-[#090f1c] border border-slate-800 backdrop-blur-xl shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
                  
                  <div>
                    {/* Header Row */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h4 className="font-display text-xl font-bold text-white mb-1">
                          {exp.role}
                        </h4>
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                          <span>{exp.company}</span>
                          <span>•</span>
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                            mmccourse.my.id <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>

                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                        {exp.period} • INTERNSHIP • 3 BULAN
                      </span>
                    </div>

                    {/* Highlights Bullet List */}
                    <ul className="space-y-3 mt-6 pt-6 border-t border-slate-800">
                      {exp.highlights.map((point, pointIdx) => (
                        <li key={pointIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed font-sans">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </TiltCard>
            ))}
          </motion.div>

          {/* Column 2: Pendidikan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-6 text-lg font-bold text-white font-display">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <h3>Pendidikan</h3>
            </div>

            <div className="space-y-6 flex-1 flex flex-col justify-between">
              {/* College */}
              <TiltCard>
                <div className="p-6 rounded-2xl bg-[#090f1c] border border-slate-800 backdrop-blur-xl shadow-xl">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      2021 — 2025
                    </span>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                      DIKTI TERAKREDITASI
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-white mb-1">
                    Politeknik Piksi Ganesha Bandung
                  </h4>
                  <p className="text-sm font-semibold text-cyan-300 mb-3 font-mono">
                    D3 / Sarjana Terapan: Manajemen Sistem Informasi
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Fokus studi meliputi perancangan database relasional, analisis proses bisnis, algoritma pemrograman, dan rekayasa perangkat lunak web enterprise.
                  </p>
                </div>
              </TiltCard>

              {/* Vocational School */}
              <TiltCard>
                <div className="p-6 rounded-2xl bg-[#090f1c] border border-slate-800 backdrop-blur-xl shadow-xl">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-800 text-slate-400 border border-slate-700">
                      2018 — 2020
                    </span>
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                      SMK NEGERI
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-white mb-1">
                    SMKN 3 Baleendah
                  </h4>
                  <p className="text-sm text-slate-300 font-mono">
                    Agribisnis Tanaman Pangan &amp; Hortikultura
                  </p>
                </div>
              </TiltCard>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
