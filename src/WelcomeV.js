import React from "react";
import WCard from "./WCard";

export default function WelcomeV() {
  const imageRef = React.useRef(null);
  function changeImage(signal) {
    if (signal === "close")
      return (imageRef.current.src = "/images/FrogButtonWhiteBg_close.svg");
    else if (signal === "open") {
      imageRef.current.src = "/images/FrogButtonWhiteBg.svg";
    }
  }
  return (
    <div role="banner" className="banner">
      <div className="welcome container">
        <div className="welcome_message">
          <h1>Hey!</h1>
          <h3 className="today">Today</h3>
          <h5>
            Your task summary for <br />
            Today, Tomorrow and in three days!
          </h5>
        </div>
        <div className="welcome_summary_card">
          <WCard title="Todo" value="0" />

          <WCard title="TMR" value="0" />

          <WCard title="Soon" value="0" />
        </div>
        <div className="welcome_button_more">
          <a href="task-list-board">
            <img
              className="frogButton"
              src="/images/FrogButtonWhiteBg_close.svg"
              alt=""
              ref={imageRef}
              onMouseOver={() => changeImage("open")}
              onMouseOut={() => changeImage("close")}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
