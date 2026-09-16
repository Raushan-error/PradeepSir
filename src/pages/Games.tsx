import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';

const QUIZ = [
  {
    q: 'What was the starting capital of Pradeep Sir\'s first company, Hyagreev Infotech?',
    options: ['₹5,000', '₹20,000', '₹50,000', '₹1 Lakh'],
    answer: 1,
  },
  {
    q: 'What is the tagline of Sigma IT?',
    options: ['Think Big', 'Work Smart', 'Grow and Help Grow', 'Dream and Achieve'],
    answer: 2,
  },
  {
    q: 'Which college did Pradeep Sir attend for his BCA?',
    options: ['IIT Kanpur', 'Guru Nanak Institute Of Management & Technology', 'Amity University', 'NIT Allahabad'],
    answer: 1,
  },
  {
    q: 'What was the first car Pradeep Sir bought?',
    options: ['Honda City', 'Maruti Swift', 'Ford Aspire', 'Hyundai i20'],
    answer: 2,
  },
];

const QuizGame = () => {
  const [current, setCurrent] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [selected, setSelected] = React.useState<number | null>(null);
  const [done, setDone] = React.useState(false);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === QUIZ[current].answer) setScore(s => s + 1);

    setTimeout(() => {
      if (current + 1 < QUIZ.length) {
        setCurrent(c => c + 1);
        setSelected(null);
      } else {
        setDone(true);
      }
    }, 1200);
  };

  const restart = () => {
    setCurrent(0); setScore(0); setSelected(null); setDone(false);
  };

  const q = QUIZ[current];

  return (
    <div className="glass-card p-8 rounded-3xl border border-gray-700">
      {!done ? (
        <>
          <div className="flex justify-between mb-6 text-sm text-gray-400 font-heading uppercase tracking-widest">
            <span>Question {current + 1}/{QUIZ.length}</span>
            <span className="text-gold font-bold">Score: {score}</span>
          </div>
          <motion.h3
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-bold text-white mb-8"
          >
            {q.q}
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {q.options.map((opt, i) => {
              let cls = 'border-gray-600 text-gray-200 hover:border-gold hover:bg-gold/10';
              if (selected !== null) {
                if (i === q.answer) cls = 'border-green-400 bg-green-900/50 text-green-300';
                else if (i === selected) cls = 'border-red-400 bg-red-900/50 text-red-300';
                else cls = 'border-gray-700 text-gray-500';
              }
              return (
                <motion.button
                  key={i}
                  whileHover={selected === null ? { scale: 1.03 } : {}}
                  whileTap={selected === null ? { scale: 0.97 } : {}}
                  onClick={() => handleAnswer(i)}
                  className={`p-4 rounded-xl border-2 text-left font-medium transition-all ${cls}`}
                >
                  <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span> {opt}
                </motion.button>
              );
            })}
          </div>
        </>
      ) : (
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
          <div className="text-6xl mb-4">{score === QUIZ.length ? '🏆' : score >= 2 ? '🎯' : '📚'}</div>
          <h3 className="text-3xl font-bold font-heading text-white mb-2">
            {score === QUIZ.length ? 'Perfect Score!' : 'Quiz Complete!'}
          </h3>
          <p className="text-xl text-gray-300 mb-2">You scored <span className="text-gold font-bold">{score}/{QUIZ.length}</span></p>
          <p className="text-gray-400 mb-8">
            {score === QUIZ.length
              ? 'You truly know Pradeep Sir well! You\'re a true Sigma IT family member!'
              : 'Keep learning about the journey — every detail is an inspiration!'}
          </p>
          <button onClick={restart} className="bg-gold text-darkBlue px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors">
            Play Again
          </button>
        </motion.div>
      )}
    </div>
  );
};

export const Games = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-24 px-4 bg-darkBlue min-h-screen">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold font-heading gradient-text mb-4">The Sigma Quiz 🧠</h2>
            <p className="text-gray-400 text-xl">Test your knowledge about Pradeep Sir's journey!</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <QuizGame />
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};
