import React from "react";

export default function Actionbutton({ action, onClick }) {
  const create = (
    <div className="sideBarElement">
      <button type="button" className="btn" id="create_btn" onClick={onClick}>
        +
      </button>
    </div>
  );
  if (action === "create") return create;
}
