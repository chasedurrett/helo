import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {getUserInfo} from '../../redux/reducer'

class Nav extends Component {

  

  render() {
      console.log(this.props)
      const {profile_pic, username} = this.props
    return (
      <div>
        NAV
        <img alt="profile-pic" src={profile_pic} />
        <h1>{username}</h1>
        <Link to="/dashboard">Home</Link>
        <Link to="/new">New Post</Link>
        <Link to="/">Logout</Link>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps, {getUserInfo})(Nav);
