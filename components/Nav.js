import Link from "next/link";
import NavLink from "./NavLink";

export default function Nav() {
  return (
    <div className="lg:flex">
      <NavLink>
        <Link href="/">Home</Link>
      </NavLink>
      <NavLink>
        <Link href="/pricing">Pricing</Link>
      </NavLink>
      <NavLink>
        <Link href="/contact">Contact</Link>
      </NavLink>
    </div>
  );
}
