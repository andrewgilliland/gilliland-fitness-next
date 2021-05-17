import Link from "next/link";
import NavLink from "./NavLink";

export default function MobileNav() {
  return (
    <nav className="my-8 text-lg space-y-2 px-5">
      <NavLink>
        <Link href="/">Home</Link>
      </NavLink>
      <NavLink>
        <Link href="/pricing">Pricing</Link>
      </NavLink>
      <NavLink>
        <Link href="/contact">Contact</Link>
      </NavLink>
    </nav>
  );
}
