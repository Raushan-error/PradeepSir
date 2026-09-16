import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: '🏠 Home', path: '/' },
    { name: '🗺️ Journey', path: '/journey' },
    { name: '🖼️ Gallery', path: '/gallery' },
    { name: '💡 Wisdom', path: '/wisdom' },
    { name: '🎭 Fun Facts', path: '/fun-facts' },
    { name: '🎮 Games', path: '/games' },
    { name: '🎉 Finale', path: '/finale' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 group">
          <motion.img
            src="/pics/logo.gif"
            alt="Sigma IT"
            className="h-12 w-auto object-contain rounded-lg shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 400 }}
          />
          <div className="hidden sm:block">
            <p className="font-heading font-bold text-lg gradient-text tracking-wider">SIGMA IT</p>
            <p className="text-gray-500 text-xs tracking-widest">SOFTWARE DESIGNERS</p>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden xl:flex gap-6 text-xs font-bold uppercase tracking-widest text-gray-400">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `hover:text-gold transition-colors px-2 py-1 rounded-lg hover:bg-gold/10 ${isActive ? 'text-gold bg-gold/10' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="xl:hidden text-white p-2 hover:text-gold transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-0 right-0 bg-darkBlue border-b border-gray-800 flex flex-col items-center py-6 gap-4 xl:hidden shadow-2xl"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-base uppercase tracking-widest font-heading font-bold hover:text-gold transition-colors px-6 py-2 rounded-xl hover:bg-gold/10 ${isActive ? 'text-gold bg-gold/10' : 'text-gray-300'}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
