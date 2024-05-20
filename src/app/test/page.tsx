import EmblaCarousel from "@/components/EmblaCarousel";

export default function TestPage() {
  return (
    <div>
      <EmblaCarousel slides={Array.from(Array(5).keys())} />
    </div>
  );
}
