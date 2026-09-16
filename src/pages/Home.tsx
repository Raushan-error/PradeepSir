import React, { useEffect } from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Anchor, Rocket, Zap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { QuoteMachine } from '../components/QuoteMachine';
import { WishWall } from '../components/WishWall';
import { BirthdayCake } from '../components/BirthdayCake';
import { AboutSir } from '../components/AboutSir';

export const Home = () => {
  useEffect(() => {
    const duration = 2500;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ffd700', '#ff8c00', '#ffffff'] });
      confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ffd700', '#ff8c00', '#ffffff'] });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, []);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lightNavy via-navy to-darkBlue pt-20">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }} />
        
        {/* Floating Sigma IT logo */}
        <motion.img
          src="/pics/logo.gif"
          alt="Sigma IT"
          animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-28 h-28 object-contain mb-8 z-10 rounded-2xl shadow-2xl shadow-gold/30 border-2 border-gold/20"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="z-10 text-center px-4"
        >
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-sm md:text-lg uppercase tracking-[0.5em] text-goldLight mb-6 font-heading"
          >
            ✦ Sigma IT Software Designers Pvt. Ltd. Presents ✦
          </motion.p>

          {/* Glitch Hero Title */}
          <motion.div
            animate={{ rotate: [0, 1, -1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <h1
              className="glitch text-6xl md:text-9xl font-bold font-heading mb-4 drop-shadow-2xl gradient-text"
              data-text="Happy Birthday!"
            >
              Happy Birthday!
            </h1>
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading"
          >
            Pradeep <span className="gradient-text">Sir</span> 🎂
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide mb-12"
          >
            Director, Sigma IT Software Designers Pvt. Ltd. <br />
            <span className="text-gold font-semibold">A Visionary. A Leader. A Relentless Dreamer.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/journey">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="neon-btn bg-gold text-darkBlue px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all shadow-[0_0_30px_rgba(255,215,0,0.5)]"
              >
                🚀 Explore the Journey
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 z-10 flex flex-col items-center"
        >
          <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest font-heading">Scroll to Discover</p>
          <ChevronDown className="w-8 h-8 text-gold animate-bounce" />
        </motion.div>
      </section>

      {/* About Sir Section (New) */}
      <AboutSir />

      {/* Mantra Section */}
      <section className="py-24 px-4 bg-navy relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-heading gradient-text mb-8"
            >
              The Mantra of Success
            </motion.h2>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="inline-block p-1 rounded-2xl bg-gradient-to-r from-gold via-yellow-500 to-orange-500 cursor-pointer shadow-2xl"
            >
              <div className="bg-darkBlue px-6 py-4 rounded-xl flex flex-wrap items-center justify-center gap-4 text-xl md:text-3xl font-heading font-bold">
                <span>Work Hard</span>
                <Zap className="text-gold w-6 h-6 md:w-8 md:h-8 animate-pulse" />
                <span>Sigma IT Grows</span>
                <Zap className="text-gold w-6 h-6 md:w-8 md:h-8 animate-pulse" />
                <span>Work Hard</span>
              </div>
            </motion.div>
          </div>

          {/* Quote Machine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <QuoteMachine />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '💗 Immense Love for Work', icon: <Heart className="w-8 h-8 text-gold" />, desc: "Passion isn't just a word; it's the daily fuel. Treating every project as an opportunity to create something extraordinary." },
              { title: '⚓ Unwavering Self-Respect', icon: <Anchor className="w-8 h-8 text-gold" />, desc: "Standing tall through adversity. Success is built on a foundation of integrity and an unbreakable spirit." },
              { title: '🚀 Sheer Hustle', icon: <Rocket className="w-8 h-8 text-gold" />, desc: "Turning every dream into reality isn't magic. It's the result of relentless hard work and refusing to give up." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, rotate: index % 2 === 0 ? 2 : -2 }}
                className="glass-card p-8 rounded-2xl transition-transform border border-gold/10 hover:border-gold/40 shadow-xl"
              >
                <div className="bg-darkBlue w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-gold/30 shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Birthday Cake */}
      <BirthdayCake />

      {/* Wish Wall */}
      <WishWall />

      {/* Bottom CTA */}
      <section className="py-20 text-center relative z-10 bg-darkBlue">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8">Ready to see where it all began?</h3>
          <Link to="/journey">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neon-btn bg-gold text-darkBlue px-10 py-5 rounded-full font-bold text-2xl hover:bg-yellow-400 transition-all shadow-[0_0_40px_rgba(255,215,0,0.4)]"
            >
              🗺️ Explore the Journey
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
};
