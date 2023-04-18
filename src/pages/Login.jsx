import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import axios from "axios";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "flowbite-react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";

function Login() {
  const [loading, setLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const notify = (text) => {
    return toast.info(text, {
      position: toast.POSITION.TOP_RIGHT,
      progressStyle: { background: "rgba(128, 0, 107, 0.8)" },
    });
  };

  const togglePassword = (e) => {
    setPasswordShown(!passwordShown);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://flight-token.herokuapp.com/login",
          values
        );
        notify(response.data.message);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } catch (error) {
        notify(error.response.data.message);
      }
      setLoading(false);
    },
  });

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="bg-white w-[651px] px-9">
        <h2 className="mt-32 text-center text-2xl capitalize font-semibold font-inter">
          login to your account
        </h2>
        <form className="mt-10 relative" onSubmit={formik.handleSubmit}>
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
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <span className="absolute top-[6.5rem] right-5">
            {passwordShown === true ? (
              <EyeSlashIcon className="h-6 w-6 " onClick={togglePassword}/>
            ) : (
              <EyeIcon className="h-6 w-6" onClick={togglePassword}/>
            )}
          </span>

          <div className="text-center mt-20 mx-3">
            <button
              type="submit"
              className="bg-[#660056] text-white rounded p-4 w-full font-poppins font-medium text-xl hover:bg-primary"
            >
              {loading ? (
                <Spinner
                  color="info"
                  aria-label="Info spinner example"
                  size="lg"
                />
              ) : (
                "Login"
              )}
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
      <ToastContainer
        position="bottom-center"
        autoClose={9000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="capitalize"
      />
    </section>
  );
}

export default Login;
