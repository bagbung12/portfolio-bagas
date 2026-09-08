import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AchievementsPub from './components/AchievementsPub';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [modalState, setModalState] = useState({
    isOpen: false,
    src: '',
    title: ''
  });

  const handleOpenModal = (src, title) => {
    setModalState({
      isOpen: true,
      src,
      title
    });
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      {/* 3D Running Chicken Loading Screen on Initial Load */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Main Portfolio Page */}
      <div className="min-h-screen bg-[#060a12] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 relative bg-stitch-pattern overflow-x-hidden">
        
        {/* Background ambient lighting */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="aurora-glow-cyan"></div>
          <div className="aurora-glow-indigo"></div>
        </div>

        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects onOpenModal={handleOpenModal} />
            <Education />
            <AchievementsPub />
            <Contact />
          </main>
          <Footer />
        </div>

        {/* Screenshot Lightbox Modal */}
        <ImageModal
          isOpen={modalState.isOpen}
          src={modalState.src}
          title={modalState.title}
          onClose={handleCloseModal}
        />
      </div>
    </>
  );
}
