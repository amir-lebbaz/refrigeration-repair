import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { services } from '../../data/services';
import { 
  AirVent, Refrigerator, Fan, Gauge, ChevronRight
} from 'lucide-react';

// Icon mapping
const iconMap = {
  'airVent': AirVent,
  'refrigerator': Refrigerator,
  'fan': Fan,
  'gauge': Gauge,
};

export const Services: React.FC = () => {
  const { language, t } = useLanguage();
  
  const sectionTitle = {
    title: {
      ar: 'خدماتنا',
      fr: 'Nos Services'
    },
    subtitle: {
      ar: 'نقدم مجموعة متكاملة من خدمات تصليح وصيانة أجهزة التبريد',
      fr: 'Nous offrons une gamme complète de services de réparation et d\'entretien pour les appareils de réfrigération'
    },
    moreButton: {
      ar: 'المزيد',
      fr: 'En savoir plus'
    }
  };

  return (
    <section 
      id="services" 
      className="py-20 bg-gray-50"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            {t(sectionTitle.title)}
          </h2>
          <p className="text-gray-600 text-lg">
            {t(sectionTitle.subtitle)}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={service.id}
                className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg hover:-translate-y-1 group"
                data-aos="fade-up"
                data-aos-delay={parseInt(service.id) * 100}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {IconComponent && <IconComponent size={28} />}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {t(service.title)}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {t(service.description)}
                </p>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  {t(sectionTitle.moreButton)}
                  <ChevronRight size={16} className={`ml-1 ${language === 'ar' ? 'transform rotate-180' : ''}`} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};