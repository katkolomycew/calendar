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
        let items = data.items.sort((a, b) => {
          return new Date(a.start.date) - new Date(b.start.date);
        });
        this.setState({ items: items });
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.items.map(item => {
          return (
            <div key={item.id}>
              <h1>{item.summary}</h1>
              <p>{item.start.date ? item.start.date : item.start.dateTime}</p>
              <p>{item.end.date ? item.end.date : item.end.dateTime}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
