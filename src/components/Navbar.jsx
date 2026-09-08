import React, { useState, useEffect } from 'react';
import { Download, Menu, X, User } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('tentang');

  const navItems = [
    { id: 'tentang', label: 'Tentang' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'proyek', label: 'Proyek Unggulan' },
    { id: 'pengalaman', label: 'Pengalaman & Edu' },
    { id: 'pencapaian', label: 'Publikasi' },
    { id: 'kontak', label: 'Kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#060a12]/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-2xl shadow-black/60' : 'bg-[#060a12]/60 backdrop-blur-md py-4 border-b border-slate-800/40'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo - Stitch Style */}
        <a 
          href="#tentang" 
          onClick={(e) => { e.preventDefault(); scrollToSection('tentang'); }}
          className="group flex flex-col"
        >
          <div className="font-display text-lg font-extrabold text-white tracking-tight flex items-center gap-1.5">
            <span className="text-cyan-400 font-mono">BMF //</span>
            <span>Bagas Febrian</span>
          </div>
          <span className="font-mono text-[10px] tracking-wider text-slate-400 font-medium uppercase">
            JUNIOR DEVELOPER 
          </span>
        </a>

        {/* Desktop Links - Stitch Style */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0a0f1d] border border-slate-800 p-1.5 rounded-2xl shadow-inner">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 ${
                activeSection === item.id 
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={portfolioData.profile.cvPath}
            download
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-slate-900 text-slate-200 border border-slate-700 hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-md"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span>Unduh CV</span>
          </a>

          <div className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 shadow-inner">
            <User className="w-4 h-4" />
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#060a12]/95 backdrop-blur-2xl border-b border-slate-800 px-6 py-6 shadow-2xl flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeSection === item.id 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={portfolioData.profile.cvPath}
            download
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/30"
          >
            <Download className="w-4 h-4" />
            <span>Unduh CV</span>
          </a>
        </div>
      )}
    </header>
  );
}
