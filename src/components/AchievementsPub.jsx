import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Award, CheckCircle2, UserCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function AchievementsPub() {
  const { achievements, publication } = portfolioData;

  const milestoneCards = [
    {
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      title: "Web Developer Intern",
      desc: "MMC Course • 3 Bulan Dedikasi (2024–2025)"
    },
    {
      icon: <Trophy className="w-5 h-5 text-emerald-400" />,
      title: "Full Course CMS Builder",
      desc: "Sistem Lengkap: Booking, CRUD, Upload, & Database"
    },
    {
      icon: <BookOpen className="w-5 h-5 text-indigo-400" />,
      title: "Academic Researcher",
      desc: "Publikasi Riset Internasional IJCT 2025"
    }
  ];

  return (
    <section id="pencapaian" className="py-20 relative z-10 bg-[#060a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
            <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">06 //</span>
            <span>RESEARCH &amp; MILESTONES</span>
          </div>
          <h2 className="font-display text-3xl font-bold text-white">
            Publikasi Ilmiah &amp; Rekapitulasi Prestasi
          </h2>
        </motion.div>

        {/* 3 Summary Milestone Cards - Stitch Screenshot 3 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {milestoneCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="p-6 rounded-2xl bg-[#090f1c] border border-slate-800 backdrop-blur-xl shadow-xl flex items-start gap-4 h-full">
                  <div className="p-3 rounded-xl bg-[#060a12] border border-slate-800 flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-white mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Detailed Scientific Publication Card - Stitch Screenshot 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TiltCard>
            <div className="p-8 sm:p-10 rounded-3xl bg-[#090f1c] border border-slate-800 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              
              {/* Badges Bar */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 uppercase tracking-wider">
                  ACCEPTED - 2025
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-300 bg-slate-800 border border-slate-700">
                  International Journal Computer Technology (IJCT)
                </span>
                <span className="text-xs font-mono text-slate-500">
                  Peer-Reviewed Paper
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-6">
                “The Impact of Digital Innovation on Improving Efficiency and Market Reach: A Case Study of MMC Private Tutoring in Adapting to the Web Era”
              </h3>

              {/* Abstract */}
              <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-4xl mb-8">
                Karya tulis ilmiah berbasis studi kasus empiris dari sistem web MMC Course yang dibangun. Menganalisis bagaimana digitalisasi operasional pendaftaran peserta dan pengelolaan jadwal kursus mampu mereduksi redundansi data serta memperluas jangkauan akuisisi siswa di era komputasi modern.
              </p>

              {/* Footer Metadata */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-cyan-400" />
                  <span>Author: <strong className="text-slate-200">Bagas Muhamad Febrian</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-400" />
                  <span>Index: <span className="text-slate-300">Computer Science &amp; Information Systems</span></span>
                </div>
              </div>

            </div>
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
}
