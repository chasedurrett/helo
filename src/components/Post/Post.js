import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      img: "",
      content: "",
      author: "",
      authorPicture: "",
      author_id: "",
      post_id: "",
    };
  }
  componentDidMount(){
      this.getPost()
  }

  getPost() {
    const postId = this.props.match.params;
    axios.get(`/api/posts/${postId}`).then((res) => {
      this.setState({
        title: res.data.title,
        img: res.data.img,
        content: res.data.content,
        author: res.data.author,
        authorPicture: res.data.authorPicture,
        author_id: res.data.author_id,
        post_id: res.data.post_id,
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>{this.state.title}</h1>
          <h3>by {this.state.author}</h3>
          <img alt="author-profile-pic" src={this.state.authorPicture} />
        </div>
        <div>
          <div>
            <img alt="post-content" src={this.state.img} />
          </div>
          <div>
            <p>{this.state.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
