import LoginForm from "../Components/LoginForm";
import { handleValidation, toastOpt } from "../Utils/Login";
import { useNavigate } from "react-router-dom";
import { loginRoute } from "../Utils/APIRoutes";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Login() {
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
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
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
      <LoginForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={values}
      />
      <ToastContainer />
    </>
  );
}
