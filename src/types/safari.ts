export type Currency = 'USD' | 'EUR' | 'GBP' | 'AUD' | 'ZAR' | 'VND';

export interface CurrencyRate {
  symbol: string;
  rate: number; // multiplier against USD
  format: (amount: number) => string;
}

export type Locale = 'en' | 'vi';

export interface Expedition {
  id: string;
  title: string;
  titleVi: string;
  tagline: string;
  taglineVi: string;
  region: string;
  countries: string[];
  durationDays: number;
  durationNights: number;
  priceUSD: number;
  featuredImage: string;
  galleryImages: string[];
  wildlifeHighlights: string[];
  landscapeType: string;
  bestMonths: string[];
  maxGroupSize: number;
  comfortTier: 'Classic Luxury' | 'Ultra-Luxe Signature' | 'Private Bush Camp';
  includedExperiences: string[];
  dailyItinerary: {
    day: number;
    title: string;
    titleVi: string;
    description: string;
    descriptionVi: string;
    lodge: string;
    meals: string;
    activities: string[];
  }[];
}

export interface Lodge {
  id: string;
  name: string;
  location: string;
  country: string;
  description: string;
  descriptionVi: string;
  image: string;
  highlights: string[];
  suiteCount: number;
  coordinates: string;
  ecoFeatures: string[];
}

export interface MigrationMonthData {
  month: string;
  monthVi: string;
  region: string;
  eventTitle: string;
  eventTitleVi: string;
  description: string;
  descriptionVi: string;
  animalCount: string;
  predatorActivity: 'Extreme' | 'High' | 'Moderate';
  recommendedCamps: string[];
  mapHotspot: { x: number; y: number; name: string };
}

export interface WildlifeProfile {
  id: string;
  commonName: string;
  swahiliName: string;
  scientificName: string;
  category: 'Big 5' | 'Predator' | 'Primate' | 'Plains Game';
  bestSpots: string[];
  sightingLikelihood: 'Guaranteed' | 'Very High' | 'High' | 'Rare';
  behaviorFact: string;
  behaviorFactVi: string;
}

export interface CustomSafariPlan {
  destination: string[];
  duration: number;
  travelers: number;
  children: number;
  travelMonth: string;
  comfortTier: string;
  specialExperiences: string[];
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialNotes: string;
}
