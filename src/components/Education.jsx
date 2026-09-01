import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="pendidikan" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="text-xs font-mono font-semibold tracking-wider text-accentBlue uppercase mb-2 block">
            Riwayat Belajar
          </span>
          <h2 className="font-display text-3xl font-bold text-textMain">
            Pendidikan Formal
          </h2>
        </motion.div>

        {/* Education Timeline Cards */}
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-bgCard border border-borderDark hover:border-borderSoft transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-bgElevated border border-borderDark text-accentBlue flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-textMain mb-1">
                    {edu.school}
                  </h3>
                  <p className="text-sm text-textMuted font-medium">
                    {edu.major}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bgElevated border border-borderDark text-xs font-mono text-textDim self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-accentBlue" />
                <span>{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
