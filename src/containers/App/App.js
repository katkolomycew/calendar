import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/calendar/v3/calendars/nology.io_5smheaincm2skd1tcmvv7m37d8@group.calendar.google.com/events?key=AIzaSyDZCnzCqZcunGmoYxYOuuCOGrufEIO17ME"
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ items: data.items });
        console.log(data.items);
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.items.map(item => {
          return (
            <div>
              <p>{item.summary}</p>
              <p>{item.start.date}</p>
              <p>{item.end.date}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
