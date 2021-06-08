export default function Footer() {
  return (
    <footer className="bg-purple-600 dark:bg-purple-800 text-gray-50 py-5 flex justify-center">
      <div className="font-semibold">
        © {new Date().getFullYear()} Andrew Gilliland
      </div>
    </footer>
  );
}
