import Image from "next/image";
import Link from "next/link";

export default function HomestayPage() {
  return (
    <div>
      <div className="flex justify-center px-20 py-10">
        <div className="grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="my-auto flex flex-col items-center">
            <h1 className="w-full pb-10 text-left text-5xl font-bold">
              Homestay
            </h1>
            <p>
              Experience the warmth of Kiwi hospitality with a homestay at CanNZ
              Tours. Our cozy, traditional home offers homely comforts and
              amenities, making it the perfect choice for your stay in
              Christchurch. Whether it's your first visit to New Zealand or
              you're a seasoned traveler, our homestay experience is designed to
              make your stay memorable.
            </p>
            <br />
            <p>
              Located in the suburb of Papanui, our home is just a 4-minute walk
              from Papanui Road and a 7-minute drive from the International
              Airport. Our experienced family host, Craig Rome, speaks both
              English and Japanese fluently, ensuring a comfortable and
              welcoming stay for all guests.
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
      <div id="custom" className="flex justify-center px-20 py-10">
        <div className="max-w-7xl">
          <h2 className="mb-5 text-center text-4xl font-bold">
            Accomodation Details
          </h2>
          <p>
            Custom tours are at the heart of Can NZ Tours. Whether you are
            staying for a day or a week in the beautiful South Island, we can
            help you plan the perfect getaway. Our expert tour guides will
            tailor your trip to be exactly what you are looking for. Have a look
            at the tours below for some inspiration and get in touch with us to
            organise the perfect customised itinierary for you.
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
    </div>
  );
}
