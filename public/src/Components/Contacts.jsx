import logo from "../assets/logo.svg";
import "../public/Contacts.css";
import { useEffect, useState } from "react";

export default function Contacts({ contacts, currUser }) {
  const [currUserName, setCurrUserName] = useState(undefined);
  const [currUserImage, setCurrUserImage] = useState(undefined);
  const [currSelected, setCurrSelected] = useState(undefined);

  useEffect(() => {
    if (currUser) {
      setCurrUserImage(currUser.avatarImage);
      setCurrUserName(currUser.username);
    }
  }, [currUser]);

  const changeCurrentChat = (index, contact) => {};

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
              <h1>{currUserName}</h1>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}