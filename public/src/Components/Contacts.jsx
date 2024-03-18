import logo from "../assets/logo.svg";
import "../public/Contacts.css";
import { useEffect, useState } from "react";
import "react-router-dom";
export default function Contacts({ contacts, currUser, handleChatChange }) {
  const [currUserName, setCurrUserName] = useState(undefined);
  const [currUserImage, setCurrUserImage] = useState(undefined);
  const [currSelected, setCurrSelected] = useState(undefined);

  useEffect(() => {
    if (currUser) {
      setCurrUserImage(currUser.avatarImage);
      setCurrUserName(currUser.username);
    }
  }, [currUser]);

  const changeCurrentChat = (index, contact) => {
    setCurrSelected(index);
    handleChatChange(contact);
  };

  return (
    <>
      {currUserImage && currUserName ? (
        <div className="Contact">
          <div className="brand">
            <img src={logo} alt="Logo" />
            <h3>Chit-Chat</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  className={`contact ${
                    index === currSelected ? "selected" : ""
                  }`}
                  key={index}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64, ${contact.avatarImage}`}
                      alt="avatarImage"
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>{" "}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="curr-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currUserImage}`}
                alt="avatarImage"
              />
            </div>
            <div className="username">
              <h2>{currUserName}</h2>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
