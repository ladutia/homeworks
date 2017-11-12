import React, { Component } from "react";
import Comment from "./Comment";
import "./NewsPost.css";

let id = 0;

function goCommentId() {
  id += 1;
  return id;
}

class NewsPost extends Component {
  state = {
    comments: [],
    commentInput: ""
  };

  handleChange = event => {
    this.setState({ commentInput: event.target.value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const { comments, commentInput } = this.state;
      const newComment = { id: goCommentId(), text: commentInput };

      this.setState({ comments: [...comments, newComment], commentInput: "" });
    }
  };

  handleDelete = id => {
    this.setState(state => ({
      comments: state.comments.filter(comment => id !== comment.id)
    }));
  };

  render() {
    return (
      <div className="new-post">
        <p>{this.props.text}</p>
        <input
          type="text"
          className="comment-input"
          value={this.state.commentInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        {this.state.comments.map(comment => (
          <Comment
            key={comment.id}
            id={comment.id}
            text={comment.text}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default NewsPost;
