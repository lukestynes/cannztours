import ReviewStack from "@/components/ReviewStack";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const tourCards = [
  {
    title: "Personalised Service",
    imageSrc: "/icons/personalised.svg",
    description: "Handcrafted tours tailored to your preferences.",
  },
  {
    title: "Flexible Itineraries",
    imageSrc: "/icons/route.svg",
    description:
      "Explore at your own pace with flexible and customizable plans.",
  },
  {
    title: "Local Expertise",
    imageSrc: "/icons/map.svg",
    description:
      "Benefit from the guidance of a friendly, local tour guide with extensive knowledge of the region.",
  },
  {
    title: "Outstanding Reputation",
    imageSrc: "/icons/honour.svg",
    description:
      "Join us based on outstanding TripAdvisor reviews and a commitment to excellence.",
  },
];

export const metadata: Metadata = {
  title: "About CanNZ Tours | Personalised Guided Tours",
  description:
    "Learn about CanNZ Tours, our mission, and our experienced guides. Discover why we're the best choice for guided tours in New Zealand's South Island.",
};

export default function AboutUsPage() {
  return (
    <div style={{ marginTop: "80px" }} key={1}>
      <div className="flex justify-center bg-secondary text-white">
        <div className="max-w-7xl justify-center px-10 py-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="order-2 my-auto flex flex-col items-center">
              <h1 className="w-full pb-10 text-center text-5xl font-medium md:text-left">
                About Me
              </h1>
              <p className="text-lg">
                My name is Craig Rome, a Scottish-born Kiwi with a passion for
                showcasing the beauty of New Zealand. Having grown up on a farm
                in Gretna Green, Scotland, and later graduating from The West of
                Scotland Agricultural College, my journey to New Zealand in 1977
                was driven by a desire to manage dairy farms and explore new
                horizons.
              </p>
              <br />
              <p className="text-lg">
                In 1993, I found my calling in guiding guests for large Japanese
                travel companies. Over time, I transitioned to offering more
                relaxed and tailor-made itineraries through CanNZ Tours. Today,
                with the support of my wife Keiko, a licensed Chef from Japan,
                we welcome you to experience life as a Kiwi local.
              </p>
            </div>
            <div className="order-1 flex justify-center">
              <Image
                className="mb-3 rounded-none shadow-xl"
                src="/images/about/hero.png"
                alt="Sunset photo.png"
                width="1000"
                height="900"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-10 py-10">
        <div className="max-w-7xl">
          <div className="gap-20 md:grid md:grid-cols-2">
            <div className="flex items-center pb-10">
              <div className="">
                <h3 className="pb-5 text-3xl font-medium">My Mission</h3>
                <p className="text-lg">
                  At CanNZ Tours, my mission is to provide exceptional and
                  personalized experiences that showcase the beauty of New
                  Zealand. With over 30 years of experience, we are committed to
                  offering tailor-made itineraries, friendly local guides, and
                  authentic cultural experiences. I aim to create unforgettable
                  memories for our guests while promoting sustainable tourism
                  practices and supporting local communities. Join me and
                  discover the true essence of New Zealand through the eyes of a
                  Kiwi local.
                </p>
              </div>
            </div>
            <div className="justify-right">
              <Image
                className="shadow-xl"
                src="/images/about/framed.png"
                alt="Craig Rome in Christchurch City"
                width="550"
                height="400"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-neutral-100 px-10 py-5">
        <div className="max-w-7xl">
          <h2 className="my-10 text-center text-4xl font-medium">
            Why Book With Us?
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {tourCards.map((card, index) => (
              <div
                key={index}
                className="card min-w-60 max-w-72 rounded-none bg-white text-center shadow-md md:w-1/5"
              >
                <figure className="h-40 py-0">
                  <Image
                    src={card.imageSrc}
                    width="75"
                    height="75"
                    alt="Icons"
                  />
                </figure>
                <div className="card-body align-text-top">
                  <p className="card-title justify-center">{card.title}</p>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/tours"
              className="btn btn-primary mr-2 rounded-none text-white"
            >
              View our Tours
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden w-full justify-center px-20 pb-20 lg:block">
        <div>
          <h2 className="mb-20 mt-10 text-center text-4xl font-medium">
            Testimonials
          </h2>
          <ReviewStack />
          <div className="mt-10 flex justify-center">
            <Link
              href="/client-reviews"
              className="btn btn-outline btn-primary mr-2 rounded-none text-white"
            >
              View More Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
