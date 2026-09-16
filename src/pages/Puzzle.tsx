import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Unlock, Lock, Trophy } from 'lucide-react';

export const Puzzle = () => {
  const [guess, setGuess] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  
  const CORRECT_ANSWER = "GROW AND HELP GROW";

  const checkAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    if (guess.toUpperCase().trim() === CORRECT_ANSWER) {
      setIsUnlocked(true);
      setError(false);
      triggerWin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  };

  const triggerWin = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;
    const frame = () => {
      confetti({ particleCount: 7, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 7, angle: 120, spread: 55, origin: { x: 1 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  };

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-4 bg-darkBlue min-h-screen flex flex-col items-center justify-center relative">
        <div className="absolute top-20 left-10 opacity-10 rotate-45"><Trophy size={200} /></div>
        <div className="absolute bottom-20 right-10 opacity-10 -rotate-12"><Lock size={150} /></div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-2xl w-full glass-card p-10 rounded-3xl border border-gray-700 shadow-2xl relative z-10 text-center"
        >
          {!isUnlocked ? (
            <>
              <div className="w-24 h-24 mx-auto bg-lightNavy rounded-full flex items-center justify-center mb-8 border-4 border-gray-700 shadow-inner">
                <Lock className="w-10 h-10 text-gray-400" />
              </div>
              <h2 className="text-3xl font-bold font-heading text-white mb-4">Crack The Sigma Code</h2>
              <p className="text-gray-400 mb-8">
                Hint: What is the ultimate vision and tagline of Sigma IT? <br/>
                (4 words, e.g., "_____ AND _____ _____")
              </p>

              <form onSubmit={checkAnswer} className="flex flex-col gap-4 items-center">
                <motion.input 
                  animate={error ? { x: [-10, 10, -10, 10, 0], borderColor: '#ef4444' } : {}}
                  transition={{ duration: 0.4 }}
                  type="text" 
                  value={guess}
                  onChange={(e) => setGuess(e.target.value)}
                  placeholder="Enter the secret phrase..."
                  className="w-full max-w-md bg-navy border-2 border-gray-600 rounded-xl px-6 py-4 text-white text-center text-xl font-bold uppercase tracking-widest focus:outline-none focus:border-gold transition-colors"
                />
                <button type="submit" className="bg-gold text-darkBlue px-10 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] mt-4">
                  Unlock Secret
                </button>
              </form>
            </>
          ) : (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(255,215,0,0.5)]">
                <Unlock className="w-16 h-16 text-darkBlue" />
              </div>
              <h2 className="text-4xl font-bold font-heading gradient-text mb-6">Code Cracked!</h2>
              <p className="text-2xl text-white font-bold tracking-widest uppercase mb-4 border-y border-gold/30 py-4">
                "GROW AND HELP GROW"
              </p>
              <p className="text-gray-300 text-lg">
                You've unlocked the true secret to Sir's success. It's not just about building a company; it's about building people. Happy Birthday Pradeep Sir!
              </p>
            </motion.div>
          )}
        </motion.div>
      </section>
    </PageTransition>
  );
};
