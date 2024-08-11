import { type Locale } from "@/i18n.config";
import {
  type TourCollectionResponse,
  type GraphQLReturn,
  type Tour,
  type TourCardItem,
  type TourCardCollectionResponse,
  type HomestayItem,
  type HomestayCollectionResponse,
  type GraphQLErrorResponse,
  type TourOrderingResponse,
  type TourOrderItem,
  type HomePageItem,
  type HomePageResponse,
  type TourPageItem,
  type TourPageResponse,
  type AboutPageItem,
  type AboutPageResponse,
  type ContactPageItem,
  type ContactPageResponse,
  type ClientReviewPageResponse,
  type ClientReviewPageItem,
} from "@/types/contentful";

async function fetchGraphQl<T>(
  tag: string,
  query: string,
): Promise<T | undefined> {
  // This is revalidated once a week 604800 seconds!!
  // TODO: set it back to a week after development

  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: {
        tags: [`${tag}`],
        revalidate: 60,
      },
    },
  );

  if (!res.ok) {
    const errorDetails = (await res.json()) as GraphQLErrorResponse;
    console.error("Failed to fetch data:", res.status, res.statusText);
    console.error("Details:", errorDetails.errors);
    throw new Error("Failed to fetch data from API");
  }
  const jsonResponse = (await res.json()) as GraphQLReturn<T>;

  return jsonResponse.data;
}

export async function getAllTours(lang: Locale): Promise<Tour[] | undefined> {
  const tours = await fetchGraphQl<TourCollectionResponse>(
    "tours",
    `query { tourCollection(locale: \"${lang}") { items { sys { id } title urlSlug blurb highlights timeLength distance price departureLocation departureTime itinerary inclusions optionalExtras pricing description imagesCollection(locale: \"en-US\") { items { url }}} } }`,
  );

  if (!tours) {
    return undefined;
  }

  return tours.tourCollection.items;
}

export async function getTourCards(
  lang: Locale,
): Promise<TourCardItem[] | undefined> {
  const tourCards = await fetchGraphQl<TourCardCollectionResponse>(
    "tours",
    `query { tourCollection(locale: \"${lang}\") {  items { title urlSlug tagline tags thumbnail { url } price } } }`,
  );

  if (!tourCards) {
    return undefined;
  }

  return tourCards.tourCollection.items;
}

export async function getHomestayPage(
  lang: Locale,
): Promise<HomestayItem | undefined> {
  const homestay = await fetchGraphQl<HomestayCollectionResponse>(
    "homestay",
    `query { homestayCollection(locale: \"${lang}\") {  items { title blurb enquireNowButton ourHome description includedAmenities amenities nearbyActivities activities reviewTitle guestReview imagesCollection(locale: \"en-US\") { items { url } } } } } `,
  );

  if (!homestay) {
    return undefined;
  }

  return homestay.homestayCollection.items[0];
}

export async function getTourOrdering(): Promise<TourOrderItem[] | undefined> {
  const tourOrdering = await fetchGraphQl<TourOrderingResponse>(
    "tourOrdering",
    "query { tourOrderingCollection {  items { tourNameCollection { items { sys { id } title } } } } }",
  );

  if (!tourOrdering) {
    return undefined;
  }

  return tourOrdering.tourOrderingCollection.items[0]?.tourNameCollection.items;
}

export async function getHomePage(
  lang: Locale,
): Promise<HomePageItem | undefined> {
  const homePageResponse = await fetchGraphQl<HomePageResponse>(
    "homePage",
    `query { homePageCollection(locale: \"${lang}\") {  items { pageName title subheading bookATourButton learnMoreButton subHeroTitle subHeroDescription toursTitle fullDayToursCardTitle fullDayToursDescription halfDayToursCardTitle halfDayToursCardDescription customToursCardTitle customToursCardDescription viewToursButton whyChooseMeTitle experienceCardTitle experienceCardDescription bilingualCardTitle bilingualCardDescription localKnowledgeCard localKnowledgeDescription customTourCard customTourDescription testimonialTitle testimonialButton } } }`,
  );

  if (!homePageResponse) {
    return undefined;
  }

  return homePageResponse?.homePageCollection.items[0];
}

export async function getTourPage(
  lang: Locale,
): Promise<TourPageItem | undefined> {
  const tourPageResponse = await fetchGraphQl<TourPageResponse>(
    "tourPage",
    `query { tourPageCollection(locale: \"${lang}\") {  items { title blurb bookTourButton customTours customToursDescription bookACustomTourButton tourOptions } } }`,
  );

  if (!tourPageResponse) {
    return undefined;
  }

  return tourPageResponse?.tourPageCollection.items[0];
}

export async function getAboutPage(
  lang: Locale,
): Promise<AboutPageItem | undefined> {
  const aboutPageResponse = await fetchGraphQl<AboutPageResponse>(
    "aboutPage",
    `query { aboutPageCollection(locale: \"${lang}\") {  items { title blurb myMission missionDescription whyBookWithUs personalisedServiceTitle personalisedServiceBlurb flexibleItinerariesTitle flexibleItinerariesDescription localExpertiseTitle localExpertiseDescription outstandingReputationTitle outstandingReputationDescription viewOurToursButton testimonials viewMoreReviewsButton } } } `,
  );

  if (!aboutPageResponse) {
    return undefined;
  }

  return aboutPageResponse?.aboutPageCollection.items[0];
}

export async function getContactPage(
  lang: Locale,
): Promise<ContactPageItem | undefined> {
  const contactPageResponse = await fetchGraphQl<ContactPageResponse>(
    "contactPage",
    `query { contactPageContentCollection(locale: \"${lang}\") {  items { title blurb emailLabel emailAddress phoneLabel phoneNumber locationLabel location contactMeTitle faqsTitle faqsBlurb faQs } } }`,
  );

  if (!contactPageResponse) {
    return undefined;
  }

  return contactPageResponse?.contactPageContentCollection.items[0];
}

export async function getClientReviewPage(
  lang: Locale,
): Promise<ClientReviewPageItem | undefined> {
  const clientReviewPageResponse = await fetchGraphQl<ClientReviewPageResponse>(
    "clientReviewPage",
    `query { clientReviewPageCollection(locale: \"${lang}\") {  items { title blurb viewOurToursButton headlineReview bookNowButton moreReviewsTitle otherReviews } } }`,
  );

  if (!clientReviewPageResponse) {
    return undefined;
  }

  return clientReviewPageResponse?.clientReviewPageCollection.items[0];
}
