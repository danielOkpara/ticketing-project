import React, { useState } from "react";
import CreateAccount from "../components/CreateAccount";
import ProfileSetUp from "../components/ProfileSetUp";
import axios from "axios";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { Spinner } from "flowbite-react";
import Footer from "../components/Footer";

const SignUp = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [buttonType, setButtonType] = useState("text");

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
    //Validate Form
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
        .matches(
          /@(gmail|yahoo|outlook|hotmail|yopmail)\.com$/,
          "Please enter a valid email address"
        ),
      fullname: Yup.string()
        .matches(
          /^[a-zA-Z -]+$/,
          "Full name can only contain letters, spaces, and hyphens"
        )
        .required("Full name is required"),
      nationality: Yup.string().required("Nationality is required"),
      password: Yup.string()
        .min(5)
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/,
          "Please create a stronger password"
        )
        .required("Password is required"),
      id_number: Yup.number("ID allows only numbers")
        .positive()
        .min(11, "NIN number can only be 11 digits")
        .integer("ID allows only numbers")
        .required("ID Number is required"),
      passport_number: Yup.string().required("Passport Number is required"),
      phone_number: Yup.string()
        .matches(
          /^\+(?:[0-9] ?){6,14}[0-9]$/,
          "Please add telephone country code"
        )
        .required("Phone Number is required"),
      image: Yup.mixed().test('fileFormat', 'Invalid file format', (value) => {
        return ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
      }).test('fileSize', 'File too large', (value) => {
        return value && value.size <= 2000000;
      }).required("Image is required"),
    }),

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
          window.location.href = "/verify-email";
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

  return (
    <form className="bg-white w-[651px] mx-auto" onSubmit={formik.handleSubmit}>
      {PageDisplay()}
      <div className="text-center mt-14 mx-20 mb-10">
        {page === 0 && (
          <button
            className="bg-[#660056] text-white p-4 w-full font-poppins font-medium text-xl hover:bg-primary"
            type={buttonType}
            onClick={handleClick}
            disabled={formik.disabled}
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
  );
};

export default SignUp;
