import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Trophy, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AchievementsPub() {
  const { achievements, publication } = portfolioData;

  return (
    <section id="pencapaian" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* Achievements Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="mb-6">
              <span className="text-xs font-mono font-semibold tracking-wider text-accentBlue uppercase mb-2 block">
                Rekam Jejak
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-textMain">
                Pencapaian Penting
              </h2>
            </div>

            <div className="space-y-4 flex-1 flex flex-col justify-between">
              {achievements.map((item, idx) => (
                <div
                  key={item.id}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-bgCard border border-borderDark hover:border-goldAccent/40 hover:translate-x-1 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-textMain mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-textMuted font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Publication Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="mb-6">
              <span className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-2 block">
                Karya Ilmiah
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-textMain">
                Publikasi Jurnal
              </h2>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-bgCard via-bgCard to-bgElevated border border-borderDark relative overflow-hidden flex-1 flex flex-col justify-between shadow-xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <BookOpen className="w-36 h-36 text-emerald-400" />
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{publication.status}</span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-textMain leading-snug mb-4">
                  "{publication.title}"
                </h3>
              </div>

              <div className="pt-6 border-t border-borderDark/60 flex items-center gap-3 text-xs font-mono text-textMuted">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>{publication.journal}</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
