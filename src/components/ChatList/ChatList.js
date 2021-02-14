import React from "react";
import ContactCard from "../ContactCard/ContactCard";

const ChatList = ({ contacts, ChatBoxNameToChange, muted }) => {
  return (
    <div className="chat-list">
      {contacts.map(({ id, name, lastMessage, img }) => (
        <ContactCard
          key={id}
          name={name}
          lastMessage={lastMessage}
          img={img}
          ChatBoxNameToChange={() => ChatBoxNameToChange(id)}
          muted={muted.includes(id)}
        />
      ))}
    </div>
  );
};

export default ChatList;
