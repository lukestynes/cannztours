"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    setDropdownOpen(false);

    if (elem) {
      elem.blur();
    }
  };

  return (
    <nav className="fixed start-0 top-0 z-20 w-full border-b bg-neutral-50">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => {
            if (dropdownOpen) {
              handleClick();
            }
            setDropdownOpen(!dropdownOpen);
          }}
        >
          <Image
            src="/images/logo.svg"
            alt="CanNZ Tours"
            width="75"
            height="75"
          />
        </Link>
        <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <Link href="#">
            <Image
              src="/icons/japan.svg"
              width={80}
              height={40}
              alt="Japanese"
            />
          </Link>
          <Link
            className="btn btn-primary rounded-none text-white"
            href="/contact"
          >
            Contact Us
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded={dropdownOpen ? "true" : "false"}
            onClick={() => {
              if (dropdownOpen) {
                handleClick();
              }
              setDropdownOpen(!dropdownOpen);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            dropdownOpen ? "block" : "hidden"
          } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-neutral-50 md:p-0 rtl:space-x-reverse">
            <li>
              <Link
                href="/tours"
                className="block rounded px-3 py-2 md:p-0 md:hover:bg-transparent md:hover:text-neutral"
                onClick={() => setDropdownOpen(false)}
              >
                Our Tours
              </Link>
            </li>
            <li>
              <Link
                href="/homestay"
                className="block rounded px-3 py-2 md:p-0 md:hover:bg-transparent md:hover:text-neutral"
                onClick={() => setDropdownOpen(false)}
              >
                Homestay
              </Link>
            </li>
            <li>
              <Link
                href="/client-reviews"
                className="block rounded px-3 py-2 md:p-0 md:hover:bg-transparent md:hover:text-neutral"
                onClick={() => setDropdownOpen(false)}
              >
                Client Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block rounded px-3 py-2 md:p-0 md:hover:bg-transparent md:hover:text-neutral"
                onClick={() => setDropdownOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
