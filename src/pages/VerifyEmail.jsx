import React, { useState } from "react";
import OtpInput from "react-otp-input";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import FlightToken from "../components/FlightToken";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const emailFromLocalStorage = localStorage.getItem("email");
  const email = emailFromLocalStorage.replace(/^"(.*)"$/, "$1");
  const formData = {
    email: email,
    otp: otp,
  };

  const notify = (text) => {
    return toast.info(text, {
      position: toast.POSITION.TOP_RIGHT,
      progressStyle: { background: "rgba(128, 0, 107, 0.8)" },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://flight-token.herokuapp.com/email-verification",
        formData
      );
      const data = response.data.message;
      if (data === "Please provide a valid token") {
        notify(response.data.message);
      } else {
        notify(response.data.message);
        setTimeout(() => {
          window.location.href = "/upload-file";
        }, 3000);
      }
    } catch (error) {
      notify(error.response.data.message);
    }
    setLoading(false);
  };

  return (
    <main className="grid grid-cols-2 h-screen">
      <FlightToken />
      <section className="bg-white h-screen px-[5.375rem] flex justify-center items-center">
        <div>
          <h2 className="mt-5 text-center text-3xl capitalize font-manropeExtrabold">
            Verify Your Email
          </h2>
          <p className="text-center mt-7 text-xl">
            An OTP number has been sent{" "}
            <strong className="text-primary underline">{email}</strong>, Kindly
            enter the digits below
          </p>
          <form
            className=" mt-20 flex flex-col justify-center items-center "
            onSubmit={handleSubmit}
          >
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderInput={(props) => <input {...props} />}
              inputStyle={
                "border border-inputBorderColor h-[100px] rounded-md focus:border-inputFocusedBorderColor caret-inputFocusedBorderColor text-8xl font-manropeRegular mx-5"
              }
              containerStyle={"flex justify-evenly"}
            />

            <div className="text-center mt-28 w-full">
              <Button name={"Verify Email"} loading={loading} />
            </div>
          </form>
          <div className="text-center font-manropeMedium text-xl text-inputBorderColor underline mt-11">
            <Link to="/">Resend OTP</Link>
          </div>
          <Footer />
        </div>
      </section>
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
};

export default VerifyEmail;
