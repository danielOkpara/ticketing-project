import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const Fileupload = () => {
  const fileinputRef = useRef(); // use this to select the file input

  const [image, setImage] = useState();
  const [preview, setPreview] = useState();

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

  return (
    <div className=" h-full w-full flex items-center justify-center">
      <div className="bg-white h-screen w-[651px] text-center">
        <h1 className=" font-bold text-2xl mt-16">Upload Your Passport</h1>
        <p className=" mt-7">
          Use your camera to upload a picture of your passport bio data page
        </p>

        <div className=" border-2 border-black w-[330px] h-[221px] relative flex justify-center items-center my-16 mx-auto">
          <form className="flex justify-center items-center">
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
              }}
            />
          </form>
        </div>
        <div className=" text-center mb-10 mx-3 ">
          <button
            type="submit"
            className=" mt-20 bg-[#660056] text-white rounded p-4 w-[509px] font-poppins font-medium text-xl hover:bg-primary"
          >
            Upload File
          </button>
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
    </div>
  );
};
export default Fileupload;
