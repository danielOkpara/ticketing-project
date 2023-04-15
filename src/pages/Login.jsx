import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import axios from "axios";
import { useFormik } from "formik";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post("https://flight-token.herokuapp.com/login", values)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="bg-white w-[651px] px-9">
        <h2 className="mt-32 text-center text-2xl capitalize font-semibold font-inter">
          login to your account
        </h2>
        <form className="mt-10" onSubmit={formik.handleSubmit}>
          <Input
            id="email"
            name="email"
            label="Email Address"
            type="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
          />

          <Input
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />

          <div className="text-center mt-20 mx-3">
            <button
              type="submit"
              className="bg-[#660056] text-white rounded p-4 w-full font-poppins font-medium text-xl hover:bg-primary"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="mt-20 text-center font-normal text-xl font-inter">
          <span>New User?</span>
          <Link to="/create-account" className="ml-2 text-[#660056]">
            Sign up
          </Link>
        </div>

        <p className="text-center text-base font-semibold my-4 font-inter">
          By signing in, you consent to our terms and condition
        </p>
      </div>
    </section>
  );
}

export default Login;
