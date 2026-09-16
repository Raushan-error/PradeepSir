import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { RefreshCw, Trophy } from 'lucide-react';

const EMOJIS = ['💻', '⌨️', '📱', '🖱️', '🔋', '🖥️', '📡', '💾'];

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

const createDeck = (): Card[] => {
  const selected = EMOJIS.slice(0, 8);
  return shuffle([...selected, ...selected].map((emoji, id) => ({
    id,
    emoji,
    isFlipped: false,
    isMatched: false,
  })));
};

export const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>(createDeck());
  const [flipped, setFlipped] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [won, setWon] = useState(false);

  const reset = () => {
    setCards(createDeck());
    setFlipped([]);
    setMoves(0);
    setMatches(0);
    setIsChecking(false);
    setWon(false);
  };

  const handleFlip = useCallback((id: number) => {
    if (isChecking) return;
    
    // Find the actual card in the shuffled array
    const cardIndex = cards.findIndex(c => c.id === id);
    const card = cards[cardIndex];
    
    if (!card || card.isFlipped || card.isMatched) return;
    if (flipped.length === 1 && flipped[0] === id) return;

    const newFlipped = [...flipped, id];
    setCards(prev => prev.map(c => c.id === id ? { ...c, isFlipped: true } : c));
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setIsChecking(true);
      setMoves(m => m + 1);
      
      const firstCard = cards.find(c => c.id === newFlipped[0]);
      const secondCard = cards.find(c => c.id === newFlipped[1]);
      
      if (firstCard && secondCard && firstCard.emoji === secondCard.emoji) {
        setTimeout(() => {
          setCards(prev => prev.map(c =>
            c.id === newFlipped[0] || c.id === newFlipped[1] ? { ...c, isMatched: true } : c
          ));
          setMatches(m => {
            const newMatches = m + 1;
            if (newMatches === 8) {
              setWon(true);
              confetti({ particleCount: 200, spread: 120, origin: { y: 0.5 }, colors: ['#ffd700', '#ff8c00', '#ffffff'] });
            }
            return newMatches;
          });
          setFlipped([]);
          setIsChecking(false);
        }, 600);
      } else {
        setTimeout(() => {
          setCards(prev => prev.map(c =>
            c.id === newFlipped[0] || c.id === newFlipped[1] ? { ...c, isFlipped: false } : c
          ));
          setFlipped([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  }, [cards, flipped, isChecking]);

  return (
    <div className="text-center">
      <div className="flex items-center justify-between mb-6 glass-card px-6 py-4 rounded-2xl">
        <div className="text-center">
          <p className="text-gray-400 text-xs uppercase tracking-widest">Moves</p>
          <p className="text-2xl font-bold text-white">{moves}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-xs uppercase tracking-widest">Matches</p>
          <p className="text-2xl font-bold gradient-text">{matches}/8</p>
        </div>
        <button onClick={reset} className="flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-xl hover:bg-gold hover:text-darkBlue transition-colors font-bold text-sm border border-gold/30">
          <RefreshCw size={16} /> Reset
        </button>
      </div>

      <AnimatePresence>
        {won && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-6 p-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl border border-gold/40"
          >
            <Trophy className="w-12 h-12 text-gold mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white">You Won in {moves} moves! 🎉</h3>
            <p className="text-gray-300 mt-2">Sir would be proud of your focus!</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-4 gap-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flip-card h-16 w-full cursor-pointer"
            style={{ aspectRatio: '1' }}
            onClick={() => handleFlip(card.id)}
          >
            <div className={`flip-card-inner relative w-full h-full ${card.isFlipped || card.isMatched ? 'flipped' : ''}`}>
              {/* Front */}
              <div className="flip-card-front absolute inset-0 flex items-center justify-center rounded-xl bg-lightNavy border-2 border-gray-700 hover:border-gold/50 transition-colors shadow-lg">
                <span className="text-2xl">?</span>
              </div>
              {/* Back */}
              <div className={`flip-card-back absolute inset-0 flex items-center justify-center rounded-xl border-2 transition-all shadow-lg ${card.isMatched ? 'bg-green-900/50 border-green-500/50 card-shadow-glow' : 'bg-darkBlue border-gold/40'}`}>
                <span className="text-3xl">{card.emoji}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
