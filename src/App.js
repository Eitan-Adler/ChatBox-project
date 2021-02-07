import { Component } from "react";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import ChatBox from "./components/ChatBox/ChatBox";
class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Neriya, bar-lev",
        lastMessage:
          "Hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world ",
        img:
          "https://cdn1.vectorstock.com/i/1000x1000/38/05/male-face-avatar-logo-template-pictograph-vector-11333805.jpg",
      },
      {
        id: 2,
        name: "Dana",
        lastMessage: "hello world",
        img:
          "https://cdn5.vectorstock.com/i/1000x1000/06/59/template-avatars-blonde-girl-vector-4930659.jpg",
      },
      {
        id: 3,
        name: "Gershon",
        lastMessage: "hello world",
        img:
          "https://cdn3.vectorstock.com/i/1000x1000/38/17/male-face-avatar-logo-template-pictograph-vector-11333817.jpg",
      },
      {
        id: 4,
        name: "Naveh Adler",
        lastMessage: "hello world",
        img:
          "https://cdn2.vectorstock.com/i/1000x1000/38/21/male-face-avatar-logo-template-pictograph-vector-11333821.jpg",
      },
      {
        id: 5,
        name: "Dani",
        lastMessage: "hello world",
        img:
          "https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictograph-vector-11333831.jpg",
      },
      {
        id: 6,
        name: "Saba",
        lastMessage: "hello world",
        img:
          "https://cdn1.vectorstock.com/i/1000x1000/37/65/male-face-avatar-logo-template-pictograph-vector-11333765.jpg",
      },
      {
        id: 7,
        name: "family group",
        lastMessage: "hello world",
        img:
          "https://previews.123rf.com/images/yupiramos/yupiramos1703/yupiramos170316303/74735483-young-people-avatars-group-vector-illustration-design.jpg",
      },
    ],
    contactChatId: null,
    muted: [],
  };
  toggleMute = (id) => {
    let newArray = [];
    const oldAraay = this.state.muted;
    oldAraay.includes(id)
      ? (newArray = oldAraay.filter((filterID) => filterID !== id))
      : (newArray = [...oldAraay, id]);
    return this.setState({ muted: newArray });
  };
  render() {
    const { contacts, contactChatId, muted } = this.state;
    return (
      <div className="App">
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
        <SideBar
          contacts={contacts}
          ChatBoxNameToChange={(id) => this.setState({ contactChatId: id })}
          muted={muted}
          toggleMute={this.toggleMute}
        />
        <ChatBox
          contacts={contacts}
          contactId={contactChatId}
          muted={muted.includes(contactChatId)}
          toggleMute={this.toggleMute}
        />
      </div>
    );
  }
}

export default App;
