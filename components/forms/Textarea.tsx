type Props = {
  id: string;
  label: string;
  placeholder: string;
};

export default function Textarea({ id, label, placeholder }: Props) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-md font-medium text-gray-700 dark:text-gray-400"
      >
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <textarea
          id={id}
          className="text-gray-400 focus:ring-purple-500 focus:border-purple-500 block w-full py-2 px-4 sm:text-md border border-gray-300 dark:border-purple-600 dark:bg-gray-900 rounded-md"
          rows={4}
          defaultValue={placeholder}
        />
      </div>
    </div>
  );
}
