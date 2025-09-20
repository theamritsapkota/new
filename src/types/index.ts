export interface Destination {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  rating: number;
  reviewCount: number;
  bestSeason: string[];
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  type: 'Trekking' | 'Cultural' | 'Adventure' | 'Religious';
  difficulty?: 'Easy' | 'Moderate' | 'Difficult';
  duration?: string;
  price?: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  destinationId: string;
  rating: number;
  comment: string;
  date: string;
  images?: string[];
}

export interface Filter {
  season: string[];
  type: string[];
  difficulty: string[];
}