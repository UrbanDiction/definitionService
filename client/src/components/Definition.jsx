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
    console.log(this.props.def_id);
    const hashed = this.state.hashtags
      .split(" ")
      .map(item => <span className="hash_green">{"#" + item + " "}</span>);
    return (
      <div className="defs">
        {this.props.def_id === 1 ? (
          <div className="def-count">top definition</div>
        ) : (
          <div className="def-count">{this.props.def_id}</div>
        )}
        <div className="word_title">Word</div>
        <p className="single_def">{this.state.definition}</p>
        <p className="example">{this.state.example}</p>
        <div className="hash">{hashed}</div>
        <div className="buttonContainer">
          <VoteButtonContainer
            upvotes={this.state.upVotes}
            downvotes={this.state.downVotes}
          />
        </div>
        <div className="author-date">
          by <span className="author">{this.state.createdBy}</span>{" "}
          {this.state.createdDate}
        </div>
        <div className="tone">
          <div className="mug-text">Get a <span className="mug-word">Word</span> mug for your cousin Steve.</div>
          <div>
            <img
              className="mug-image"
              src="https://d2gatte9o95jao.cloudfront.net/assets/mug-ad-02@2x-5e65e4fe0daf91156b197594c58445606b861fc9317ca6c02fad7b75dfb58e22.png"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Definition;
