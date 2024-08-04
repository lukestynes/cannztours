"use client";
import type { TourCardItem, TourOrderItem } from "@/types/contentful";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TourCards({
  tourCards,
  tourOrder,
}: {
  tourCards: TourCardItem[];
  tourOrder: TourOrderItem[];
}) {
  const [filter, setFilter] = useState("all");

  // Create a map for quick lookup of the order index
  const tourOrderMap = new Map(
    tourOrder.map((item, index) => [item.title, index]),
  );

  console.log("Unsorted");
  console.log(tourCards);

  // Custom sorting function
  const sortedTourCards = tourCards.sort((a, b) => {
    return (
      (tourOrderMap.get(a.title) ?? -1) - (tourOrderMap.get(b.title) ?? -1)
    );
  });

  const filteredCards = sortedTourCards.filter((card) => {
    return filter === "all" || card.tags.includes(filter);
  });
  return (
    <div>
      <div className="px-7 py-5">
        <div className="mx-auto max-w-6xl">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Filter Tours</span>
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="select select-bordered"
            >
              <option value="all">All Tours</option>
              <option value="Full Day">Full Day Tours</option>
              <option value="Half Day">Half Day Tours</option>
            </select>
          </label>
        </div>
      </div>
      <div className="flex justify-center px-7 py-10">
        <div className="grid max-w-6xl grid-cols-1 justify-center gap-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredCards.map((card, index) => (
            <div
              key={index}
              className="hover-card card max-w-96 rounded-none bg-neutral-100 text-center shadow"
            >
              <Link
                href={`/tours/${card.urlSlug}`}
                className="card rounded-none"
              >
                <figure>
                  <Image
                    src={card.thumbnail.url}
                    width="450"
                    height="300"
                    alt="Tour photo"
                  />
                </figure>
                <div className="card-body">
                  <div className="card-title grid-cols-2 items-start justify-between">
                    <p className="link-hover w-2/3 text-left">{card.title}</p>
                    <p className="w-1/3 text-right">
                      <span className="text-sm font-normal">From</span> $
                      {card.price}
                    </p>
                  </div>
                  <p className="text-left">{card.tagline}</p>
                  <div className="mt-3 flex flex-row gap-2">
                    {card.tags.map((badge, index) => (
                      <span key={index} className="badge">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
