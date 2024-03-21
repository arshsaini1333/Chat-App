import "../public/ChatContainer.css";
import Logout from "./Logout";
import ChatInput from "./ChatInput";
import Messages from "./Messages.jsx";
export default function ChatContainer({ currUser, selectedChat }) {
  const handleSendMsg = async (msg) => {};
  {
  }
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
        <div className="chat-messages"></div>
        <Messages />
        <ChatInput handleSendMsg={handleSendMsg} />
      </div>
    </>
  );
}
