import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/calendar/v3/calendars/nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com/events?key=AIzaSyDZCnzCqZcunGmoYxYOuuCOGrufEIO17ME"
    )
      .then(calendar => {
        return calendar.json();
      })
      .then(data => {
        console.log(data);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="body">hgchgfcgh</div>
      </div>
    );
  }
}

export default App;
