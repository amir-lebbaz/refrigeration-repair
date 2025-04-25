export type Language = 'ar' | 'fr';

export interface NavItem {
  label: {
    ar: string;
    fr: string;
  };
  href: string;
}

export interface Service {
  id: string;
  title: {
    ar: string;
    fr: string;
  };
  description: {
    ar: string;
    fr: string;
  };
  icon: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  category: {
    ar: string;
    fr: string;
  };
  title: {
    ar: string;
    fr: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  comment: {
    ar: string;
    fr: string;
  };
  rating: number;
}