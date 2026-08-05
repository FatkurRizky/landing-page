import { useState, useRef, useCallback } from 'react';

export function use3DTilt(maxTiltDeg = 10, scaleOnHover = 1.03) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease',
    shadowStyle: { opacity: 0, x: 50, y: 50 }
  });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center (-1 to 1)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const percentX = (mouseX / width - 0.5) * 2;
    const percentY = (mouseY / height - 0.5) * 2;

    const rotateY = percentX * maxTiltDeg;
    const rotateX = -percentY * maxTiltDeg;

    const shadowX = (mouseX / width) * 100;
    const shadowY = (mouseY / height) * 100;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, ${scaleOnHover})`,
      transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out',
      shadowStyle: { opacity: 1, x: shadowX, y: shadowY }
    });
  }, [maxTiltDeg, scaleOnHover]);

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease',
      shadowStyle: { opacity: 0, x: 50, y: 50 }
    });
  }, []);

  return {
    cardRef,
    style,
    handleMouseMove,
    handleMouseLeave
  };
}
