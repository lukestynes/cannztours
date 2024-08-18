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
  title: string;
  blurb: string;
  enquireNowButton: string;
  ourHome: string;
  description: string;
  includedAmenities: string;
  amenities: string[];
  nearbyActivities: string;
  activities: string[];
  reviewTitle: string;
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

// Tour Ordering
export interface TourOrderingResponse {
  tourOrderingCollection: TourOrderingCollection;
}

export interface TourOrderingCollection {
  items: TourOrderingCollectionItem[];
}

export interface TourOrderingCollectionItem {
  tourNameCollection: TourNameCollection;
}

export interface TourNameCollection {
  items: TourOrderItem[];
}

export interface TourOrderItem {
  sys: sys;
  title: string;
}

//
// export interface TourOrderItem {
//   sys: sys;
//   title: string;
// }
//
// export interface TourNameCollection {
//   items: Array<TourOrderItem>;
// }
//
// export interface TourOrderingCollection {
//   items: Array<TourNameCollection>;
// }
//
// export interface TourOrderingResponse {
//   tourOrderingCollection: TourOrderingCollection;
// }

// Home Page

export interface HomePageResponse {
  homePageCollection: HomePageCollection;
}

export interface HomePageCollection {
  items: Array<HomePageItem>;
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

export interface TourPageResponse {
  tourPageCollection: TourPageCollection;
}

export interface TourPageCollection {
  items: TourPageItem[];
}

export interface TourPageItem {
  title: string;
  blurb: string;
  bookTourButton: string;
  customTours: string;
  customToursDescription: string;
  bookACustomTourButton: string;
  tourOptions: string;
}

export interface AboutPageResponse {
  aboutPageCollection: AboutPageCollection;
}

export interface AboutPageCollection {
  items: Array<AboutPageItem>;
}

export interface AboutPageItem {
  title: string;
  blurb: string;
  myMission: string;
  missionDescription: string;
  whyBookWithUs: string;
  personalisedServiceTitle: string;
  personalisedServiceBlurb: string;
  flexibleItinerariesTitle: string;
  flexibleItinerariesDescription: string;
  localExpertiseTitle: string;
  localExpertiseDescription: string;
  outstandingReputationTitle: string;
  outstandingReputationDescription: string;
  viewOurToursButton: string;
  testimonials: string;
  viewMoreReviewsButton: string;
}

export interface ContactPageResponse {
  contactPageContentCollection: ContactPageCollection;
}

export interface ContactPageCollection {
  items: Array<ContactPageItem>;
}

export interface ContactPageItem {
  title: string;
  blurb: string;
  emailLabel: string;
  emailAddress: string;
  phoneLabel: string;
  phoneNumber: string;
  locationLabel: string;
  location: string;
  contactMeTitle: string;
  faqsTitle: string;
  faqsBlurb: string;
  faQs: string;
}

export interface ClientReviewPageResponse {
  clientReviewPageCollection: ClientReviewPageCollection;
}

export interface ClientReviewPageCollection {
  items: Array<ClientReviewPageItem>;
}

export interface ClientReviewPageItem {
  title: string;
  blurb: string;
  viewOurToursButton: string;
  headlineReview: string;
  bookNowButton: string;
  otherReviews: string;
  moreReviewsTitle: string;
}

export interface CancellationPolicyPageResponse {
  cancellationPolicyPageCollection: ClientReviewPageCollection;
}

export interface CancellationPolicyPageCollection {
  items: Array<CancellationPolicyPageItem>;
}

export interface CancellationPolicyPageItem {
  title: string;
  policy: string;
}
