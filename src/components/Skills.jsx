import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const getLevelBadge = (level) => {
    switch (level) {
      case 'ADVANCED':
        return {
          dotColor: 'bg-primaryBlue shadow-sm shadow-primaryBlue',
          textColor: 'text-accentBlue',
          bg: 'bg-primaryBlue/10 border-primaryBlue/20',
        };
      case 'INTERMEDIATE':
        return {
          dotColor: 'bg-sky-400',
          textColor: 'text-sky-300',
          bg: 'bg-sky-500/10 border-sky-500/20',
        };
      default:
        return {
          dotColor: 'bg-slate-400',
          textColor: 'text-slate-400',
          bg: 'bg-slate-500/10 border-slate-500/20',
        };
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider text-accentBlue uppercase mb-2 block">
              Keahlian &amp; Perkakas
            </span>
            <h2 className="font-display text-3xl font-bold text-textMain">
              Skills &amp; Tech Stack
            </h2>
          </div>
          <p className="text-sm text-textMuted max-w-md">
            Teknologi, bahasa pemrograman, serta perkakas yang saya kuasai dan gunakan dalam pengembangan web modern.
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
              className="p-6 sm:p-8 rounded-2xl bg-bgCard border border-borderDark shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-borderDark/60">
                <div className="p-2.5 rounded-xl bg-bgElevated border border-borderDark text-accentBlue">
                  {groupIdx === 0 ? <Layers className="w-5 h-5" /> : <Wrench className="w-5 h-5" />}
                </div>
                <h3 className="font-display text-lg font-bold text-textMain">
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
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-bgElevated border border-borderDark hover:border-primaryBlue/50 transition-all cursor-default group"
                    >
                      <span className={`w-2 h-2 rounded-full ${style.dotColor}`}></span>
                      <span className="text-sm font-semibold text-textMain group-hover:text-accentBlue transition-colors">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${style.bg} ${style.textColor}`}>
                        {skill.level}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
