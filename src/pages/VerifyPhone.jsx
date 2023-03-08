import React from "react";
import { Link } from "react-router-dom";

const VerifyPhone = () => {
  return (
    <section className="h-screen w-full bg-primary flex items-center justify-center">
      <div className="bg-white h-[918px] w-[651px] px-9">
        <div className="flex justify-end items-center mb-8 mt-16 font-inter text-xl">
          <p>
            <span>2 </span>Of 4
          </p>
        </div>
        <h2 className="mt-10 text-center text-3xl capitalize font-semibold">
          Verify Your Phone Number
        </h2>

        <p className="text-center mt-7 text-xl">
          An OTP number has been sent, enter the digits below
        </p>

        <form className=" mt-20 flex justify-center items-center">
            <input type="text" maxLength={1} className="w-[80px] h-[93px] bg-[#e7e0ec] rounded-sm mr-8 text-center text-4xl focus:border-primary" />
            <input type="text" maxLength={1} className="w-[80px] h-[93px] bg-[#e7e0ec] rounded-sm mr-8 text-center text-4xl focus:border-primary" />
            <input type="text" maxLength={1} className="w-[80px] h-[93px] bg-[#e7e0ec] rounded-sm mr-8 text-center text-4xl focus:border-primary" />
            <input type="text" maxLength={1} className="w-[80px] h-[93px] bg-[#e7e0ec] rounded-sm mr-8 text-center text-4xl focus:border-primary" />
          
        </form>

          <div className="text-center mt-[145px] mb-[215px] mx-3">
            <button
              type="submit"
              className="bg-[#660056] text-white rounded p-4 w-full font-poppins font-medium text-xl hover:bg-primary"
            >
              Verify Phone Number
            </button>
          </div>

          <div className="text-center font-normal text-2xl font-inter">
          <span>Already a user?</span>
          <Link to="/login" className="ml-2 text-[#660056]">
            Login here
          </Link>
        </div>

        <p className="text-center text-base font-semibold mt-4 font-inter">
          By signing in, you consent to our terms and condition
        </p>       
      </div>
    </section>
  );
};

export default VerifyPhone;
