import React from "react";

export default function Hiddenbanner() {
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
      <a href="welcome">
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
  );
}
