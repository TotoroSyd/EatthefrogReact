import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <p>
            Hi! <span style={{ color: "tomato" }}>Eatthefrog</span> is my first
            web app.
            <br />
            Do you have any feedback?
            <br />
            <a href="mailto:phoebe.ngsyd@gmail.com">Drop me a line</a>
          </p>
        </div>
        <div className="contact">
          <a href="https://twitter.com/PhoebeNgg">
            <img
              className="mediaButton"
              src="/images/twitter_before.svg"
              alt=""
            />
          </a>
          <a href="https://github.com/TotoroSyd/Eatthefrog">
            <img
              className="mediaButton"
              src="/images/github_before.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
}
