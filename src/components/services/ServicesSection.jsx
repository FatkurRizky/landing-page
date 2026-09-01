import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../../data/servicesData';
import { useModal } from '../../hooks/useModal';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

export default function ServicesSection() {
  const { isOpen, modalData, openModal, closeModal } = useModal();

  return (
    <section id="services" className="py-20 bg-[#09090b] relative overflow-hidden border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-medium text-cyan-400 uppercase tracking-widest">
            // Technical Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Keahlian & Layanan Development
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm">
            Stack teknologi yang dipakai sehari-hari untuk membangun produk web & mobile.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
            >
              <ServiceCard service={service} onOpenDetail={openModal} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        isOpen={isOpen}
        onClose={closeModal}
        service={modalData}
      />
    </section>
  );
}
