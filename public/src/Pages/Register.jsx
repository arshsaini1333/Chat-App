import RegisterForm from "../Components/RegisterForm";
import { handleValidation } from "../Utils/Register";
import { registerRoute } from "../Utils/APIRoutes";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Register() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation(values)) {
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      console.log(data);
    }
  };

  return (
    <>
      <RegisterForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={values}
      />
      <ToastContainer />
    </>
  );
}
