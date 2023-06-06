import React, { useState } from "react";
import OtpInput from "react-otp-input";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "flowbite-react";
import FlightToken from "../components/FlightToken";
import Footer from "../components/Footer";
import Button from "../components/Button";

const Pinsetup = () => {
  const [otp, setOtp] = useState();
  const [loading, setLoading] = useState(false);

  const emailFromLocalStorage = localStorage.getItem("email");
  const email = emailFromLocalStorage.replace(/^"(.*)"$/, "$1");

  const formData = {
    email: email,
    pin: otp,
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
        "https://flight-token.herokuapp.com/set-pin",
        formData
      );
      notify(response.data.message);
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    } catch (error) {
      notify(error.response.data.message);
    }
    setLoading(false);
  };

  return (
    <main className="grid grid-cols-2 h-screen">
      <FlightToken />
      <section className="bg-white h-screen px-[5.375rem]">
        <h2 className="text-[2rem] font-manropeExtrabold mt-32 text-center">
          Set up Your PIN
        </h2>

        <form className="mt-28 flex flex-col " onSubmit={handleSubmit}>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props) => (
              <input
                {...props}
                type="text"
                className={
                  "border border-inputBorderColor h-[100px] rounded-md focus:border-inputFocusedBorderColor caret-inputFocusedBorderColor text-8xl font-manropeRegular"
                }
              />
            )}
            containerStyle={"flex justify-evenly"}
          />

          <div className="mt-32 mb-14">
            <Button name={"Verify Email"} loading={loading} type={"submit"} />
          </div>
        </form>
        <Footer />
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

export default Pinsetup;
