import React from 'react';
import Input from "./Input";
import { AiOutlineCamera } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";

const ProfileSetUp = ({formik}) => {
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
    <section>
      <div className="px-9">
        <h2 className="pt-2 text-center text-2xl capitalize font-semibold font-inter">
          Create Your Account
        </h2>
        <div className="flex justify-between items-center my-4 font-inter text-xl">
          <span>Personal Information</span>
          <p>
            <span>2 </span>Of 2
          </p>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center mb-8 text-sm">
            <div className="border-2 border-black rounded-full w-[100px] h-[100px] relative">
              <img
                src={preview}
                alt=""
                className="object-cover rounded-full w-[90px] h-[90px] m-[3.5px]"
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
                  formik.setFieldValue("image", file)
                }}
              />

              <AiOutlineCamera
                size={25}
                className="absolute top-16 left-[5rem]"
                onClick={(e) => {
                  e.preventDefault();
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
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.fullname}
            error={formik.errors.fullname}
          />
          <Input
            label="Nationality"
            type="text"
            name="nationality"
            id="nationality"
            placeholder="Nationality"
            value={formik.values.nationality}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.nationality}
            error={formik.errors.nationality}
          />
          <Input
            label="ID Number"
            type="text"
            name="id_number"
            id="id"
            placeholder="ID Number"
            value={formik.values.id_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.id_number}
            error={formik.errors.id_number}
          />
          <Input
            label="Passport Number"
            type="text"
            name="passport_number"
            id="passport_number"
            placeholder="Passport Number"
            value={formik.values.passport_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.passport_number}
            error={formik.errors.passport_number}
          />
          <Input
            label="Phone Number"
            type="text"
            name="phone_number"
            id="phone_number"
            placeholder="Phone Number"
            value={formik.values.phone_number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.phone_number}
            error={formik.errors.phone_number}
          />
          
        </div>
      </div>
    </section>
  );
};

export default ProfileSetUp;
