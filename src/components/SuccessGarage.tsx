import React from 'react';
import { motion } from 'framer-motion';

const CARS = [
  {
    name: 'Ford Aspire',
    tagline: 'The First Milestone',
    desc: "The first car bought from pure hustle. It's not just a vehicle; it's a symbol of taking the first massive leap into success.",
    img: '/pics/WhatsApp Image 2026-09-16 at 6.54.51 PM (1).jpeg',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'The Dream Upgrade',
    tagline: 'Scaling Up',
    desc: "As Sigma IT grew, so did the dreams. This car represents the relentless growth mindset: 'Never settle, always upgrade.'",
    img: '/pics/WhatsApp Image 2026-09-16 at 6.31.02 PM.jpeg',
    color: 'from-gold to-orange-500'
  }
];

export const SuccessGarage = () => {
  return (
    <section className="py-20 relative">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-5xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300 mb-4">
          The Success Garage 🚘
        </h3>
        <p className="text-gray-400 text-lg">What we learn from Pradeep Sir's journey of upgrading his life.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {CARS.map((car, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group glass-card rounded-3xl overflow-hidden border border-gray-700 hover:border-gold/50 transition-colors shadow-2xl"
          >
            {/* Image Container */}
            <div className="h-64 md:h-80 w-full relative overflow-hidden bg-black">
              <div className="absolute inset-0">
                <img src={car.img} className="w-full h-full object-cover blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
              </div>
              <img 
                src={car.img} 
                alt={car.name} 
                className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-700" 
                onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/800x400?text=Success+Car' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                <p className={`text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${car.color} mb-1`}>
                  {car.tagline}
                </p>
                <h4 className="text-2xl md:text-3xl font-heading font-bold text-white">{car.name}</h4>
              </div>
            </div>

            {/* Learnings Container */}
            <div className="p-8 bg-lightNavy/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center shrink-0 border border-gold/30">
                  <span className="text-xl">💡</span>
                </div>
                <div>
                  <h5 className="font-bold text-gray-200 mb-2">The Lesson:</h5>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {car.desc}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
