import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        NAV
        <img alt="profile-pic" src={this.props.profile} />
        <h1>{this.props.username}</h1>
        <Link to="/dashboard">Home</Link>
        <Link to="/new">New Post</Link>
        <Link to="/">Logout</Link>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(Nav);
