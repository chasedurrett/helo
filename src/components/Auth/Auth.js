import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getUserInfo } from "../../redux/reducer";

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  login() {
    const { username, password } = this.state;
    axios
      .post("/api/auth/login", {username, password})
      .then((res) => {
        const { username, profile_pic, userId } = res.data;
        this.props.getUserInfo(username, profile_pic, userId);
        this.props.history.push("./dashboard");
      })
      .catch((err) => {
        alert(`Could not log in`);
      });
  }

  register() {
    const { username, password } = this.state;
    axios
      .post("/api/auth/register", {username, password})
      .then((res) => {
        const { username, profile_pic, userId } = res.data;
        this.props.getUserInfo(username, profile_pic, userId);
        this.props.history.push("./dashboard");
      })
      .catch((err) => {
        console.log(err.res.data);
        alert(err.response.data);
      });
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        Auth
        <input
          placeholder="username.."
          name="username"
          type="text"
          value={username}
          onChange={(e) => this.handleChange(e)}
        />
        <input
          placeholder="password.."
          name="password"
          type="password"
          value={password}
          onChange={(e) => this.handleChange(e)}
        />
        <button onClick={() => this.login()}>Login</button>
        <button onClick={() => this.register()}>Register</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, { getUserInfo })(Auth);
