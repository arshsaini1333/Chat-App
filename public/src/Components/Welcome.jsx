import "../public/Welcome.css";
import robot from "../assets/robot.gif";
export default function Welcome({ currUser }) {
  return (
    <>
      <div className="Welcome">
        <img src={robot} alt="Robot" />
        <h1>
          Welcome! <span>{currUser.username}</span>
        </h1>
        <h3>Please select a chat to Start Messages</h3>
      </div>
    </>
  );
}
