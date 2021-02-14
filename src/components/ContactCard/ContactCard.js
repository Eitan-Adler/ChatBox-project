import React from "react";
import "./ContactCard.css";
const ContactCard = ({
  name,
  lastMessage,
  img,
  ChatBoxNameToChange,
  muted,
}) => {
  return (
    <div
      className={muted ? "contact-card muted" : "contact-card"}
      onClick={ChatBoxNameToChange}
    >
      <img className="contact-img" alt="" src={img} />

      <div className="text-container">
        <div className="contact-name">{name}</div>

        <div className="contact-last-message">
          {lastMessage.length > 30
            ? `${lastMessage.slice(0, 30)}...`
            : lastMessage}
        </div>
        {/* <div className="material-icons">{`speaker_notes${
            muted && "_off"
          }`}</div> */}
      </div>
    </div>
  );
};

export default ContactCard;
