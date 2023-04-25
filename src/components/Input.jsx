const Input = ({
  label,
  placeholder,
  name,
  id,
  type,
  value,
  onChange,
  onBlur,
  touched,
  error,
}) => {
  return (
    <div className="mb-10 relative font-poppins">
      <label
        htmlFor={id}
        className={
          error && touched
            ? "text-xl px-2 font-normal text-rose-500 absolute bottom-16 bg-white left-4"
            : "text-xl px-2 font-normal text-black absolute bottom-10 bg-white left-4"
        }
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={
          error && touched
            ? "border-2 px-3 py-3 md:px-4 md:py-3 text-sm md:text-base border-rose-500 rounded-md outline-none w-full"
            : "border-2 px-3 py-3 md:px-4 md:py-3 text-sm md:text-base border-black rounded-md outline-none w-full focus:border-primary"
        }
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && error && (
        <span className="text-rose-500 text-base">{error}</span>
      )}
    </div>
  );
};

export default Input;
