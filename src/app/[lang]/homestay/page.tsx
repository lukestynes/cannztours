import ImageCarousel from "@/components/ImageCarousel";
import { type Locale } from "@/i18n.config";
import { getHomestayPage } from "@/lib/contentful";
import { type HomestayItem } from "@/types/contentful";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Homestay Accommodation | CanNZ Tours",
  description:
    "Experience authentic New Zealand hospitality with our homestay accommodations. Stay with friendly hosts and immerse yourself in the local culture.",
};

const englishData = {
  location: "Location",
  distance: "Distance",
};

const japaneseData = {
  location: "位置",
  distance: "距離",
};

export default async function HomestayPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const data: HomestayItem | undefined = await getHomestayPage(lang);

  if (!data) {
    return notFound();
  }

  const pageData = lang === "en-US" ? englishData : japaneseData;

  const blurb = data.blurb.split("\n\n");
  const description = data.description.split("\n\n");
  const activities = data.activities.map(
    (item: string) => item.split("|") as [string, string],
  );
  const imagesCollection: string[] = data.imagesCollection.items.map(
    (item) => item.url,
  );

  console.log(imagesCollection);

  return (
    <div style={{ marginTop: "80px" }}>
      {/* Hero Section */}
      <div className="flex justify-center bg-secondary text-white">
        <div className="mx-5 my-10 grid max-w-7xl grid-cols-1 py-5 lg:grid-cols-2">
          <div className="flex flex-col justify-between">
            <div className="">
              <h2 className="pb-10 text-5xl font-medium">{data.title}</h2>
              <div className="hidden lg:block">
                {blurb.map((paragraph: string, index: number) => (
                  <p key={index} className="text-lg lg:pr-10">
                    {paragraph}
                    <br />
                    <br />
                  </p>
                ))}
              </div>
              <div className="justify-left hidden lg:flex">
                <Link
                  href="/contact"
                  className="btn mt-3 rounded-none bg-white text-black"
                >
                  {data.enquireNowButton}
                </Link>
              </div>
            </div>
          </div>
          <div>
            <ImageCarousel images={imagesCollection} />
            <div className="block pt-10 lg:hidden">
              {<p className="text-lg ">{blurb[0]}</p>}
              <div className="flex justify-center pt-5 lg:hidden">
                <Link
                  href="/contact"
                  className="btn mt-3 rounded-none bg-white text-black"
                >
                  {data.enquireNowButton}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rest of the Details */}
      <div className="px-5 py-5">
        <div className="card mx-auto max-w-7xl rounded-none bg-white p-5 shadow-xl">
          <h2 className="mb-5 flex text-2xl font-medium">
            <Image
              className="mr-2"
              src="/icons/house.svg"
              alt=""
              width="30"
              height="30"
            />
            {data.ourHome}
          </h2>
          {description.map((paragraph: string, index: number) => (
            <p key={index} className="text-lg md:pr-10">
              {paragraph}
              <br />
              <br />
            </p>
          ))}
        </div>
        <div className="mx-auto max-w-7xl gap-2 md:grid md:grid-cols-5">
          <div className="card my-2 rounded-none bg-white p-5 shadow-xl md:col-span-3">
            <h2 className="mb-5 flex text-2xl font-medium">
              <Image
                className="mr-2"
                src="/icons/wifi.svg"
                alt=""
                width="30"
                height="30"
              />
              {data.includedAmenities}
            </h2>
            <div className="overflow-x-auto">
              <table className="table max-w-2xl">
                <tbody>
                  {data.amenities.map((row: string, index: number) => (
                    <tr key={index}>
                      <th>
                        <Image
                          className="mr-2"
                          src="/icons/tick.svg"
                          alt=""
                          width="20"
                          height="20"
                        />
                      </th>
                      <td>{row}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card my-2 w-full rounded-none bg-white p-5 shadow-xl md:col-span-2">
            <h2 className="mb-5 flex text-2xl font-medium">
              <Image
                className="mr-2"
                src="/icons/route.svg"
                alt=""
                width="30"
                height="30"
              />
              {data.nearbyActivities}
            </h2>
            <div className="overflow-x-auto">
              <table className="table max-w-2xl">
                <thead>
                  <th>{pageData.location}</th>
                  <th>{pageData.distance}</th>
                </thead>
                <tbody>
                  {activities.map((row: string[], index: number) => (
                    <tr key={index}>
                      <th>{row[0]}</th>
                      <td>{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="card mb-2 w-full rounded-none bg-white p-5 shadow-xl">
            <h2 className="mb-5 flex text-2xl font-medium">
              <Image
                className="mr-2"
                src="/icons/megaphone.svg"
                alt=""
                width="30"
                height="30"
              />
              {data.reviewTitle}
            </h2>
            <blockquote className="border-l-4 border-secondary pl-4 italic">
              {data.guestReview}
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
