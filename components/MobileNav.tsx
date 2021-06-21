import Link from "next/link";
import NavLink from "./NavLink";

type Props = {
  toggle: () => void;
  isOpen: boolean;
};

export default function MobileNav({ toggle, isOpen }: Props) {
  return (
    <nav className="flex flex-col items-start text-lg space-y-2 my-8 px-5">
      <NavLink toggle={toggle}>
        <Link href="/">Home</Link>
      </NavLink>
      <NavLink toggle={toggle}>
        <Link href="/workouts">Workouts</Link>
      </NavLink>
      <NavLink toggle={toggle}>
        <Link href="/contact">Contact</Link>
      </NavLink>
    </nav>
  );
}
