export default function Input({ name, label, type, id, placeholder, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-md font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={id}
          className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-7 pr-12 sm:text-md border-gray-300 rounded-md"
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
}
