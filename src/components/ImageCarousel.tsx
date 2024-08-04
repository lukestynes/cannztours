"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/custom-swiper.css";

export default function ImageCarousel({ images }: { images: string[] }) {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="h-[300px] w-full sm:h-[400px] md:h-[500px]"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="">
          <Image src={image} fill alt="Tour Photo" objectFit="cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
