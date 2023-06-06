import Input from "./Input";

function PersonalInfo() {
  return (
    <section>
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

      <div>
        <div>
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

        <div className="text-center mt-14 mx-3">
          <button
            type="submit"
            className="bg-[#660056] text-white rounded p-4 w-full font-poppins font-medium text-xl hover:bg-primary"
          >
            Submit Personal Information
          </button>
        </div>
      </div>
    </section>
  );
}

export default PersonalInfo;
