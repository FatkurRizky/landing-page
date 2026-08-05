import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../../data/projectsData';
import { usePortfolioFilter } from '../../hooks/usePortfolioFilter';
import { useModal } from '../../hooks/useModal';
import FilterTabs from './FilterTabs';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function PortfolioSection() {
  const { activeCategory, setActiveCategory, filteredProjects } = usePortfolioFilter(PROJECTS_DATA);
  const { isOpen, modalData, openModal, closeModal } = useModal();

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Ambient Neon Backdrops */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-bold tracking-wider uppercase">
            // Selected Portfolio & Case Studies
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Karya & Rekam Jejak <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Pengembangan Sistem Enterprise
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Eksplorasi beberapa proyek unggulan yang telah kami bangun dengan standar performa tinggi, skalabilitas cloud, dan pengalaman pengguna modern.
          </p>
        </div>

        {/* Filter Categories Tabs */}
        <FilterTabs
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Portfolio Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} onOpenDetail={openModal} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Project Modal */}
      <ProjectModal
        isOpen={isOpen}
        onClose={closeModal}
        project={modalData}
      />
    </section>
  );
}
