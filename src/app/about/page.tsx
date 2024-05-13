import Image from "next/image";
import Link from "next/link";

const tourCards = [
  {
    title: "Personalised Service",
    imageSrc: "/images/icons/personalised.svg",
    description: "We craft handcrafted tours tailored to your preferences.",
  },
  {
    title: "Flexible Itineraries",
    imageSrc: "/images/icons/custom.svg",
    description:
      "Explore at your own pace with flexible and customizable plans.",
  },
  {
    title: "Local Expertise",
    imageSrc: "/images/icons/local.svg",
    description:
      "Benefit from the guidance of a friendly, local tour guide with extensive knowledge of the region.",
  },
  {
    title: "Outstanding Reputation",
    imageSrc: "/images/icons/awards.svg",
    description:
      "Join us based on outstanding TripAdvisor reviews and a commitment to excellence.",
  },
];

export default function AboutUsPage() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="max-w-7xl justify-center px-20 py-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="my-auto flex flex-col items-center">
              <h1 className="w-full pb-10 text-left text-5xl font-bold">
                About Us
              </h1>
              {/* <p>
              Welcome to CanNZ Tours, your gateway to unforgettable journeys in
              and around Christchurch & New Zealand. With over 30 years of
              experience, Craig Rome, the heart and soul behind CanNZ Tours,
              takes pride in offering personalized and memorable experiences for
              independent travelers.
            </p> */}
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
            <div className="flex justify-center">
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
      <div
        id="custom"
        className="flex justify-center bg-neutral-100 px-20 py-10"
      >
        <div className="max-w-7xl">
          <h2 className="my-10 text-center text-4xl font-bold">
            Why Book With Us?
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {tourCards.map((card) => (
              <div className="card min-w-60 max-w-72 bg-white text-center shadow md:w-1/5">
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
            <Link
              href="/contact-us"
              className="btn btn-primary mr-2 text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-20 py-10">
        <div className="max-w-7xl">
          <h2 className="my-10 text-center text-4xl font-bold">Our Services</h2>
          <div className="mb-10 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-3xl font-medium underline">Custom Tours</h3>
              <p>
                Words words words words words. Embark on an unforgettable
                journey with CanNZ Tours, where we bring 25+ years of guiding
                expertise to showcase the captivating beauty of Christchurch and
                the South Island of New Zealand.
              </p>
            </div>
            <div>
              <Image
                className="rounded-xl"
                src="/images/about/hero.png"
                alt="Sunset photo"
                width="1000"
                height="900"
              />
            </div>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <Image
                className="rounded-xl"
                src="/images/about/hero.png"
                alt="Sunset photo"
                width="1000"
                height="900"
              />
            </div>
            <div>
              <h3 className="text-3xl font-medium underline">Homestays</h3>
              <p>
                Words words words words words. Embark on an unforgettable
                journey with CanNZ Tours, where we bring 25+ years of guiding
                expertise to showcase the captivating beauty of Christchurch and
                the South Island of New Zealand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
