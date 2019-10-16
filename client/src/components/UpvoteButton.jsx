/* eslint-disable */
import React from "react";

class UpvoteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upvotes: this.props.upvotes,
      toggled: this.props.toggled
    }
  }
  render() {
    return (
      <div>{this.state.upvotes}</div>
    )
  }
}

export default UpvoteButton;