import axios from "axios";
import "../public/Logout.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
export default function Logout() {
  const navigate = useNavigate();
  const handleClick = async () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="Logout">
      <AiOutlineLogout className="btn" onClick={handleClick} />
    </div>
  );
}
