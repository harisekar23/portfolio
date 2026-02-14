import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Impact from './components/Impact';
import Projects from './components/Projects';
import FreelanceServices from './components/FreelanceServices';
import TechStack from './components/TechStack';
import TechStackVisual from './components/TechStackVisual';
import Contact from './components/Contact';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0A0A0A]' : 'bg-white'}`}>
      <Navigation darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <main>
        <Hero />
        <About />
        <Impact />
        <Projects />
        <TechStackVisual />
        <FreelanceServices />
        <Contact />
      </main>
    </div>
  );
}