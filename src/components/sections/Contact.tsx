import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, MapPin, Clock } from 'lucide-react';
import PhoneButton from "../ui/PhoneButton";

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  
  const contactContent = {
    title: {
      ar: 'اتصل بنا',
      fr: 'Contactez-Nous'
    },
    subtitle: {
      ar: 'نحن هنا لمساعدتك في جميع احتياجات تصليح وصيانة أجهزة التبريد',
      fr: 'Nous sommes là pour vous aider avec tous vos besoins en réparation et entretien d\'appareils de réfrigération'
    },
    callNow: {
      ar: 'اتصل الآن',
      fr: 'Appelez Maintenant'
    },
    address: {
      ar: 'العنوان',
      fr: 'Adresse'
    },
    addressValue: {
      ar: 'الجلفة، الجزائر',
      fr: 'Djelfa, Algérie'
    },
    schedule: {
      ar: 'ساعات العمل',
      fr: 'Heures d\'ouverture'
    },
    scheduleValue: {
      ar: 'كل يوم من 8:00 صباحًا إلى 8:00 مساءً',
      fr: 'Tous les jours de 8h00 à 20h00'
    }
  };

  return (
    <section 
      id="contact" 
      className="py-6 sm:py-8 bg-blue-600 text-white"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="max-w-xs sm:max-w-md mx-auto px-2 sm:px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 leading-tight break-words">
            {contactContent.title[language]}
          </h2>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed break-words">
            {contactContent.subtitle[language]}
          </p>
        </div>
        <div className="bg-white text-gray-800 rounded-xl shadow-lg p-2 sm:p-4 flex flex-col gap-3 sm:gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <Phone className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-semibold text-xs sm:text-sm">{contactContent.callNow[language]}:</span>
            <PhoneButton />
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <MapPin className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-semibold text-xs sm:text-sm">{contactContent.address[language]}:</span>
            <span className="text-xs sm:text-sm break-words">{contactContent.addressValue[language]}</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Clock className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-semibold text-xs sm:text-sm">{contactContent.schedule[language]}:</span>
            <span className="text-xs sm:text-sm break-words">{contactContent.scheduleValue[language]}</span>
          </div>
        </div>
      </div>
    </section>
  );
};