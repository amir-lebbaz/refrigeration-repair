import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'محمد بن صالح',
    comment: {
      ar: 'خدمة ممتازة وسريعة! أصلح المكيف خلال ساعة واحدة فقط.',
      fr: 'Service excellent et rapide! Le climatiseur a été réparé en une heure seulement.'
    },
    rating: 5
  },
  {
    id: '2',
    name: 'فاطمة الزهراء',
    comment: {
      ar: 'أسعار معقولة وفني محترف جداً. سأتعامل معهم دائماً.',
      fr: 'Prix raisonnables et technicien très professionnel. Je ferai toujours appel à eux.'
    },
    rating: 5
  },
  {
    id: '3',
    name: 'عبد القادر',
    comment: {
      ar: 'قام بإصلاح الثلاجة بسرعة وبضمان لمدة 3 أشهر. خدمة موثوقة.',
      fr: 'Il a réparé le réfrigérateur rapidement avec une garantie de 3 mois. Service fiable.'
    },
    rating: 4
  }
];