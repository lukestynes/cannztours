import Image from "next/image";
import Link from "next/link";

export default function MountCookPage() {
  return (
    <div>
      <div className="justify-center px-20 py-10">
        <div className="grid grid-cols-2 gap-10">
          <div className="my-auto flex flex-col items-center">
            <h1 className="w-full pb-10 text-left text-5xl font-bold">
              Aoraki Mount Cook Tour
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
          <h2 className="mb-5 text-center text-4xl font-bold">Tour Details:</h2>
          <Image src="/images/icons/time.svg" width="30" height="30" alt="" />
          <p>Tour Length: ~12 hours</p>

          <Image
            src="/images/icons/distance.svg"
            width="30"
            height="30"
            alt=""
          />
          <p>Total Distance: 660 km</p>

          <h2 className="mb-5 text-center text-4xl font-bold">
            Optional Extras:
          </h2>

          <Image
            src="/images/icons/airplane.svg"
            width="30"
            height="30"
            alt=""
          />
          <p>Tekapo Airfield Sight Seeing Flight</p>

          <Image
            src="/images/icons/airplane.svg"
            width="30"
            height="30"
            alt=""
          />
          <p>Mt Cook Airfield Sight Seeing Flight</p>
        </div>
      </div>
    </div>
  );
}
