import React, { useState, useEffect } from 'react';
import GridBackground from './components/presentation/GridBackground';
import PresentationHeader from './components/presentation/PresentationHeader';
import HeroSlide from './components/presentation/HeroSlide';
import AboutSlide from './components/presentation/AboutSlide';
import SkillsSlide from './components/presentation/SkillsSlide';
import ProjectsSlide from './components/presentation/ProjectsSlide';
import ExperienceSlide from './components/presentation/ExperienceSlide';
import ContactSlide from './components/presentation/ContactSlide';
import SlideControls from './components/presentation/SlideControls';
import ProjectModal from './components/presentation/ProjectModal';
import { PORTFOLIO_DATA } from './data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const totalSlides = PORTFOLIO_DATA.slides.length;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Keyboard navigation support (Arrow Left & Right)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is typing in form inputs
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setActiveSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setActiveSlideIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  const renderActiveSlide = () => {
    switch (activeSlideIndex) {
      case 0:
        return (
          <HeroSlide
            onNavigateNext={() => setActiveSlideIndex(1)}
            onOpenContact={() => setActiveSlideIndex(5)}
          />
        );
      case 1:
        return <AboutSlide />;
      case 2:
        return <SkillsSlide />;
      case 3:
        return (
          <ProjectsSlide
            onSelectProject={(proj) => setSelectedProject(proj)}
          />
        );
      case 4:
        return <ExperienceSlide />;
      case 5:
        return <ContactSlide onShowToast={showToast} />;
      default:
        return (
          <HeroSlide
            onNavigateNext={() => setActiveSlideIndex(1)}
            onOpenContact={() => setActiveSlideIndex(5)}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#f4f5f8] text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between overflow-hidden">
      {/* Background Pattern */}
      <GridBackground />

      {/* Presentation Header */}
      <PresentationHeader
        activeSlideIndex={activeSlideIndex}
        setActiveSlideIndex={setActiveSlideIndex}
      />

      {/* Main Slide Deck Stage */}
      <main className="relative z-10 flex-1 w-full h-full flex items-center justify-center overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlideIndex}
            initial={{ opacity: 0, y: 15, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.99 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full min-h-full flex flex-col justify-center"
          >
            {renderActiveSlide()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Slide Navigation Controls & Footer */}
      <SlideControls
        activeSlideIndex={activeSlideIndex}
        setActiveSlideIndex={setActiveSlideIndex}
      />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-6 z-50 bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-2xl shadow-2xl text-xs font-semibold flex items-center gap-2"
          >
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
