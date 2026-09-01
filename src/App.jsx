import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AchievementsPub from './components/AchievementsPub';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';

export default function App() {
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
    <div className="min-h-screen bg-bgDark text-textMain selection:bg-primaryBlue selection:text-white relative bg-grid-pattern overflow-x-hidden">
      
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="aurora-glow-1"></div>
        <div className="aurora-glow-2"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects onOpenModal={handleOpenModal} />
          <AchievementsPub />
          <Education />
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
  );
}
