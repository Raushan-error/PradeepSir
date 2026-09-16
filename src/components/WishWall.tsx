import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const wishes = [
  { name: 'Raushan Kumar', role: 'Developer', note: 'Sir, your belief in us is what makes us give 200% every day. Happy Birthday!', color: '#fef3c7', rotate: '-2deg' },
  { name: 'Sigma IT Team', role: 'Team', note: 'Your leadership turns ordinary work into extraordinary results. 🚀', color: '#dbeafe', rotate: '1.5deg' },
  { name: 'From Everyone', role: 'Family', note: 'Thank you for creating a place where we feel like family, not just employees. ❤️', color: '#dcfce7', rotate: '3deg' },
  { name: 'The Whole Office', role: 'Colleagues', note: 'We study every day watching how you handle pressure like a true champion!', color: '#fce7f3', rotate: '-1deg' },
  { name: 'Junior Devs', role: 'Team Members', note: 'You started with ₹20K and built an empire. That is our biggest inspiration! 💰', color: '#ede9fe', rotate: '2.5deg' },
  { name: 'Design Team', role: 'Creatives', note: 'Grow and Help Grow — you actually LIVE this every single day. Thank you!', color: '#ffedd5', rotate: '-3deg' },
];

export const WishWall = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-lightNavy relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading gradient-text mb-4">Wish Wall 📌</h2>
          <p className="text-gray-400 text-lg">Messages from the Sigma IT Family — click a note to read it!</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              layoutId={`card-${index}`}
              className="sticky-note cursor-pointer p-6 rounded-lg shadow-2xl"
              style={{ backgroundColor: wish.color, transform: `rotate(${wish.rotate})` }}
              whileHover={{ rotate: '0deg', scale: 1.05, zIndex: 10 }}
              onClick={() => setSelected(index)}
            >
              <div className="w-full h-3 bg-yellow-300/50 absolute top-0 left-0 rounded-t-lg" />
              <div className="w-4 h-4 rounded-full bg-yellow-400 absolute -top-2 left-1/2 -translate-x-1/2 shadow-md" />
              <p className="text-gray-800 text-sm md:text-base leading-relaxed font-medium mt-4 line-clamp-3">{wish.note}</p>
              <div className="mt-4 pt-3 border-t border-black/10">
                <p className="text-gray-700 font-bold text-sm">{wish.name}</p>
                <p className="text-gray-500 text-xs">{wish.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <motion.div
              layoutId={`card-${selected}`}
              className="relative p-10 rounded-2xl shadow-2xl max-w-lg w-full cursor-pointer"
              style={{ backgroundColor: wishes[selected].color }}
              onClick={() => setSelected(null)}
            >
              <div className="w-6 h-6 rounded-full bg-yellow-400 absolute -top-3 left-1/2 -translate-x-1/2 shadow-lg" />
              <p className="text-gray-800 text-xl leading-relaxed font-medium mt-4">{wishes[selected].note}</p>
              <div className="mt-6 pt-4 border-t border-black/10">
                <p className="text-gray-700 font-bold text-lg">{wishes[selected].name}</p>
                <p className="text-gray-500">{wishes[selected].role}</p>
              </div>
              <p className="text-gray-400 text-sm mt-4 text-center">Click anywhere to close</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
