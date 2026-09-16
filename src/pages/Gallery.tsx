import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Slideshow } from '../components/Slideshow';

export const Gallery = () => {
  const milestones = [
    { date: "May 16, 2016", title: "The First Taste of Success", desc: "Bought the first car, a Ford Aspire. A symbol of hard work paying off.", img: "/pics/WhatsApp Image 2026-09-16 at 6.54.51 PM (1).jpeg" },
    { date: "The Next Level", title: "Upgraded the Dream", desc: "Bought a Volvo. Elevating the standard and proving that the sky is the limit.", img: "/pics/WhatsApp Image 2026-09-16 at 6.31.02 PM.jpeg" },
    { date: "Ongoing", title: "Sigma IT Family", desc: "Creating jobs, leading a top IT firm in Lucknow, and helping others live their dreams.", img: "/pics/WhatsApp Image 2026-09-16 at 6.54.51 PM (4).jpeg" },
    { date: "Growth", title: "Unstoppable", desc: "The team grows, the vision expands.", img: "/pics/Sigmaupits_11.jpg"}
  ];

  const specialMoments = [
    { src: "/pics/Special Moments/directorSir (1).jpg", caption: "Leading from the front! 👑" },
    { src: "/pics/Special Moments/capture.png", caption: "Unforgettable memories with the team! 🎉" },
    { src: "/pics/Special Moments/images (1).jpg", caption: "Building the empire step by step. 🚀" },
    { src: "/pics/Special Moments/images (2).jpg", caption: "Always inspiring those around him. 💡" },
    { src: "/pics/Special Moments/images (3).jpg", caption: "Celebrate the small wins, aim for the big ones. 🏆" },
    { src: "/pics/Special Moments/images.jpg", caption: "Grow and Help Grow! 🤝" }
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-4 bg-lightNavy min-h-screen">
        <div className="max-w-6xl mx-auto">
          
          {/* Slideshow Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold font-heading gradient-text mb-4">Special Moments</h2>
              <p className="text-gray-400 text-lg">"Memories made with the Sigma IT Family"</p>
            </div>
            <Slideshow images={specialMoments} />
          </div>

          {/* Grid Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading gradient-text mb-4">Milestones & Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {milestones.map((item, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05, rotateZ: index % 2 === 0 ? 1 : -1 }} 
                className="bg-navy rounded-2xl overflow-hidden border border-gray-800 shadow-xl group relative cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80 z-10"></div>
                <div className="h-64 bg-darkBlue overflow-hidden relative group-hover:bg-black transition-colors">
                  <div className="absolute inset-0">
                    <img src={item.img} className="w-full h-full object-cover blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                  </div>
                  <img src={item.img} alt={item.title} className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-700" onError={(e)=>{e.currentTarget.src='https://via.placeholder.com/600x400?text=Insert+Photo'}} />
                  <div className="absolute top-4 right-4 bg-gold text-darkBlue font-bold px-4 py-2 rounded-full text-sm z-20 shadow-lg animate-bounce-slow">
                    {item.date}
                  </div>
                </div>
                <div className="p-8 relative z-20 -mt-16">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
