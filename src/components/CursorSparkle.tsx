import React, { useEffect } from 'react';

const colors = ['#ffd700', '#ff8c00', '#ffffff', '#64ffda', '#ff6b6b'];

export const CursorSparkle = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;
      sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      sparkle.style.width = `${Math.random() * 8 + 4}px`;
      sparkle.style.height = sparkle.style.width;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 800);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return null;
};
