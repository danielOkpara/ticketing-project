const Input = ({ label, placeholder, name, id, type }) => {
  return (
    <div className="mb-12 relative font-poppins">
      <label
        htmlFor={id}
        className="text-xl px-2 font-normal text-black absolute bottom-10 z-10 bg-white left-4"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="border-2 px-3 py-3 md:px-4 md:py-3 text-sm md:text-base border-black rounded-md outline-none w-full"
      />
    </div>
  );
};

export default Input;
