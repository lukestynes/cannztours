import {
  type TourCollectionResponse,
  type GraphQLReturn,
  type Tour,
  type TourCardItem,
  type TourCardCollectionResponse,
  type HomestayItem,
  type HomestayCollectionResponse,
  type GraphQLErrorResponse,
  TourNameCollection,
  TourOrderingResponse,
  TourOrderingItem,
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

export async function getAllTours(): Promise<Tour[] | undefined> {
  const tours = await fetchGraphQl<TourCollectionResponse>(
    "tours",
    "query { tourCollection { items { sys { id } title urlSlug blurb highlights timeLength distance price departureLocation departureTime itinerary inclusions optionalExtras pricing description imagesCollection { items { url }}} } }",
  );

  if (!tours) {
    return undefined;
  }

  return tours.tourCollection.items;
}

export async function getTourCards(): Promise<TourCardItem[] | undefined> {
  const tourCards = await fetchGraphQl<TourCardCollectionResponse>(
    "tours",
    "query { tourCollection {  items { title urlSlug tagline tags thumbnail { url } price } } }",
  );

  if (!tourCards) {
    return undefined;
  }

  return tourCards.tourCollection.items;
}

export async function getHomestayPage(): Promise<HomestayItem | undefined> {
  const homestay = await fetchGraphQl<HomestayCollectionResponse>(
    "homestay",
    "query { homestayCollection {  items { blurb description amenities activities guestReview imagesCollection { items { url } } } } } ",
  );

  if (!homestay) {
    return undefined;
  }

  return homestay.homestayCollection.items[0];
}

export async function getTourOrdering(): Promise<
  Array<TourOrderItem> | undefined
> {
  const tourOrdering = await fetchGraphQl<TourOrderingResponse>(
    "tourOrdering",
    "query { tourOrderingCollection {  items { tourNameCollection { items { sys { id } title } } } } }",
  );

  if (!tourOrdering) {
    return undefined;
  }

  return tourOrdering.tourOrderingCollection.items[0].tourNameCollection.items;
}
