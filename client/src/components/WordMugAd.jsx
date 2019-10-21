/* eslint-disable */
import React from "react";

class WordMugAd extends React.Component {
  constructor() {
    super()
  }

  render () {

    const colors = ['#efff00', '#3BFF59', '#144FE6']
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const adColor = {
      backgroundColor: randomColor
    }
    const wordColor = {
      color: randomColor,
      backgroundColor: '#000000'
    }
    const textColor = {
      color: '#000000'
    }

    if (adColor.backgroundColor === '#144FE6') {
      wordColor.color = '#000000'
      wordColor.backgroundColor = '#efff00'
      textColor.color = 'white'
    }

    return (
      <div className="tone" style={adColor}>
          <div className="mug-text" style={textColor}>
            Get a <span className="mug-word" style={wordColor}>Word</span> mug for your cousin
            Steve.
          </div>
          <div className="mug">
            <img
              className="mug-image"
              src="https://d2gatte9o95jao.cloudfront.net/assets/mug-ad-02@2x-5e65e4fe0daf91156b197594c58445606b861fc9317ca6c02fad7b75dfb58e22.png"
            ></img>
          </div>
        </div>
    )
  }
}

export default WordMugAd;