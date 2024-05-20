"use client";
import Image from "next/image";
import Link from "next/link";

export default function IconText({
  src,
  alt,
  text,
  link,
  width,
  height,
}: {
  src: string;
  alt: string;
  text: string;
  link: string;
  width: number;
  height: number;
}) {
  return (
    <div className="flex">
      <Image
        className="mr-2"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <Link href={link} target="_blank">
        {text}
      </Link>
    </div>
  );
}
