"use client";
import { CardStack } from "./ui/card-stack";

const CARDS = [
  {
    id: 0,
    name: "Lam Z",
    designation: "TripAdvisor",
    content: (
      <p>
        We just completed a tour to Arthur&apos;s Pass today. I would not
        hesitate to recommend this tour to anyone who wants to sit back, relax,
        and enjoy the best of NZ&apos;s wonderful nature. The organisation of
        the tour was perfect: Craig tweaked the schedule slightly to suit the
        weather of the day. Craig is extremely knowledgeable.
      </p>
    ),
  },
  {
    id: 1,
    name: "Benjamin G.",
    designation: "TripAdvisor",
    content: (
      <p>
        Craig was a very good host on our tour around Christchurch. He made sure
        we were well looked after by providing lots of activities that we could
        do on our tour around Christchurch and he was very very flexible with
        our needs. He helped out in as many ways he could always with a big
        smile on his face - great service. Would recommend.
      </p>
    ),
  },
  {
    id: 2,
    name: "John B",
    designation: "TripAdvisor",
    content: (
      <p>
        Craig picked us up at our hotel and from start to finish he customized
        our tour to meet our wishes. We drove to Arthur&apos;s Pass where we
        were served a delightful picnic with views of the mountains. Along the
        way ther and back, he answered a thousand questions about flora, fauna,
        history, geology, you name it. Craig goes out of his way to make your
        tour something you will always remember. You can&apos;t go wrong!
      </p>
    ),
  },
];

export default function ReviewStack() {
  return (
    <div className="flex h-[25rem] w-full items-center justify-center">
      <CardStack items={CARDS} />
    </div>
  );
}
