type Props = {
  type?: "button" | "submit" | "reset";
  role?: string;
  secondary?: boolean;
  children: React.ReactNode;
};

export default function Button({ type, role, secondary, children }: Props) {
  return (
    <button
      type={type}
      role={role}
      className={`inline-flex items-center justify-center py-2 px-4 border border-transparent shadow text-md font-semibold rounded-md  transition-opacity duration-300  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
        secondary
          ? `bg-white text-purple-600 hover:bg-purple-50`
          : `bg-purple-600 dark:bg-purple-800 text-white hover:opacity-90`
      }`}
    >
      {children}
    </button>
  );
}
