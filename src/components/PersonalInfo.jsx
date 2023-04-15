import Input from "./Input";


function PersonalInfo() {
  return (
    <section>
      <div className="flex justify-between items-center my-8 font-inter text-xl">
        <span>Personal Information</span>
        <p>
          <span>1 </span>Of 2
        </p>
      </div>

      <div>
        <div>
          <p>Upload A Profile Picture</p>
          <p>Upload A Profile Picture under 2mb</p>
        </div>

        <Input label="Fullname" type="text" name="fullname" id="fullname" placeholder="Fullname"/>
        <Input label="Nationality" type="text" name="nationality" id="nationality" placeholder="Nationality"/>
        <Input label="ID Number" type="text" name="id" id="id" placeholder="ID Number"/>
        <Input label="Passport Number" type="text" name="passport-number" id="passport-number" placeholder="Passport Number"/>

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
};

export default PersonalInfo;
