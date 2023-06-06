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
    <div className="mb-6 relative font-poppins">
      {/* <label
        htmlFor={id}
        className={
          error && touched
            ? "text-xl px-2 font-normal text-rose-500 absolute bottom-16 bg-white left-4"
            : "text-xl px-2 font-normal text-black absolute bottom-10 bg-white left-4"
        }
      >
        {label}
      </label> */}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={
          error && touched
            ? "border font-nunitoBold text-base h-[70px]  md:text-base border-rose-500 placeholder-inputBorderColor px-6 rounded-[5px] outline-none w-full focus:border-inputFocusedBorderColor"
            : "border font-nunitoBold text-base h-[70px]  md:text-base border-inputBorderColor placeholder-inputBorderColor px-6 rounded-[5px] outline-none w-full focus:border-inputFocusedBorderColor"
        }
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && error && (
        <span className="text-rose-500 text-sm">{error}</span>
      )}
    </div>
  );
};

export default Input;
