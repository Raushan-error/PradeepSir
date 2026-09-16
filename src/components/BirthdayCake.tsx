import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const CANDLE_COLORS = ['#ff0055', '#00f2fe', '#f59e0b', '#ec4899', '#10b981'];

export const BirthdayCake = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [blown, setBlown] = useState(false);

  const blowCandles = () => {
    if (blown) return;
    setBlown(true);
    
    // Fireworks effect
    const duration = 3000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#f59e0b', '#ec4899', '#00f2fe'] });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#f59e0b', '#ec4899', '#00f2fe'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <section className="py-32 px-4 bg-navy relative overflow-hidden flex flex-col items-center" ref={ref}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: -30 }} 
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-16 z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-heading gradient-text mb-4">Make A Wish! 🎂</h2>
        <p className="text-gray-300 text-lg">Click the cake to blow out the candles and celebrate!</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ type: 'spring', bounce: 0.6, delay: 0.2 }}
        className="relative cursor-pointer z-10 w-[300px] h-[350px] flex flex-col justify-end items-center"
        onClick={blowCandles}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Flames / Candles */}
        <div className="flex gap-4 mb-1 z-20 items-end">
          {CANDLE_COLORS.map((color, i) => (
            <div key={i} className="flex flex-col items-center relative">
              <AnimatePresence>
                {!blown && (
                  <motion.div
                    exit={{ opacity: 0, scale: 0, y: -10 }}
                    className="absolute -top-6 w-3 h-6 rounded-full"
                    style={{
                      background: 'radial-gradient(ellipse at center, #fff 0%, #fcd34d 40%, #f59e0b 100%)',
                      boxShadow: '0 0 10px #f59e0b, 0 0 20px #fcd34d',
                    }}
                    animate={{
                      scale: [1, 1.1, 0.9, 1.2, 1],
                      skewX: [0, -2, 2, 0],
                    }}
                    transition={{
                      duration: 0.5 + Math.random() * 0.3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: Math.random() * 0.5
                    }}
                  />
                )}
              </AnimatePresence>
              {/* Wick */}
              <div className="w-0.5 h-2 bg-gray-900 mt-1" />
              {/* Candle Body */}
              <div 
                className="w-4 rounded-sm border border-white/20 shadow-inner" 
                style={{ 
                  height: 40 + (i % 2 === 0 ? 10 : 0),
                  background: `repeating-linear-gradient(45deg, ${color}, ${color} 5px, #fff 5px, #fff 10px)`
                }} 
              />
            </div>
          ))}
        </div>

        {/* Cake Layers */}
        <div className="relative flex flex-col items-center w-full z-10 drop-shadow-2xl">
          
          {/* Top Layer */}
          <div className="w-48 h-20 bg-gradient-to-br from-pink-400 to-accent rounded-xl border-t-4 border-white/30 shadow-inner relative flex justify-center items-center z-30">
            {/* Drip effect */}
            <div className="absolute -bottom-3 left-4 w-6 h-8 bg-pink-400 rounded-full" />
            <div className="absolute -bottom-4 left-1/2 w-8 h-10 bg-accent rounded-full -translate-x-1/2" />
            <div className="absolute -bottom-2 right-6 w-5 h-6 bg-pink-400 rounded-full" />
            <span className="font-heading font-bold text-white text-lg tracking-widest drop-shadow-md">VISION</span>
          </div>

          {/* Middle Layer */}
          <div className="w-60 h-24 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-xl border-t-4 border-white/30 shadow-inner -mt-4 relative flex justify-center items-center z-20">
            <span className="font-heading font-bold text-white text-xl tracking-widest drop-shadow-md">HUSTLE</span>
          </div>

          {/* Bottom Layer */}
          <div className="w-72 h-28 bg-gradient-to-br from-yellow-300 to-gold rounded-xl border-t-4 border-white/30 shadow-inner -mt-4 relative flex justify-center items-center z-10">
             <span className="font-heading font-bold text-darkBlue text-2xl tracking-widest drop-shadow-md">SIGMA IT</span>
          </div>

        </div>

        {/* Plate */}
        <div className="w-[340px] h-10 bg-gray-300 rounded-full border-b-4 border-gray-400 shadow-[0_10px_30px_rgba(0,0,0,0.5)] -mt-6 z-0" />
      </motion.div>

      {/* Message */}
      <AnimatePresence>
        {blown && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="mt-12 text-center z-10 glass-card p-6 rounded-2xl border border-gold/30"
          >
            <h3 className="text-3xl font-bold font-heading text-white mb-2">Wishes Sent to the Universe! 🌌</h3>
            <p className="text-gold font-bold">May this year bring even more success and happiness.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
