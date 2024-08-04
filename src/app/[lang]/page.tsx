import ReviewStack from "@/components/ReviewStack";
import Image from "next/image";
import Link from "next/link";
import { type Metadata } from "next";
import { type Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

const confidenceCards = [
  {
    title: "25+ Years Experience",
    description:
      "With over 25 years of expertise in crafting unforgettable New Zealand adventures, we guarantee a seamless, enriching travel experience tailored to your preferences.",
    image: "/icons/honour.svg",
  },
  {
    title: "Tours in English or Japanese",
    description:
      "Feel at home with our bilingual tours, offered in both English and Japanese, designed to bridge cultures and make every moment of your journey accessible and engaging.",
    image: "/icons/dual-language.svg",
  },
  {
    title: "Extensive Local Knowledge",
    description:
      "Dive deep into the heart of New Zealand with us. Our extensive local knowledge unveils hidden gems and authentic experiences far beyond the typical tourist paths.",
    image: "/icons/route.svg",
  },
  {
    title: "Custom Tours Available",
    description:
      "Craft your perfect New Zealand journey with us. Whether you seek thrilling adventures or tranquil retreats, our custom tours are designed to cater to your personal travel desires.",
    image: "/icons/custom.svg",
  },
];

const tourCards = [
  {
    title: "Full Day Tours",
    imageSrc: "/images/home/full-day.jpg",
    description:
      "Ride the TranzAlpine train tour, explore the snow peaks of Mount Cook, or watch the whales in Kaikoura! There is something scenice for everyone with our full day tours.",
    link: "/tours/#full-day",
  },
  {
    title: "Half Day Tours",
    imageSrc: "/images/home/half-day.jpg",
    description:
      "Whether you would like to take a Garden Tour through private and award-winning gardens or discover the many highlights in our Christchurch City Tour – find a tour that's right for you.",
    link: "/tours/#half-day",
  },
  {
    title: "Custom Tours",
    imageSrc: "/images/tours/custom-tour.png",
    description:
      "Want something different? Already have the perfect idea in mind? We can design a custom tour that's personalised and caters to your individual wants and needs.",
    link: "/tours/#custom",
  },
];

export const metadata: Metadata = {
  title:
    "CanNZ Tours | Personalised Guided Tours in New Zealand's South Island",
  description:
    "Explore the beauty of New Zealand's South Island with CanNZ Tours. Offering personalised tours in both English and Japanese, I cater to your desires with experiences from vibrant city life to breathtaking natural wonders. Book your unforgettable journey today!",
};

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  console.log("Result: ", page);

  return (
    <main className="">
      {/* Hero Section min-h-[calc(100vh-80px)]*/}
      <div className="hero flex min-h-screen flex-row items-center justify-center px-7 md:px-20 md:py-10">
        <div className="hero">
          <div className="max-w-7xl grid-rows-2">
            <div className="py-5 md:columns-2 md:gap-10">
              <div className="pt-5">
                <h1 className="mt-3 text-4xl font-medium md:text-6xl">
                  Personalised <br /> Guided Tours <br /> of the South Island
                </h1>
              </div>
              <div className="pt-8">
                <p className="pb-5 pt-3 text-lg md:pb-0 md:text-xl">
                  Embark on an unforgettable journey with CanNZ Tours, where I
                  bring 25+ years of guiding expertise to showcase the beauty of
                  the South Island of New Zealand.
                </p>
                <div className="hidden justify-center pt-5 md:flex md:justify-start">
                  <Link
                    href="/contact"
                    className="btn btn-primary mr-2 rounded-none text-white"
                  >
                    Book a Tour
                  </Link>
                  <Link
                    href="/about"
                    type="button"
                    className="btn-dark btn btn-outline rounded-none"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:pt-0">
              <Image
                className="rounded-none"
                src="/images/home/hero.png"
                alt="New Zealand mountain range"
                width="1400"
                height="800"
                priority
              />
              <div className="flex justify-center pt-5 md:hidden">
                <Link
                  href="/contact"
                  className="btn btn-primary mr-2 rounded-none text-white"
                >
                  Book a Tour
                </Link>
                <Link
                  href="/about"
                  type="button"
                  className="btn-dark btn btn-outline rounded-none"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Your Personal Tour Guide */}
      <div className="hero bg-neutral px-7 py-10 text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            className="shadow-lg"
            src="/images/home/craig-mt-cook.png"
            alt="Craig Rome"
            width="500"
            height="500"
          />
          <div className="pt-10">
            <h1 className="text-4xl font-medium  md:text-5xl">
              Looking for a personal tour guide?
            </h1>
            <div className="">
              <p className="py-6 pb-0">
                Discover the wonders of Christchurch and the South Island with
                personalized tours in English or Japanese. With over 25 years of
                experience, CanNZ Tours offers immersive experiences, from
                vibrant city life to the stunning Southern Alps. Explore
                Christchurch, enjoy the TranzAlpine train, visit Aoraki Mount
                Cook, go whale watching in Kaikoura, or indulge in a Waipara
                winery tour. Whether for a full day, half day, or multi-day
                adventure, we look forward to welcoming you to our paradise.
              </p>
              {/* <Image
                src="/images/home/signature.png"
                width="220"
                height="110"
                alt="Craig"
              /> */}
            </div>
            <div className="flex justify-center pt-10 md:justify-center">
              <Link
                href="/about"
                className="btn  btn-outline rounded-none text-white"
              >
                Learn About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Triple Tour Card */}
      <div className="px-7 py-10">
        <h3 className="mb-10 text-center text-4xl font-medium  md:text-5xl">
          Choose an Unforgettable Experience
        </h3>
        <div className="flex flex-wrap justify-center gap-12 md:flex-row">
          {tourCards.map((card) => (
            <div
              key={card.title}
              className="hover-card card w-96 rounded-none bg-white text-center shadow-md"
            >
              <Link href={card.link}>
                <figure>
                  <Image
                    className="rounded-none"
                    src={card.imageSrc}
                    width="450"
                    height="300"
                    alt="Tour photo"
                  />
                </figure>
                <div className="card-body">
                  <p className="link-hover card-title justify-center">
                    {card.title}
                  </p>
                  <p>{card.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link
            href="/tours"
            className="btn btn-primary rounded-none text-white"
          >
            View Tours
          </Link>
        </div>
      </div>
      {/* Why Choose Us Cards */}
      <div className="py-10">
        <h3 className="mb-10 text-center text-4xl font-medium md:text-5xl">
          Why choose me?
        </h3>
        <div className="flex flex-wrap justify-center gap-10 py-10">
          {confidenceCards.slice(0, 2).map((card) => (
            <div
              className="card mx-5 w-96 bg-neutral-100 text-center shadow"
              key={card.title}
            >
              <figure className="card-body">
                <Image
                  src={card.image}
                  width="100"
                  height="100"
                  alt="Tour photo"
                />
              </figure>
              <div className="card-body">
                <p className="card-title justify-center pt-1 text-2xl">
                  {card.title}
                </p>
                <p className="pt-3">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {confidenceCards.slice(2, 4).map((card) => (
            <div
              className="card mx-5 w-96 bg-neutral-50 text-center shadow"
              key={card.title}
            >
              <figure className="card-body">
                <Image
                  src={card.image}
                  width="100"
                  height="100"
                  alt="Tour photo"
                />
              </figure>
              <div className="card-body">
                <p className="card-title justify-center pt-1 text-2xl">
                  {card.title}
                </p>
                <p className="pt-3">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden py-10 md:block">
        <h2 className="mb-20 text-center text-5xl font-medium">
          See what people have to say
        </h2>
        <ReviewStack />
        <div className="flex justify-center">
          <Link
            href="/reviews"
            className="justify-left btn btn-primary mt-2 rounded-none text-white"
          >
            View Testimonials
          </Link>
        </div>
      </div>
    </main>
  );
}
