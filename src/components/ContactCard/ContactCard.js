import { Component } from "react";

class ContactCard extends Component {
  render() {
    const { name, lastMessage, img, ChatBoxNameToChange, muted } = this.props;
    return (
      <div className="contact-card" onClick={ChatBoxNameToChange}>
        <img className="contact-img" alt="" src={img} />

        <div className="text-container">
          <div className="contact-name">{name}</div>

          <div className="contact-last-message">
            {lastMessage.length > 30
              ? `${lastMessage.slice(0, 30)}...`
              : lastMessage}
          </div>
          <div className="material-icons">{`speaker_notes${
            muted && "_off"
          }`}</div>
        </div>
      </div>
    );
  }
}

export default ContactCard;
