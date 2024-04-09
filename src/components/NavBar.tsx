import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar sticky top-0 z-50 bg-stone-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link href="/tours">Our Tours</Link>
            </li>
            <li>
              <Link href="/homestay">Homestay</Link>
            </li>
            <li>
              <Link href="/reviews">Client Reviews</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src="/images/logo.png" alt="logo" width="50" height="50" />
          Can NZ Tours
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/tours">Our Tours</Link>
            </li>
            <li>
              <Link href="/homestay">Homestay</Link>
            </li>
            <li>
              <Link href="/reviews">Client Reviews</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-primary text-white" href="/contact-us">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
