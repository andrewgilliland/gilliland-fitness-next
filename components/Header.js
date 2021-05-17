import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="bg-green-800">
      <div className="text-gray-50 py-5 flex justify-between items-center mx-auto max-w-5xl">
        <h1>
          <Link href="/">Gilliland Fitness</Link>
        </h1>
        <Nav />
        {/* TODO: Light/Dark Toggle */}
        <div className="bg-blue-500 h-5 w-5 rounded-full hover:bg-blue-600" />
      </div>
    </header>
  );
}
