/* eslint-disable */
import React from "react";

class SocialMedia extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="social-media">
        <div className="twitter">
          <a href="https://www.twitter.com/" target="_blank">
            <i class="svgicon svgicon-ud_twitter">
              <svg className="svg-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
                <path d="M7.3 8c5.4 2.8 9.9 2.6 9.9 2.6s-1.7-6.2 3.6-8.9 9 1.9 9 1.9.9-.3 1.6-.5c.7-.3 1.7-.7 1.7-.7l-1.6 3 2.5-.3s-.3.5-1.3 1.4l-1.4 1.4s.4 7.4-3.4 13.1c-3.8 5.7-8.7 9.1-15.9 9.9C4.9 31.6.2 28.6.2 28.6s3.1-.2 5.1-1 4.9-2.8 4.9-2.8-4.1-1.3-5.5-2.7c-1.5-1.4-1.8-2.3-1.8-2.3l4-.1s-4.2-2.3-5.4-4.1S0 12.1 0 12.1l3.1 1.3S.5 9.8.2 7s.5-4.3.5-4.3S1.9 5.2 7.3 8z"></path>
              </svg>
            </i>
          </a>
        </div>
        <div className="facebook">
          <a href="https://www.facebook.com/" target="_blank">
            <i>
              <svg className="svg-facebook" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
                <path d="M19.4 0c-1 0-2 .1-3.2.6-2.3 1-3.5 3.3-3.5 6.9V11H9.4v6h3.3v17h6.7V17h4.5l.6-5.9h-5.2V8.4c0-.8.1-1.4.3-1.8.3-.5.9-.8 1.8-.8h3V0h-5z"></path>
              </svg>
            </i>
          </a>
        </div>
        <div className="share">
            <i>
              <svg className="svg-share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
                <path d="M27.1 12c-1.3 0-2.5.5-3.4 1.4l-11.9-7c.2-.3.2-.9.2-1.2.1-3-2.1-5.2-5-5.2S2 2.2 2 5.1s2.2 5.1 5 5.1c1.3 0 2.5-.5 3.4-1.4l11.9 7c-.2.3-.2.9-.2 1.2 0 .3 0 .9.2 1.2l-11.9 7.2c-.8-.9-2-1.4-3.4-1.4-2.7 0-4.9 2.2-4.9 5s2.2 5 4.9 5 4.9-2.2 4.9-5c0-.3 0-.7-.2-1.2l11.9-7.2c.8.9 2 1.4 3.4 1.4 2.8 0 5-2.2 5-5.1S30 12 27.1 12z"></path>
              </svg>
            </i>
        </div>
        </div>
    );
  }
}

export default SocialMedia;
