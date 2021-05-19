
import Link from "next/link";
import ThemeToggle from "./buttons/ThemeToggle";
import NavLink from "./NavLink";

export default function Nav() {
  return (
    <nav className="hidden lg:flex">
      <NavLink>
        <Link href="/">Home</Link>
      </NavLink>
      <NavLink>
        <Link href="/pricing">Pricing</Link>
      </NavLink>
      <NavLink>
        <Link href="/contact">Contact</Link>
      </NavLink>
      <ThemeToggle />
    </nav>
  );
}
