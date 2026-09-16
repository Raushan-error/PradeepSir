import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import { SuccessGarage } from '../components/SuccessGarage';

export const Wisdom = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-4 bg-navy min-h-screen relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">
              Words of Wisdom
            </h2>
            <p className="text-gray-400 text-xl">What we learn from watching a true leader in action.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-8">
              {[
                { title: "Resilience in Failure", text: "Failures like the closure of the first venture are not roadblocks; they are the strongest stepping stones. Bounce back harder!" },
                { title: "Leading from the Front", text: "When times are tough, the leader stands first. A true boss doesn't just manage; he inspires action by doing it himself." },
                { title: "Empowerment", text: "'Grow and Help Grow' isn't just a tagline. It's a commitment to lift everyone up as you climb." }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -50 }} 
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex gap-6 items-start bg-lightNavy/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm"
                >
                  <div className="mt-1 bg-gradient-to-br from-gold to-orange-500 p-3 rounded-full shadow-lg">
                    <Sparkles className="w-6 h-6 text-darkBlue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }} 
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-cyan-500/20 blur-3xl rounded-full"></div>
              <div className="glass-card p-10 rounded-[3rem] relative z-10 border border-gold/30 shadow-2xl">
                <Quote className="w-16 h-16 text-gold/40 mb-8" />
                <p className="text-2xl md:text-3xl text-gray-200 font-light italic leading-relaxed mb-10">
                  "Success is not about the resources you start with; it's about the resourcefulness you build along the way. Never settle, never stop hustling."
                </p>
                <div className="flex items-center gap-6 bg-darkBlue/50 p-4 rounded-full border border-gray-700">
                  <div className="w-16 h-16 bg-gray-700 rounded-full overflow-hidden border-2 border-gold shadow-lg shadow-gold/20">
                     <img src="/pics/WhatsApp Image 2026-09-16 at 6.54.51 PM (8).jpeg" alt="Sir" className="w-full h-full object-cover" onError={(e)=>{e.currentTarget.src='https://via.placeholder.com/150'}} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-xl">Pradeep Tiwari</h5>
                    <span className="text-gold text-sm font-semibold tracking-wider uppercase">Director, Sigma IT</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-24">
            <SuccessGarage />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
