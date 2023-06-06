import { Spinner } from "flowbite-react";

const Button = ({ name, loading, disabled, type, onclick }) => {
  return (
    <button
      type={type}
      className="bg-[#7F6080] rounded-md text-white py-5 w-full font-nunitoBold text-xl hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={disabled}
      onClick={onclick}
    >
      {loading ? (
        <Spinner color="gray" aria-label="Info spinner example" size="lg" />
      ) : (
        <span>{name}</span>
      )}
    </button>
  );
};

export default Button;
