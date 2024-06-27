// import Link from "next/link";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral py-10 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="border-b border-t border-white py-10">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mb-4 text-lg font-semibold">About Us</p>
              <ul>
                <li>
                  <Link href="/about" className="link-hover">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="link-hover">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/contact#FAQs" className="link-hover">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-lg font-semibold">Services</p>
              <ul>
                <li>
                  <Link href="/tours" className="link-hover">
                    Tours
                  </Link>
                </li>
                <li>
                  <Link href="/homestay" className="link-hover">
                    Homestay
                  </Link>
                </li>
                <li>
                  <Link href="/client-reviews" className="link-hover">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/contact#BOOK" className="link-hover">
                    Book Now
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-lg font-semibold">Customer Support</p>
              <ul>
                <li>
                  <Link href="/payment-options">Payment Options</Link>
                </li>
                <li>
                  <Link href="/cancellation-policy">Cancellation Policy</Link>
                </li>
                <li>
                  <Link href="/refund-policy">Refund Policy</Link>
                </li>
                <li>
                  <Link href="/terms-of-service">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-lg font-semibold">Connect With Us</p>
              <ul>
                <li>
                  <Link
                    href="https://www.tripadvisor.co.nz/Attraction_Review-g255118-d1600394-Reviews-CanNZ_Tours-Christchurch_Canterbury_Region_South_Island.html"
                    target="_blank"
                    rel="noopened noreferer"
                    className="link-hover flex"
                  >
                    <Image
                      src="/icons/tripadvisor.svg"
                      className="mr-2"
                      alt="TripAdvisor"
                      width="20"
                      height="20"
                    />
                    TripAdvisor
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/CanNZTours/"
                    target="_blank"
                    rel="noopened noreferer"
                    className="link-hover flex"
                  >
                    <Image
                      src="/icons/facebook.svg"
                      className="mr-2"
                      alt="TripAdvisor"
                      width="20"
                      height="20"
                    />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/cannz_tours/n"
                    target="_blank"
                    rel="noopened noreferer"
                    className="link-hover flex"
                  >
                    <Image
                      src="/icons/instagram.svg"
                      className="mr-2"
                      alt="TripAdvisor"
                      width="20"
                      height="20"
                    />
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://maps.app.goo.gl/cjFdsjiWR7xu9N9C9"
                    target="_blank"
                    rel="noopened noreferer"
                    className="link-hover flex"
                  >
                    <Image
                      src="/icons/google.svg"
                      className="mr-2"
                      alt="TripAdvisor"
                      width="20"
                      height="20"
                    />
                    Google
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <div>
            <Image src="/images/logo.svg" alt="logo" width="150" height="150" />
          </div>
          <div className="text-right">
            <p>&copy; CanNZ Tours {new Date().getFullYear()}</p>
            <p>
              Website design and development by{" "}
              <Link
                className="link-hover"
                href="https://www.stynesdigital.nz/"
                target="_blank"
              >
                Stynes Digital
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
  return (
    <footer className="footer h-auto items-center bg-secondary p-4">
      <aside>
        <p>&copy; CanNZ Tours {new Date().getFullYear()}</p>
        <p>
          Website design and development by{" "}
          <Link
            className="link-hover"
            href="https://www.stynesdigital.nz/"
            target="_blank"
          >
            Stynes Digital
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
            src="/icons/tripadvisor.svg"
            alt="TripAdvisor"
            width="25"
            height="25"
          />
        </Link>
      </nav>
    </footer>
  );
}
