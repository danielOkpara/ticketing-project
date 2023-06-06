import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";

function CreateAccount({ formik }) {
  return (
    <section>
      <div>
        <span className="pt-10 text-right flex justify-end font-manropeRegular">
          Already a user?{" "}
          <Link to="/ login" className="text-primary ml-1">
            Login here
          </Link>
        </span>
        <h2 className="mt-16 text-center text-[2rem] capitalize font-manropeExtrabold">
          Create Your Account
        </h2>
        <div className="flex justify-between items-center mt-11 font-manropeRegular text-base mb-7">
          <span>Account Details</span>
          <div className="flex">
            <div className="w-[60px] h-[9px] rounded-xl bg-black mr-2"></div>
            <div className="w-[60px] h-[9px] rounded-xl bg-[#D9D9D9]"></div>
          </div>
        </div>

        <main>
          <Input
            label="Username"
            name="username"
            type="text"
            id="username"
            placeholder="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.username}
            error={formik.errors.username}
          />

          <Input
            label="Email Address"
            name="email"
            id="email"
            type="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.email}
            error={formik.errors.email}
          />
          <Input
            label="Password"
            name="password"
            id="password"
            type="text"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            touched={formik.touched.password}
            error={formik.errors.password}
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
        </main>
      </div>
    </section>
  );
}

export default CreateAccount;
