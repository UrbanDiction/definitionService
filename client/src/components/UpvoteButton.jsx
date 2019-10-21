/* eslint-disable */
import React from "react";

class UpvoteButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
      onClick={() => this.props.toggleButton("upvote")}
      className={this.props.buttonState === "upvote" ? "upvote-wrapper clicked" : "upvote-wrapper"}>
        <div className="upvote-img">
        <i>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
            <path d="M34 15.3c0-1.9-1.4-3.4-3.1-3.4h-9.7l1.5-7.8v-.5c0-.7-.3-1.4-.6-1.9L20.4 0 10.2 11.2c-.6.5-.9 1.4-.9 2.4v17c0 1.9 1.4 3.4 3.1 3.4h13.9c1.2 0 2.3-.8 2.8-2l4.6-12.1c.2-.3.2-.9.2-1.2v-3.4h.1c0 .2 0 0 0 0zM0 34h6.2V13.6H0V34z"></path>
          </svg>
        </i>
        </div>
        <div className="upvotes">
        {this.props.upvotes}
        </div>
      </div>
    );
  }
}

export default UpvoteButton;
