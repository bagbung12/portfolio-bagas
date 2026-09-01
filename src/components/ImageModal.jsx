import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export default function ImageModal({ isOpen, src, title, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-bgDark/90 backdrop-blur-2xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-5xl w-full bg-bgCard border border-borderDark rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-bgElevated border-b border-borderDark">
            <span className="font-display text-sm font-bold text-textMain flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accentBlue"></span>
              {title}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-bgCard border border-borderDark text-textMuted hover:text-textMain hover:border-borderSoft transition-colors"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image Container */}
          <div className="p-2 sm:p-4 bg-bgDark flex justify-center items-center max-h-[80vh] overflow-auto">
            <img
              src={src}
              alt={title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-lg border border-borderDark/40"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
