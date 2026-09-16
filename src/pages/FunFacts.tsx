import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Droplets, CalendarDays, HelpCircle, Star, Users, TerminalSquare, Rocket, Heart } from 'lucide-react';

const facts = [
  {
    icon: <Coffee className="w-12 h-12 text-amber-600" />,
    title: "Favorite Drink",
    fact: "Coffee ☕",
    funnyText: "Because coding and building an empire cannot run on just water! Ek aur cup ho jaye? 😂",
    color: "bg-amber-100 text-amber-900 border-amber-300"
  },
  {
    icon: <Droplets className="w-12 h-12 text-blue-500" />,
    title: "Favorite Project",
    fact: "Jal Jeevan Mission (JJM)",
    funnyText: "JJM is not just a project for Sir, it's a pure emotion! Har ghar jal, aur har screen pe JJM! 🚰",
    color: "bg-blue-100 text-blue-900 border-blue-300"
  },
  {
    icon: <CalendarDays className="w-12 h-12 text-purple-500" />,
    title: "Favorite Hobby",
    fact: "Attending JJM Meetings",
    funnyText: "Normal people: Let's chill on the weekend. \nSir: Let's schedule another JJM meeting! 📅😅",
    color: "bg-purple-100 text-purple-900 border-purple-300"
  },
  {
    icon: <HelpCircle className="w-12 h-12 text-red-500" />,
    title: "Favorite Question",
    fact: '"Kitna Kaam bacha hai abhi..?"',
    funnyText: '"...kitna bacha hai abhi kaam?" The universal alarm clock that wakes up every developer at Sigma IT! ⏰🏃‍♂️',
    color: "bg-red-100 text-red-900 border-red-300"
  },
  {
    icon: <Users className="w-12 h-12 text-green-600" />,
    title: "Favorite Sirs",
    fact: "Raj Shekhar Sir & Imraan Sir",
    funnyText: "The Ultimate Dream Team! The respect and bond here is absolutely top-tier. 🤝✨",
    color: "bg-green-100 text-green-900 border-green-300"
  },
  {
    icon: <Star className="w-12 h-12 text-yellow-600" />,
    title: "Favorite Employee",
    fact: "Pradeep Chaurasia Sir",
    funnyText: "Jab naam mein hi 'Pradeep' ho, toh favorite toh banna hi tha! Two Pradeeps running the show! 🔥",
    color: "bg-yellow-100 text-yellow-900 border-yellow-300"
  },
  {
    icon: <TerminalSquare className="w-12 h-12 text-indigo-500" />,
    title: "Favorite Savage Line",
    fact: '"AI aaye chahe jaye.. we don\'t care!"',
    funnyText: '"Hamlog project 10 saal ke liye kara lenge!" Internet: AI will take our jobs! Sir: Hold my coffee! 😎💥',
    color: "bg-indigo-100 text-indigo-900 border-indigo-300"
  },
  {
    icon: <Rocket className="w-12 h-12 text-pink-500" />,
    title: "Favorite Dream",
    fact: "Making SigmaIT the Best in India",
    funnyText: "From ₹20K to an empire. India's #1 Software Company is not just a dream, it's the next milestone! 🚀",
    color: "bg-pink-100 text-pink-900 border-pink-300"
  }
];

export const FunFacts = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-4 bg-navy min-h-screen relative overflow-hidden">
        {/* Animated Background Confetti */}
        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ type: "spring", bounce: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4 drop-shadow-lg">
              Sir's Secret File 🤫
            </h2>
            <p className="text-xl text-gray-300">The Ultimate List of Sir's Likes, Dislikes & Legendary Quotes!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: Math.random() * 10 - 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.4, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                className={`relative p-8 rounded-3xl border-4 shadow-2xl cursor-pointer overflow-hidden ${item.color} transform transition-all`}
              >
                {/* Jiggly Icon */}
                <motion.div 
                  animate={hoveredIndex === index ? { rotate: [0, -15, 15, -15, 15, 0], scale: 1.2 } : {}}
                  transition={{ duration: 0.5 }}
                  className="bg-white/50 w-20 h-20 rounded-2xl flex items-center justify-center shadow-inner mb-6 backdrop-blur-sm"
                >
                  {item.icon}
                </motion.div>
                
                <h4 className="text-sm uppercase tracking-widest font-bold opacity-70 mb-2">{item.title}</h4>
                <h3 className="text-2xl font-black font-heading mb-4 leading-tight">{item.fact}</h3>
                
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-lg font-medium italic mt-4 pt-4 border-t-2 border-black/10"
                    >
                      {item.funnyText}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {hoveredIndex !== index && (
                  <p className="text-sm font-bold opacity-50 mt-4 animate-pulse">Hover to reveal truth 👀</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Special Apology Note from Raushan */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="mt-20 max-w-3xl mx-auto bg-yellow-200 text-yellow-900 p-8 md:p-12 rounded-[3rem] border-8 border-yellow-400 shadow-[0_20px_50px_rgba(250,204,21,0.3)] relative"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-500 w-12 h-12 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
              <Heart className="text-white w-6 h-6 animate-ping absolute" />
              <Heart className="text-white w-6 h-6 relative" />
            </div>
            <h3 className="text-3xl font-black font-heading mb-4 text-center">A Tiny Note from Raushan 📝</h3>
            <p className="text-xl md:text-2xl font-medium text-center leading-relaxed italic">
              "Sir, is birthday gift (website) ke kisi bhi line mein agar koi galti ho gayi ho, ya kuch zyada bol diya ho... toh chhota bhai samajh kar maaf kar dijiyega! Sab kuch bas aapke chehre par smile laane ke liye tha! 🙏😂"
            </p>
            <p className="text-center mt-6 font-bold text-lg uppercase tracking-widest text-yellow-700">
              Happy Birthday Once Again! 🎂
            </p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};
