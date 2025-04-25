import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, MapPin, Facebook } from 'lucide-react';
import PhoneButton from "../ui/PhoneButton";

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  const footerText = {
    copyright: {
      ar: '© جميع الحقوق محفوظة',
      fr: '© Tous droits réservés'
    },
    address: {
      ar: 'الجلفة، الجزائر',
      fr: 'Djelfa, Algérie'
    },
    follow: {
      ar: 'تابعنا',
      fr: 'Suivez-nous'
    },
    navigation: {
      ar: 'روابط سريعة',
      fr: 'Liens rapides'
    }
  };

  return (
    <footer className="bg-blue-900 text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and info */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2 rtl:ml-2 rtl:mr-0">❄️</span>
              {language === 'ar' ? 'تصليح أجهزة التبريد' : 'Réparation de Réfrigération'}
            </h3>
            <p className="text-gray-300 mb-4">
              {language === 'ar' 
                ? 'نقدم لكم خدمة تصليح وصيانة جميع أجهزة التبريد باحترافية في الجلفة!'
                : 'Nous vous offrons un service professionnel de réparation et de maintenance pour tous vos appareils de réfrigération à Djelfa!'}
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === 'ar' ? 'اتصل بنا' : 'Contact'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <PhoneButton showText={false} className="w-10 h-10 p-0" />
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-300" />
                <span>{t(footerText.address)}</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links and Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t(footerText.navigation)}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:underline">
                  {language === 'ar' ? 'خدماتنا' : 'Nos Services'}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:underline">
                  {language === 'ar' ? 'معرض الأعمال' : 'Galerie'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  {language === 'ar' ? 'من نحن' : 'À Propos'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  {language === 'ar' ? 'اتصل بنا' : 'Contact'}
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">{t(footerText.follow)}</h3>
              <div className="flex gap-4">
                <a 
                  href="https://web.facebook.com/djelfafroid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            {t(footerText.copyright)} {currentYear} - 
            {language === 'ar' ? ' تصليح أجهزة التبريد - الجلفة' : ' Réparation de Réfrigération - Djelfa'}
          </p>
        </div>
      </div>
      {/* Attribution */}
      <div className="mt-8 text-center text-gray-400 text-xs">
        مصمم ومطور بواسطة  <a href="https://t.me/hikiamir" target="_blank" rel="noopener noreferrer">Amir Labaz</a>
      </div>
    </footer>
  );
};
