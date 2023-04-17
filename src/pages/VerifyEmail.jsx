import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "flowbite-react";

const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
 // const [email, setEmail] = useState()
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

// useEffect(() => {
//   const emailFromLocalStorage = localStorage.getItem("email");
//   if(emailFromLocalStorage) {
//     setEmail(emailFromLocalStorage)
//   }
// },[])  
//console.log(localStorage.getItem("email"))

//console.log(email)

const emailFromLocalStorage = localStorage.getItem('email');
const email = emailFromLocalStorage.replace(/^"(.*)"$/, '$1')
const formData = {
  email: email,
  otp: otp,
}
console.log(formData)


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
        "https://flight-token.herokuapp.com/email-verification",formData
      );
      notify(response.data.message);
      setTimeout(() => {
        navigate("/upload-file", { replace: true });
      }, 2000);
    } catch (error) {
      notify(error.response.data.message);
    }
    setLoading(false);
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <div className="bg-white w-[651px] px-9">
        <div className="flex justify-end items-center mb-8 mt-5 font-inter text-xl">
          <p>
            <span>2 </span>Of 4
          </p>
        </div>
        <h2 className="mt-5 text-center text-3xl capitalize font-semibold">
          Verify Your Email
        </h2>

        <p className="text-center mt-7 text-xl">
          An OTP number has been sent{" "}
          <strong className="text-gray-400">{email}</strong>, enter the digits
          below
        </p>

        <form
          className=" mt-20 flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderInput={(props) => <input {...props} />}
            inputStyle={
              "h-[93px] bg-[#e7e0ec] rounded-sm mr-8 text-center text-7xl focus:border-primary"
            }
          />

          <div className="text-center mt-20 mb-14">
            <button
              type="submit"
              className="bg-[#660056] text-white rounded p-4 font-poppins font-medium text-xl hover:bg-primary px-20"
            >
              {loading ? (
                <Spinner
                  color="gray"
                  aria-label="Info spinner example"
                  size="lg"
                />
              ) : (
                "Verify Email"
              )}
            </button>
          </div>
        </form>

        <div className="text-center font-normal text-2xl font-inter ">
          <span>Already a user?</span>
          <Link to="/login" className="ml-2 text-[#660056]">
            Login here
          </Link>
        </div>

        <p className="text-center text-base font-semibold mt-4 pb-5 font-inter">
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
};

export default VerifyEmail;
