import React, { Component } from "react";
import e from "express";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      img: "",
      content: "",
    };
  }

  handleChange() {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form>
        <input name="title" onChange={(e) => this.handleChange(e)} />
        <input name="img" onChange={(e) => this.handleChange(e)} />
        <input name="content" onChange={(e) => this.handleChange(e)} />
        </form>
      </div>
    );
  }
}

export default Form;
