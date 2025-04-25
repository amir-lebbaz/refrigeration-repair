import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Check, Award, Clock, PiggyBank } from 'lucide-react';

export const About: React.FC = () => {
  const { language } = useLanguage();
  
  const aboutContent = {
    title: {
      ar: 'من نحن',
      fr: 'À Propos de Nous'
    },
    subtitle: {
      ar: 'ورشة متخصصة في تصليح وصيانة أجهزة التبريد في الجلفة',
      fr: 'Atelier spécialisé dans la réparation et l\'entretien d\'appareils de réfrigération à Djelfa'
    },
    description: {
      ar: 'نحن فريق من الفنيين المتخصصين في تصليح وصيانة جميع أنواع أجهزة التبريد. نتميز بخبرة كبيرة في المجال ونقدم خدماتنا لمناطق الجلفة والمناطق المحيطة بها. نحن نفتخر بجودة خدماتنا العالية وأسعارنا المنافسة وسرعة استجابتنا لطلبات العملاء.',
      fr: 'Nous sommes une équipe de techniciens spécialisés dans la réparation et l\'entretien de tous types d\'appareils de réfrigération. Nous avons une grande expérience dans le domaine et offrons nos services à Djelfa et ses environs. Nous sommes fiers de notre qualité de service, nos prix compétitifs et notre rapidité de réponse aux demandes des clients.'
    },
    features: [
      {
        id: 1,
        icon: Award,
        title: {
          ar: 'جودة عالية',
          fr: 'Haute Qualité'
        },
        description: {
          ar: 'نستخدم قطع غيار أصلية ونقدم ضمان على جميع أعمالنا',
          fr: 'Nous utilisons des pièces d\'origine et offrons une garantie sur tous nos travaux'
        }
      },
      {
        id: 2,
        icon: Clock,
        title: {
          ar: 'سرعة الاستجابة',
          fr: 'Réponse Rapide'
        },
        description: {
          ar: 'نصل إليك في أقرب وقت ممكن ونقوم بالإصلاح بسرعة وكفاءة',
          fr: 'Nous arrivons dans les plus brefs délais et effectuons les réparations rapidement et efficacement'
        }
      },
      {
        id: 3,
        icon: PiggyBank,
        title: {
          ar: 'أسعار منافسة',
          fr: 'Prix Compétitifs'
        },
        description: {
          ar: 'نقدم أسعارًا معقولة تناسب جميع الميزانيات مع خدمة احترافية',
          fr: 'Nous offrons des prix raisonnables adaptés à tous les budgets avec un service professionnel'
        }
      }
    ]
  };

  return (
    <section 
      id="about" 
      className="py-20 bg-blue-50"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2" data-aos="fade-right">
            <div className="relative">
              <div className="bg-blue-100 rounded-lg shadow-xl w-full h-64 flex items-center justify-center">
                <p className="text-blue-800 text-xl font-medium px-6 text-center">
                  {language === 'ar' 
                    ? 'خدمات احترافية في مجال تصليح وصيانة أجهزة التبريد' 
                    : 'Services professionnels de réparation et maintenance d\'appareils de réfrigération'}
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-lg font-bold">
                  {language === 'ar' ? 'خبرة كبيرة' : 'Grande Expérience'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              {aboutContent.title[language]}
            </h2>
            
            <p className="text-lg text-gray-600 mb-3">
              {aboutContent.subtitle[language]}
            </p>
            
            <p className="text-gray-700 mb-8">
              {aboutContent.description[language]}
            </p>
            
            <div className="space-y-6">
              {aboutContent.features.map((feature) => (
                <div key={feature.id} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {feature.title[language]}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};