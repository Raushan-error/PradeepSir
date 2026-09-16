import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Hide the prompt after 5 seconds if they don't click
    const timer = setTimeout(() => setShowPrompt(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
      setShowPrompt(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
      <audio 
        ref={audioRef} 
        src="/music/nastelbom-happy-birthday-471481.mp3" 
        loop 
        autoPlay={false} 
      />

      <AnimatePresence>
        {showPrompt && !isPlaying && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-gold text-darkBlue px-4 py-2 rounded-xl font-bold shadow-lg flex items-center gap-2"
          >
            <span>Play Music!</span>
            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gold absolute -right-2 top-1/2 -translate-y-1/2" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] transition-colors border-2 ${
          isPlaying 
            ? 'bg-gold border-gold text-darkBlue' 
            : 'bg-darkBlue border-gray-600 text-gold'
        }`}
      >
        {isPlaying ? (
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
            <Volume2 size={24} />
          </motion.div>
        ) : (
          <VolumeX size={24} />
        )}
      </motion.button>
    </div>
  );
};
