import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import axios from "axios";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import FlightToken from "../components/FlightToken";
import Footer from "../components/Footer";
import Button from "../components/Button";

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
          window.location.href = "/dashboard";
        }, 2000);
      } catch (error) {
        notify(error.response.data.message);
      }
      setLoading(false);
    },
  });

  return (
    <main className="grid grid-cols-2 h-screen">
      <FlightToken />
      <div className="bg-white h-screen px-[5.375rem]">
        <div className="mt-14 text-right font-manropeRegular">
          <span className="text-black">Are you a new user?</span>
          <Link to="/sign-up" className="ml-2 text-[#660056]">
            Sign up here
          </Link>
        </div>
        <h2 className="text-[2rem] font-manropeExtrabold mt-[91px] text-center capitalize">
          login to your account
        </h2>
        <form className="mt-20 relative" onSubmit={formik.handleSubmit}>
          <Input
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
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
          <span className="absolute top-[7.4rem] right-5">
            {passwordShown === true ? (
              <EyeIcon className="h-6 w-6 " onClick={togglePassword} />
            ) : (
              <EyeSlashIcon className="h-6 w-6" onClick={togglePassword} />
            )}
          </span>

          <div className="text-right">
            <Link to="/" className="font-manropeRegular text-primary">
              Forgot Password?
            </Link>
          </div>

          <div className="text-center mt-20 mx-3">
            <Button name={"Sign In"} loading={loading} />
          </div>
        </form>
        <Footer />
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
    </main>
  );
}

export default Login;
