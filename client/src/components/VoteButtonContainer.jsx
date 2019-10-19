/* eslint-disable */
import React from "react";
import UpvoteButton from "./UpvoteButton.jsx";
import DownvoteButton from "./DownvoteButton.jsx";
import { Button, ButtonGroup } from 'reactstrap';

class VoteButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonToggle: "none"
    }
  }

  render() {
    return (
      <div className="btn-group">
        <div>
          <UpvoteButton upvotes={this.props.upvotes} toggled={this.state.buttonToggle} />
        </div>
        <div>
          <DownvoteButton downvotes={this.props.downvotes} toggled={this.state.buttonToggle} />
        </div>
      </div>
    );
  }
}

export default VoteButtonContainer;
