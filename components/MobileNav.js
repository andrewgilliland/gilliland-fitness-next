import Link from "next/link";
import NavLink from "./NavLink";

export default function MobileNav({ toggle, isOpen }) {
  return (
    <nav className="flex flex-col items-start text-lg space-y-2 my-8 px-5">
      <NavLink toggle={toggle} isOpen={isOpen}>
        <Link href="/">Home</Link>
      </NavLink>
      <NavLink toggle={toggle} isOpen={isOpen}>
        <Link href="/pricing">Pricing</Link>
      </NavLink>
      <NavLink toggle={toggle} isOpen={isOpen}>
        <Link href="/contact">Contact</Link>
      </NavLink>
    </nav>
  );
}
