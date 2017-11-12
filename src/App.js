import React, { Component } from "react";
import NewsPost from "./NewsPost";
import "./App.css";

let id = 0;

function goNewsId() {
  id += 1;
  return id;
}

class App extends Component {
  state = {
    news: [],
    newsInput: ""
  };

  handleChange = event => {
    this.setState({ newsInput: event.target.value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const { news, newsInput } = this.state;
      const newNews = { id: goNewsId(), text: newsInput };

      this.setState({ news: [...news, newNews], newsInput: "" });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="todo-container">
          <div className="todo">
            <input
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              type="text"
              value={this.state.newsInput}
              className="todo-input"
            />
          </div>
        </div>
        {this.state.news.map(news => (
          <NewsPost key={news.id} text={news.text} />
        ))}
      </div>
    );
  }
}

export default App;
