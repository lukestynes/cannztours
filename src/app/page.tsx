// import Link from "next/link";
import ReviewStack from "@/components/ReviewStack";
import Image from "next/image";
import Link from "next/link";

const confidenceCards = [
  {
    title: "25+ Years Experience",
    description:
      "With over 25 years of expertise in crafting unforgettable New Zealand adventures, we guarantee a seamless, enriching travel experience tailored to your preferences.",
    image: "/images/experience.svg",
  },
  {
    title: "Tours in English or Japanese",
    description:
      "Feel at home with our bilingual tours, offered in both English and Japanese, designed to bridge cultures and make every moment of your journey accessible and engaging.",
    image: "/images/speak.svg",
  },
  {
    title: "Extensive Local Knowledge",
    description:
      "Dive deep into the heart of New Zealand with us. Our extensive local knowledge unveils hidden gems and authentic experiences far beyond the typical tourist paths.",
    image: "/images/local.svg",
  },
  {
    title: "Custom Tours Available",
    description:
      "Craft your perfect New Zealand journey with us. Whether you seek thrilling adventures or tranquil retreats, our custom tours are designed to cater to your personal travel desires.",
    image: "/images/custom.svg",
  },
];

export default function HomePage() {
  return (
    <main className="pb-10">
      {/* Hero Section */}
      <div className="hero flex min-h-[calc(100vh-68px)] flex-row items-center justify-center bg-neutral-100 px-7">
        <div className="hero">
          <div className="grid-rows-2">
            <div className="py-5 md:columns-2 md:gap-10">
              <div>
                <h1 className="pb-5 text-4xl font-bold md:text-5xl">
                  Explore the <br /> breathtaking beauty <br /> of the South
                  Island
                </h1>
              </div>
              <div>
                <p className="pb-5">
                  Embark on an unforgettable journey with CanNZ Tours, where we
                  bring 25+ years of guiding expertise to showcase the
                  captivating beauty of Christchurch and the South Island of New
                  Zealand.
                </p>
                <div className="flex justify-center pt-5">
                  <Link href="/contact" className="btn btn-primary mr-2">
                    Book a Tour
                  </Link>
                  <Link href="/about" className="btn btn-outline">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero pt-10">
              <Image
                src="/images/hero.png"
                alt="New Zealand mountain range"
                width="1400"
                height="800"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Your Personal Tour Guide */}
      <div className="hero px-7 py-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/images/craig.png"
            alt="Photo of Craig Rome"
            width="500"
            height="500"
          />
          <div>
            <h1 className="text-4xl font-bold md:text-5xl">
              Looking for a personal tour guide?
            </h1>
            <div className="">
              <p className="py-6">
                Discover the wonders of Christchurch with tours offered in both
                English and Japanese, ensuring a personalised and immersive
                experience. Delve into the richness of our region by exploring
                the many attractions, from the vibrant city life to the
                breathtaking Southern Alps.
              </p>
              <p className="md:py-6">
                With 25+ years experience guiding tours around the South Island
                of New Zealand, I look forward to welcoming you to our paradise.
                Having fluency in both English and Japanese, our tours are
                offered in either language. Whether you want to see the many
                things to do in Christchurch or view the Southern Alps from the
                TranzAlpine train. See Aoraki Mount Cook, go whale watching in
                Kaikoura or take a Waipara winery tour. Explore my many full day
                or half day tours from Christchurch or my multi day tours around
                the South Island.
              </p>
            </div>
            <div className="flex justify-center pt-10">
              <Link href="/about" className="btn btn-primary">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Triple Tour Card */}
      <div className=" bg-neutral-100 px-7 py-10">
        <h3 className="mb-10 text-center text-4xl font-bold  md:text-5xl">
          Choose an Unforgettable Experience
        </h3>
        <div className="flex flex-col justify-center gap-12 md:flex-row">
          {/* Card One */}
          <div className="card bg-white text-center md:w-96">
            <figure>
              <Image
                src="/images/full-tour.png"
                width="450"
                height="300"
                alt="Tour photo"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Full Day Tours</h2>
              <p>
                Ride the TranzAlpine train tour, explore the snow peaks of Mount
                Cook, or watch the whales in Kaikoura! There is something
                scenice for everyone with our full day tours.
              </p>
            </div>
          </div>
          {/* Card Two */}
          <div className="card bg-white text-center md:w-96">
            <figure>
              <Image
                src="/images/half-day.png"
                width="450"
                height="300"
                alt="Tour photo"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Half Day Tours</h2>
              <p>
                Whether you would like to take a Garden Tour through private and
                award-winning gardens or discover the many highlights in our
                Christchurch City Tour – find a tour that&apos;s right for you.
              </p>
            </div>
          </div>
          {/* Card Three */}
          <div className="card bg-white text-center md:w-96">
            <figure>
              <Image
                src="/images/custom-tour.png"
                width="450"
                height="300"
                alt="Tour photo"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Custom Tours</h2>
              <p>
                Want something different? Already have the perfect idea in mind?
                We can design a custom tour that&apos;s personalised and caters
                to your individual wants and needs.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/tours" className="btn btn-primary">
            View our Tours
          </Link>
        </div>
      </div>
      {/* Why Choose Us Cards */}
      <div className="py-20">
        <h3 className="mb-10 text-center text-5xl font-bold">Why choose us?</h3>
        <div className="flex flex-wrap justify-center gap-10 py-10">
          {confidenceCards.slice(0, 2).map((card) => (
            <div className="card w-96 text-center" key={card.title}>
              <figure>
                <Image
                  src={card.image}
                  width="100"
                  height="100"
                  alt="Tour photo"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center pt-1 text-2xl">
                  {card.title}
                </h2>
                <p className="pt-3">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {confidenceCards.slice(2, 4).map((card) => (
            <div className="card w-96 text-center" key={card.title}>
              <figure>
                <Image
                  src={card.image}
                  width="100"
                  height="100"
                  alt="Tour photo"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title justify-center pt-1 text-2xl">
                  {card.title}
                </h2>
                <p className="pt-3">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:display">
        <h2 className="mb-20 text-center text-5xl font-bold">Our Reviews</h2>
        <ReviewStack />
        <div className="flex justify-center">
          <Link href="/reviews" className="justify-left btn btn-primary mt-2">
            View Testimonials
          </Link>
        </div>
      </div>
    </main>
  );
}
