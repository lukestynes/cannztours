// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer h-20 items-center bg-neutral-200 p-4">
      <aside>
        {/* <Image src="/images/logo.png" alt="logo" width="150" height="150" /> */}
        <p>&copy; CanNZ Tours {new Date().getFullYear()}</p>
        <p>
          Website design and development by{" "}
          <Link
            className="link-hover"
            href="https://www.lukestynes.dev/"
            target="_blank"
          >
            lukestynes.dev
          </Link>
        </p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link href="https://www.facebook.com/CanNZTours/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </Link>
        <Link
          href="https://www.tripadvisor.co.nz/Attraction_Review-g255118-d1600394-Reviews-CanNZ_Tours-Christchurch_Canterbury_Region_South_Island.html"
          target="_blank"
        >
          <Image
            src="/images/tripadvisor.svg"
            alt="TripAdvisor"
            width="25"
            height="25"
          />
        </Link>
      </nav>
    </footer>
  );
}
