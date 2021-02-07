import { Component } from "react";
import ContactCard from "../ContactCard/ContactCard";

class ChatList extends Component {
  render() {
    const { contacts, ChatBoxNameToChange, muted, toggleMute } = this.props;
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
            toggleMute={() => toggleMute(id)}
          />
        ))}
      </div>
    );
  }
}
export default ChatList;
