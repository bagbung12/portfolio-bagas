import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'tentang', label: 'Profil' },
    { id: 'skills', label: 'Skills' },
    { id: 'pengalaman', label: 'Pengalaman' },
    { id: 'proyek', label: 'Proyek' },
    { id: 'pendidikan', label: 'Pendidikan' },
    { id: 'kontak', label: 'Kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scrollSpy
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
      isScrolled ? 'bg-bgDark/80 backdrop-blur-xl border-b border-borderDark py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="#tentang" 
          onClick={(e) => { e.preventDefault(); scrollToSection('tentang'); }}
          className="group flex items-center gap-2 font-display text-lg font-bold text-textMain tracking-tight"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primaryBlue to-accentBlue flex items-center justify-center text-white shadow-md shadow-primaryBlue/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <span>Bagas<span className="text-primaryBlue">.dev</span></span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-bgCard/60 backdrop-blur-md border border-borderDark/60 p-1.5 rounded-full shadow-inner">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 ${
                activeSection === item.id 
                  ? 'bg-primaryBlue text-white shadow-md shadow-primaryBlue/30' 
                  : 'text-textMuted hover:text-textMain hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <a
            href={portfolioData.profile.cvPath}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-primaryBlue text-white hover:bg-blue-600 active:scale-95 transition-all shadow-md shadow-primaryBlue/25 hover:shadow-primaryBlue/40"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-bgCard border border-borderDark text-textMuted hover:text-textMain transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bgDark/95 backdrop-blur-2xl border-b border-borderDark px-6 py-6 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeSection === item.id 
                  ? 'bg-primaryBlue/15 text-accentBlue border border-primaryBlue/30 font-semibold' 
                  : 'text-textMuted hover:text-textMain hover:bg-bgCard'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={portfolioData.profile.cvPath}
            download
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-primaryBlue text-white hover:bg-blue-600 transition-all shadow-lg shadow-primaryBlue/30"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>
      )}
    </header>
  );
}
