import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon: string;
}

const StatCard = ({ value, label, suffix = '', prefix = '', icon }: StatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -8, scale: 1.05 }}
      className="stat-card glass-card p-8 rounded-2xl text-center border border-gold/10 hover:border-gold/40 transition-colors shadow-xl"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <div className="stat-number text-4xl md:text-5xl font-bold font-heading gradient-text mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-gray-400 uppercase tracking-widest text-sm font-semibold">{label}</div>
    </motion.div>
  );
};

export const StatsCounter = () => {
  const stats: StatProps[] = [
    { value: 8, label: 'Years of Sigma IT', suffix: '+', icon: '🏢' },
    { value: 50, label: 'Team Members', suffix: '+', icon: '👥' },
    { value: 200, label: 'Projects Delivered', suffix: '+', icon: '🚀' },
    { value: 100, label: 'Happy Clients', suffix: '+', icon: '🤝' },
    { value: 20, label: 'Starting Capital (₹K)', suffix: 'K', prefix: '₹', icon: '💰' },
    { value: 1000, label: 'Dreams Fulfilled', suffix: '+', icon: '⭐' },
  ];

  return (
    <section className="py-24 px-4 bg-darkBlue relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `hsl(${45 + Math.random() * 20}, 100%, 50%)`,
              animationDuration: `${Math.random() * 10 + 8}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading gradient-text mb-4">By The Numbers</h2>
          <p className="text-gray-400 text-lg">The scale of success Sir has built from scratch.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => <StatCard key={i} {...stat} />)}
        </div>
      </div>
    </section>
  );
};
