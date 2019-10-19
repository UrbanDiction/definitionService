/* eslint-disable */
import React from "react";

class DownvoteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      downvotes: this.props.downvotes,
      toggled: this.props.toggled
    };
    this.downvoteOnClick = this.downvoteOnClick.bind(this);
  }

  downvoteOnClick () {
    if (this.state.toggled === "none") {
      this.setState({toggled: "downvoted"})
    } else if (this.state.toggled === "downvoted") {
      this.setState({toggled: "none"})
    }
  }

  render() {
    return (
      <div
      onClick={this.downvoteOnClick}
      className={this.state.toggled === "none" ? "downvote-wrapper" : "downvote-wrapper clicked"}>
        <div className="downvote-img">
          <i>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
              <path d="M27.8 0v20.4H34V0h-6.2zm-6.2 0H7.7C6.5 0 5.4.9 4.9 2L.3 14.1c-.1.3-.3.7-.3 1.2v3.4c0 1.9 1.4 3.4 3.1 3.4h9.7l-1.5 7.8v.5c0 .7.3 1.4.6 1.9l1.7 1.7 10.2-11.2c.6-.7.9-1.5.9-2.4v-17c0-1.9-1.4-3.4-3.1-3.4z"></path>
            </svg>
          </i>
        </div>
        <div className="downvotes">
        {this.state.downvotes}
        </div>
      </div>
    );
  }
}

export default DownvoteButton;
