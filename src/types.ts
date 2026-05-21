export interface GolfClub {
  id: string;
  name: string;
  englishName: string;
  description: string;
  image: string;
  location: string;
  features: string[];
}

export interface NightLifeItem {
  id: string;
  title: string;
  englishTitle: string;
  description: string;
  image: string;
}

export interface CasinoBenefit {
  id: string;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  rating: number;
  text: string;
  author: string;
  date: string;
  tag: string;
}

export interface VIPBenefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AppContent {
  heroHeadline: string;
  heroSubcopy: string;
  heroBadge: string;
  kakaoLink: string;
  telegramLink: string;
  counselText: string;
  golfHeadline: string;
  golfSubcopy: string;
  nightHeadline: string;
  nightSubcopy: string;
  casinoMainName: string;
  casinoHeadline: string;
  casinoSubcopy: string;
  reviews: Review[];
  golfClubs: GolfClub[];
  nightLifeItems: NightLifeItem[];
  casinoBenefits: CasinoBenefit[];
  vipBenefits: VIPBenefit[];
}
