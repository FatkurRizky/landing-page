import React, { useEffect, useRef } from 'react';

/**
 * SwarmCursor Component
 * High-performance fluid particle swarm that orbits the cursor across the website.
 * Supports trail, wander, scatter on click, and glowing metaball visuals.
 */
export default function SwarmCursor({
  color = '#D99B7F',
  accentColor = '#0F3040',
  count = 18,
  size = 8,
  speed = 2.5,
  spread = 90,
  wander = 0.3,
  trail = 0.8,
  scatterOnClick = true,
  enabled = true,
  _fixed = true,
  children,
  className = '',
  style = {},
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particles Data
    const particles = [];
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isMoving: false,
    };

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const r = Math.random() * spread;
      particles.push({
        x: mouse.x + Math.cos(angle) * r,
        y: mouse.y + Math.sin(angle) * r,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        radius: size * (0.6 + Math.random() * 0.8),
        orbitRadius: spread * (0.3 + Math.random() * 0.9),
        orbitAngle: angle,
        orbitSpeed: (0.015 + Math.random() * 0.025) * (speed / 2),
        orbitDirection: Math.random() > 0.5 ? 1 : -1,
        wanderOffset: Math.random() * 1000,
        trail: [],
        color: Math.random() > 0.4 ? color : accentColor,
      });
    }

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isMoving = true;
    };

    const handleClick = (e) => {
      if (!scatterOnClick) return;
      const clickX = e.clientX;
      const clickY = e.clientY;

      particles.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.hypot(dx, dy) || 1;
        const force = 18 + Math.random() * 15;
        p.vx = (dx / dist) * force;
        p.vy = (dy / dist) * force;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick);

    let time = 0;

    const render = () => {
      time += 0.02;

      // Mouse smooth easing
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      // Render & Update Particles
      particles.forEach((p, idx) => {
        // Update orbit angle
        p.orbitAngle += p.orbitSpeed * p.orbitDirection;

        // Calculate target orbiting position around cursor
        const wanderX = Math.sin(time + p.wanderOffset) * (wander * 40);
        const wanderY = Math.cos(time * 0.8 + p.wanderOffset) * (wander * 40);

        const targetX = mouse.x + Math.cos(p.orbitAngle) * p.orbitRadius + wanderX;
        const targetY = mouse.y + Math.sin(p.orbitAngle) * p.orbitRadius + wanderY;

        // Spring attraction force towards orbit target
        const dx = targetX - p.x;
        const dy = targetY - p.y;
        const spring = 0.06 * (speed / 2.5);
        const friction = 0.82;

        p.vx = (p.vx + dx * spring) * friction;
        p.vy = (p.vy + dy * spring) * friction;

        p.x += p.vx;
        p.y += p.vy;

        // Record motion trail
        p.trail.unshift({ x: p.x, y: p.y });
        const maxTrailLength = Math.max(3, Math.round(18 * trail));
        if (p.trail.length > maxTrailLength) {
          p.trail.pop();
        }

        // Draw Motion Trail (Fluid metaball connecting stream)
        if (p.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let t = 1; t < p.trail.length; t++) {
            ctx.lineTo(p.trail[t].x, p.trail[t].y);
          }
          ctx.strokeStyle = p.color;
          ctx.lineWidth = p.radius * 0.9;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.globalAlpha = 0.28;
          ctx.stroke();
        }

        // Draw Ambient Glow Halo around particle
        const glowGrad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 3.5
        );
        glowGrad.addColorStop(0, p.color);
        glowGrad.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = glowGrad;
        ctx.globalAlpha = 0.35;
        ctx.fill();

        // Draw Core Glowing Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.92;
        ctx.fill();

        // Connect nearby particles with subtle liquid membrane lines
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distBetween = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distBetween < 55) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.lineWidth = Math.max(1, (1 - distBetween / 55) * 3);
            ctx.globalAlpha = (1 - distBetween / 55) * 0.3;
            ctx.stroke();
          }
        }
      });

      ctx.globalAlpha = 1.0;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [color, accentColor, count, size, speed, spread, wander, trail, scatterOnClick, enabled]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`} style={style}>
      {/* Global High-Contrast Fullscreen Swarm Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50 w-screen h-screen block select-none"
      />
      {children}
    </div>
  );
}
