import ReviewStack from "@/components/ReviewStack";
import Image from "next/image";
import Link from "next/link";

const tourCards = [
  {
    title: "Personalised Service",
    imageSrc: "/icons/personalised.svg",
    description: "We craft handcrafted tours tailored to your preferences.",
  },
  {
    title: "Flexible Itineraries",
    imageSrc: "/icons/custom.svg",
    description:
      "Explore at your own pace with flexible and customizable plans.",
  },
  {
    title: "Local Expertise",
    imageSrc: "/icons/local.svg",
    description:
      "Benefit from the guidance of a friendly, local tour guide with extensive knowledge of the region.",
  },
  {
    title: "Outstanding Reputation",
    imageSrc: "/icons/awards.svg",
    description:
      "Join us based on outstanding TripAdvisor reviews and a commitment to excellence.",
  },
];

export default function AboutUsPage() {
  return (
    <div key="1">
      <div className="flex justify-center bg-neutral-100">
        <div className="max-w-7xl justify-center px-10 py-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="my-auto flex flex-col items-center">
              <h1 className="w-full pb-10 text-center text-5xl font-bold md:text-left">
                About Me
              </h1>
              <div className="flex justify-center md:hidden">
                <Image
                  className="mb-3 rounded-xl"
                  src="/images/about/hero.png"
                  alt="Sunset photo"
                  width="1000"
                  height="900"
                />
              </div>
              <p>
                My name is Craig Rome, a Scottish-born Kiwi with a passion for
                showcasing the beauty of New Zealand. Having grown up on a farm
                in Gretna Green, Scotland, and later graduating from The West of
                Scotland Agricultural College, my journey to New Zealand in 1977
                was driven by a desire to manage dairy farms and explore new
                horizons.
              </p>
              <br />
              <p>
                In 1993, I found my calling in guiding guests for large Japanese
                travel companies. Over time, I transitioned to offering more
                relaxed and tailor-made itineraries through CanNZ Tours. Today,
                with the support of my wife Keiko, a licensed Chef from Japan,
                we welcome you to experience life as a Kiwi local.
              </p>
            </div>
            <div className="hidden justify-center md:flex">
              <Image
                className="rounded-xl"
                src="/images/about/hero.png"
                alt="Sunset photo"
                width="1000"
                height="900"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-10 py-10">
        <div className="max-w-7xl">
          <div className="md:grid md:grid-cols-2">
            <div className="hidden justify-center md:flex">
              <Image
                className="rounded-xl"
                src="/images/about/craig-shirt.jpg"
                alt="Craig and Keiko"
                width="400"
                height="400"
              />
            </div>
            <div className="flex items-center">
              <div className="">
                <h3 className="pb-5 text-3xl font-bold">My Mission</h3>
                <div className="flex justify-center md:hidden">
                  <Image
                    className="mb-3 rounded-xl"
                    src="/images/about/craig-shirt.jpg"
                    alt="Craig and Keiko"
                    width="400"
                    height="400"
                  />
                </div>
                <p>
                  At CanNZ Tours, our mission is to provide exceptional and
                  personalized experiences that showcase the beauty of New
                  Zealand. With over 30 years of experience, we are committed to
                  offering tailor-made itineraries, friendly local guides, and
                  authentic cultural experiences. We aim to create unforgettable
                  memories for our guests while promoting sustainable tourism
                  practices and supporting local communities. Join us and
                  discover the true essence of New Zealand through the eyes of a
                  Kiwi local.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-neutral-100 px-10 py-5">
        <div className="max-w-7xl">
          <h2 className="my-10 text-center text-4xl font-bold">
            Why Book With Us?
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {tourCards.map((card, index) => (
              <div
                key={index}
                className="card min-w-60 max-w-72 bg-white text-center shadow md:w-1/5"
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
                  <h2 className="card-title justify-center">{card.title}</h2>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/tours" className="btn btn-primary mr-2 text-white">
              View our Tours
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden w-full justify-center px-20 pb-20 md:block">
        <div>
          <h2 className="mb-20 mt-10 text-center text-4xl font-bold">
            Testimonials
          </h2>
          <ReviewStack />
          <div className="mt-10 flex justify-center">
            <Link
              href="/reviews"
              className="btn btn-outline btn-primary mr-2 text-white"
            >
              View Testimonials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
