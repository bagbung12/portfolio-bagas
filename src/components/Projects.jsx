import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, UserCheck, Database, FileUp, LayoutDashboard, Server, Eye, Maximize2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onOpenModal }) {
  const { projects } = portfolioData;

  const featureIcons = {
    Calendar: <Calendar className="w-4 h-4 text-accentBlue" />,
    UserCheck: <UserCheck className="w-4 h-4 text-emerald-400" />,
    Database: <Database className="w-4 h-4 text-amber-400" />,
    FileUpload: <FileUp className="w-4 h-4 text-purple-400" />,
    LayoutDashboard: <LayoutDashboard className="w-4 h-4 text-sky-400" />,
    Server: <Server className="w-4 h-4 text-indigo-400" />
  };

  return (
    <section id="proyek" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-xs font-mono font-semibold tracking-wider text-accentBlue uppercase mb-2 block">
              Portofolio Karya
            </span>
            <h2 className="font-display text-3xl font-bold text-textMain">
              Proyek Unggulan
            </h2>
          </div>
          <p className="text-sm text-textMuted max-w-md">
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
              className="p-6 sm:p-10 rounded-3xl bg-bgCard border border-borderDark shadow-2xl relative overflow-hidden"
            >
              {/* Top Header Row */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-textMain tracking-tight">
                  {project.title}
                </h3>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{project.badge}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-textMuted leading-relaxed max-w-3xl mb-8">
                {project.description}
              </p>

              {/* Features Grid */}
              <div className="mb-10">
                <h4 className="text-xs font-mono font-semibold text-textDim uppercase tracking-wider mb-4">
                  Fitur Utama Sistem
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-bgElevated border border-borderDark/80 hover:border-primaryBlue/40 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-bgCard border border-borderDark">
                        {featureIcons[feat.icon] || <Database className="w-4 h-4 text-accentBlue" />}
                      </div>
                      <span className="text-sm font-semibold text-textMain">{feat.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Screenshots Gallery */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xs font-mono font-semibold text-textDim uppercase tracking-wider">
                    Tampilan Antarmuka (Klik untuk Perbesar)
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.screenshots.map((ss) => (
                    <motion.div
                      key={ss.id}
                      whileHover={{ scale: 1.02, y: -3 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => onOpenModal(ss.src, ss.title)}
                      className={`group relative rounded-xl overflow-hidden border border-borderDark cursor-pointer bg-bgElevated ${
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
                      <div className="absolute inset-0 bg-gradient-to-t from-bgDark/90 via-bgDark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <div className="flex items-center justify-between text-white">
                          <span className="text-xs font-semibold">{ss.title}</span>
                          <Maximize2 className="w-4 h-4 text-accentBlue" />
                        </div>
                      </div>

                      {/* Default Tag */}
                      <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-bgDark/80 backdrop-blur-md text-[11px] font-medium text-textMain border border-white/10 group-hover:opacity-0 transition-opacity">
                        {ss.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-2 mb-8 pt-6 border-t border-borderDark/60">
                <span className="text-xs font-mono text-textDim mr-2">Tech Stack:</span>
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-bgElevated border border-borderDark text-xs font-mono text-textMuted hover:text-accentBlue hover:border-primaryBlue/40 transition-colors"
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-primaryBlue text-white hover:bg-blue-600 active:scale-95 transition-all shadow-lg shadow-primaryBlue/25"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Kunjungi Live Demo</span>
                </a>

                {project.githubUrl && project.githubUrl !== '#' && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-bgElevated text-textMain border border-borderDark hover:border-primaryBlue/50 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repository GitHub</span>
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
