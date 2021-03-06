type Props = {
  name: string;
  label?: string;
  type: string;
  id: string;
  placeholder: string;
  required: boolean;
  marginTop?: string;
};

export default function Input({
  name,
  label,
  type,
  id,
  placeholder,
  required,
  marginTop
}: Props) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-md font-medium text-gray-700 dark:text-gray-400"
      >
        {label}
      </label>
      <div className={`relative rounded-md shadow-sm ${marginTop}`}>
        <input
          type={type}
          name={name}
          id={id}
          className="focus:ring-purple-500 focus:border-purple-500 block w-full py-2 px-4 sm:text-md border border-gray-300 dark:border-purple-600 dark:bg-gray-900 rounded-md"
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
}
