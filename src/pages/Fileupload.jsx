import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "flowbite-react";
import Footer from "../components/Footer";

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
      setLoading(true);

      try {
        const response = await axios.post(
          "https://flight-token.herokuapp.com/upload-passport",
          formData
        );
        notify(response.data.message);
        setTimeout(() => {
          window.location.href = "/pin";
        }, 2000);
      } catch (error) {
        notify(error.response.data.message);
      }
      setLoading(false);
    },
  });

  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="bg-white w-[651px] text-center px-9">
        <div className="flex justify-end items-center mb-8 mt-5 font-inter text-xl">
          <p>
            <span>2 </span>Of 3
          </p>
        </div>
        <h1 className="font-bold text-2xl mt-16">Upload Your Passport</h1>
        <p className=" mt-7">
          Use your camera to upload a picture of your passport bio data page
        </p>

        <form className="" onSubmit={formik.handleSubmit}>
          <div className=" border-2 border-black w-[330px] h-[221px] relative flex justify-center items-center my-16 mx-auto">
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
          </div>

          <div className="text-center mb-10">
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
                "Upload File"
              )}
            </button>
          </div>
        </form>
        <Footer/>
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
