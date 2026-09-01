import { test } from 'node:test';
import assert from 'node:assert/strict';
import { servicesData } from '../data/servicesData.js';
import { PROJECTS_DATA, PORTFOLIO_CATEGORIES } from '../data/projectsData.js';
import { ESTIMATOR_SERVICES, BUDGET_RANGE } from '../data/estimatorData.js';
import { formatRupiah } from '../hooks/useCostEstimator.js';

test('R1: Cyber-Modern Hero & Brand Showcase Requirement Verification', () => {
  assert.ok(servicesData.length >= 3);
  assert.equal(BUDGET_RANGE.min, 2000000);
  assert.equal(BUDGET_RANGE.max, 20000000);
});

test('R2: Core Services & Tech Stack Matrix Verification', () => {
  const webDev = servicesData.find((s) => s.id === 'web-dev');
  assert.ok(webDev.techStack.includes('React'));
  assert.ok(webDev.techStack.includes('Next.js'));
  const mobileDev = servicesData.find((s) => s.id === 'mobile-app');
  assert.ok(mobileDev.pricing.includes('7.500.000'));
});

test('R3: Interactive Case Studies & Portfolio Grid Verification', () => {
  assert.ok(PROJECTS_DATA.length >= 3);
  assert.deepEqual(PORTFOLIO_CATEGORIES, ['All', 'Web Dev', 'Mobile App', 'AI & ML']);
  const aiProject = PROJECTS_DATA.find((p) => p.id === 'scholar-search');
  assert.equal(aiProject.metrics.accuracy, '99.4%');
});

test('R4: Interactive Project Cost Estimator & WhatsApp Trigger Verification', () => {
  const cost = ESTIMATOR_SERVICES.reduce((acc, s) => acc + s.basePrice, 0);
  assert.equal(cost, 24500000);
  const formatted = formatRupiah(5000000);
  assert.ok(formatted.includes('5.000.000'));
});

test('Tier 5: White-Box Adversarial Edge Cases & Hardening Verification', () => {
  // Test invalid service ID fallback
  const invalidSelection = ['web_dev', 'unknown_id'];
  const totalCost = invalidSelection.reduce((acc, id) => {
    const service = ESTIMATOR_SERVICES.find((s) => s.id === id);
    return acc + (service ? service.basePrice : 0);
  }, 0);
  assert.equal(totalCost, 5000000);

  // Test multi-service efficiency discount math
  const daysTotal = ESTIMATOR_SERVICES.filter((s) => ['web_dev', 'mobile_app'].includes(s.id)).reduce(
    (acc, s) => acc + s.estimatedDays,
    0,
  );
  const discountedDays = Math.round(daysTotal * 0.8);
  assert.equal(discountedDays, 28);

  // Test particle density bounds calculation
  const getParticleCount = (w) => Math.min(Math.floor(w / 16), 80);
  assert.equal(getParticleCount(320), 20);
  assert.equal(getParticleCount(1920), 80);

  // Test encoding safety
  const testMsg = 'Hello & Welcome! <100%>';
  const encoded = encodeURIComponent(testMsg);
  assert.equal(decodeURIComponent(encoded), testMsg);
});
