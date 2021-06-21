import Link from "next/link";
import NavLink from "./NavLink";

export default function Nav() {
  return (
    <nav className="hidden lg:flex">
      <NavLink>
        <Link href="/">Home</Link>
      </NavLink>
      <NavLink>
        <Link href="/workouts">Workouts</Link>
      </NavLink>
      <NavLink>
        <Link href="/contact">Contact</Link>
      </NavLink>
    </nav>
  );
}
