import Image from "next/image";

export default function ChristchurchCityTour() {
  return (
    <main>
      <div className="flex flex-col items-center py-10">
        <h1 className="text-center text-5xl font-bold">
          Christchurch City Tour
        </h1>
        <Image
          src="/images/tours/chch-city-tour.png"
          width="1200"
          height="800"
          alt="Punting in the central city"
        />
      </div>
      <p>city tour</p>
    </main>
  );
}
