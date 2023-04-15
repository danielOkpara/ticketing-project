import React from "react";
import Input from "./Input";
import { BsCheck2Circle } from "react-icons/bs";

function CreateAccount({ formik }) {
  return (
    <section className="mt-5">
      <div className="px-9">
        <h2 className="pt-6 text-center text-2xl capitalize font-semibold font-inter">
          Create Your Account
        </h2>
        <div className="flex justify-between items-center my-10 font-inter text-xl">
          <span>Account Details</span>
          <p>
            <span>1 </span>Of 2
          </p>
        </div>

        <main>
          <Input
            label="Username"
            name="username"
            type="text"
            id="username"
            placeholder="Username"
            className={
              formik.touched.name && formik.error.name ? "border-red-400" : ""
            }
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <span className="text-red-400">{formik.errors.name}</span>
          )}
          <Input
            label="Email Address"
            name="email"
            id="email"
            type="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Input
            label="Password"
            name="password"
            id="password"
            type="text"
            placeholder="Password"
            className="mb-3"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <div className="flex items-center">
            <BsCheck2Circle size={25} />
            <small className="text-base font-medium ml-2">
              Must contain uppercase,lowercase and special character{" "}
            </small>
          </div>
         
        </main>
      </div>
    </section>
  );
}

export default CreateAccount;
