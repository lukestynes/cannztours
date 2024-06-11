import Image from "next/image";
import Link from "next/link";

const tourCards = [
  {
    title: "Aoraki Mount Cook Tour",
    imageSrc: "/images/tours/full-tour.png",
    description:
      "Visit NZ's biggest and most spectacular mountain, Aoraki, Mt Cook, nestled amongst the Southern Alps, while also enjoying the surrounding lakes and panoramic views.",
    link: "/tours/aoraki-mount-cook-tour",
    badges: ["Full Day", "Popular!"],
  },
  {
    title: "Tranz Alpine Tour",
    imageSrc: "/images/tours/tranz-alpine.webp",
    description:
      "Enjoy the beauty of the Southern Alps and the surrounding landscapes as you pass through Arthur's Pass National Park from the tranquility of the Tranz Alpine steam train.",
    link: "/tours/tranz-alpine-tour",
    badges: ["Full Day"],
  },
  {
    title: "Whale Watch Kaikoura Tour",
    imageSrc: "/images/tours/whale-watch.webp",
    description:
      "Get up close and personal with the magestic giant sperm whales, dusky dolphins, and other marine life on the picturesque Kaikoura coastline.",
    link: "/tours/whale-watch-kaikoura-tour",
    badges: ["Full Day"],
  },
  {
    title: "Christchurch Hiking Tour",
    imageSrc: "/images/tours/hiking-tour.webp",
    description:
      "For the outdoor lovers, take in the beautiful scenes of Christchurch and it's unique landscape from one of many incredible nature walks or mountainous hikes.",
    link: "/tours/christchurch-city-tour",
    badges: ["Half Day"],
  },
  {
    title: "Christchurch City Tour",
    imageSrc: "/images/tours/full-tour.png",
    description:
      "Whether you would like to take a Garden Tour through private and award-winning gardens or discover the many highlights in our Christchurch City Tour – find a tour that's right for you.",
    link: "/tours/christchurch-city-tour",
    badges: ["Full Day"],
  },
];

export default function ToursPage() {
  return (
    <div>
      <div className="flex justify-center px-10 py-10">
        <div className="grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="my-auto flex flex-col items-center">
            <h1 className="w-full pb-10 text-left text-5xl font-bold">
              Our Tours
            </h1>
            <p>
              Welcome to the heart of New Zealand adventure! At Can NZ Tours, we
              specialize in unforgettable guided tours across the breathtaking
              landscapes of the South Island. From the serene waters of Milford
              Sound to the panoramic views of Mt Cook, our expert guides ensure
              you experience New Zealand to it&apos;s full potential.
            </p>
            <br />
            <p>
              Experience the vibrant wildlife, rich history, and warm local
              culture with packages that include everything from hiking and
              cycling to boat tours and helicopter rides. With Can NZ Tours,
              you&apos;re immersing yourself in the beauty and excitement of one
              of the world&apos;s most stunning destinations. Each tour is a
              perfect blend of comfort, excitement, and awe-inspiring moments.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              className="rounded-xl"
              src="/images/tours/garden-tour.webp"
              alt="Sunset photo"
              width="1000"
              height="900"
            />
          </div>
        </div>
      </div>
      <div id="custom" className="flex justify-center  px-10 py-10">
        <div className="max-w-7xl rounded-xl bg-neutral-100 p-5">
          <h2 className="mb-5  text-center text-4xl font-bold">
            Customised Tours
          </h2>
          <p>
            Custom tours are at the heart of Can NZ Tours. Whether you are
            staying for a day or a week in the beautiful South Island, we can
            help you plan the perfect getaway. Our expert tour guides will
            tailor your trip to be exactly what you are looking for. Have a look
            at the tours below for some inspiration and get in touch with us to
            organise the perfect customised itinierary for you. All of ours
            tours can be modified to suit your unique requirements!
          </p>
          <div className="mt-5 flex justify-center">
            <Link
              href="/contact-us"
              className="btn btn-primary mr-2 text-white"
            >
              Book a Custom Tour
            </Link>
          </div>
        </div>
      </div>
      <div id="full-day" className="pt-10">
        <h2 className="text-center text-4xl font-bold">Our Tour Options:</h2>
        <div className="w-52"></div>
        <div className="flex justify-center px-7 py-10">
          <div className="grid max-w-6xl grid-cols-1 justify-center gap-12 md:grid-cols-2 lg:grid-cols-3">
            {tourCards.map((card, index) => (
              <div
                key={index}
                className="card max-w-96 bg-neutral-100 text-center shadow"
              >
                <Link href={card.link} className="card">
                  <figure>
                    <Image
                      src={card.imageSrc}
                      width="450"
                      height="300"
                      alt="Tour photo"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="card-title grid-cols-2 items-start justify-between">
                      <h2 className="link-hover w-2/3 text-left">
                        {card.title}
                      </h2>
                      <p className="w-1/3 text-right">
                        <span className="text-sm font-normal">From</span> $525
                      </p>
                      {/* TODO: Update price */}
                    </div>
                    <p className="text-left">{card.description}</p>
                    <div className="mt-3 flex flex-row gap-2">
                      {card.badges.map((badge, index) => (
                        <span key={index} className="badge">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
