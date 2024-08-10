// API Specific
export interface GraphQLReturn<T> {
  data?: T;
  errors?: GraphQLError[];
}

export interface GraphQLErrorResponse {
  errors: GraphQLError[];
}

export interface GraphQLError {
  message: string;
  locations?: { line: number; column: number }[];
  path?: string[];
  extensions?: any;
}

// General Contentful
export interface ContentfulImage {
  url: string;
}

// Homestay
export interface HomestayItem {
  blurb: string;
  description: string;
  amenities: string[];
  activities: string[];
  guestReview: string;
  imagesCollection: {
    items: ContentfulImage[];
  };
}

export interface HomestayCollectionResponse {
  homestayCollection: {
    items: HomestayItem[];
  };
}

interface sys {
  id: string;
}

// Tours
export interface Tour {
  title: string;
  sys: sys;
  urlSlug: string;
  blurb: string;
  highlights: string[];
  timeLength: string;
  distance: string;
  price: number;
  departureLocation: string;
  departureTime: string;
  itinerary: string[];
  inclusions: string[];
  optionalExtras: string[];
  pricing: string[];
  description: string;
  imagesCollection: {
    items: ContentfulImage[];
  };
  metaDescription: string;
  metaTitle: string;
}

export interface TourCollectionResponse {
  tourCollection: {
    items: Tour[];
  };
}

// Tour Cards
export interface Thumbnail {
  url: string;
}

export interface TourCardItem {
  title: string;
  urlSlug: string;
  tagline: string;
  tags: string[];
  price: number;
  thumbnail: Thumbnail;
}

export interface TourCards {
  tourCollection: {
    items: Array<{
      title: string;
      urlSlug: string;
      tagline: string;
      tags: string[];
      thumbnail: {
        url: string;
      };
      price: string;
    }>;
  };
}

export interface TourCardCollectionResponse {
  tourCollection: {
    items: TourCardItem[];
  };
}

export interface TourOrderItem {
  sys: sys;
  title: string;
}

export interface TourNameCollection {
  items: Array<TourOrderItem>;
}

export interface TourOrderingCollection {
  items: Array<TourNameCollection>;
}

export interface TourOrderingResponse {
  tourOrderingCollection: TourOrderingCollection;
}

export interface HomePageResponse {
  homePageCollection: HomePageCollection;
}

export interface HomePageItem {
  pageName: string;
  title: string;
  subheading: string;
  bookATourButton: string;
  learnMoreButton: string;
  subHeroTitle: string;
  subHeroDescription: string;
  toursTitle: string;
  fullDayToursCardTitle: string;
  fullDayToursDescription: string;
  halfDayToursCardTitle: string;
  halfDayToursCardDescription: string;
  customToursCardTitle: string;
  customToursCardDescription: string;
  viewToursButton: string;
  whyChooseMeTitle: string;
  experienceCardTitle: string;
  experienceCardDescription: string;
  bilingualCardTitle: string;
  bilingualCardDescription: string;
  localKnowledgeCard: string;
  localKnowledgeDescription: string;
  customTourCard: string;
  customTourDescription: string;
  testimonialTitle: string;
  testimonialButton: string;
}

export interface HomePageCollection {
  items: Array<HomePageItem>;
}
