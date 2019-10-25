/* eslint-disable */
import React from "react"; // eslint-disable-line
import VoteButtonContainer from "./VoteButtonContainer.jsx";
import SocialMedia from "./SocialMedia.jsx";
import FlagButton from "./FlagButton.jsx";
import WordMugAd from "./WordMugAd.jsx";

class Definition extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const hashed = this.props.data.hash_tags.split(" ").map((item, key) => (
      <span key={key} className="hash_green">
        {"#" + item + " "}
      </span>
    ));

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
        <div className="word_title">{this.props.data.word.slice(1, this.props.data.word.length -1)}</div>
        <p className="single_def">{this.props.data.definition}</p>
        <p className="example">{this.props.data.example}</p>
        <div className="hash">{hashed}</div>
        <div className="author-date">
          by <span className="author">{this.props.data.created_by}</span>{" "}
          {this.props.data.created_date}
        </div>
        <div className="buttonRow">
          <VoteButtonContainer
            upvotes={this.props.data.upvotes}
            downvotes={this.props.data.downvotes}
          />
          <div className="flag-elip">
            <div className="flag-button">
              <FlagButton />
            </div>
            <div className="elip-button">...</div>
          </div>
        </div>
        <WordMugAd word={this.props.data.word.slice(1, this.props.data.word.length -1)}/>
      </div>
    );
  }
}

export default Definition;
