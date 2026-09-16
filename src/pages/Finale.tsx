import React, { useEffect } from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';

const fireworks = () => {
  const duration = 8000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);
    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
};

export const Finale = () => {
  useEffect(() => {
    setTimeout(fireworks, 800);
  }, []);

  return (
    <PageTransition>
      <section className="pt-20 min-h-screen bg-darkBlue relative overflow-hidden flex flex-col items-center justify-center text-center px-4">
        {/* Glowing background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 blur-[100px] rounded-full animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        {/* Sigma IT Logo */}
        <motion.img
          src="/pics/logo.gif"
          alt="Sigma IT"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', bounce: 0.6, duration: 1.5 }}
          animate-loop={{ y: [0, -10, 0] }}
          className="w-32 h-32 object-contain mb-10 rounded-2xl shadow-2xl shadow-gold/30 border-2 border-gold/30"
        />

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.h1
            className="text-5xl md:text-8xl font-bold font-heading mb-6"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="gradient-text">Happy Birthday</span>
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-white mb-10 font-heading"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Pradeep Sir! 🎊🎂🎉
          </motion.h2>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1 }}
            className="glass-card rounded-3xl p-10 mb-10 border border-gold/20 shadow-2xl"
          >
            <p className="text-xl md:text-3xl text-gray-200 font-light italic leading-relaxed mb-6">
              "To the man who taught us that success isn't just about reaching the top — it's about pulling everyone else up along the way."
            </p>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
            <p className="text-gray-400 mt-6 uppercase tracking-[0.4em] text-sm font-heading">
              With Love & Respect from Your Entire Sigma IT Family
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              onClick={fireworks}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="neon-btn bg-gold text-darkBlue px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all shadow-[0_0_40px_rgba(255,215,0,0.5)]"
            >
              🎆 Launch Fireworks!
            </motion.button>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="neon-btn border-2 border-gold text-gold px-10 py-5 rounded-full font-bold text-xl hover:bg-gold hover:text-darkBlue transition-all"
              >
                🏠 Back to Home
              </motion.button>
            </Link>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mt-16"
          >
            <p className="text-6xl md:text-8xl">🎂🎊🥳🎈🎉</p>
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  );
};
