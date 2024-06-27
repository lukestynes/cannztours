"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function EmblaCarousel({ images }: { images: string[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container" style={{ maxHeight: "450px" }}>
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <Image
                style={{ maxHeight: "460px", objectFit: "cover" }}
                className="shadow-xl"
                src={image}
                alt="Tour image"
                width="620"
                height="460"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
