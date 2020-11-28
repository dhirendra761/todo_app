import React, { Component } from "react";
import shortid from "shortid";

export default class TodoForm extends Component {
  state = {
    text: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    //Submit
    if (this.state.text !== "") {
      this.props.onSubmit({
        id: shortid.generate(),
        text: this.state.text,
        complete: false,
      });
    }
    this.setState({
      text: "",
    });
  };
  render() {
    return (
      <form id="to-do-form" onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Enter text..."
        />
        <button onClick={this.handleSubmit}>Add Todo</button>
      </form>
    );
  }
}
