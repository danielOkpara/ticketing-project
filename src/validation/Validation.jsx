import * as Yup from "yup";

export const validationSchema = Yup.object({
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
  id_number: Yup.number()
    .typeError("ID number must be a valid number")
    .min(10000000000, "ID number must be at least 11 digits")
    .max(99999999999, "ID number must be at most 11 digits")
    .integer("ID allows only numbers")
    .required("ID Number is required"),
  passport_number: Yup.string().required("Passport Number is required"),
  phone_number: Yup.string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Please add telephone country code")
    .required("Phone Number is required"),
  image: Yup.mixed()
    .test("fileFormat", "Invalid file format", (value) => {
      return ["image/jpeg", "image/png"].includes(value.type);
    })
    .test("fileSize", "File too large", (value) => {
      return value && value.size <= 2000000;
    }),
});
