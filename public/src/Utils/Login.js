import { toast } from "react-toastify";

export const toastOpt = {
  position: "bottom-right",
  autoClose: 8000,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
};

//Handle Date Validation
export const handleValidation = (values) => {
  const { password, confirmPassword, username, email } = values;
  if (username.length === 0) {
    toast.error("Username Requires", toastOpt);
    return false;
  } else if (password === "") {
    toast.error("Password  Requires", toastOpt);
    return false;
  } else {
    return true;
  }
};
