import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section>
      <div className="text-center font-normal text-2xl font-inter">
        <span>Already a user?</span>
        <Link to="/login" className="ml-2 text-[#660056]">
          Login here
        </Link>
      </div>
      <p className="text-center text-base font-semibold mt-2 font-inter pb-5">
        By signing in, you consent to our terms and condition
      </p>
    </section>
  );
};

export default Footer;
