"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export default function EmblaCarousel({ images }: { images: string[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container" style={{ maxHeight: "450px" }}>
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <Image
                style={{ maxHeight: "450px" }}
                className="rounded-xl"
                src={image}
                alt="Tour image"
                width="1000"
                height="450"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
