import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import ChatBox from "./components/ChatBox/ChatBox";

const App = () => {
  const [contacts, setContacts] = useState([
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
  ]);
  const [contactChatId, setContactChatId] = useState(null);
  const [muted, setmuted] = useState([]);

  const toggleMute = (id) => {
    let newArray = [];
    const oldAraay = muted;
    oldAraay.includes(id)
      ? (newArray = oldAraay.filter((filterID) => filterID !== id))
      : (newArray = [...oldAraay, id]);
    return setmuted(newArray);
  };

  return (
    <div className="App">
      <SideBar
        contacts={contacts}
        ChatBoxNameToChange={(id) => setContactChatId(id)}
        muted={muted}
      />
      <ChatBox
        contacts={contacts}
        contactId={contactChatId}
        muted={muted.includes(contactChatId)}
        toggleMute={toggleMute}
      />
    </div>
  );
};

export default App;
