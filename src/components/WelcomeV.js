import React, { useContext } from "react";
import WCard from "./WCard";
import { TaskContext } from "../contexts/TaskContext";

export default function WelcomeV() {
  const imageRef = React.useRef(null);
  function changeImage(signal) {
    if (signal === "close")
      return (imageRef.current.src = "/images/FrogButtonWhiteBg_close.svg");
    else if (signal === "open") {
      imageRef.current.src = "/images/FrogButtonWhiteBg.svg";
    }
  }

  // Access tasklist from TaskContext
  const { todoToday, tmr, soon, todayDisplay } = useContext(TaskContext);

  return (
    <div role="banner" className="banner">
      <div className="welcome container">
        <div className="welcome_message">
          <h1>Hey!</h1>
          <h3 className="today">{todayDisplay}</h3>
          <h5>
            Your task summary for <br />
            Today, Tomorrow and in three days!
          </h5>
        </div>
        <div className="welcome_summary_card">
          <WCard title="Todo" value={todoToday} />

          <WCard title="TMR" value={tmr} />

          <WCard title="Soon" value={soon} />
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
