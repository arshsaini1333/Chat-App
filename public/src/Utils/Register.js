import { toast, ToastContainer } from "react-toastify";

// export const handleChange = (event) => {
//   //console.log(event.target.value);
//   setValues({ ...values, [event.target.name]: event.target.value });
// };
// export const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log(values);
//   alert("Form");
// };

const toastOpt = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

export const handleValidation = (values) => {
  const { password, confirmPassword, username, email } = values;
  if (username.length < 5) {
    toast.error("Username should be Greater than 5 Character", toastOpt);
    return false;
  } else if (email === "") {
    toast.error("Email is Required", toastOpt);
  } else if (password.length < 8) {
    toast.error(
      "Password should be equal and Greater than 8 Character",
      toastOpt
    );
    return false;
  } else if (password !== confirmPassword) {
    toast.error("Password and Confirm Password should be same.", toastOpt);
    return false;
  } else {
    return true;
  }
};
