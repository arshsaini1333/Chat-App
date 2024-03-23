import "../public/Messages.css";
export default function Messages({ msgs }) {
  return (
    <div className="Messages">
      <div className="chat-messages">
        {msgs.map((msg) => {
          return (
            <div>
              <div className={`message ${msg.fromSelf ? "sended" : "receive"}`}>
                <div className="content">
                  <p>{msg.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
