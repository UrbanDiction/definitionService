/* eslint-disable */
import React from "react";

class WordMugAd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordColor: {},
      adColor: {},
      textColor: {},
      randomRelation: "",
      randomName: ""
    };
  }

  componentDidMount() {
    const colors = ["#efff00", "#3BFF59", "#144FE6"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const adColor = {
      backgroundColor: randomColor
    };
    const wordColor = {
      color: randomColor,
      backgroundColor: "#000000"
    };
    const textColor = {
      color: "#000000"
    };

    if (adColor.backgroundColor === "#144FE6") {
      wordColor.color = "#000000";
      wordColor.backgroundColor = "#efff00";
      textColor.color = "white";
    }

    const relations = [
      "cousin",
      "uncle",
      "aunt",
      "nephew",
      "mama",
      "half-brother",
      "accountant",
      "buddy",
      "dog",
      "bunkmate",
      "barber",
      "best friend",
      "ferret",
      "priest"
    ];
    const names = [
      "Steve",
      "Ted",
      "Marcie",
      "Paulie",
      "Susan",
      "Doug",
      "Judy",
      "Frank",
      "Tony",
      "Abdul",
      "Jeff",
      "Tammy",
      "Jim",
      "Julio",
      "Juan",
      "Vlad",
      "Helen",
      "Rebecca",
      "Jessie"
    ];
    const randomRelation =
      relations[Math.floor(Math.random() * relations.length)];
    const randomName = names[Math.floor(Math.random() * names.length)];

    this.setState({
      wordColor,
      adColor,
      textColor,
      randomRelation,
      randomName
    });
  }

  render() {
    return (
      <div className="tone" style={this.state.adColor}>
        <div className="mug-text" style={this.state.textColor}>
          Get a{" "}
          <span className="mug-word" style={this.state.wordColor}>
            {this.props.word}
          </span>{" "}
          mug for your {this.state.randomRelation} {this.state.randomName}.
        </div>
        <div className="mug">
          <img
            className="mug-image"
            src="https://d2gatte9o95jao.cloudfront.net/assets/mug-ad-02@2x-5e65e4fe0daf91156b197594c58445606b861fc9317ca6c02fad7b75dfb58e22.png"
          ></img>
        </div>
      </div>
    );
  }
}

export default WordMugAd;
