import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Carousel from "@/components/Carousel";

const tourPages: Array<Tour> = [
  {
    slug: "aoraki-mount-cook-tour",
    title: "Aoraki Mount Cook Tour",
    blurb:
      "Discover the stunning landscapes of Aoraki Mount Cook. This tour includes guided hikes, visits to scenic viewpoints, and educational talks about the area's rich history and geology.  Perfect for adventurers and nature lovers, this tour promises an unforgettable experience.",
    images: ["/images/tours/half-day.png", "/images/tours/trans-alpine.jpeg"],
    highlights: [
      "Guided hikes through alpine landscapes",
      "Scenic viewpoints and photo opportunities",
      "Educational talks about the area's history and geology",
      "Small group sizes for a personalised experience",
    ],
    description: [
      "This tour is a full day trip from Christchurch of 12 hours. I am glad to make it a multi-day trip, should you wish to have more time in Aoraki Mt Cook or enjoy the night sky. Alternatively, continue to Queenstown and Milford. From Christchurch, it is a 330 Kms drive, so we have about 2 hours to enjoy lunch and time in Aoraki Mt Cook. My Christchurch to Aoraki Mt Cook Tour gives you an opportunity to see a huge range of landscapes from the Canterbury Plains. The journey takes you through the rolling pastures of Geraldine and then up into the Alpine Tussock. It continues around Lake Tekapo, through to the permanent snow Alpine Scenery of Aoraki Mount Cook National Park. Here you can see the true magnificence of the highest mountain in New Zealand.",
      "You will have the opportunity to take plenty of instagramable photos along the way. We will stop for a morning tea, in a scenic spot along the way to suit your wishes or perhaps the prettiest spot is near the “Church of the Good Shepherd”, where you can enjoy the stunning turquoise blue waters of Lake Tekapo.",
      "We will then head up into the Alpine wonderland of the Aoraki Mount Cook National Park,　as we get closer to the Tasman Glacier and snowfields. Enjoy a two-course hand crafted picnic lunch in a picturesque location of your choice. Whilst in the National Park, you can go for a short walk up the Hooker Valley track to the Mueller Viewpoint. On the other hand, you may choose to climb up the Tasman Lake view, which bears an incredible perspective on the Tasman Glacier and the East essence of Aoraki Mt Cook. You can also take the opportunity to go on a Scenic Flight (optional), or just relax and enjoy the magnificent views from The Hermitage Hotel.",
    ],
    details: {
      timeLength: "~12 hours",
      distance: "660km",
      price: "From $512 pp",
      departureLocation: "Christchurch",
      departureTime: "7am",
    },
    itinerary: [
      ["7am", "Depart Christchurch"],
      ["9am", "Break / View farm animals at tin shed"],
      ["10am", "Lake Tekapo morning tea"],
      [
        "11am",
        "Lake Pukaki photo stop, and an option to purchase fresh farmed salmon",
      ],
      ["12am", "Hike the Hooker Valley track to Mueller Lake"],
      ["3:30pm", "Depart Aoraki Mt Cook"],
      ["7:30pm", "Arrive back in Christchurch"],
    ],
    inclusions: [
      {
        name: "Transport to and from Aoraki Mt Cook in a 7-seater Toyota Hiace",
      },
      {
        name: "Experience and Knowledgeable Tour Operator / Guide",
      },
      {
        name: "Homemade, organic picnic lunch of a kiwi-inspired soup accompanied with bread, meat, and cheeses, or a Japanese inspired salmon dish.",
      },
      {
        name: "Guided walk down the Hooker Valley Track",
      },
    ],
    optionalExtras: [
      [
        "Scenic Flight",
        "From Lake Tekapo, Glentanner Airport 20 kms before Mount Cook village.",
      ],
      [
        "Ski Plane Flight",
        "Land on the Tasman Glacier, departing from Mount Cook Airport.",
      ],
    ],
    pricing: [
      ["Adults", "$520 pp."],
      ["Children (under 12)", "$260 pp."],
    ],
  },
];

const reviews = [
  {
    name: "John Doe",
    review:
      "Amazing tour! The guide was knowledgeable and the views were breathtaking.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "A wonderful experience. Highly recommend!",
    rating: 4,
  },
  {
    name: "Sam Wilson",
    review: "Loved every moment of this tour. Perfect for nature lovers.",
    rating: 5,
  },
];

