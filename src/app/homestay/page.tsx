import EmblaCarousel from "@/components/EmblaCarousel";
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

export default async function HomestayPage() {
  const data: HomestayItem | undefined = await getHomestayPage();

  if (!data) {
    return notFound();
  }

  const blurb = data.blurb.split("\n\n");
  const description = data.description.split("\n\n");
  const activities = data.activities.map(
    (item: string) => item.split(": ") as [string, string],
  );
  const imagesCollection: string[] = data.imagesCollection.items.map(
    (item) => item.url,
  );

  return (
    <div style={{ marginTop: "80px" }}>
      {/* Hero Section */}
      <div className="flex justify-center bg-secondary text-white">
        <div className="mx-5 my-10 grid max-w-7xl py-5 lg:grid-cols-2">
          <div className="flex flex-col justify-between">
            <div className="">
              <h2 className="pb-10 text-5xl font-medium">Homestay</h2>
              <div className="hidden md:block">
                {blurb.map((paragraph: string, index: number) => (
                  <p key={index} className="text-lg md:pr-10">
                    {paragraph}
                    <br />
                    <br />
                  </p>
                ))}
              </div>
              <div className="justify-left hidden md:flex">
                <Link
                  href="/contact"
                  className="btn mt-3 rounded-none bg-white text-black"
                >
                  Enquire Now!
                </Link>
              </div>
            </div>
          </div>
          <div>
            <EmblaCarousel images={imagesCollection} />
            <div className="block pt-10 md:hidden">
              {/* {blurb.map((paragraph: string, index: number) => ( */}
              {/*   <p key={index} className="text-lg md:pr-10"> */}
              {/*     {paragraph} */}
              {/*     <br /> */}
              {/*     <br /> */}
              {/*   </p> */}
              {/* ))} */}
              {<p className="text-lg ">{blurb[0]}</p>}
              <div className="flex justify-center pt-5 md:hidden">
                <Link
                  href="/contact"
                  className="btn mt-3 rounded-none bg-white text-black"
                >
                  Enquire Now!
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
            Our Home:
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
              Included Amenities:
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
              Nearby Activities:
            </h2>
            <div className="overflow-x-auto">
              <table className="table max-w-2xl">
                <thead>
                  <th>Location</th>
                  <th>Distance</th>
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
              See what our guests had to say:
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
