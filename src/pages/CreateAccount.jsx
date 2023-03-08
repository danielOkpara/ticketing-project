import React, {useState} from "react";
import Input from "../components/Input";
import { Link } from "react-router-dom";
import { BsCheck2Circle } from "react-icons/bs";

function CreateAccount() {

  const [page, setPage] = useState(0)
  return (
    <section className="h-screen w-full bg-primary flex items-center justify-center">
      <div className="bg-white h-[849px] w-[651px] px-9">
        <h2 className="mt-12 text-center text-2xl capitalize font-semibold font-inter">
          Create Your Account
        </h2>
        <div className="flex justify-between items-center my-8 font-inter text-xl">
          <span>Account Details</span>
          <p>
            <span>1 </span>Of 2
          </p>
        </div>

        <form className="mt-11">
          <Input
            label="Username"
            name="username"
            type="text"
            id="username"
            placeholder="Username"
          />
          <Input
            label="Email Address"
            name="email"
            id="email"
            type="email"
            placeholder="Email Address"
          />
          <Input
            label="Email Address"
            name="email"
            id="email"
            type="email"
            placeholder="Email Address"
            className="mb-3"
          />
          {/* <div className="mb-3 relative font-poppins">
            <label
              htmlFor="password"
              className="text-xl px-2 font-normal text-black absolute bottom-10 z-10 bg-white left-4"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="border-2 px-3 py-3 md:px-4 md:py-3 text-sm md:text-base border-black rounded-md outline-none w-full"
            />
          </div> */}

          <div className="flex mb-2">
            <BsCheck2Circle size={25} />
            <small className="text-base font-medium ml-2">
              Minimum character
            </small>
          </div>
          <div className="flex mb-2">
            <BsCheck2Circle size={25} />
            <small className="text-base font-medium ml-2">
              Must contain uppercase,lowercase and special character{" "}
            </small>
          </div>
          <div className="flex">
            <BsCheck2Circle size={25} />
            <small className="text-base font-medium ml-2">
              Must contain Alphanumeric value{" "}
            </small>
          </div>

          <div className="text-center mt-14 mx-3">
            <button
              type="submit"
              className="bg-[#660056] text-white rounded p-4 w-full font-poppins font-medium text-xl hover:bg-primary"
            >
              Submit Account Details
            </button>
          </div>
        </form>

        <div className="mt-12 text-center font-normal text-2xl font-inter">
          <span>Already a user?</span>
          <Link to="/login" className="ml-2 text-[#660056]">
            Login here
          </Link>
        </div>

        <p className="text-center text-base font-semibold mt-8 font-inter">
          By signing in, you consent to our terms and condition
        </p>
      </div>
    </section>
  );
}

export default CreateAccount;
