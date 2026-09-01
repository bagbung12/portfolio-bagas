import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Download, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { profile } = portfolioData;

  return (
    <section id="tentang" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Glow Effects */}
      <div className="aurora-glow-1"></div>
      <div className="aurora-glow-2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-bgCard border border-borderDark text-xs font-mono text-softBlue mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-sm shadow-emerald-500/50"></span>
              </span>
              <span>{profile.statusText}</span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-textMain leading-[1.1] mb-4">
              Bagas Muhamad <br />
              <span className="bg-gradient-to-r from-white via-softBlue to-primaryBlue bg-clip-text text-transparent">
                Febrian
              </span>
            </h1>

            {/* Roles / Subheading */}
            <div className="flex flex-wrap items-center gap-2 mb-6 text-sm font-medium text-textMuted">
              {profile.subRoles.map((role, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-accentBlue font-semibold">{role}</span>
                  {idx < profile.subRoles.length - 1 && <span className="text-borderSoft">•</span>}
                </React.Fragment>
              ))}
              <span className="flex items-center gap-1 text-xs text-textDim ml-1">
                <MapPin className="w-3.5 h-3.5 text-primaryBlue inline" /> {profile.location}
              </span>
            </div>

            {/* Bio Description */}
            <p className="text-base text-textMuted leading-relaxed max-w-xl mb-8">
              {profile.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={`mailto:${profile.email}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-primaryBlue text-white hover:bg-blue-600 active:scale-95 transition-all shadow-lg shadow-primaryBlue/30 hover:shadow-primaryBlue/50"
              >
                <Mail className="w-4 h-4" />
                <span>Hubungi Saya</span>
              </a>

              <a
                href={profile.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-bgCard text-textMain border border-borderDark hover:border-primaryBlue hover:text-accentBlue active:scale-95 transition-all shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Lihat Live Demo</span>
              </a>

              <a
                href={profile.cvPath}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-textMuted hover:text-textMain bg-white/5 hover:bg-white/10 border border-white/5 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* Avatar Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-5 flex justify-center md:justify-end"
          >
            <div className="relative group">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-primaryBlue/40 via-accentBlue/30 to-purple-500/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>

              {/* Card Outer Container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl p-2.5 bg-bgCard border border-borderSoft/80 shadow-2xl overflow-hidden">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-full h-full object-cover object-top rounded-xl filter saturate-[1.05] contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                />

                {/* Glass Tag Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-bgDark/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-textMain">{profile.name}</p>
                    <p className="text-[11px] text-textDim">Web Developer</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
