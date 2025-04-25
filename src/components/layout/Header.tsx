import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { navItems } from '../../data/navigation';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import PhoneButton from "../ui/PhoneButton";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // منع تمرير الخلفية عند فتح القائمة الجانبية
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    // تنظيف عند إلغاء المكون
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-blue-600 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-2 py-1 flex items-center justify-between min-h-[48px]">
        <div className="flex items-center">
          <a href="/" className="text-white font-bold text-base md:text-lg" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <span className="text-xl md:text-2xl">❄️</span> {language === 'ar' ? 'تصليح أجهزة التبريد - الجلفة' : 'Réparation de Réfrigération - Djelfa'}
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-0.5 space-x-reverse rtl:space-x-reverse">
          <nav className={`flex gap-0.5 ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2 py-1 text-white text-sm hover:bg-white/10 rounded-md transition-colors"
                dir={language === 'ar' ? 'rtl' : 'ltr'}
              >
                {t(item.label)}
              </a>
            ))}
          </nav>
          <div className="flex items-center ml-2 rtl:mr-2 rtl:ml-0 gap-1">
            <LanguageSwitcher />
            <PhoneButton showText={false} className="w-10 h-10 p-0" />
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <PhoneButton showText={false} className="w-10 h-10 p-0" />
          <button 
            onClick={toggleMenu}
            className="p-2 text-white focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-blue-600 z-50 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : language === 'ar' ? 'translate-x-full' : '-translate-x-full'
        } md:hidden overflow-y-auto`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-end">
          <button 
            onClick={closeMenu}
            className="p-2 text-white focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="container mx-auto px-4 py-8 flex flex-col" dir={language === 'ar' ? 'rtl' : 'ltr'}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-3 text-white text-xl border-b border-white/20 hover:bg-white/10"
              onClick={closeMenu}
            >
              {t(item.label)}
            </a>
          ))}
          
          <div className="mt-8">
            <PhoneButton />
          </div>
        </nav>
      </div>
    </header>
  );
};