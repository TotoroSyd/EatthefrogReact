import React, { useState, useContext, useEffect } from "react";
import Sidebarbutton from "./Sidebarbutton";
import Subsidebarbutton from "./Subsidebarbutton";
import Actionbutton from "./Actionbutton";
import Modall from "./Modall";
import Formm from "./Form";
import { TaskContext } from "../contexts/TaskContext";
import { FilterContext } from "../contexts/FilterContext";
import { ModalContext } from "../contexts/ModalContext";

export default function Sidebar() {
  // Set statte to control Show/ No show Modal
  const {
    showModal,
    setShowModal,
    modalTitle,
    setModalTitle,
    editName,
    setEditName,
    editDescription,
    setEditDescription,
    editOwner,
    setEditOwner,
    editDate,
    setEditDate,
    editStatus,
    setEditStatus,
  } = useContext(ModalContext);

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
  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    // show Modal Create Task
    setShowModal(true);
    // change Modal title to Create Task (if previously it was set as Edit task)
    setModalTitle("Create Task");
    // reset Form fields
    setEditName("");
    setEditDescription("");
    setEditOwner("");
    setEditStatus("To Do");
    setEditDate(Date.now());
  };

  return (
    <>
      <div className="sideBar">
        <Actionbutton
          action="create"
          onClick={(e) => {
            handleShow();
          }}
        />
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
      <Modall title={modalTitle} show={showModal} handleClose={handleClose}>
        <Formm
          handleClose={handleClose}
          editName={editName}
          editDescription={editDescription}
          editOwner={editOwner}
          editDate={editDate}
          editStatus={editStatus}
        />
      </Modall>
    </>
  );
}
