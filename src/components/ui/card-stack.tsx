"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative h-full w-2/3 max-w-5xl">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="card absolute flex h-auto w-auto flex-col rounded-3xl border border-neutral-200 bg-stone-100 p-4 shadow-xl shadow-black/[0.1]"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="card-body">
              <Image
                className="card-title pb-5"
                src="/icons/stars.svg"
                width="116"
                height="31"
                alt="rating stars"
              />
              <p className="text-xl">{card.content}</p>
              <div className="card-actions flex flex-col">
                <p className="pb-0 pt-5 text-lg font-bold">{card.name}</p>
                <p className="pt-0">{card.designation}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
