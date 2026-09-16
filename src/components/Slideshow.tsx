import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    rotateY: direction > 0 ? 45 : -45,
    scale: 0.8
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    rotateY: direction < 0 ? 45 : -45,
    scale: 0.8
  })
};

export const Slideshow = ({ images }: { images: {src: string, caption: string}[] }) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [page]);

  return (
    <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center overflow-hidden rounded-3xl bg-navy border border-gray-800 shadow-2xl perspective-1000">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          className="absolute w-full h-full flex flex-col items-center justify-center"
        >
          <div className="absolute inset-0 w-full h-full">
            <img src={images[imageIndex].src} alt="bg" className="w-full h-full object-cover blur-xl opacity-30" />
          </div>
          <img 
            src={images[imageIndex].src} 
            alt="Special Moment" 
            className="w-full h-full object-contain relative z-10"
            onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Special+Moment'; }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
            <p className="text-white text-xl md:text-3xl font-heading font-bold text-center drop-shadow-lg">
              {images[imageIndex].caption}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <button className="absolute left-4 z-10 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-gold hover:text-darkBlue transition-colors" onClick={() => paginate(-1)}>
        <ChevronLeft size={24} />
      </button>
      <button className="absolute right-4 z-10 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-gold hover:text-darkBlue transition-colors" onClick={() => paginate(1)}>
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
