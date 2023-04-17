import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreateAccount from "../components/CreateAccount";
import ProfileSetUp from "../components/ProfileSetUp";
import axios from "axios";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { Spinner } from "flowbite-react";

const SignUp = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [buttonType, setButtonType] = useState("text");
  const navigate = useNavigate()

  const handleClick = () => {
    setPage(1);
    setButtonType("submit");
  };

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
    // Validate Form
    // validationSchema: Yup.object({
    //   username: Yup.string().required("Username is required"),
    //   email: Yup.string()
    //     .email("Invalid email address")
    //     .required("Email is required"),
    //   password: Yup.string().required("Password is required"),
    //   id_number: Yup.string().required("ID Number is required"),
    //   passport_number: Yup.string().required("Passport Number is required"),
    //   phone_number: Yup.string().required("Phone Number is required"),
    //   image: Yup.mixed().required("Image is required"),
    // }),

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
          window.location.href="/verify-email"
        }, 2000);
      } catch (error) {
        notify(error.response.data.message);
      }

      setLoading(false);
    },
  });

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <CreateAccount formik={formik} />;
      case 1:
        return <ProfileSetUp formik={formik} />;
      default:
        return <ProfileSetUp formik={formik} />;
    }
  };

  console.log(formik.values)

  return (
    <form className="bg-white w-[651px] mx-auto" onSubmit={formik.handleSubmit}>
      {PageDisplay()}
      <div className="text-center mt-14 mx-20">
        {page === 0 && (
          <button
            className="bg-[#660056] text-white p-4 w-full font-poppins font-medium text-xl hover:bg-primary"
            type={buttonType}
            onClick={handleClick}
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
      <div className="mt-10 py-4 text-center font-normal text-xl font-inter">
        <span>Already a user?</span>
        <Link to="/login" className="ml-2 text-[#660056]">
          Login here
        </Link>
        <p className="text-center text-base font-semibold mt-4 font-inter">
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
    </form>
  );
};

export default SignUp;
