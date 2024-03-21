import "../public/Chat.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { allUsersRoute } from "../Utils/APIRoutes";
import Contacts from "../Components/Contacts";
import Welcome from "../Components/Welcome";
import ChatContainer from "../Components/ChatContainer.jsx";
//Function
export default function Chat() {
  const [contacts, setContacts] = useState([]);
  const [currUser, setCurrUser] = useState(undefined);
  const navigate = useNavigate();
  const [currChat, setCurrChat] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  //If there is no user Return to the Login Page
  useEffect(() => {
    const currUserIn = async () => {
      if (!localStorage.getItem("chat-aap-user")) {
        navigate("/login");
      } else {
        setCurrUser(await JSON.parse(localStorage.getItem("chat-aap-user")));
        setIsLoaded(true);
      }
    };
    currUserIn();
  }, []);

  //If there is present any current user only then we call the API
  useEffect(() => {
    let contactList = async () => {
      if (currUser) {
        if (currUser.isAvatarImageSet) {
          const data = await axios.get(`${allUsersRoute}/${currUser._id}`);
          setContacts(data.data);
        } else {
          navigate("/setAvatar");
        }
      }
    };
    contactList();
  }, [currUser]);

  const handleChatChange = (chat) => {
    setCurrChat(chat);
  };
  return (
    <>
      <div className="Chat">
        <div className="container">
          <Contacts
            contacts={contacts}
            currUser={currUser}
            handleChatChange={handleChatChange}
          />
          {isLoaded && currChat === undefined ? (
            <Welcome currUser={currUser} />
          ) : (
            <ChatContainer currUser={currUser} />
          )}
        </div>
      </div>
    </>
  );
}
