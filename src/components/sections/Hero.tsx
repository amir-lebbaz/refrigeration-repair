import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PhoneButton from '../ui/PhoneButton';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  
  const heroContent = {
    title: {
      ar: 'خدمة تصليح أجهزة التبريد الاحترافية في الجلفة',
      fr: 'Service Professionnel de Réparation de Réfrigération à Djelfa'
    },
    subtitle: {
      ar: 'نقدم لكم خدمة تصليح وصيانة جميع أجهزة التبريد باحترافية وبأسعار منافسة!',
      fr: 'Nous offrons des services de réparation et d\'entretien pour tous les appareils de réfrigération avec professionnalisme et à des prix compétitifs!'
    },
    callButton: {
      ar: 'اتصل الآن',
      fr: 'Appelez Maintenant'
    },
    serviceButton: {
      ar: 'تعرف على خدماتنا',
      fr: 'Découvrez Nos Services'
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-10 pb-10 sm:pt-16 sm:pb-24 overflow-hidden bg-gradient-to-r from-blue-800 to-blue-600"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[10%] w-40 h-40 sm:w-64 sm:h-64 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-[50%] right-[20%] w-16 h-16 sm:w-24 sm:h-24 bg-white rounded-full opacity-10 blur-xl"></div>
      </div>

      <div className="container max-w-full sm:max-w-3xl mx-auto px-2 sm:px-4 z-10">
        <div className="max-w-full sm:max-w-3xl mx-auto text-center">
          <h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
            data-aos="fade-up"
          >
            {heroContent.title[language]}
          </h1>
          
          <p 
            className="text-base xs:text-lg sm:text-xl text-blue-100 mb-6 sm:mb-10"
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            {heroContent.subtitle[language]}
          </p>
          
          <div 
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <PhoneButton label={heroContent.callButton[language]} />
            
            <a 
              href="#services"
              className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium hover:bg-white/10 transition-colors text-sm sm:text-base"
            >
              <span>{heroContent.serviceButton[language]}</span>
            </a>
          </div>
        </div>
        
        {/* Hero image */}
        <div 
          className="mt-8 sm:mt-16 max-w-full sm:max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
          data-aos="zoom-in" 
          data-aos-delay="300"
        >
          <img 
             src="/images/hero.webp"
             alt="Technician repairing a refrigerator"         
            className="w-full h-auto max-h-52 xs:max-h-64 sm:max-h-[400px] object-cover"
          />
          
   

        </div>
      </div>
    </section>
  );
};