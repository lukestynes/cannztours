import Image from "next/image";
import Link from "next/link";

const fullDayTourCards = [
  {
    title: "Christchurch City Tour",
    imageSrc: "/images/full-tour.png",
    description:
      "Whether you would like to take a Garden Tour through private and award-winning gardens or discover the many highlights in our Christchurch City Tour – find a tour that's right for you.",
    link: "/tours/christchurch-city-tour",
  },
  {
    title: "Christchurch City Tour",
    imageSrc: "/images/full-tour.png",
    description:
      "Whether you would like to take a Garden Tour through private and award-winning gardens or discover the many highlights in our Christchurch City Tour – find a tour that's right for you.",
    link: "/tours/christchurch-city-tour",
  },
  {
    title: "Christchurch City Tour",
    imageSrc: "/images/full-tour.png",
    description:
      "Whether you would like to take a Garden Tour through private and award-winning gardens or discover the many highlights in our Christchurch City Tour – find a tour that's right for you.",
    link: "/tours/christchurch-city-tour",
  },
];

const halfDayTourCards = [
  {
    title: "Christchurch City Tour",
    imageSrc: "/images/full-tour.png",
    description:
      "Whether you would like to take a Garden Tour through private and award-winning gardens or discover the many highlights in our Christchurch City Tour – find a tour that's right for you.",
    link: "/tours/christchurch-city-tour",
  },
  {
    title: "Christchurch City Tour",
    imageSrc: "/images/full-tour.png",
    description:
      "Whether you would like to take a Garden Tour through private and award-winning gardens or discover the many highlights in our Christchurch City Tour – find a tour that's right for you.",
    link: "/tours/christchurch-city-tour",
  },
  {
    title: "Christchurch City Tour",
    imageSrc: "/images/full-tour.png",
    description:
      "Whether you would like to take a Garden Tour through private and award-winning gardens or discover the many highlights in our Christchurch City Tour – find a tour that's right for you.",
    link: "/tours/christchurch-city-tour",
  },
];

export default function ToursPage() {
  return (
    <div className="">
      <div className="bg-neutral-100 px-20 py-10">
        <div className="grid grid-cols-2 gap-10">
          <div className="my-auto flex flex-col items-center">
            <h1 className="w-full pb-10 text-left text-5xl font-bold">
              Our Tours
            </h1>
            <p>
              Welcome to the heart of New Zealand adventure! At Can NZ Tours, we
              specialize in unforgettable guided tours across the breathtaking
              landscapes of the South Island. From the serene waters of Milford
              Sound to the panoramic views of Mt Cook, our expert guides ensure
              you experience New Zealand to it's full potential.
            </p>
            <br />
            <p>
              Experience the vibrant wildlife, rich history, and warm local
              culture with packages that include everything from hiking and
              cycling to boat tours and helicopter rides. With Can NZ Tours,
              you're immersing yourself in the beauty and excitement of one of
              the world&apos;s most stunning destinations. Each tour is a
              perfect blend of comfort, excitement, and awe-inspiring moments.
              View our range of tour packages below, or get in touch to design a
              custom experience
            </p>
          </div>
          <div>
            <Image
              src="/images/card.png"
              alt="Sunset photo"
              width="1000"
              height="900"
            />
          </div>
        </div>
      </div>
      <div id="full-day" className="pt-10">
        <h2 className="text-center text-4xl font-bold">Full Day Tours</h2>
        <div className="px-7 py-10">
          <div className="flex flex-col justify-center gap-12 md:flex-row">
            {fullDayTourCards.map((card) => (
              <div className="card bg-neutral-100 text-center md:w-96">
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
                    <h2 className="link-hover card-title justify-center">
                      {card.title}
                    </h2>
                    <p>{card.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="px-20" />
      <div id="half-day" className="pt-10">
        <h2 className="text-center text-4xl font-bold">Half Day Tours</h2>
        <div className="px-7 py-10">
          <div className="flex flex-col justify-center gap-12 md:flex-row">
            {fullDayTourCards.map((card) => (
              <div className="card bg-neutral-100 text-center md:w-96">
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
                    <h2 className="link-hover card-title justify-center">
                      {card.title}
                    </h2>
                    <p>{card.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="px-20" />
      <div id="custom" className="py-10">
        <h2 className="text-center text-4xl font-bold">Customised Tours</h2>
      </div>
    </div>
  );
}
