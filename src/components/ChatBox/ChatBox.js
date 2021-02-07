import { Component } from "react";

class ChatBox extends Component {
  render() {
    const { contacts, contactId, muted, toggleMute } = this.props;
    return (
      <div className="chat-box-header">
        {contactId ? (
          <div>
            <div>
              <img
                className="contact-img"
                alt=""
                src={contacts.find((e) => e.id === contactId).img}
              />
            </div>
            {contacts.find((element) => element.id === contactId).name}
            <span
              className="material-icons mute-button"
              onClick={() => toggleMute(contactId)}
            >
              {`speaker_notes${muted && "_off"}`}
            </span>
          </div>
        ) : (
          <div>no chat</div>
        )}
      </div>
    );
  }
}

export default ChatBox;
