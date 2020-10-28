import React, { useState, createContext, useEffect } from "react";

// exporting context object
export const ModalContext = createContext();

// COntext wrapper component - to store state
export default function ModalContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);
  console.log(edit);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editOwner, setEditOwner] = useState("");
  const [editDate, setEditDate] = useState(Date.now());
  const [editStatus, setEditStatus] = useState("To Do");
  const [idTaskToEdit, setIdTaskToEdit] = useState("");
  // console.log(editName, editDescription, editOwner, editDate, editStatus);

  // Share tasks state
  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
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
        idTaskToEdit,
        setIdTaskToEdit,
        edit,
        setEdit,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
