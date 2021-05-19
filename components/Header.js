import { useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Overlay from "./Overlay";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!isOpen);
  }

  function toggleKeyPress() {
    setOpen(!isOpen);
  }

  return (
    <header className="bg-purple-600 dark:bg-purple-800 relative">
      <div className="text-gray-50 px-3 py-5 flex justify-between items-center mx-auto max-w-5xl relative z-10">
        <h1 className="font-bold">
          <Link href="/">Gilliland Fitness</Link>
        </h1>
        <Nav />
        {/* TODO: Light/Dark Toggle */}
        <button
          type="button"
          className="rounded-sm p-2 inline-flex items-center justify-center text-gray-50 hover:border focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 lg:hidden"
          aria-expanded="false"
          onClick={toggle}
          onKeyPress={toggleKeyPress}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`absolute top-0 inset-x-0 p-2 transition duration-200 transform origin-top-right lg:hidden ${
          isOpen
            ? "z-20 ease-out opacity-100 scale-100"
            : "z-0 ease-in opacity-0 scale-90"
        }`}
      >
        <div className="rounded-sm shadow-md bg-gray-50 dark:bg-gray-900 pt-4 ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="flex justify-between items-center px-5">
            <div className="h-10 w-10 bg-purple-600 rounded-full"></div>
            <button
              type="button"
              className="rounded-sm p-2 inline-flex items-center justify-center text-gray-900 dark:text-gray-50 hover:border focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
              aria-expanded="false"
              onClick={toggle}
              onKeyPress={toggleKeyPress}
            >
              <span className="sr-only">Close main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <MobileNav toggle={toggle} isOpen={isOpen} />
          <div className="bg-purple-600 dark:bg-purple-800 text-gray-50 flex justify-center py-5 font-semibold text-lg transition-opacity duration-300 hover:opacity-80">
            Book A Session
          </div>
        </div>
      </div>
      <Overlay toggle={toggle} isOpen={isOpen} />
    </header>
  );
}
