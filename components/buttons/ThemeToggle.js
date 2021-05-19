import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button className="h-5 w-5 bg-purple-100 rounded-full" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      
    </button>
  );
}
