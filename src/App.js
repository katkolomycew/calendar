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
        console.log(data.items[4].start);
        // let items = data.items.map(item => {
        //   let id = new Date(item.start.date);
        //   let startDate = item.start.date;
        // });
        // return (
        //   <div key={item.id}>
        //     <p>{item.startDate}</p>
        //   </div>
        // );
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.items.map(item => {
          return <p>{item.summary}</p>;
        })}
        <div className="body">hgchgfcgh</div>
      </div>
    );
  }
}

export default App;
