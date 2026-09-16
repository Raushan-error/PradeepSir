import React, { useEffect, useState } from 'react';

const BIRTHDAY = new Date('2026-09-17T00:00:00');

const pad = (n: number) => String(n).padStart(2, '0');

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0, past: false });

  useEffect(() => {
    const update = () => {
      const now = new Date().getTime();
      const diff = BIRTHDAY.getTime() - now;
      if (diff <= 0) {
        // birthday has arrived or passed — show time since
        const elapsed = -diff;
        setTimeLeft({
          d: Math.floor(elapsed / (1000 * 60 * 60 * 24)),
          h: Math.floor((elapsed / (1000 * 60 * 60)) % 24),
          m: Math.floor((elapsed / (1000 * 60)) % 60),
          s: Math.floor((elapsed / 1000) % 60),
          past: true,
        });
      } else {
        setTimeLeft({
          d: Math.floor(diff / (1000 * 60 * 60 * 24)),
          h: Math.floor((diff / (1000 * 60 * 60)) % 24),
          m: Math.floor((diff / (1000 * 60)) % 60),
          s: Math.floor((diff / 1000) % 60),
          past: false,
        });
      }
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: 'Days', value: timeLeft.d },
    { label: 'Hours', value: timeLeft.h },
    { label: 'Mins', value: timeLeft.m },
    { label: 'Secs', value: timeLeft.s },
  ];

  return (
    <div className="text-center py-12 px-4 bg-darkBlue relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.05),transparent_70%)] pointer-events-none" />
      <p className="text-sm uppercase tracking-[0.4em] text-gold mb-3 font-heading">
        {timeLeft.past ? '🎂 Celebrating For' : '⏳ Birthday Countdown'}
      </p>
      <h2 className="text-2xl md:text-4xl font-bold text-white font-heading mb-10">
        {timeLeft.past ? 'Happy Birthday Pradeep Sir! 🎉' : 'The Big Day Approaches…'}
      </h2>
      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        {units.map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
              {/* Outer ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle cx="50%" cy="50%" r="45%" stroke="#1a2a4a" strokeWidth="8%" fill="none" />
                <circle
                  cx="50%" cy="50%" r="45%" stroke="#ffd700" strokeWidth="8%"
                  fill="none" strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                  strokeDashoffset={`${2 * Math.PI * 45 * (1 - (value % 60) / 60)}`}
                  style={{ transition: 'stroke-dashoffset 0.9s ease' }}
                />
              </svg>
              <span className="text-2xl md:text-4xl font-bold font-heading text-white z-10">{pad(value)}</span>
            </div>
            <span className="text-gray-400 text-xs uppercase tracking-widest mt-2">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
