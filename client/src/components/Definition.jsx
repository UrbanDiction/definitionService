/* eslint-disable */
import React from "react"; // eslint-disable-line

class Definition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upVotes: this.props.upVotes,
      downVotes: this.props.downVotes,
      buttonToggle: "none"
    }
  }
  render() {
    return (
      <div>Test</div>
    )
  }
}

export default Definition;