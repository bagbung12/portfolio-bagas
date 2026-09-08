import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, ArrowRight, CheckCircle2, MapPin, Sparkles, UserCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ThreeCanvas from './ThreeCanvas';
import TiltCard from './TiltCard';

export default function Hero() {
  const { profile } = portfolioData;

  return (
    <section id="tentang" className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden min-h-[90vh] flex items-center bg-[#060a12] text-white">
      {/* 3D Pisces Zodiac Canvas Scene */}
      <ThreeCanvas />

      {/* Subtle Stitch Grids & Glow */}
      <div className="aurora-glow-cyan"></div>
      <div className="aurora-glow-indigo"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content - Stitch Style */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Index Header Tag */}
            <div className="flex items-center gap-2 mb-4 font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">01 //</span>
              <span>SYSTEM OVERVIEW &amp; IDENTITY</span>
            </div>

            {/* Status Pill - Stitch Style */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0a0f1d] border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 shadow-stitch-glow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-sm shadow-cyan-400/80"></span>
              </span>
              <span className="tracking-wide uppercase font-semibold">
                ● TERBUKA UNTUK KOLABORASI TEKNIS &amp; PERANAN JUNIOR
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
              Bagas Muhamad <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Febrian
              </span>
            </h1>

            {/* Subheading Roles */}
            <div className="flex flex-wrap items-center gap-2 mb-6 text-sm font-mono text-slate-300">
              {profile.subRoles.map((role, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-cyan-400 font-semibold">{role}</span>
                  {idx < profile.subRoles.length - 1 && <span className="text-slate-600">•</span>}
                </React.Fragment>
              ))}
              <span className="flex items-center gap-1 text-xs text-slate-400 ml-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 inline" /> {profile.location}
              </span>
            </div>

            {/* Bio Description */}
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl mb-8 font-sans">
              {profile.bio}
            </p>

            {/* CTA Buttons: View Projects, Download CV, GitHub */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#proyek"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs font-mono uppercase tracking-wider bg-cyan-500 text-slate-950 hover:bg-cyan-400 active:scale-95 transition-all shadow-lg shadow-cyan-500/25"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profile.cvPath}
                download
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs font-mono uppercase tracking-wider bg-[#0a0f1d] text-white border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 active:scale-95 transition-all shadow-md"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Right Content: Prominent Large Profile Photo Card with 3D Tilt */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <TiltCard className="w-80 h-[430px] sm:w-[360px] sm:h-[490px]">
              <div className="relative group w-full h-full">
                
                {/* 3D Cyan & Indigo Glow Halo */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500 via-sky-400 to-indigo-600 blur-2xl opacity-60 group-hover:opacity-90 transition duration-500"></div>

                {/* Main Photo Container */}
                <div className="relative w-full h-full rounded-2xl p-3 bg-[#090f1c] border border-slate-800 shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col justify-between">
                  
                  {/* Photo Header Tag */}
                  <div className="flex items-center justify-between px-2 py-1 mb-2 font-mono text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
                      <Sparkles className="w-3.5 h-3.5" /> BMF // PROFILE
                    </span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-[10px]">
                      VERIFIED
                    </span>
                  </div>

                  {/* Profile Photo Image */}
                  <div className="relative flex-1 rounded-xl overflow-hidden border border-slate-800/80">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-full h-full object-cover object-top filter saturate-[1.08] contrast-[1.05] group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Bottom Gradient Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060a12] via-[#060a12]/60 to-transparent"></div>
                  </div>

                  {/* Glass Info Overlay Badge */}
                  <div className="mt-3 p-3.5 rounded-xl bg-[#060a12]/90 backdrop-blur-xl border border-slate-800 flex items-center justify-between shadow-xl">
                    <div>
                      <p className="text-sm font-bold text-white flex items-center gap-1.5">
                        {profile.name}
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </p>
                      <p className="text-xs text-cyan-400 font-mono">Junior Develover &amp; Web Developer</p>
                      <p className="text-[11px] text-slate-400 mt-0.5 font-sans">Politeknik Piksi Ganesha Bandung</p>
                    </div>
                  </div>

                </div>

              </div>
            </TiltCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
