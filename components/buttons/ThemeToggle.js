import { useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle({ mobile }) {
  const { theme, setTheme } = useTheme();
  const [clicked, setClicked] = useState(false);

  function toggle() {
    setTheme(theme === "dark" ? "light" : "dark");
    setClicked(!clicked);
  }

  return (
    <div
      className={`relative w-10 h-4 bg-gray-400 rounded-full shadow-inner ${
        mobile ? `inline-block` : `hidden lg:inline-block`
      }`}
    >
      <button
        className={`absolute w-6 h-6 bg-yellow-200 rounded-full shadow -top-1 transition-transform duration-300 transform ${
          clicked ? `translate-x-5` : `-translate-x-1`
        }`}
        onClick={toggle}
      >
        <div className="flex justify-center items-center">
          <svg
            className="h-5 w-5 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {clicked ? (
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            ) : (
              <>
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </>
            )}
          </svg>
        </div>
      </button>
    </div>
  );
}
