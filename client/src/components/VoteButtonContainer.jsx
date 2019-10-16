/* eslint-disable */
import React from "react";
import UpvoteButton from "./UpvoteButton.jsx";
import DownvoteButton from "./DownvoteButton.jsx";

class VoteButtonContainer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <UpvoteButton />
        </div>
        <div>
          <DownvoteButton />
        </div>
      </div>
    );
  }
}

export default VoteButtonContainer;
