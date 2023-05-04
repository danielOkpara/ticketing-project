import React, { useState } from "react";
import CreateAccount from "../components/CreateAccount";
import ProfileSetUp from "../components/ProfileSetUp";
import axios from "axios";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validationSchema } from "../validation/Validation";
import { Spinner } from "flowbite-react";
import Footer from "../components/Footer";

const SignUp = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [buttonType, setButtonType] = useState("text");

  const notify = (text) => {
    return toast.info(text, {
      position: toast.POSITION.TOP_RIGHT,
      progressStyle: { background: "rgba(128, 0, 107, 0.8)" },
    });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      fullname: "",
      nationality: "",
      id_number: 0,
      passport_number: "",
      phone_number: "",
      image: null,
    },
    //Validate Form
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();

      formData.append("username", values.username);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("fullname", values.fullname);
      formData.append("nationality", values.nationality);
      formData.append("id_number", values.id_number);
      formData.append("passport_number", values.passport_number);
      formData.append("phone_number", values.phone_number);
      formData.append("image", values.image);

      let email = formik.values.email;
      localStorage.setItem("email", JSON.stringify(email));
      setLoading(true);
      try {
        const response = await axios.post(
          "https://flight-token.herokuapp.com/signup",
          formData
        );
        notify(response.data.message);
        setTimeout(() => {
          //localStorage.removeItem("email");
          window.location.href = "/verify-email";
        }, 2000);
      } catch (error) {
        notify(error.response.data.message);
      }

      setLoading(false);
    },
  });

  const isCurrentStageValid = Object.keys(formik.errors).length === 6; // this line of code checks the formik.errors and returns true if the error are 6 in numbers meaning that 6 inputs have error messages and we need just 6 error messages to pass the first stage.

  const handleClick = () => {
    if (isCurrentStageValid) {
      setPage(1);
      setButtonType("submit");
    }
  };

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return (
          <CreateAccount
            formik={formik}
            isCurrentStageValid={isCurrentStageValid}
          />
        );
      case 1:
        return (
          <ProfileSetUp
            formik={formik}
            isCurrentStageValid={isCurrentStageValid}
          />
        );
      default:
        return (
          <ProfileSetUp
            formik={formik}
            isCurrentStageValid={isCurrentStageValid}
          />
        );
    }
  };

  return (
    <section className="h-screen flex items-center justify-center">
      <form
        className="bg-white w-[651px] mx-auto"
        onSubmit={formik.handleSubmit}
      >
        {PageDisplay()}
        <div className="text-center mt-14 mx-20 mb-10">
          {page === 0 && (
            <button
              className="bg-[#660056] text-white p-4 w-full font-poppins font-medium text-xl hover:bg-primary disabled:opacity-50 disabled:cursor-not-allowed"
              type={buttonType}
              onClick={handleClick}
              disabled={!isCurrentStageValid} // if current stage is false then disable btn
            >
              Submit Account Details
            </button>
          )}
          {page === 1 && (
            <button
              className="bg-[#660056] text-white p-4 w-full font-poppins font-medium text-xl hover:bg-primary"
              type={buttonType}
              onClick={handleClick}
            >
              {loading ? (
                <Spinner
                  color="info"
                  aria-label="Info spinner example"
                  size="lg"
                />
              ) : (
                "Submit Personal Information"
              )}
            </button>
          )}
        </div>
        <Footer />
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
      </form>
    </section>
  );
};

export default SignUp;
