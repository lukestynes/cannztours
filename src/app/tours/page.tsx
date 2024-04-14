import Image from "next/image";

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-neutral-100 px-20">
      <div className="py-10">
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
      <hr className="px-20" />
      <div className="pt-10">
        <h2 className="text-center text-4xl font-bold">Full Day Tours</h2>
      </div>
      <div>
        <h2 className="text-center text-4xl font-bold">Half Day Tours</h2>
      </div>
      <div>
        <h2 className="text-center text-4xl font-bold">Customised Tours</h2>
      </div>
    </div>
  );
}
