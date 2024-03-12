import { useNavigate } from "react-router-dom";
import { setAvatarRoute } from "../Utils/APIRoutes";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import SetAvatarPage from "../Components/SetAvatarPage";
import { toastOpt } from "../Utils/Register";
import { Buffer } from "buffer";

export default function SetAvatar() {
  const navigate = useNavigate();

  const [avatars, setAvatars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);
  useEffect(() => {
    const avatarfun = async () => {
      if (!localStorage.getItem("chat-aap-user")) {
        navigate("/login");
      }
    };
    avatarfun();
  }, []);

  const api = "https://api.multiavatar.com/45678945";
  const setProfilePicture = async () => {
    if (selectedAvatar === undefined) {
      toast.error("Please Select an avatar", toastOpt);
    } else {
      const user = await JSON.parse(localStorage.getItem("chat-aap-user"));
      const { data } = await axios.post(`${setAvatarRoute}/${user._id}`, {
        image: avatars[selectedAvatar],
      });
      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem("chat-aap-user", JSON.stringify(user));
        navigate("/");
      } else {
        toast.error("Error Setting Avatar. Please try again", toastOpt);
      }
    }
  };

  useEffect(() => {
    async function setImage() {
      const data = [];
      for (let i = 0; i < 4; i++) {
        const image = await axios.get(
          `${api}/${Math.floor(Math.random() * 1000)}`
        );
        const buffer = new Buffer(image.data);
        data.push(buffer.toString("base64"));
      }
      setAvatars(data);
      setIsLoading(false);
    }
    setImage();
  }, []);
  return (
    <>
      <SetAvatarPage
        avatars={avatars}
        selectedAvatar={selectedAvatar}
        setSelectedAvatar={setSelectedAvatar}
        setProfilePicture={setProfilePicture}
        isLoading={isLoading}
      />
      <ToastContainer />
    </>
  );
}
