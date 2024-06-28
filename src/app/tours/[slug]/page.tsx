import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import EmblaCarousel from "@/components/ImageCarousel";
import { type Metadata } from "next";
import { getAllTours } from "@/lib/contentful";
import Swiper from "swiper/bundle";
import ImageCarousel from "@/components/ImageCarousel";

export async function generateStaticParams() {
  const tours = await getAllTours();
  if (!tours) {
    return [];
  }

  return tours.map((tour) => ({
    slug: tour.urlSlug,
  }));
}

const fetchTourData = async (slug: string) => {
  const tours = await getAllTours();
  const tour = tours?.find((t) => t.urlSlug === slug);
  return tour || null;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const tour = await fetchTourData(params.slug);

  if (!tour) {
    return {
      title: "Tour Not Found | CanNZ Tours",
      description: "The requested tour could not be found.",
    };
  }

  return {
    title: `${tour.title} | CanNZ Tours`,
    description: tour.metaDescription,
  };
}

export default async function TourPage({
  params,
}: {
  params: { slug: string };
}) {
  const tour = await fetchTourData(params.slug);

  if (!tour) {
    notFound();
  }

  const itinerary = tour.itinerary.map((item) => item.split(": "));
  const pricing = tour.pricing.map((item) => item.split(": "));
  let optionalExtras;
  if (tour.optionalExtras) {
    optionalExtras = tour.optionalExtras.map((item) => item.split(": "));
  }
  const imagesCollection: string[] = tour.imagesCollection.items.map(
    (item) => item.url,
  );

  return (
    <div style={{ marginTop: "80px" }} className="min-h-screen">
      <div className="flex justify-center bg-secondary text-white">
        <div className="mx-5 grid max-w-7xl grid-cols-1 p-5 lg:my-10 lg:grid-cols-2">
          <div className="flex flex-col justify-between">
            <h1 className="mb-5 text-5xl font-medium">{tour.title}</h1>
            <div className="hidden lg:block">
              <p className="mb-5 text-lg lg:pr-10">{tour.blurb}</p>
              <div>
                <h3 className="my-3 text-2xl font-medium ">Highlights:</h3>
                <ul className="mb-3 list-inside list-disc">
                  {tour.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-1 text-xl">
                  <span className="font-medium">Price: </span> from $
                  {tour.price} pp.
                </p>
              </div>
              <div className="flex justify-center pt-5 lg:justify-start">
                <Link
                  href="/contact"
                  className="btn mt-3 rounded-none bg-white text-black"
                >
                  Book Now!
                </Link>
              </div>
            </div>
          </div>
          <div className="relative">
            <ImageCarousel images={imagesCollection} />
            <div className="display mt-5 lg:hidden">
              <p className="mb-5 text-lg lg:pr-10">{tour.blurb}</p>
              <div>
                <h3 className="my-3 text-2xl font-medium">Highlights:</h3>
                <ul className="mb-3 list-inside list-disc">
                  {tour.highlights.map((highlight: string, index: number) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-1 text-xl">
                  <span className="font-medium">Price: </span> from $
                  {tour.price} pp.
                </p>
              </div>
              <div className="flex justify-center pt-5 lg:justify-start">
                <Link
                  href="/contact"
                  className="btn mt-3 rounded-none bg-white text-black"
                >
                  Book Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rest of the Details */}
      <div className="bg-white px-5 py-5">
        <div className="card mx-auto max-w-7xl rounded-none bg-white p-5 shadow-xl">
          <h2 className="mb-5 flex text-2xl font-medium">
            <Image
              className="mr-2"
              src="/icons/tour.svg"
              alt=""
              width="30"
              height="30"
            />
            About Tour:
          </h2>
          {tour.description
            .split("\n\n")
            .map((paragraph: string, index: number) => (
              <p key={index}>
                {paragraph}
                <br />
                <br />
              </p>
            ))}
        </div>
        {optionalExtras && (
          <div className="card mx-auto mt-2 max-w-7xl rounded-none bg-white p-5 shadow-xl">
            <h2 className="mb-5 flex text-2xl font-medium">
              <Image
                className="mr-2"
                src="/icons/options.svg"
                alt=""
                width="30"
                height="30"
              />
              Optional Extras:
            </h2>
            <div className="overflow-x-auto">
              <table className="table max-w-2xl">
                <tbody>
                  {optionalExtras?.map((row: string[], index: number) => (
                    <tr key={index}>
                      <th>{row[0]}</th>
                      <td>{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        <div className="mx-auto max-w-7xl gap-2 md:grid md:grid-cols-3">
          <div className="card my-2 rounded-none bg-white p-5 shadow-xl md:col-span-2">
            <h2 className="mb-5 flex text-2xl font-medium">
              <Image
                className="mr-2"
                src="/icons/van.svg"
                alt=""
                width="30"
                height="30"
              />
              Itinerary
            </h2>
            <div className="overflow-x-auto">
              <table className="table max-w-2xl">
                <tbody>
                  {itinerary.map((row: string[], index: number) => (
                    <tr key={index}>
                      <th>{row[0]}</th>
                      <td>{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card my-2 w-full rounded-none bg-white p-5 shadow-xl md:col-span-1">
            <h2 className="mb-5 flex text-2xl font-medium">
              <Image
                className="mr-2"
                src="/icons/paper.svg"
                alt=""
                width="30"
                height="30"
              />
              Details
            </h2>
            <div className="overflow-x-auto">
              <table className="table max-w-2xl">
                <tbody>
                  <tr>
                    <th>Departure Location:</th>
                    <td>{tour.departureLocation}</td>
                  </tr>
                  <tr>
                    <th>Departure Time:</th>
                    <td>{tour.departureTime}</td>
                  </tr>
                  <tr>
                    <th>Duration:</th>
                    <td>{tour.timeLength}</td>
                  </tr>
                  <tr>
                    <th>Distance:</th>
                    <td>{tour.distance}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl gap-2 md:grid md:grid-cols-3">
          <div className="card w-full rounded-none bg-white p-5 shadow-xl md:col-span-2">
            <h2 className="mb-5 flex text-2xl font-medium">
              <Image
                className="mr-2"
                src="/icons/check.svg"
                alt=""
                width="30"
                height="30"
              />
              Inclusions:
            </h2>
            <div className="overflow-x-auto">
              <table className="table max-w-2xl">
                <tbody>
                  {tour.inclusions.map((inclusion: string, index: number) => (
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
                      <td>{inclusion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card mt-2 w-full flex-col justify-between rounded-none bg-white p-5 shadow-xl md:col-span-1 md:mt-0">
            <div>
              <h2 className="mb-5 flex text-2xl font-medium">
                <Image
                  className="mr-2"
                  src="/icons/dollar.svg"
                  alt=""
                  width="30"
                  height="30"
                />
                Pricing:
              </h2>
              <div className="overflow-x-auto">
                <table className="table max-w-2xl">
                  <tbody>
                    {pricing.map((row: string[], index: number) => (
                      <tr key={index}>
                        <th>{row[0]}</th>
                        <td>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="end text-sm">
              * Please note that prices may vary depending on specific tour
              arrangements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
