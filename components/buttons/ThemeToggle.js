import { useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [clicked, setClicked] = useState(false);

  function toggle() {
    setTheme(theme === "dark" ? "light" : "dark");
    setClicked(!clicked);
  }

  return (
    <div className="relative w-10 h-4 bg-gray-400 rounded-full shadow-inner">
      <button
        className={`dot absolute w-6 h-6 bg-white rounded-full shadow -top-1 transition-transform transform ${
          clicked ? `translate-x-5` : `-translate-x-1`
        }`}
        onClick={toggle}
      ></button>
    </div>
  );
}
