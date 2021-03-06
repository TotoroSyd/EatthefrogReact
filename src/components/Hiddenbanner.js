import React, { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";

export default function Hiddenbanner() {
  const { setTaskListVisible } = useContext(TaskContext);
  const imageRef = React.useRef(null);
  function changeImage(signal) {
    if (signal === "close")
      return (imageRef.current.src = "/images/FrogButtonWhiteBg_close.svg");
    else if (signal === "open") {
      imageRef.current.src = "/images/FrogButtonWhiteBg.svg";
    }
  }
  return (
    <div className="hidden_banner_button">
      <a href="/#">
        <img
          className="frogButton"
          src="/images/FrogButtonWhiteBg_close.svg"
          alt=""
          ref={imageRef}
          onMouseOver={() => changeImage("open")}
          onMouseOut={() => changeImage("close")}
          onClick={(e) => {
            // compulsory to stop the page to rerender
            e.preventDefault();
            setTaskListVisible(false);
          }}
        />
      </a>
    </div>
  );
}
