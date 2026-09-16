import React, { useState, useEffect } from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { MapPin, GraduationCap, Briefcase, Building2, Target, TrendingUp, ChevronRight, ChevronLeft, Quote, Star, Rocket, Award, Zap } from 'lucide-react';

const timelineData = [
  { 
    title: "The Roots", 
    subtitle: "Pratapgarh", 
    desc: "Where it all began. The early days of schooling built a strong foundation of values and dreams.", 
    quote: "A strong foundation builds an unshakeable empire.",
    icon: <MapPin className="w-6 h-6 md:w-8 md:h-8" />,
    img: "/pics/Special Moments/images (1).jpg"
  },
  { 
    title: "Stepping Out", 
    subtitle: "Guru Nanak Institute Of Management And Technology", 
    desc: "Pursued BCA at the Gujarkhan Campus, Model Town, Ludhiana, Punjab. The very first step towards the vast world of technology and limitless possibilities.", 
    quote: "Education is not preparation for life; education is life itself.",
    icon: <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />,
    img: "/pics/Special Moments/images (2).jpg"
  },
  { 
    title: "The Hustle Begins", 
    subtitle: "Nut-Bolt Company", 
    desc: "First job as a Sales Executive. Grinding on the ground level, learning the art of communication and sales.", 
    quote: "Hustle beats talent when talent doesn't hustle.",
    icon: <Briefcase className="w-6 h-6 md:w-8 md:h-8" />,
    img: "/pics/Special Moments/images (3).jpg"
  },
  { 
    title: "Corporate Experience", 
    subtitle: "IBM", 
    desc: "Worked as a Sales Executive at a global giant. Gaining invaluable corporate exposure and understanding scale.", 
    quote: "Learn from the giants, then build your own kingdom.",
    icon: <Building2 className="w-6 h-6 md:w-8 md:h-8" />,
    img: "/pics/Special Moments/images.jpg"
  },
  { 
    title: "The Rebirth", 
    subtitle: "Amity University, Lucknow", 
    desc: "Decided to pivot and reignite ambitions. Completed MCA, merging sales acumen with deep technical knowledge.", 
    quote: "It's never too late to reinvent yourself.",
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
    img: "/pics/Special Moments/directorSir (1).jpg"
  },
  { 
    title: "The First Risk", 
    subtitle: "Hyagreev Infotech", 
    desc: "Started the first company with 3 partners and just ₹20,000. It eventually closed, but provided the most crucial business lessons.", 
    quote: "Failure is simply the opportunity to begin again, this time more intelligently.",
    icon: <Target className="w-6 h-6 md:w-8 md:h-8" />,
    img: "/pics/Special Moments/capture.png"
  },
  { 
    title: "The Turning Point", 
    subtitle: "Sigma IT Software Designers Pvt. Ltd.", 
    desc: "Founded with the vision 'Grow and Help Grow'. Leading the company to new heights every single day.", 
    quote: "True leadership is about empowering others to succeed.",
    icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
    img: "/pics/Sigmaupits_11.jpg"
  },
  {
    title: "Happy Birthday!",
    subtitle: "Thank You, Pradeep Sir",
    desc: "Thank you for being the ultimate mentor, leader, and inspiration. Wishing you a very, very Happy Birthday! 🎂🎉",
    quote: "The journey is just getting started.",
    icon: <Star className="w-6 h-6 md:w-8 md:h-8" />,
    img: "/pics/WhatsApp Image 2026-09-16 at 6.54.51 PM.jpeg"
  }
];

