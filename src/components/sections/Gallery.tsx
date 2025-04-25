import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { galleryItems } from '../../data/gallery';

export const Gallery: React.FC = () => {
  const { language, t } = useLanguage();

  const sectionTitle = {
    title: {
      ar: 'معرض الأعمال',
      fr: 'Galerie'
    },
    subtitle: {
      ar: 'نماذج من أعمالنا في مجال تصليح وصيانة أجهزة التبريد',
      fr: 'Exemples de nos travaux de réparation et maintenance d\'appareils de réfrigération'
    }
  };

  return (
    <section 
      id="gallery" 
      className="py-20 bg-white"
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow flex flex-col border border-gray-200"
              data-aos="fade-up"
              data-aos-delay={parseInt(item.id) * 100}
            >
              <div className="w-full h-80 bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center border-b">
                <img 
                  src={item.image} 
                  alt={t(item.title)}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-b-none"
                  style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col items-center justify-center">
                <span className="inline-block px-4 py-1 text-base font-semibold text-blue-700 bg-blue-50 rounded-full mb-3 shadow-sm">
                  {t(item.category)}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center drop-shadow">
                  {t(item.title)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};