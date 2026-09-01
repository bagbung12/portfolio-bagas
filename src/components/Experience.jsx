import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="pengalaman" className="py-16 relative">
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
            Pengalaman Kerja
          </span>
          <h2 className="font-display text-3xl font-bold text-textMain">
            Pengalaman &amp; Internship
          </h2>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-bgCard border border-borderDark hover:border-borderSoft transition-all duration-300 shadow-xl overflow-hidden group"
            >
              {/* Left Accent Bar */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-primaryBlue to-accentBlue"></div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-xl font-bold text-textMain">
                      {exp.company}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primaryBlue/15 text-accentBlue border border-primaryBlue/30">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-textMuted flex items-center gap-2">
                    <span className="text-white">{exp.role}</span> • <Calendar className="w-3.5 h-3.5 text-textDim" /> <span>{exp.period}</span>
                  </p>
                </div>

                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-accentBlue hover:text-white px-4 py-2 rounded-xl bg-bgElevated border border-borderDark hover:border-primaryBlue/50 transition-all self-start md:self-auto"
                  >
                    <span>Kunjungi Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Highlights List */}
              <ul className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-borderDark/60">
                {exp.highlights.map((point, pointIdx) => (
                  <li key={pointIdx} className="flex items-start gap-2.5 text-sm text-textMuted leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-primaryBlue mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
