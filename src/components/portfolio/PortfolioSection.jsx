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
    <section id="portfolio" className="py-20 bg-[#09090b] relative overflow-hidden border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-widest">
            // Selected Projects
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Proyek Pilihan & Case Studies
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Beberapa project full-stack web dan mobile app yang telah saya kembangkan.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <FilterTabs
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Portfolio Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
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
