/* eslint-disable */
import React from "react";
import UpvoteButton from "./UpvoteButton.jsx";
import DownvoteButton from "./DownvoteButton.jsx";

class VoteButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonToggle: "none",
      upvotes: this.props.upvotes,
      downvotes: this.props.downvotes
    };
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton(button) {
    if (this.state.buttonToggle === button) {
      return;
    }
    if (this.state.buttonToggle != "none") {
      let newUpvotes = this.state.upvotes, newDownvotes = this.state.downvotes;
      if (button === "upvote") {
        newDownvotes = this.state.downvotes - 1;
        newUpvotes = this.state.upvotes + 1;
      } else {
        newDownvotes = this.state.downvotes + 1;
        newUpvotes = this.state.upvotes - 1;
      }
      this.setState({buttonToggle: button, upvotes: newUpvotes, downvotes: newDownvotes})
    } else {
      let newUpvotes = this.state.upvotes, newDownvotes = this.state.downvotes;
      if (button === "upvote") {
        newUpvotes = this.state.upvotes + 1;
      } else {
        newDownvotes = this.state.downvotes + 1;
      }
      this.setState({buttonToggle: button, upvotes: newUpvotes, downvotes: newDownvotes})

    }
  }

  render() {
    return (
      <div className="btn-group">
        <UpvoteButton
          toggleButton={this.toggleButton}
          buttonState={this.state.buttonToggle}
          upvotes={this.state.upvotes}
        />
        <DownvoteButton
          toggleButton={this.toggleButton}
          buttonState={this.state.buttonToggle}
          downvotes={this.state.downvotes}
        />
      </div>
    );
  }
}

export default VoteButtonContainer;
