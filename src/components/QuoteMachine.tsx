import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  "Work Hard. Sigma IT Grows. Work Hard.",
  "Every failure is a stepping stone to success.",
  "Grow and Help Grow.",
  "Dream big. Start small. Act now.",
  "Your work ethic is your greatest asset.",
  "Success is not final, failure is not fatal — it's the courage to continue that counts.",
  "Great things never come from comfort zones.",
  "The only way to do great work is to love what you do.",
  "Don't watch the clock; do what it does. Keep going.",
  "Self-respect is worth more than any paycheck."
];

export const QuoteMachine = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const nextQuote = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
      setIsVisible(true);
    }, 400);
  };

  useEffect(() => {
    const timer = setInterval(nextQuote, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-lightNavy/60 rounded-3xl p-8 border border-gold/20 cursor-pointer text-center min-h-[150px] flex flex-col justify-center items-center shadow-inner" onClick={nextQuote}>
      <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4 font-heading">— Pradeep Sir Says —</p>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="text-xl md:text-2xl text-white font-light italic leading-relaxed"
          >
            "{quotes[index]}"
          </motion.p>
        )}
      </AnimatePresence>
      <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest">Click for next quote</p>
    </div>
  );
};
