import React, { useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Gallery } from './components/sections/Gallery';
import { About } from './components/sections/About';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { initAnimations } from './utils/animations';

const MainContent: React.FC = () => {
  const { language } = useLanguage();

  useEffect(() => {
    // Initialize animations
    initAnimations();
    
    // Set document direction based on language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Update page title based on language
    document.title = language === 'ar' 
      ? 'تصليح أجهزة التبريد - الجلفة' 
      : 'Réparation de Réfrigération - Djelfa';
  }, [language]);

  return (
    <div className={`min-h-screen flex flex-col ${language === 'ar' ? 'font-arabic' : 'font-french'}`}>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;