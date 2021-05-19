export default function Button({ type, children }) {
  return (
    <button
      type={type}
      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-purple-600 dark:bg-purple-800 transition-opacity duration-300 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
    >
      {children}
    </button>
  );
}
