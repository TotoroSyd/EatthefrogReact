import React, { useState } from "react";
import Sidebarbutton from "./Sidebarbutton";
import Subsidebarbutton from "./Subsidebarbutton";
import Actionbutton from "./Actionbutton";
import Modall from "./Modall";
import Formm from "./Form";

export default function Sidebar() {
  // To get data from Child Formm component
  const [taskObj, setTaskObj] = useState({});
  const callbackFunction = (dataFromModalForm) => {
    setTaskObj(dataFromModalForm);
  };
  // Set statte to control Show/ No show Modal
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const ola = () => {
    console.log(taskObj);
    Object.keys(taskObj).forEach((key) => {
      console.log(key, taskObj[key]);
    });
  };

  return (
    <>
      <div className="sideBar">
        <Actionbutton action="create" onClick={handleShow} />
        <Sidebarbutton title="All" value="0" onClick={ola} />
        <Sidebarbutton title="Todo" value="0" />
        <Subsidebarbutton title="Today" value="0" />
        <Sidebarbutton title="In Progress" value="0" />
        <Sidebarbutton title="Review" value="0" />
        <Sidebarbutton title="Done" value="0" />
        <Sidebarbutton title="Tomorrow" value="0" />
        <Sidebarbutton title="Soon" value="0" />
      </div>
      <Modall title="Create task" show={showModal} handleClose={handleClose}>
        <Formm handleClose={handleClose} dataToParent={callbackFunction} />
      </Modall>
    </>
  );
}
