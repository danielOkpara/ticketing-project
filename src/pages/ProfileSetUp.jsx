import Input from "../components/Input";
import { Link } from "react-router-dom";
import { AiOutlineCamera } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";

const ProfileSetUp = () => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileinputRef = useRef(); // use this to select the file input

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
    <section className="h-full w-full flex items-center justify-center">
      <div className="bg-white h-[918px] w-[651px] px-9">
        <h2 className="mt-10 text-center text-2xl capitalize font-semibold font-inter">
          Create Your Account
        </h2>
        <div className="flex justify-between items-center my-8 font-inter text-xl">
          <span>Personal Information</span>
          <p>
            <span>1 </span>Of 2
          </p>
        </div>
        <form>
          <div className="flex flex-col justify-center items-center mb-8">
            <div className="border-2 border-black rounded-full w-[110px] h-[110px] relative">
                <img
                  src={preview}
                  alt=""
                  className="object-cover rounded-full w-[100px] h-[100px] bg-center m-[3px]"
                />
              
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
              

              <AiOutlineCamera
                size={25}
                className="absolute top-16 left-[5.5rem]"
                onClick={(e) => {
                  fileinputRef.current.click(); // when you click on this, click the file input
                }}
              />
            </div>
            <p>Upload A Profile Picture</p>
            <p>Upload A Profile Picture under 2mb</p>
          </div>

          <Input
            label="Fullname"
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Fullname"
          />
          <Input
            label="Nationality"
            type="text"
            name="nationality"
            id="nationality"
            placeholder="Nationality"
          />
          <Input
            label="ID Number"
            type="text"
            name="id"
            id="id"
            placeholder="ID Number"
          />
          <Input
            label="Passport Number"
            type="text"
            name="passport-number"
            id="passport-number"
            placeholder="Passport Number"
          />

          <div className="text-center my-2 mx-3">
            <button
              type="submit"
              className="bg-[#660056] text-white rounded p-4 w-full font-poppins font-medium text-xl hover:bg-primary"
            >
              Submit Personal Information
            </button>
          </div>
        </form>
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
    </section>
  );
};

export default ProfileSetUp;
