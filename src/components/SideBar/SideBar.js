import { Component } from "react";
import ChatList from "../ChatList/ChatList";
import UserProfile from "../UserProfile/UserProfile";

class SideBar extends Component {
  render() {
    const { contacts, ChatBoxNameToChange, muted, toggleMute } = this.props;
    return (
      <div className="side-bar">
        <UserProfile />
        <ChatList
          contacts={contacts}
          ChatBoxNameToChange={ChatBoxNameToChange}
          muted={muted}
          toggleMute={toggleMute}
        />
      </div>
    );
  }
}

export default SideBar;
