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
    <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/logo.svg"
            className="h-8"
            alt="CanNZ Tours"
            width="75"
            height="75"
          />
        </Link>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <Link
            className="btn btn-primary rounded-none text-white"
            href="/about"
          >
            Contact Us
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
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
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
            <li>
              <Link
                href="/tours"
                className="block rounded px-3 py-2 md:bg-transparent md:p-0"
                aria-current="page"
              >
                Our Tours
              </Link>
            </li>
            <li>
              <Link
                href="/homestay"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Homestay
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Client Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-neutral-100 shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => {
              if (dropdownOpen) {
                handleClick();
              }
              setDropdownOpen(!dropdownOpen);
            }}
          >
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
            className="menu dropdown-content menu-sm z-[1] mt-3 w-[calc(100vw-14px)] rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link onClick={handleClick} href="/tours">
                Our Tours
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} href="/homestay">
                Homestay
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} href="/reviews">
                Client Reviews
              </Link>
            </li>
            <li>
              <Link onClick={handleClick} href="/about">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <Image src="/images/logo.svg" alt="logo" width="50" height="50" />
          CanNZ Tours
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="link-hover" href="/tours">
                Our Tours
              </Link>
            </li>
            <li>
              <Link className="link-hover" href="/homestay">
                Homestay
              </Link>
            </li>
            <li>
              <Link className="link-hover" href="/reviews">
                Client Reviews
              </Link>
            </li>
            <li>
              <Link className="link-hover" href="/about">
                About Us
              </Link>
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
