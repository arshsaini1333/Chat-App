import React, { useEffect, useState } from "react";
import axios from "axios";
import SetAvatarPage from "../Components/SetAvatarPage";
import {setAvatarRoute} from "../Utils/APIRoutes"
import { useNavigate } from "react-router-dom";


export default function SetAvatar() {
  const navigate = useNavigate();
  
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAvatars = async () => {
      const data = [];
      for (let i = 0; i < 4; i++) {
        const res = await axios.get(`https://api.dicebear.com/8.x/pixel-art/svg?seed=${Math.round(Math.random() * 1000)}`);
        const base64 = btoa(unescape(encodeURIComponent(res.data)));
        // console.log(base64)
        data.push(`data:image/svg+xml;base64,${base64}`);
      }
      setAvatars(data);
      setIsLoading(false);
    };

    fetchAvatars();
  }, []);

  const setProfilePicture = async () => {
    if (selectedAvatar === null) {
      alert("Please select an avatar");
      return;
    }

    const user = await JSON.parse(localStorage.getItem("chat-aap-user"));

    const ogA = avatars[selectedAvatar];
    const avatar = ogA.substring(26);

    const userId = user._id; // or from context/state

    try {
      const { data } =  await axios.post(setAvatarRoute, {
        avatar,
        userId,
      });
      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem("chat-aap-user", JSON.stringify(user));
        navigate("/");
      } 
    } catch (error) {
      console.error("❌ Error saving avatar:", error);
    }
  };

  return (
    <SetAvatarPage
      avatars={avatars}
      selectedAvatar={selectedAvatar}
      setSelectedAvatar={setSelectedAvatar}
      setProfilePicture={setProfilePicture}
      isLoading={isLoading}
    />
  );
}