export const Journey = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (activeStep === timelineData.length - 1) {
      const duration = 3000;
      const end = Date.now() + duration;
      const frame = () => {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ffd700', '#ff8c00', '#ffffff'] });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ffd700', '#ff8c00', '#ffffff'] });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      frame();
    }
  }, [activeStep]);

  const nextStep = () => {
    if (activeStep < timelineData.length - 1) {
      setActiveStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    }
  };

  const current = timelineData[activeStep];

  return (
    <PageTransition>
      <section className="pt-24 pb-12 px-4 bg-darkBlue min-h-screen flex flex-col justify-center relative overflow-hidden">
        {/* Background glow for current step */}
        <motion.div 
          key={`bg-${activeStep}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gold/10 blur-[150px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto w-full z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-bold font-heading gradient-text mb-4 uppercase tracking-widest">
              The Epic Journey
            </h2>
            <p className="text-gray-400 text-lg font-light">Walk through the chapters that built a legacy.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Side: Navigation & Timeline Tracker */}
            <div className="w-full lg:w-1/3 flex flex-col order-2 lg:order-1">
              <div className="relative border-l-2 border-gray-800 ml-6 pb-4">
                {timelineData.slice(0, activeStep + 1).map((item, index) => {
                  const isActive = index === activeStep;
                  const isPast = index < activeStep;
                  
                  return (
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={index} 
                      className="relative pl-10 mb-8 cursor-pointer group"
                      onClick={() => setActiveStep(index)}
                    >
                      {/* Node Icon */}
                      <motion.div 
                        animate={{ 
                          backgroundColor: isActive ? '#ffd700' : isPast ? '#ff8c00' : '#020c1b',
                          borderColor: isActive || isPast ? '#ffd700' : '#374151',
                          color: isActive ? '#020c1b' : isPast ? '#fff' : '#9ca3af',
                          scale: isActive ? 1.2 : 1
                        }}
                        className={`absolute -left-6 top-0 w-12 h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${isActive ? 'shadow-[0_0_20px_rgba(255,215,0,0.6)]' : ''}`}
                      >
                        {item.icon}
                      </motion.div>

                      {/* Text */}
                      <div className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-70'}`}>
                        <h4 className={`text-lg font-bold font-heading ${isActive ? 'text-gold' : 'text-white'}`}>
                          Step {index + 1}: {item.title}
                        </h4>
                        <p className="text-sm text-gray-400">{item.subtitle}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8 ml-4">
                <button 
                  onClick={prevStep}
                  disabled={activeStep === 0}
                  className="p-4 rounded-full bg-lightNavy border border-gray-700 text-white hover:bg-gold hover:text-darkBlue hover:border-gold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextStep}
                  disabled={activeStep === timelineData.length - 1}
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-gold text-darkBlue font-bold text-lg hover:bg-yellow-400 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                >
                  {activeStep === timelineData.length - 1 ? 'End of Journey' : 'Next Milestone'} 
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Right Side: Featured Content Display */}
            <div className="w-full lg:w-2/3 order-1 lg:order-2 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  className="glass-card rounded-3xl p-6 md:p-10 border border-gold/20 shadow-2xl relative overflow-hidden"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Star size={100} className="text-gold" />
                  </div>
                  
                  {/* Image */}
                  <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 border-2 border-gray-700 shadow-lg relative group bg-darkBlue">
                    <div className="absolute inset-0">
                      <img src={current.img} className="w-full h-full object-cover blur-xl opacity-30" />
                    </div>
                    <img 
                      src={current.img} 
                      alt={current.title} 
                      className="w-full h-full object-contain relative z-10 transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Journey+Moment' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkBlue/90 via-darkBlue/20 to-transparent flex items-end p-6">
                      <div className="flex items-center gap-3 text-gold">
                        {current.icon}
                        <span className="font-bold text-xl uppercase tracking-widest">{current.title}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-2 font-heading">{current.subtitle}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {current.desc}
                    </p>

                    {/* Inspiring Quote Block */}
                    <div className="bg-lightNavy/50 border-l-4 border-gold p-6 rounded-r-xl italic">
                      <Quote className="w-8 h-8 text-gold/40 mb-2" />
                      <p className="text-xl text-goldLight font-medium">"{current.quote}"</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
};
