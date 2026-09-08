import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, UserCheck, Database, FileUp, LayoutDashboard, Server, Maximize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Projects({ onOpenModal }) {
  const { projects } = portfolioData;

  const featureIcons = {
    Calendar: <Calendar className="w-4 h-4 text-cyan-400" />,
    UserCheck: <UserCheck className="w-4 h-4 text-emerald-400" />,
    Database: <Database className="w-4 h-4 text-amber-400" />,
    FileUpload: <FileUp className="w-4 h-4 text-purple-400" />,
    LayoutDashboard: <LayoutDashboard className="w-4 h-4 text-cyan-400" />,
    Server: <Server className="w-4 h-4 text-sky-400" />
  };

  return (
    <section id="proyek" className="py-20 relative z-10 bg-[#060a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <div className="flex items-center gap-2 mb-2 font-mono text-xs text-cyan-400 font-semibold uppercase tracking-wider">
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30">04 //</span>
              <span>FEATURED PROJECTS &amp; SYSTEMS</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-white">
              Arsip Proyek Unggulan
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-sans">
            Sistem web nyata yang dibangun dan telah mengudara (live) untuk kebutuhan operasional MMC Course.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TiltCard>
                <div className="p-6 sm:p-10 rounded-3xl bg-[#090f1c] border border-slate-800 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                  
                  {/* Top Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>{project.badge}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base text-slate-300 leading-relaxed max-w-3xl mb-8 font-sans">
                    {project.description}
                  </p>

                  {/* Features Grid */}
                  <div className="mb-10">
                    <h4 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-4">
                      FITUR UTAMA SISTEM
                    </h4>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {project.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3.5 rounded-xl bg-[#060a12] border border-slate-800 hover:border-cyan-500/40 transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-[#090f1c] border border-slate-800">
                            {featureIcons[feat.icon] || <Database className="w-4 h-4 text-cyan-400" />}
                          </div>
                          <span className="text-sm font-semibold text-slate-200">{feat.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Screenshots Gallery */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                        TAMPILAN ANTARMUKA (KLIK UNTUK PERBESAR)
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {project.screenshots.map((ss) => (
                        <motion.div
                          key={ss.id}
                          whileHover={{ scale: 1.03, y: -3 }}
                          transition={{ duration: 0.2 }}
                          onClick={() => onOpenModal(ss.src, ss.title)}
                          className={`group relative rounded-xl overflow-hidden border border-slate-800 cursor-pointer bg-[#060a12] ${
                            ss.wide ? 'sm:col-span-2 lg:col-span-2 aspect-[16/9]' : 'aspect-[16/10]'
                          }`}
                        >
                          <img
                            src={ss.src}
                            alt={ss.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                          
                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#060a12]/90 via-[#060a12]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <div className="flex items-center justify-between text-white">
                              <span className="text-xs font-semibold">{ss.title}</span>
                              <Maximize2 className="w-4 h-4 text-cyan-400" />
                            </div>
                          </div>

                          {/* Default Tag */}
                          <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-[#060a12]/90 backdrop-blur-md text-[11px] font-mono font-medium text-slate-300 border border-slate-800 group-hover:opacity-0 transition-opacity">
                            {ss.name}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-2 mb-8 pt-6 border-t border-slate-800">
                    <span className="text-xs font-mono text-slate-400 mr-2">TECH STACK:</span>
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-[#060a12] border border-slate-800 text-xs font-mono text-cyan-300 hover:border-cyan-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-cyan-500 text-slate-950 hover:bg-cyan-400 active:scale-95 transition-all shadow-lg shadow-cyan-500/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Kunjungi Live Demo</span>
                    </a>

                    {project.githubUrl && project.githubUrl !== '#' && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-[#060a12] text-slate-200 border border-slate-800 hover:border-cyan-500/50 transition-all"
                      >
                        <Github className="w-4 h-4" />
                        <span>Repository GitHub</span>
                      </a>
                    )}
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
