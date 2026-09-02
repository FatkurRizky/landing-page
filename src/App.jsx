import React, { useState } from 'react';
import GridBackground from './components/presentation/GridBackground';
import PresentationHeader from './components/presentation/PresentationHeader';
import HeroSlide from './components/presentation/HeroSlide';
import AboutSlide from './components/presentation/AboutSlide';
import SkillsSlide from './components/presentation/SkillsSlide';
import ProjectsSlide from './components/presentation/ProjectsSlide';
import ExperienceSlide from './components/presentation/ExperienceSlide';
import ContactSlide from './components/presentation/ContactSlide';
import ProjectModal from './components/presentation/ProjectModal';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f5f8] text-slate-900 font-sans selection:bg-[#0F3040] selection:text-white flex flex-col relative">
      {/* Background Pattern */}
      <GridBackground />

      {/* Sticky Header */}
      <PresentationHeader />

      {/* Main Continuous Long Scroll Sections */}
      <main className="relative z-10 w-full flex flex-col">
        <HeroSlide />
        <AboutSlide />
        <SkillsSlide />
        <ProjectsSlide onSelectProject={(proj) => setSelectedProject(proj)} />
        <ExperienceSlide />
        <ContactSlide onShowToast={showToast} />
      </main>

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
            className="fixed bottom-8 right-6 z-50 bg-[#0F3040] border border-[#D99B7F]/50 text-white px-4 py-3 rounded-2xl shadow-2xl text-xs font-semibold flex items-center gap-2"
          >
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
