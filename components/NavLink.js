export default function NavLink({ children }) {
  return (
    <div className="inline-block font-semibold lg:mx-4 transition-all duration-300 hover:underline">
      {children}
    </div>
  );
}
