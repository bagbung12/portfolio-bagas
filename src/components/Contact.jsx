import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Contact() {
  const { profile } = portfolioData;
  const [copiedItem, setCopiedItem] = useState(null);
  const [formState, setFormState] = useState({ name: '', subject: '', message: '' });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(formState.subject || 'Undangan Diskusi Web Developer')}&body=${encodeURIComponent(`Nama / Instansi: ${formState.name}\n\nPesan:\n${formState.message}`)}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section id="kontak" className="py-20 relative z-10 bg-[#060a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Two Column Stitch Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column - Headline & Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col justify-between h-full"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>FAST RESPONSE</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                Mari Berkolaborasi atau Rekrut Saya
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed font-sans mb-8 max-w-xl">
                Saya siap untuk peranan <strong className="text-white">Junior Web Developer</strong>, <strong className="text-white">Backend PHP</strong>, <strong className="text-white">Database Administrator</strong>, ataupun program IT Internship. Hubungi langsung melalui kontak resmi di bawah ini:
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {/* Email */}
              <TiltCard>
                <div className="p-4 sm:p-5 rounded-2xl bg-[#090f1c] border border-slate-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#060a12] border border-slate-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                        EMAIL RESMI
                      </span>
                      <a href={`mailto:${profile.email}`} className="font-mono text-sm font-bold text-white hover:text-cyan-400 transition-colors break-all">
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(profile.email, 'email')}
                    className="p-2 rounded-xl bg-[#060a12] border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all flex-shrink-0"
                    title="Salin Email"
                  >
                    {copiedItem === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </TiltCard>

              {/* WhatsApp */}
              <TiltCard>
                <div className="p-4 sm:p-5 rounded-2xl bg-[#090f1c] border border-slate-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#060a12] border border-slate-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                        WHATSAPP / TELEPON
                      </span>
                      <a href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="font-mono text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                        {profile.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(profile.phone, 'phone')}
                    className="p-2 rounded-xl bg-[#060a12] border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all flex-shrink-0"
                    title="Salin Telepon"
                  >
                    {copiedItem === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </TiltCard>

              {/* Location */}
              <TiltCard>
                <div className="p-4 sm:p-5 rounded-2xl bg-[#090f1c] border border-slate-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#060a12] border border-slate-800 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                        DOMISILI
                      </span>
                      <p className="font-display text-sm font-bold text-white">
                        Baleendah, Bandung <span className="text-xs font-normal text-slate-400 font-mono">(Terbuka untuk Remote / On-Site)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>

          </motion.div>

          {/* Right Column - Stitch Quick Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <TiltCard>
              <form onSubmit={handleFormSubmit} className="p-6 sm:p-8 rounded-3xl bg-[#090f1c] border border-slate-800 backdrop-blur-xl shadow-2xl space-y-5">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <h3 className="font-display text-lg font-bold text-white">
                    Kirim Pesan Cepat
                  </h3>
                  <span className="font-mono text-[10px] text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold uppercase tracking-wider">
                    DIRECT ROUTING
                  </span>
                </div>

                {/* Input 1: Name */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    NAMA LENGKAP / INSTANSI
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="cth: HR Recruiter / Tech Lead"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060a12] border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                  />
                </div>

                {/* Input 2: Subject */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    PERIHAL / SUBJECT
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="cth: Undangan Wawancara Web Developer"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060a12] border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors font-mono"
                  />
                </div>

                {/* Input 3: Message */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    ISI PESAN
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Halo Bagas, kami melihat portfolio Anda dan tertarik untuk mendiskusikan peluang..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#060a12] border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 transition-colors font-sans resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider bg-cyan-500 text-slate-950 hover:bg-cyan-400 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <span>Kirim Pesan ke Bagas</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </form>
            </TiltCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
