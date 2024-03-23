import "../public/ChatContainer.css";
import Logout from "./Logout";
import ChatInput from "./ChatInput";
import Messages from "./Messages.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
import { sendMessageRoute, getMessageRoute } from "../Utils/APIRoutes";
export default function ChatContainer({ currUser, selectedChat }) {
  const handleSendMsg = async (msg) => {
    await axios.post(sendMessageRoute, {
      from: currUser._id,
      to: selectedChat._id,
      message: msg,
    });
  };

  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    const f = async () => {
      const response = await axios.post(getMessageRoute, {
        from: currUser._id,
        to: selectedChat._id,
      });
      setMsgs(response.data);
    };
    f();
  }, [selectedChat]);

  return (
    <>
      <div className="ChatContainer">
        <div className="chat-header">
          <div className="user-details">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64, ${selectedChat.avatarImage}`}
                alt="user Image"
              />
            </div>
            <div className="username">
              <h3>{selectedChat.username}</h3>
            </div>
          </div>
          <Logout />
        </div>
        {/* <div className="chat-messages"></div> */}
        <Messages msgs={msgs} />

        <ChatInput handleSendMsg={handleSendMsg} />
      </div>
    </>
  );
}
