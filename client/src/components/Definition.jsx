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
    console.log(this.props.def_id)
    const hashed = this.state.hashtags.split(" ").map(item => <span className="hash_green">{"#" + item + " "}</span>);
    return (
      <div className="defs">

        {this.props.def_id === 1 ? <div className="def-count">top definition</div> : <div className="def-count">{this.props.def_id}</div>}
        <div className="word-title">Word</div>
        <p>{this.state.definition}</p>
        <p className="example">{this.state.example}</p>
        <div className="hash">{hashed}</div>
        <div className="buttonContainer">
        <VoteButtonContainer
          upvotes={this.state.upVotes}
          downvotes={this.state.downVotes}
        />
        </div>
        <div>
          by <span className="author">{this.state.createdBy}</span> {this.state.createdDate}
        </div>
      </div>
    );
  }
}

export default Definition;
