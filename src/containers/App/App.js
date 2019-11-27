import React, { Component } from "react";
import Event from "../../components/Event/Event";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      searchText: "",
      filteredItems: []
    };
  }

  setSearchText = event => {
    const searchText = event.target.value;
    this.setState({ searchText }, this.filteredItems);
  };

  filteredItems = () => {
    const filteredItems = this.state.items.filter(item => {
      return item.summary.toLowerCase().includes(this.state.searchText);
    });
    this.setState({ filteredItems });
  };

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
        this.setState({ items: items, filteredItems: items });
      });
  }

  render() {
    return (
      <div className="container">
        <Event
          placeholder="Search and filter events..."
          setSearchText={this.setSearchText}
          searchText={this.state.searchText}
        />
        {this.state.filteredItems.map(item => {
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
