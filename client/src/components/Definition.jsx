/* eslint-disable */
import React from "react"; // eslint-disable-line
import VoteButtonContainer from "./VoteButtonContainer.jsx";

class Definition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createdBy: this.props.data.created_by,
      createdDate: this.props.data.created_date,
      definition: this.props.data.definition,
      example: this.props.data.example,
      upVotes: this.props.data.upvotes,
      downVotes: this.props.data.downvotes,
      hashtags: this.props.data.hash_tags,
      id: this.props.data.id,
      word_id: this.props.data.word_id
    };
  }
  render() {
    return (
      <div>
        <VoteButtonContainer
          upvotes={this.state.upVotes}
          downvotes={this.state.downVotes}
        />
      </div>
    );
  }
}

export default Definition;
