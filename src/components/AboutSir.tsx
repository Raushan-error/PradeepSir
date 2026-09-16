import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Brain, Crown, Target, Users, Zap, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const traits = [
  {
    icon: <Brain className="w-12 h-12 text-gold" />,
    title: "The Visionary Mind",
    desc: "Always seeing ten steps ahead. When others see a roadblock, Sir sees a launchpad. His strategic thinking transformed a small ₹20K investment into an empire.",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: <Users className="w-12 h-12 text-gold" />,
    title: "A True Mentor",
    desc: "He doesn't just hire employees; he builds leaders. 'Grow and Help Grow' is the heartbeat of Sigma IT, proving that real success is shared.",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: <Shield className="w-12 h-12 text-gold" />,
    title: "Unbreakable Resilience",
    desc: "Setbacks like early venture closures never stopped him. They only fueled the fire to come back stronger, wiser, and more determined.",
    color: "from-red-500/20 to-orange-500/20"
  },
  {
    icon: <Zap className="w-12 h-12 text-gold" />,
    title: "Relentless Hustle",
    desc: "From a Sales Executive on the ground to the Director's chair, the work ethic has never changed. 200% effort, every single day.",
    color: "from-yellow-500/20 to-amber-500/20"
  },
  {
    icon: <Crown className="w-12 h-12 text-gold" />,
    title: "Humble Leadership",
    desc: "Despite massive success, he remains grounded. Always approachable, always listening, and always leading by example from the front lines.",
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    icon: <Target className="w-12 h-12 text-gold" />,
    title: "Laser Focus",
    desc: "When a goal is set, nothing can distract him. The dedication to delivering excellence for over 100+ happy clients is unparalleled.",
    color: "from-cyan-500/20 to-blue-500/20"
  }
];

export const AboutSir = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % traits.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const next = () => {
    setIsPaused(true);
    setIndex((prev) => (prev + 1) % traits.length);
  };

  const prev = () => {
    setIsPaused(true);
    setIndex((prev) => (prev - 1 + traits.length) % traits.length);
  };

  const current = traits[index];

  return (
    <section className="py-24 px-4 bg-darkBlue relative overflow-hidden flex flex-col items-center">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 w-full text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300 mb-6"
        >
          The Man Behind the Empire
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg md:text-xl"
        >
          Take a moment to read what defines his leadership.
        </motion.p>
      </div>

      <div className="w-full max-w-4xl relative min-h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.4, type: 'spring' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`w-full glass-card p-10 md:p-16 rounded-[3rem] border border-gold/30 shadow-2xl relative overflow-hidden bg-gradient-to-br ${current.color}`}
          >
            <div className="absolute inset-0 bg-darkBlue/80 backdrop-blur-sm z-0" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-navy rounded-2xl border-2 border-gold/40 shadow-[0_0_30px_rgba(255,215,0,0.2)] flex items-center justify-center mb-8 rotate-3">
                {current.icon}
              </div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading tracking-wide">
                {current.title}
              </h3>
              <p className="text-gray-300 text-lg md:text-2xl leading-relaxed max-w-2xl font-light italic">
                "{current.desc}"
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <button 
          onClick={prev} 
          className="absolute left-0 md:-left-12 z-20 p-4 bg-navy border-2 border-gold/30 rounded-full text-gold hover:bg-gold hover:text-darkBlue transition-all shadow-lg transform -translate-y-1/2 top-1/2 hidden md:block"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={next} 
          className="absolute right-0 md:-right-12 z-20 p-4 bg-navy border-2 border-gold/30 rounded-full text-gold hover:bg-gold hover:text-darkBlue transition-all shadow-lg transform -translate-y-1/2 top-1/2 hidden md:block"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Mobile Controls & Indicators */}
      <div className="flex flex-col items-center mt-10 z-10 gap-6">
        <div className="flex items-center gap-6">
          <button onClick={prev} className="md:hidden p-3 bg-navy border border-gold/30 rounded-full text-gold"><ChevronLeft /></button>
          
          <button 
            onClick={() => setIsPaused(!isPaused)} 
            className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors font-bold uppercase tracking-widest text-sm"
          >
            {isPaused ? <Play size={18} /> : <Pause size={18} />}
            {isPaused ? 'Paused' : 'Auto-Playing'}
          </button>
          
          <button onClick={next} className="md:hidden p-3 bg-navy border border-gold/30 rounded-full text-gold"><ChevronRight /></button>
        </div>

        {/* Dot Indicators */}
        <div className="flex gap-3">
          {traits.map((_, i) => (
            <button
              key={i}
              onClick={() => { setIndex(i); setIsPaused(true); }}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-10 bg-gold' : 'w-2 bg-gray-600 hover:bg-gray-400'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
