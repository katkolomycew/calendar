import React, { Component } from "react";
import "./Event.css";

class Event extends Component {
  state = {};
  render() {
    return (
      <section>
        <h1>(K)IDIE Calendar</h1>
        <input
          type="text"
          onChange={this.props.setSearchText}
          placeholder="Search and filter events..."
          value={this.props.searchText}
        />
      </section>
    );
  }
}

export default Event;
