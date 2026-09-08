import React from 'react';
import { Mail, Download, ArrowUp, Code2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id) => {
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
    <footer className="border-t border-slate-800/80 bg-[#060a12] text-white py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main 3 Column Footer Layout - Stitch Screenshot 1 */}
        <div className="grid lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: System Info & Status */}
          <div className="lg:col-span-5 space-y-4">
            <div className="font-display text-lg font-extrabold text-white tracking-tight flex items-center gap-2">
              <span className="text-cyan-400 font-mono">BMF //</span>
              <span>Portfolio System</span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-md">
              Arsitektur portofolio digital teknik Bagas Muhamad Febrian. Berfokus pada rekayasa web modern, performa tinggi, dan ketertarikan mendalam dalam ekosistem sistem informasi serta komputasi awan.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a0f1d] border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>TERBUKA UNTUK KOLABORASI TEKNIS &amp; PERANAN JUNIOR</span>
            </div>
          </div>

          {/* Column 2: Navigation Index */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4">
              INDEKS NAVIGASI
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-slate-300">
              <li>
                <button onClick={() => scrollToSection('tentang')} className="hover:text-cyan-400 transition-colors">
                  Tentang Pengembang
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('skills')} className="hover:text-cyan-400 transition-colors">
                  Matriks Keahlian &amp; Tech Stack
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('proyek')} className="hover:text-cyan-400 transition-colors">
                  Arsip Proyek Unggulan
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pengalaman')} className="hover:text-cyan-400 transition-colors">
                  Riwayat Karir &amp; Edukasi
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pencapaian')} className="hover:text-cyan-400 transition-colors">
                  Publikasi &amp; Catatan Teknis
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Recruiter Quick Hub */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              RECRUITER QUICK HUB
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Butuh respon cepat atau penjadwalan wawancara teknis? Akses tautan langsung:
            </p>

            <div className="space-y-2.5">
              <button
                onClick={() => scrollToSection('kontak')}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-semibold bg-[#0a0f1d] text-slate-200 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Hubungi via Formulir Kontak</span>
              </button>

              <a
                href={profile.cvPath}
                download
                className="w-full py-2.5 px-4 rounded-xl text-xs font-mono font-semibold bg-[#0a0f1d] text-slate-200 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-all flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Unduh Resume Lengkap (.PDF)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Bagas Muhamad Febrian • Built with React JS &amp; Vite
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-[#090f1c] border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-400 transition-all shadow-md flex items-center gap-1.5"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
