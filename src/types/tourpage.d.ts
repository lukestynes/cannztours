type ItineraryItem = [string, string];

type Tour = {
  slug: string;
  title: string;
  blurb: string;
  highlights: string[];
  images: string[];
  description: string[];
  details: {
    timeLength: string;
    distance: string;
    price: string;
    departureTime: string;
    departureLocation: string;
  };
  itinerary: ItineraryItem[];
  inclusions: Array<{ name: string }>;
  optionalExtras: ItineraryItem[];
  pricing: ItineraryItem[];
};
