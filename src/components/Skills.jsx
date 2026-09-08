import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Layers, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Skills() {
  const { skills } = portfolioData;

  const getLevelBadge = (level) => {
    switch (level) {
      case 'ADVANCED':
        return {
          dotColor: 'bg-cyan-400 shadow-sm shadow-cyan-400',
          textColor: 'text-cyan-300',
          bg: 'bg-cyan-500/10 border-cyan-500/30',
        };
      case 'INTERMEDIATE':
        return {
          dotColor: 'bg-sky-400 shadow-sm shadow-sky-400',
          textColor: 'text-sky-300',
          bg: 'bg-sky-500/10 border-sky-500/30',
        };
      default:
        return {
          dotColor: 'bg-slate-400',
          textColor: 'text-slate-400',
          bg: 'bg-slate-500/10 border-slate-500/30',
        };
    }
  };

  return (
    <section id="skills" className="py-20 relative z-10 bg-[#060a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">03 //</span>
              <span>SKILLS &amp; TECH STACK MATRIX</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-white">
              Matriks Keahlian &amp; Perkakas
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-sans">
            Teknologi, bahasa pemrograman, serta perkakas yang saya kuasai dan gunakan dalam pengembangan sistem web.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="p-6 sm:p-8 rounded-2xl bg-[#090f1c] border border-slate-800 backdrop-blur-xl shadow-2xl h-full relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                    <div className="p-2.5 rounded-xl bg-[#060a12] border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                      {groupIdx === 0 ? <Layers className="w-5 h-5" /> : <Wrench className="w-5 h-5" />}
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {group.items.map((skill, skillIdx) => {
                      const style = getLevelBadge(skill.level);
                      return (
                        <motion.div
                          key={skillIdx}
                          whileHover={{ scale: 1.04, y: -2 }}
                          transition={{ type: 'spring', stiffness: 350 }}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#060a12] border border-slate-800 hover:border-cyan-500/50 transition-all cursor-default group/badge shadow-sm"
                        >
                          <span className={`w-2 h-2 rounded-full ${style.dotColor}`}></span>
                          <span className="text-sm font-semibold text-slate-200 group-hover/badge:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${style.bg} ${style.textColor}`}>
                            {skill.level}
                          </span>
                        </motion.div>
                      );
                    })}
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
