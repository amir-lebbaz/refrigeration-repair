import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Languages } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'fr' : 'ar');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
      aria-label={language === 'ar' ? 'Switch to French' : 'Passer à l\'arabe'}
    >
      <Languages size={16} />
      <span className="text-sm font-medium">
        {language === 'ar' ? 'Français' : 'العربية'}
      </span>
    </button>
  );
};