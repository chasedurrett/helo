import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: "",
      userPosts: true,
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  resetState() {
    this.setState({
      search: "",
      userPosts: true,
    });
    setTimeout(() => this.getPosts(), 0);
  }

  getPosts() {
    axios
      .get(
        `/api/posts?userposts=${this.state.userPosts}&search=${this.state.search}`
      )
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { posts } = this.state;
    console.log(posts);
    return (
      <div>
        Dashboard
        <input />
        <button name="search">Search</button>
        <button onClick={() => this.resetState()}>Reset</button>
        <input type="checkbox" />
        <div>
          {posts.map((elem) => (
            <div key={elem.post_id}>
              <Link to={{ pathname: `/post/${elem.post_id}` }}>
                {elem.title}
              </Link>
              <div>{elem.author}</div>
              <div>
                <img alt="profile-pic" src={elem.profile_pic} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => reduxState;

export default connect(mapStateToProps)(Dashboard);
