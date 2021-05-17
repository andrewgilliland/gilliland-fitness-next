import Link from "next/link";
import NavLink from "./NavLink";

export default function MobileNav() {
  return (
    <nav className="flex flex-col items-start text-lg space-y-2 my-8 px-5">
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
