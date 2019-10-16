/* eslint-disable */
import React from "react"; // eslint-disable-line
import VoteButtonContainer from "./VoteButtonContainer.jsx";

class Definition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createdBy: this.props.created_by,
      createdDate: this.props.created_date,
      definition: this.props.definition,
      example: this.props.example,
      upVotes: this.props.upvotes,
      downVotes: this.props.downvotes,
      hashtags: this.props.hash_tags,
      id: this.props.id,
      word_id: this.props.word_id
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

/*
created_by: "Nick"
created_date: "2017-08-02"
definition: "test def"
downvotes: 1
example: "test example"
hash_tags: "#test"
id: 1
upvotes: 1
word_id: 1
*/
