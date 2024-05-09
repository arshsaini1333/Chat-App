import "../public/ChatContainer.css";
import Logout from "./Logout";
import ChatInput from "./ChatInput";
import Messages from "./Messages.jsx";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { sendMessageRoute, getMessageRoute } from "../Utils/APIRoutes";
import { v4 as uuidv4, v4 } from "uuid";
//Function
export default function ChatContainer({ currUser, selectedChat, socket }) {
  const [msgs, setMsgs] = useState([]);
  const [arrivalMsg, setArrivalMsg] = useState(null);
  const scrollRef = new useRef();

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

  useEffect(() => {
    const getCurrentChat = async () => {
      if (selectedChat) {
        await JSON.parse(localStorage.getItem("chat-aap-user"))._id;
      }
    };
    getCurrentChat();
  }, [selectedChat]);

  //Sending Message
  const handleSendMsg = async (msg) => {
    await axios.post(sendMessageRoute, {
      from: currUser._id,
      to: selectedChat._id,
      message: msg,
    });
    socket.current.emit("send-msg", {
      to: selectedChat._id,
      from: currUser._id,
      message: msg,
    });
    const messages = [...msgs];
    messages.push({ fromSelf: true, message: msg });
    setMsgs(messages);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMsg({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMsg && setMsgs((prev) => [...prev, arrivalMsg]);
  }, [arrivalMsg]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

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

        <Messages msgs={msgs} uuidv4={uuidv4} scrollRef={scrollRef} />

        <ChatInput
          handleSendMsg={handleSendMsg}
          setArrivalMsg={setArrivalMsg}
        />
      </div>
    </>
  );
}
