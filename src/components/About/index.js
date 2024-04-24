import React from "react";
import User from "../User";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: {}
    }
  }

  async componentDidMount() {
    const data = await fetch('https://api.github.com/users/soukarshadhar');
    const response = await data.json();
    this.setState({
      loading: false,
      user: response
    })
  }

  render() {
    const { loading, user } = this.state;
    const { name = "", location = "", avatar_url = "", email } = user
    return loading ? 
      <h2>Loading...</h2> 
      :
      <div className="grid grid-cols-3 gap-5"> 
        <User
          name={name}
          location={location}
          contact={email || '7978960062'}
          avatar={avatar_url}
        />
      </div>;
  }
}

export default About;