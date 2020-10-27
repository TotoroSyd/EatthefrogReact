import React from "react";
import Hiddenbanner from "./Hiddenbanner";
import Taskcontainer from "./Taskcontainer";

export default function TasklistV() {
  return (
    <div className="react-mainwrapper">
      <Hiddenbanner />
      <Taskcontainer />
    </div>
  );
}
