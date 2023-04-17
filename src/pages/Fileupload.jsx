import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "flowbite-react";

const Fileupload = () => {
  const fileinputRef = useRef(); // use this to select the file input

  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const [loading, setLoading] = useState(false);

  const notify = (text) => {
    return toast.info(text, {
      position: toast.POSITION.TOP_RIGHT,
      progressStyle: { background: "rgba(128, 0, 107, 0.8)" },
    });
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const emailFromLocalStorage = localStorage.getItem("email");
  const email = emailFromLocalStorage.replace(/^"(.*)"$/, "$1");

  const formik = useFormik({
    initialValues: {
      email: email,
      passport: "null",
    },
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("passport", values.passport);

      try {
        const response = await axios.post(
          "https://flight-token.herokuapp.com/upload-passport",
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

  console.log(formik.values);

  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="bg-white w-[651px] text-center">
        <h1 className="font-bold text-2xl mt-16">Upload Your Passport</h1>
        <p className=" mt-7">
          Use your camera to upload a picture of your passport bio data page
        </p>

        <div className=" border-2 border-black w-[330px] h-[221px] relative flex justify-center items-center my-16 mx-auto">
          <form
            className=""
            onSubmit={formik.handleSubmit}
          >
            {preview ? (
              <img
                src={preview}
                className="object-cover w-[350px] h-[221px]"
                onClick={(e) => {
                  setImage(null);
                }}
              />
            ) : (
              <button
                className=" text-purple-900 "
                onClick={(e) => {
                  e.preventDefault();
                  fileinputRef.current.click(); // when you click on this,
                }}
              >
                {" "}
                Upload file here
              </button>
            )}

            <input
              type="file"
              className="hidden"
              ref={fileinputRef} // select the file input
              accept="image/*" //Limits the file to images only
              onChange={(e) => {
                const file = e.target.files[0];
                file && file.type.substring(0, 5) === "image"
                  ? setImage(file)
                  : setImage(null);
                formik.setFieldValue("passport", file);
              }}
            />
            <button></button>
            {/* <div className=" text-center mb-10 mx-3 ">
              <button
                type="submit"
                className=" mt-20 bg-[#660056] text-white rounded p-4 w-[509px] font-poppins font-medium text-xl hover:bg-primary"
              >
                Upload File
              </button>
            </div> */}
          </form>
        </div>

        <div className="text-center font-normal text-2xl font-inter">
          <span>Already a user?</span>
          <Link to="/login" className="ml-2 text-[#660056]">
            Login here
          </Link>
        </div>

        <p className="text-center text-base font-semibold mt-2 font-inter">
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
    </div>
  );
};
export default Fileupload;
