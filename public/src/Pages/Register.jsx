import RegisterForm from "../Components/RegisterForm";
import { handleValidation, toastOpt } from "../Utils/Register";
import { useNavigate } from "react-router-dom";
import { registerRoute } from "../Utils/APIRoutes";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  //State Variable
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    if (localStorage.getItem("chat-aap-user")) {
      navigate("/");
    }
  }, []);
  //Handle input Changes
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  //Handle Form Submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation(values)) {
      const { username, email, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      if (!data.status) {
        toast.error(data.msg, toastOpt);
      } else {
        localStorage.setItem("chat-aap-user", JSON.stringify(data.user));
        navigate("/");
      }
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
