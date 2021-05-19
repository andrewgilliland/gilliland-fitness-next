export default function NavLink({ children, toggle }) {
  return (
    <div
      onClick={toggle}
      className="dark:text-gray-50 inline-block font-semibold lg:mx-4 transition-opacity duration-300 hover:opacity-75"
    >
      {children}
    </div>
  );
}
