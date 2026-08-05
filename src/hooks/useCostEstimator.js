import { useState, useMemo, useCallback } from 'react';
import { ESTIMATOR_SERVICES, BUDGET_RANGE, WHATSAPP_CONFIG } from '../data/estimatorData.js';

export function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(number);
}

export function useCostEstimator() {
  const [selectedServices, setSelectedServices] = useState(['web_dev']);
  const [budgetValue, setBudgetValue] = useState(BUDGET_RANGE.defaultVal);

  const toggleService = useCallback((serviceId) => {
    setSelectedServices((prev) => {
      if (prev.includes(serviceId)) {
        // Prevent unselecting all services (keep at least 1)
        if (prev.length === 1) return prev;
        return prev.filter((id) => id !== serviceId);
      } else {
        return [...prev, serviceId];
      }
    });
  }, []);

  const totalEstimated = useMemo(() => {
    return selectedServices.reduce((sum, serviceId) => {
      const found = ESTIMATOR_SERVICES.find((s) => s.id === serviceId);
      return sum + (found ? found.basePrice : 0);
    }, 0);
  }, [selectedServices]);

  const estimatedDays = useMemo(() => {
    if (selectedServices.length === 0) return 0;
    const totalDays = selectedServices.reduce((sum, serviceId) => {
      const found = ESTIMATOR_SERVICES.find((s) => s.id === serviceId);
      return sum + (found ? found.estimatedDays : 0);
    }, 0);
    // Apply efficiency discount multiplier for multi-service projects
    const multiplier = selectedServices.length > 1 ? 0.8 : 1.0;
    return Math.round(totalDays * multiplier);
  }, [selectedServices]);

  const selectedServiceNames = useMemo(() => {
    return selectedServices
      .map((id) => {
        const found = ESTIMATOR_SERVICES.find((s) => s.id === id);
        return found ? found.name : '';
      })
      .filter(Boolean);
  }, [selectedServices]);

  const formattedWhatsAppUrl = useMemo(() => {
    const serviceListStr = selectedServiceNames.map((name) => `• ${name}`).join('\n');
    const formattedTotal = formatRupiah(totalEstimated);
    const formattedBudget = formatRupiah(budgetValue);

    const message = `Halo ${WHATSAPP_CONFIG.consultantName}, saya ingin berkonsultasi mengenai proyek software house zoldyckDev:

*Layanan yang Dipilih:*
${serviceListStr}

*Estimasi Biaya Sistem:* ${formattedTotal}
*Estimasi Waktu Pengerjaan:* ~${estimatedDays} Hari Kerja
*Budget Alokasi Saya:* ${formattedBudget}

Mohon info jadwal diskusi awal & proposal penawarannya. Terima kasih!`;

    const encodedText = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedText}`;
  }, [selectedServiceNames, totalEstimated, estimatedDays, budgetValue]);

  return {
    selectedServices,
    toggleService,
    budgetValue,
    setBudgetValue,
    totalEstimated,
    estimatedDays,
    selectedServiceNames,
    formattedWhatsAppUrl,
    formatRupiah
  };
}
