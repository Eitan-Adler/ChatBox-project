import { Component } from "react";

class UserProfile extends Component {
  state = {
    name: "Eitan Adler",
    status: "online",
    img:
      "https://www.creativefabrica.com/wp-content/uploads/2019/12/04/AVATAR_FINAL_2-6-580x386.jpg",
  };
  render() {
    const { name, status, img } = this.state;
    return (
      <div className="user-profile">
        <img className="user-img" alt="" src={img} />
        <div className="user-profile-text-container">
          <div className="user-name">{name}</div>
          <div className="user-status">{status}</div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
