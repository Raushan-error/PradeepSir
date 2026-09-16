import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { CursorSparkle } from './components/CursorSparkle';
import { MusicPlayer } from './components/MusicPlayer';
import { Home } from './pages/Home';
import { Journey } from './pages/Journey';
import { Gallery } from './pages/Gallery';
import { Wisdom } from './pages/Wisdom';
import { FunFacts } from './pages/FunFacts';
import { Games } from './pages/Games';
import { Finale } from './pages/Finale';
import './animations.css';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/wisdom" element={<Wisdom />} />
        <Route path="/fun-facts" element={<FunFacts />} />
        <Route path="/games" element={<Games />} />
        <Route path="/finale" element={<Finale />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <div className="font-sans antialiased selection:bg-gold selection:text-darkBlue min-h-screen bg-navy text-white">
      <BrowserRouter>
        <CursorSparkle />
        <MusicPlayer />
        <Header />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
