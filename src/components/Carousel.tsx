import Image from "next/image";

export default function Carousel({ images }: { images: string[] }) {
  return (
    <div className="carousel w-full">
      {images.map((image, index) => (
        <div
          key={index}
          id={`slide${index}`}
          className="carousel-item relative w-full"
        >
          <Image
            className="rounded-xl shadow"
            src={image}
            alt="Tour photo"
            width="1000"
            height="1000"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${(index - 1 + images.length) % images.length}`}
              className="btn btn-circle btn-primary"
            >
              <Image
                src="/icons/arrow-left.svg"
                alt="<"
                width="24"
                height="24"
              />
            </a>
            <a
              href={`#slide${(index + 1) % images.length}`}
              className="btn btn-circle btn-primary"
            >
              <Image
                src="/icons/arrow-right.svg"
                alt=">"
                width="24"
                height="24"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
