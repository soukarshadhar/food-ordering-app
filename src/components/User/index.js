import React from "react";

class User extends React.Component {
  render() {
    const { name, location, contact, avatar } = this.props;
    return (
      <div className="flex p-2 rounded-lg shadow-lg justify-around bg-slate-200">
        <img className="size-28 rounded-full" src={avatar} alt="user_pic" />
        <div>
          <div>Name: {name}</div>
          <div>Location: {location}</div>
          <div>Contact: {contact}</div>
        </div>
      </div>
    );
  }
}

export default User;
