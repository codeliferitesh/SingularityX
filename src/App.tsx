import { useState, useEffect } from 'react';
import { Header, type Theme } from './components/Header';
import { RetroStatusBar } from './components/RetroStatusBar';
import { Hero } from './components/Hero';
import { IdentityStrip } from './components/IdentityStrip';
import { Team } from './components/Team';
import { WhatWeBuild } from './components/WhatWeBuild';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { ProjectTeaser } from './components/ProjectTeaser';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const THEME_STORAGE_KEY = 'singularityx-theme';

export function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. Check saved preference in localStorage
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    if (saved === 'dark' || saved === 'light' || saved === 'retro') {
      return saved;
    }
    // 2. Fall back to system preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div className="site-wrapper">
      {/* Subtle CRT overlay active in retro mode */}
      <div className="crt-overlay" aria-hidden="true"></div>

      <Header currentTheme={theme} onThemeChange={setTheme} />
      <RetroStatusBar />

      <main>
        <Hero />
        <IdentityStrip />
        <Team />
        <WhatWeBuild />
        <CurrentlyExploring />
        <ProjectTeaser />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
