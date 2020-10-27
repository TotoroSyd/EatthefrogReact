import React, { useState, useContext, useEffect } from "react";
import Sidebarbutton from "./Sidebarbutton";
import Subsidebarbutton from "./Subsidebarbutton";
import Actionbutton from "./Actionbutton";
import Modall from "./Modall";
import Formm from "./Form";
import { TaskContext } from "../contexts/TaskContext";
import { FilterContext } from "../contexts/FilterContext";

export default function Sidebar() {
  // Set statte to control Show/ No show Modal
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const { setFilter } = useContext(FilterContext);

  // Access tasklist from TaskContext
  const {
    all,
    todo,
    inProgress,
    review,
    done,
    tmr,
    soon,
    todoToday,
  } = useContext(TaskContext);

  return (
    <>
      <div className="sideBar">
        <Actionbutton action="create" onClick={handleShow} />
        <Sidebarbutton
          title="All"
          value={all}
          onClick={() => {
            setFilter("all");
          }}
        />
        <Sidebarbutton
          title="Todo"
          value={todo}
          onClick={() => {
            setFilter("todo");
          }}
        />
        <Subsidebarbutton
          title="Today"
          value={todoToday}
          onClick={() => {
            setFilter("todoToday");
          }}
        />
        <Sidebarbutton
          title="In Progress"
          value={inProgress}
          onClick={() => {
            setFilter("inProgress");
          }}
        />
        <Sidebarbutton
          title="Review"
          value={review}
          onClick={() => {
            setFilter("review");
          }}
        />
        <Sidebarbutton
          title="Done"
          value={done}
          onClick={() => {
            setFilter("done");
          }}
        />
        <Sidebarbutton
          title="Tomorrow"
          value={tmr}
          onClick={() => {
            setFilter("tmr");
          }}
        />
        <Sidebarbutton
          title="Soon"
          value={soon}
          onClick={() => {
            setFilter("soon");
          }}
        />
      </div>
      <Modall title="Create task" show={showModal} handleClose={handleClose}>
        <Formm handleClose={handleClose} />
      </Modall>
    </>
  );
}
