import * as Yup from "yup";
import axios from "axios";

export const validationSchemaObject = Yup.object().shape({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string()
    .required("email is required")
    .email("Invalid email format"),
  //password:Yup.string().required('passsword is required').min(4,'Password must be at least 4 characters'),
  nationality: Yup.string().required("Nationality is required"),
  age: Yup.string().required("Age is required"),
  gender: Yup.string().required("Gender is required"),
  education: Yup.string().required("Education is required"),
  currentvisa: Yup.string().required("Current Visa is required"),
  workrights: Yup.string().required("Workrights is required"),
  password: Yup.string()
    .required("passsword is required")
    .min(4, "Password must be at least 4 characters"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export const createAccount = (values) => {
  console.log(values);
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:5001/API/create-account-jobsearcher", values)
      .then((response) => {
        resolve(response); // Resolve with the response data
      })
      .catch((error) => {
        reject(error); // Reject with the error
      });
  });
};
