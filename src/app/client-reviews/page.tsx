import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const reviews = [
  {
    name: "John Doe",
    source: "TripAdvisor",
    review:
      "Craig picked us up at our hotel and from start to finish he customized our tour to meet our wishes. We drove to Arthur&apos;s Pass where we were served a delightful picnic with views of the mountains. Along the way ther and back, he answered a thousand questions about flora, fauna, history, geology, you name it. Craig goes out of his way to make your tour something you will always remember. You can&apos;t go wrong!",
  },
  {
    name: "John Doe",
    source: "TripAdvisor",
    review:
      "Craig picked us up at our hotel and from start to finish he customized our tour to meet our wishes. We drove to Arthur&apos;s Pass where we were served a delightful picnic with views of the mountains. Along the way ther and back, he answered a thousand questions about flora, fauna, history, geology, you name it. Craig goes out of his way to make your tour something you will always remember. You can&apos;t go wrong!",
  },
  {
    name: "John Doe",
    source: "TripAdvisor",
    review:
      "Craig picked us up at our hotel and from start to finish he customized our tour to meet our wishes. We drove to Arthur&apos;s Pass where we were served a delightful picnic with views of the mountains. Along the way ther and back, he answered a thousand questions about flora, fauna, history, geology, you name it. Craig goes out of his way to make your tour something you will always remember. You can&apos;t go wrong!",
  },
  {
    name: "John Doe",
    source: "TripAdvisor",
    review:
      "Craig picked us up at our hotel and from start to finish he customized our tour to meet our wishes. We drove to Arthur&apos;s Pass where we were served a delightful picnic with views of the mountains. Along the way ther and back, he answered a thousand questions about flora, fauna, history, geology, you name it. Craig goes out of his way to make your tour something you will always remember. You can&apos;t go wrong!",
  },
];

export const metadata: Metadata = {
  title: "Customer Reviews | CanNZ Tours",
  description:
    "Read customer reviews and testimonials about their experiences with CanNZ Tours. See why we're the top choice for guided tours in New Zealand.",
};

export default function ReviewsPage() {
  return (
    <div style={{ marginTop: "80px" }} className="min-h-[calc(100vh-80px)]">
      <div className="flex justify-center bg-secondary px-10 py-10">
        <div className="grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="my-auto flex flex-col">
            <Image
              className="card-title my-5"
              src="/icons/stars-black.svg"
              width="116"
              height="31"
              alt="rating stars"
            />
            <h1 className="w-full pb-10 text-left text-5xl font-medium">
              Customers Love Us
            </h1>
            <p className="text-left text-lg">
              Read what our customers have to say about their amazing
              experiences.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              className="shadow-xl"
              src="/images/reviews/hero.png"
              alt="Sunset photo"
              width="1000"
              height="600"
            />
          </div>
        </div>
      </div>
      <div id="custom" className="flex justify-center  px-10 py-10">
        <div className="max-w-4xl rounded-xl bg-neutral-100 p-5">
          <Image
            className="card-title pb-5"
            src="/icons/stars.svg"
            width="116"
            height="31"
            alt="rating stars"
          />
          <p>
            Craig picked us up at our hotel and from start to finish he
            customized our tour to meet our wishes. We drove to Arthur&apos;s
            Pass where we were served a delightful picnic with views of the
            mountains. Along the way ther and back, he answered a thousand
            questions about flora, fauna, history, geology, you name it. Craig
            goes out of his way to make your tour something you will always
            remember. You can&apos;t go wrong!
          </p>
          <p className="pt-5 text-xl font-bold">John Smith</p>
          <p className="font-bold">Arthur&apos;s Pass Tour</p>
          <div className="mt-5 flex justify-center">
            <Link
              href="/tours"
              className="btn btn-primary mr-2 rounded-none text-white"
            >
              View Tours
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 p-10">
        <h2 className="text-medium col-span-2 text-4xl">
          Explore More Reviews:
        </h2>
        {reviews.map((review, index) => (
          <div key={index} className="col-span-2 md:col-span-1">
            <div>
              <div className="flex flex-col rounded-lg bg-white p-5 shadow-lg">
                <Image
                  className="card-title my-5"
                  src="/icons/stars.svg"
                  width="116"
                  height="31"
                  alt="rating stars"
                />
                <p className="mt-2 text-gray-700">{review.review}</p>
                <p className="mt-4 text-xl font-semibold">{review.name}</p>
                <p className="text-md italic">{review.source}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
