/* eslint-disable */
import React from "react";

class DownvoteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      downvotes: this.props.downvotes,
      toggled: this.props.toggled
    }
  }
  render() {
    return (
      <div>{this.state.downvotes}</div>
    )
  }
}

export default DownvoteButton;