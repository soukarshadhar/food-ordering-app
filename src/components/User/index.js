import React from "react";

class User extends React.Component {
  render() {
    const {name, location, contact, avatar } = this.props;
    return (
      <div className="user-card">
        <img className="user-img" src={avatar} alt="user_pic"/>
        <div className="user-details">
          <div>Name: {name}</div>
          <div className="my-10">Location: {location}</div>
          <div>Contact: {contact}</div>
        </div>
      </div>
    );
  }
}

export default User;