import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Copy, Check, Send, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { profile } = portfolioData;
  const [copiedItem, setCopiedItem] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const contactItems = [
    {
      id: 'phone',
      icon: <Phone className="w-5 h-5 text-accentBlue" />,
      label: "Telepon / WhatsApp",
      value: profile.phone,
      actionHref: `https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`,
      isExternal: true
    },
    {
      id: 'email',
      icon: <Mail className="w-5 h-5 text-emerald-400" />,
      label: "Alamat Email",
      value: profile.email,
      actionHref: `mailto:${profile.email}`,
      isExternal: false
    },
    {
      id: 'location',
      icon: <MapPin className="w-5 h-5 text-amber-400" />,
      label: "Domisili",
      value: profile.location,
      actionHref: null,
      isExternal: false
    }
  ];

  return (
    <section id="kontak" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-xs font-mono font-semibold tracking-wider text-accentBlue uppercase mb-2 block">
            Mari Terhubung
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-textMain mb-4">
            Hubungi Saya
          </h2>
          <p className="text-sm text-textMuted leading-relaxed">
            Saya selalu terbuka untuk mendiskusikan peluang kerja, proyek web baru, atau sekadar bertukar wawasan seputar teknologi web development.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-bgCard border border-borderDark hover:border-primaryBlue/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-bgElevated border border-borderDark flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[11px] font-mono font-semibold text-textDim uppercase tracking-wider block mb-1">
                  {item.label}
                </span>
                <p className="font-display text-base font-bold text-textMain mb-4 break-all">
                  {item.value}
                </p>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-borderDark/60">
                {item.actionHref && (
                  <a
                    href={item.actionHref}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-primaryBlue/15 text-accentBlue hover:bg-primaryBlue hover:text-white transition-all"
                  >
                    <span>{item.id === 'phone' ? 'WhatsApp' : 'Kirim Email'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                
                {item.actionHref && (
                  <button
                    onClick={() => handleCopy(item.value, item.id)}
                    className="p-2 rounded-xl bg-bgElevated border border-borderDark text-textMuted hover:text-textMain hover:border-borderSoft transition-all"
                    title="Salin ke Clipboard"
                  >
                    {copiedItem === item.id ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Email Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-bgCard via-bgElevated to-bgCard border border-borderDark text-center relative overflow-hidden shadow-2xl"
        >
          <div className="relative z-10 max-w-xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-textMain mb-3">
              Siap Memulai Kolaborasi?
            </h3>
            <p className="text-sm text-textMuted mb-6">
              Kirimkan email langsung untuk penawaran posisi Web Developer atau diskusi lebih lanjut.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm bg-primaryBlue text-white hover:bg-blue-600 active:scale-95 transition-all shadow-xl shadow-primaryBlue/30 hover:shadow-primaryBlue/50"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Email Langsung</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
