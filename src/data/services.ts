import { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: {
      ar: 'تصليح المكيفات',
      fr: 'Réparation de Climatiseurs'
    },
    description: {
      ar: 'إصلاح جميع أنواع المكيفات (سبليت، شباك، مركزي) مع ضمان على الخدمة',
      fr: 'Réparation de tous types de climatiseurs (split, fenêtre, central) avec garantie de service'
    },
    icon: 'airVent'
  },
  {
    id: '2',
    title: {
      ar: 'صيانة الثلاجات',
      fr: 'Maintenance de Réfrigérateurs'
    },
    description: {
      ar: 'صيانة وإصلاح الثلاجات (العادية، نوفروست) بخبرة وكفاءة عالية',
      fr: 'Maintenance et réparation de réfrigérateurs (standard, no frost) avec expertise'
    },
    icon: 'refrigerator'
  },
  {
    id: '3',
    title: {
      ar: 'إصلاح المجففات والبرادات',
      fr: 'Réparation de Séchoirs et Refroidisseurs'
    },
    description: {
      ar: 'خدمات متكاملة لإصلاح وصيانة المجففات والبرادات بأسعار منافسة',
      fr: 'Services complets pour la réparation et l\'entretien des séchoirs et refroidisseurs à des prix compétitifs'
    },
    icon: 'fan'
  },
  {
    id: '4',
    title: {
      ar: 'تركيب غاز وفحص الأعطال',
      fr: 'Installation de Gaz et Diagnostics'
    },
    description: {
      ar: 'تركيب وشحن غاز أجهزة التبريد وفحص شامل للأعطال مع تشخيص دقيق',
      fr: 'Installation et recharge de gaz pour appareils de réfrigération et diagnostics complets des pannes'
    },
    icon: 'gauge'
  }
];