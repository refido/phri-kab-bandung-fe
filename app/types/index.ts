export type Language = 'id' | 'en';

export interface Translation {
  id: string;
  en: string;
}

export interface MembershipTier {
  category: Translation;
  entryFee: string;
  yearlyFee: string;
  type: 'hotel' | 'restaurant' | 'allied';
}

export interface Event {
  id: string;
  title: Translation;
  date: string;
  time: string;
  venue: Translation;
  description: Translation;
  speaker?: Translation;
  image: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface Member {
  id: string;
  name: string;
  category: string;
  type: 'hotel' | 'restaurant' | 'affiliate';
  starRating?: number;
  tier?: string;
  address: Translation;
  phone: string;
  email: string;
  website?: string;
  description: Translation;
  images: string[];
  location: {
    lat: number;
    lng: number;
  };
}

export interface GalleryItem {
  id: string;
  image: string;
  caption: Translation;
  category: 'events' | 'members' | 'sustainability' | 'awards' | 'regional';
  date: string;
}