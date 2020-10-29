import React, { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import Modall from "./Modall";
import Formm from "./Form";

export default function Task({ id, name, description, owner, date, status }) {
  // console.log(id, name, description, owner, date, status);
  // Set statte to control Show/ No show Modal
  const {
    showModal,
    setShowModal,
    setModalTitle,
    editName,
    setEditName,
    editDescription,
    setEditDescription,
    setEditOwner,
    setEditDate,
    setEditStatus,
    setIdTaskToEdit,
    setEdit,
  } = useContext(ModalContext);
  const handleShow = () => {
    // this will change the Modal title in the modal which is staying in Sidebar component
    setModalTitle("Edit Task");
    // this will change the state of ShowModall to allow Modal to pop up
    setShowModal(true);
  };
  const populateForm = (id, name, description, owner, date, status) => {
    setIdTaskToEdit(id);
    setEditName(name);
    setEditDescription(description);
    setEditOwner(owner);
    setEditDate(date);
    setEditStatus(status);
  };

  return (
    <tr className="task" id={id}>
      <td className="th-name">{name}</td>
      <td className="th-description">{description}</td>
      <td className="th-owner">{owner}</td>
      <td className="th-date">{date}</td>
      <td className="th-status">{status}</td>
      <th className="th-action">
        <a
          // This stops "The href attribute is required for an anchor to be keyboard accessible.
          // Provide a valid, navigable address as the href value. If you cannot provide an href,
          // but still need the element to resemble a link, use a button and change it with appropriate style"
          // href="#" doesnt work
          href="/#"
          title="Edit"
          className="edit-btn"
          onClick={(e) => {
            e.preventDefault();
            handleShow();
            setEdit(true);
            populateForm(id, name, description, owner, date, status);
          }}
        >
          <img
            src="images/pencil-edit-button.svg"
            alt="pencil-edit-button"
            width="15"
            height="15"
          />
        </a>
        <a
          href="/#"
          title="Delete"
          className="delete-btn"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <img
            src="images/trash.svg"
            alt="delete-button"
            width="15"
            height="15"
          />
        </a>
      </th>
    </tr>
  );
}

// href="javascript:void(0)"
