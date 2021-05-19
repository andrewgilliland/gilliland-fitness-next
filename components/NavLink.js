export default function NavLink({ children }) {
  return (
    <div className="text-gray-050 inline-block font-semibold lg:mx-4 transition-all duration-300 hover:opacity-75">
      {children}
    </div>
  );
}
