/* eslint-disable */
import React from "react";
import UpvoteButton from "./UpvoteButton.jsx";
import DownvoteButton from "./DownvoteButton.jsx";

class VoteButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonToggle: "none"
    }
  }
  render() {
    return (
      <div>
        <div>
          <UpvoteButton upvotes={this.props.upvotes} />
        </div>
        <div>
          <DownvoteButton downvotes={this.props.downvotes} />
        </div>
      </div>
    );
  }
}

export default VoteButtonContainer;