export default function MountCookPage({
  params,
}: {
  params: { tour: string };
}) {
  const accessedPage = params.tour;
  let validPage: boolean = false;

  for (const tour of tourPages) {
    if (tour.slug === accessedPage) {
      return (
        <div>
          <div className="container mx-auto my-10 grid max-w-7xl grid-cols-2 rounded-xl bg-stone-100 p-5 shadow">
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="mb-5 text-3xl font-bold">{tour.title}</h2>
                <p className="mb-5 text-lg">{tour.blurb}</p>
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold">Highlights:</h3>
                <ul className="mb-3 list-inside list-disc">
                  {tour.highlights.map((highlight) => (
                    <li>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-1 text-xl">
                  <span className="font-bold">Duration: </span>
                  {tour.details.timeLength}
                </h3>
                <h3 className="mb-1 text-xl">
                  <span className="font-bold">Price: </span>
                  {tour.details.price}
                </h3>
              </div>
              <div>
                <Link
                  href="/contact-us"
                  className="btn btn-primary mt-1 text-white"
                >
                  Book Now!
                </Link>
              </div>
            </div>
            <div>
              <Carousel images={tour.images} />
            </div>
          </div>
          {/* Rest of the Details */}
          <div className="bg-neutral-100 pt-5">
            <div className="card mx-auto max-w-6xl rounded-lg bg-white p-5 shadow">
              <h2 className="mb-5 flex text-2xl font-bold">
                <Image
                  className="mr-2"
                  src="/icons/tour.svg"
                  alt=""
                  width="30"
                  height="30"
                />
                About Tour:
              </h2>
              {tour.description.map((paragraph) => (
                <p>
                  {paragraph}
                  <br />
                  <br />
                </p>
              ))}
            </div>
            <div className="card mx-auto mt-2 max-w-6xl rounded-lg bg-white p-5 shadow">
              <h2 className="mb-5 flex text-2xl font-bold">
                <Image
                  className="mr-2"
                  src="/icons/tour.svg"
                  alt=""
                  width="30"
                  height="30"
                />
                Optional Extras:
              </h2>
              <div className="overflow-x-auto">
                <table className="table max-w-2xl">
                  <tbody>
                    {tour.optionalExtras.map((row) => (
                      <tr>
                        <th>{row[0]}</th>
                        <td>{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2">
              <div className="card col-span-2 my-2 rounded-lg bg-white p-5 shadow">
                <h2 className="mb-5 flex text-2xl font-bold">
                  <Image
                    className="mr-2"
                    src="/icons/van.svg"
                    alt=""
                    width="30"
                    height="30"
                  />
                  Itinerary
                </h2>
                <div className="overflow-x-auto">
                  <table className="table max-w-2xl">
                    <tbody>
                      {tour.itinerary.map((row) => (
                        <tr>
                          <th>{row[0]}</th>
                          <td>{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card col-span-1 my-2 rounded-lg bg-white p-5 shadow">
                <h2 className="mb-5 flex text-2xl font-bold">
                  <Image
                    className="mr-2"
                    src="/icons/paper.svg"
                    alt=""
                    width="30"
                    height="30"
                  />
                  Details
                </h2>
                <div className="overflow-x-auto">
                  <table className="table max-w-2xl">
                    <tbody>
                      <tr>
                        <th>Departure Location:</th>
                        <td>{tour.details.departureLocation}</td>
                      </tr>
                      <tr>
                        <th>Departure Time:</th>
                        <td>{tour.details.departureTime}</td>
                      </tr>
                      <tr>
                        <th>Duration:</th>
                        <td>{tour.details.timeLength}</td>
                      </tr>
                      <tr>
                        <th>Distance:</th>
                        <td>{tour.details.distance}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2">
              <div className="card col-span-2 mb-2 rounded-lg bg-white p-5 shadow">
                <h2 className="mb-5 flex text-2xl font-bold">
                  <Image
                    className="mr-2"
                    src="/icons/check.svg"
                    alt=""
                    width="30"
                    height="30"
                  />
                  Inclusions:
                </h2>
                <div className="overflow-x-auto">
                  <table className="table max-w-2xl">
                    <tbody>
                      {tour.inclusions.map((row) => (
                        <tr>
                          <th>
                            <Image
                              className="mr-2"
                              src="/icons/tick.svg"
                              alt=""
                              width="20"
                              height="20"
                            />
                          </th>
                          <td>{row.name}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card col-span-1 mb-2 flex flex-col justify-between rounded-lg bg-white p-5 shadow">
                <div>
                  <h2 className="mb-5 flex text-2xl font-bold">
                    <Image
                      className="mr-2"
                      src="/icons/dollar.svg"
                      alt=""
                      width="30"
                      height="30"
                    />
                    Pricing:
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="table max-w-2xl">
                      <tbody>
                        {tour.pricing.map((row) => (
                          <tr>
                            <th>{row[0]}</th>
                            <td>{row[1]}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <p className="end text-sm">
                  * Please note that prices may vary depending on specific tour
                  arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  return notFound();
}
