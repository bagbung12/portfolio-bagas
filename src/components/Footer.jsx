import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-borderDark/80 bg-bgDark/60 py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-bgCard border border-borderDark flex items-center justify-center text-accentBlue">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <p className="font-display text-sm font-bold text-textMain">{profile.name}</p>
            <p className="text-xs text-textDim">&copy; {new Date().getFullYear()} • Web Developer</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-textMuted font-medium">
          <a href={`mailto:${profile.email}`} className="hover:text-accentBlue transition-colors">
            Email
          </a>
          <a href={profile.cvPath} download className="hover:text-accentBlue transition-colors">
            Download CV
          </a>
          <a href={profile.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accentBlue transition-colors">
            MMC Course Live
          </a>
        </div>

        {/* Scroll Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl bg-bgCard border border-borderDark text-textMuted hover:text-textMain hover:border-primaryBlue/50 transition-all hover:-translate-y-1 shadow-md"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
