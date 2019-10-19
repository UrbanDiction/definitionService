/* eslint-disable */
import React from "react"; // eslint-disable-line
import VoteButtonContainer from "./VoteButtonContainer.jsx";
import SocialMedia from "./SocialMedia.jsx";
import FlagButton from "./FlagButton.jsx";
import WordMugAd from "./WordMugAd.jsx"

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

    const hashed = this.state.hashtags
      .split(" ")
      .map(item => <span className="hash_green">{"#" + item + " "}</span>);

    return (
      <div className="defs">
        <div className="top-row">
          {this.props.def_id === 1 ? (
            <div className="def-count">top definition</div>
          ) : (
            <div className="def-count">{this.props.def_id}</div>
          )}
          <SocialMedia />
        </div>
        <div className="word_title">Word</div>
        <p className="single_def">{this.state.definition}</p>
        <p className="example">{this.state.example}</p>
        <div className="hash">{hashed}</div>

        <div className="author-date">
          by <span className="author">{this.state.createdBy}</span>{" "}
          {this.state.createdDate}
        </div>
        <div className="buttonRow">
          <VoteButtonContainer
            upvotes={this.state.upVotes}
            downvotes={this.state.downVotes}
          />
          <div className="flag-elip">
            <div className="flag-button">
              <FlagButton />
            </div>
            <div className="elip-button">...</div>
          </div>
        </div>
        <WordMugAd />
      </div>
    );
  }
}

export default Definition;
