import { getTourCards, getTourOrdering } from "@/lib/contentful";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title:
    "Personalised Guided Tours in New Zealand's South Island | CanNZ Tours",
  description:
    "Discover a variety of guided tours across New Zealand's South Island with CanNZ Tours. Experience the best attractions and hidden gems. Custom tours are available on request.",
};

export default async function ToursPage() {
  const tourCards = await getTourCards();
  const tourOrder = await getTourOrdering();
  console.log("Order" + tourOrder);
  console.log(tourOrder[0]);

  if (!tourCards) {
    return notFound();
  }

  return (
    <div style={{ marginTop: "80px" }}>
      <div className="flex justify-center bg-secondary px-10 py-10">
        <div className="grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="my-auto flex flex-col items-center">
            <h1 className="w-full pb-10 text-left text-5xl font-medium">
              Our Tours
            </h1>
            <p className="text-lg">
              Welcome to the heart of New Zealand adventure! At Can NZ Tours, we
              specialize in unforgettable guided tours across the breathtaking
              landscapes of the South Island. From the serene waters of Milford
              Sound to the panoramic views of Mt Cook, our expert guides ensure
              you experience New Zealand to it&apos;s full potential.
            </p>
            <br />
            <p className="text-lg">
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
              className="shadow-xl"
              src="/images/tours/hero.jpg"
              alt="Sunset photo"
              width="1000"
              height="600"
            />
          </div>
        </div>
      </div>
      <div id="custom" className="flex justify-center  px-10 py-10">
        <div className="max-w-7xl rounded-xl bg-neutral-100 p-5">
          <h2 className="mb-5  text-center text-4xl font-medium">
            Custom Tours
          </h2>
          <p className="text-lg">
            Custom tours are at the heart of Can NZ Tours. Whether you are
            staying for a day or a week in the beautiful South Island, we can
            help you plan the perfect getaway. We will tailor your trip to be
            exactly what you are looking for. Have a look at the tours below for
            some inspiration and get in touch with us to organise the perfect
            customised itinierary for you. All of ours tours can be modified to
            suit your unique requirements!
          </p>
          <div className="mt-5 flex justify-center">
            <Link
              href="/contact-us"
              className="btn btn-primary mr-2 rounded-none text-white"
            >
              Book a Custom Tour
            </Link>
          </div>
        </div>
      </div>
      <div id="full-day" className="pt-10">
        <h2 className="text-center text-4xl font-medium">Our Tour Options:</h2>
        <div className="w-52"></div>
        <div className="flex justify-center px-7 py-10">
          <div className="grid max-w-6xl grid-cols-1 justify-center gap-12 md:grid-cols-2 lg:grid-cols-3">
            {tourCards.map((card, index) => (
              <div
                key={index}
                className="hover-card card max-w-96 rounded-none bg-neutral-100 text-center shadow"
              >
                <Link
                  href={`/tours/${card.urlSlug}`}
                  className="card rounded-none"
                >
                  <figure>
                    <Image
                      src={card.thumbnail.url}
                      width="450"
                      height="300"
                      alt="Tour photo"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="card-title grid-cols-2 items-start justify-between">
                      <p className="link-hover w-2/3 text-left">{card.title}</p>
                      <p className="w-1/3 text-right">
                        <span className="text-sm font-normal">From</span> $
                        {card.price}
                      </p>
                    </div>
                    <p className="text-left">{card.tagline}</p>
                    <div className="mt-3 flex flex-row gap-2">
                      {card.tags.map((badge, index) => (
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
