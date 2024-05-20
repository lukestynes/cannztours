import EmblaCarousel from "@/components/EmblaCarousel";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/homestay/nz-homestay-canterbury-bed-breakfast-01.jpg",
  "/images/homestay/nz-homestay-canterbury-bed-breakfast-02.jpg",
  "/images/homestay/nz-homestay-canterbury-bed-breakfast-03.jpg",
  "/images/homestay/nz-homestay-canterbury-bed-breakfast-04.jpg",
  "/images/homestay/nz-homestay-canterbury-bed-breakfast-05.jpg",
  "/images/homestay/nz-homestay-canterbury-bed-breakfast-12.jpg",
  "/images/homestay/nz-homestay-canterbury-bed-breakfast-13.jpg",
  "/images/homestay/nz-homestay-canterbury-bed-breakfast-14.jpg",
  "/images/homestay/nz-homestay-canterbury-bed-breakfast-15.jpg",
  "/images/homestay/nz-homestay-canterbury-bed-breakfast-16.jpg",
];

const nearby = [
  ["Northlands Shopping Centre", "10-minute walk"],
  ["Local Golf Course", "10-minute walk"],
  ["Local Beach", "12-minute drive"],
  ["Good Fishing Spot", "15-minute drive"],
  ["Central City", "20-minute drive"],
  ["Nearest Ski Field", "1-hour drive"],
];

const amenities = [
  "Free WIFI",
  "Bedroom comforts and bathroom essentials",
  "Hairdryer in rooms",
  "Iron with ironing board, on request",
  "Full use of washing machine",
  "Heating",
  "Free parking on premises",
  "TV in our relaxation area",
  "Organic garden and glass house",
];

export default function HomestayPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex justify-center">
        <div className="mx-5 my-10 grid max-w-7xl rounded-xl bg-stone-100 p-5 shadow lg:grid-cols-2">
          <div className="flex flex-col justify-between">
            <div className="px-2">
              <h2 className="mb-5 text-4xl font-bold">Homestay</h2>
              <p className="text-justify text-lg md:pr-10">
                Experience the warmth of Kiwi hospitality at our homestay with
                CanNZ Tours. Our cozy, traditional home provides all the
                comforts and amenities you need for a perfect stay in
                Christchurch. Whether it&apos;s your first visit to New Zealand
                or you&apos;re a seasoned traveler, we aim to make your stay
                memorable and enjoyable.
              </p>
              <br />
              <p className="text-justify text-lg md:pr-10">
                Located in the suburb of Papanui, our home is just a 4-minute
                walk from Papanui Road and a 7-minute drive from the
                International Airport. Your host, Craig Rome, is an experienced
                family host who speaks both English and Japanese fluently,
                ensuring a comfortable and welcoming stay for all guests.
              </p>
            </div>
            <div className="block lg:hidden">
              <EmblaCarousel images={images} />
            </div>
            <div className=" flex justify-center lg:justify-start">
              <Link
                href="/contact-us"
                className="btn btn-primary mt-1 text-white"
              >
                Enquire Now!
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <EmblaCarousel images={images} />
          </div>
        </div>
      </div>
      {/* Rest of the Details */}
      <div className="bg-neutral-100 px-5 py-5">
        <div className="card mx-auto max-w-7xl rounded-lg bg-white p-5 shadow">
          <h2 className="mb-5 flex text-2xl font-bold">
            <Image
              className="mr-2"
              src="/icons/house.svg"
              alt=""
              width="30"
              height="30"
            />
            Our Home:
          </h2>
          <p>
            Our cosy, traditional home is set on a 650 square meter piece of
            land. We have 3 bedrooms with an ensuite double room – equipped with
            all the amenities a traveller, such as yourself, would need. You
            have the option to enjoy cooked meals with vegetables harvested from
            our organic vegetable and herb garden or glasshouse. Enjoy your
            meals in our sunroom with garden view. To our guests delight, Keiko
            has a Japanese chef’s licence. Wake up to fresh coffee or enjoy a
            pot of tea with your breakfast in our conservatory area, which
            overlooks our beautiful green garden.
          </p>
        </div>
        <div className="mx-auto max-w-7xl gap-2 md:grid md:grid-cols-5">
          <div className="card my-2 rounded-lg bg-white p-5 shadow md:col-span-3">
            <h2 className="mb-5 flex text-2xl font-bold">
              <Image
                className="mr-2"
                src="/icons/wifi.svg"
                alt=""
                width="30"
                height="30"
              />
              Included Amenities:
            </h2>
            <div className="overflow-x-auto">
              <table className="table max-w-2xl">
                <tbody>
                  {amenities.map((row, index) => (
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
                      <td>{row}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card my-2 w-full rounded-lg bg-white p-5 shadow md:col-span-2">
            <h2 className="mb-5 flex text-2xl font-bold">
              <Image
                className="mr-2"
                src="/icons/route.svg"
                alt=""
                width="30"
                height="30"
              />
              Nearby Activities:
            </h2>
            <div className="overflow-x-auto">
              <table className="table max-w-2xl">
                <thead>
                  <th>Location</th>
                  <th>Distance</th>
                </thead>
                <tbody>
                  {nearby.map((row, index) => (
                    <tr key={index}>
                      <th>{row[0]}</th>
                      <td>{row[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="card mb-2 w-full rounded-lg bg-white p-5 shadow">
            <h2 className="mb-5 flex text-2xl font-bold">
              <Image
                className="mr-2"
                src="/icons/megaphone.svg"
                alt=""
                width="30"
                height="30"
              />
              See what our guests had to say:
            </h2>
            <blockquote className="border-l-4 border-teal-500 pl-4 italic">
              “The owner operator, Craig, worked with us to arrange sightseeing
              activities, doing the calling to get tickets, preparing breakfast,
              and driving us around. His place is a real house, not a luxury
              hotel, so you feel like you’re staying with a good friend. He is
              also very knowledgeable about history, geography, and the many
              activities possible around Christchurch. We learned a lot about
              New Zealand just chatting with him. The property has nice
              gardening, is located in a middle-class neighbourhood and a nice
              walk to the shops for meals and shopping. It is also near a bus
              stop for getting downtown.”
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
