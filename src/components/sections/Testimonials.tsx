import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { testimonials } from '../../data/testimonials';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { language, t } = useLanguage();
  
  const sectionTitle = {
    title: {
      ar: 'آراء العملاء',
      fr: 'Témoignages'
    },
    subtitle: {
      ar: 'استمع لما يقوله عملاؤنا عن خدماتنا',
      fr: 'Écoutez ce que nos clients disent de nos services'
    }
  };

  return (
    <section 
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={parseInt(testimonial.id) * 100}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {testimonial.name}
                </h3>
                
                <div className="flex">
                  {[...Array(5)].map((_, index) => (
                    <Star 
                      key={index}
                      size={18}
                      className={index < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-600 italic">
                "{t(testimonial.comment)}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};