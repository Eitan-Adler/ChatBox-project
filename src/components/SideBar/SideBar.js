import React from "react";
import ChatList from "../ChatList/ChatList";
import UserProfile from "../UserProfile/UserProfile";

const SideBar = ({ contacts, ChatBoxNameToChange, muted }) => {
  return (
    <div className="side-bar">
      <UserProfile />
      <ChatList
        contacts={contacts}
        ChatBoxNameToChange={ChatBoxNameToChange}
        muted={muted}
      />
    </div>
  );
};

export default SideBar;
