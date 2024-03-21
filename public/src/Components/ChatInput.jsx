import "../public/ChatInput.css";
import { useState } from "react";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { FaSmile } from "react-icons/fa";

export default function ChatInput() {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");
  console.log("Outsider Message: " + message);

  //EMoji Picker
  const handleEmojiPciker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  //Handling Input change
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  //Adding Emojies
  const handleEmojiClick = (emoji) => {
    setMessage((message) => message + emoji.emoji);
  };
  return (
    <div className="ChatInput">
      <div className="emoji">
        <FaSmile onClick={handleEmojiPciker} />
        {showEmojiPicker && (
          <Picker
            onEmojiClick={handleEmojiClick}
            className="emoji-picker-react "
            height={350}
            width={300}
          />
        )}
      </div>
      <div>
        <form action="" className="input-container">
          <input
            type="text"
            placeholder="Type Your Message"
            className="input"
            onChange={handleChange}
            value={message}
          />

          <IoMdSend className="send" />
        </form>
      </div>
    </div>
  );
}
