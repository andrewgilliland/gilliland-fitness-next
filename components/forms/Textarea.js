export default function Textarea({ id, label }) {
  return (
    <div>
      <label htmlFor={id} className="block text-md font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <textarea
          id={id}
          className="focus:ring-purple-500 focus:border-purple-500 block w-full py-2 px-4 sm:text-md border border-gray-300 rounded-md"
          rows="4"
        >
          Word
        </textarea>
      </div>
    </div>
  );
}
