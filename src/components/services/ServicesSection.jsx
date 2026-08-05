import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../../data/servicesData';
import { useModal } from '../../hooks/useModal';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

export default function ServicesSection() {
  const { isOpen, modalData, openModal, closeModal } = useModal();

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Neon Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold tracking-wider uppercase">
            // Core Software Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Layanan Pengembanan <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Perangkat Lunak Enterprise
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Spesialisasi kami dalam membangun produk digital berstandar tinggi. Dari web SaaS berskala besar hingga sistem kecerdasan buatan terintegrasi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
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
