import React from "react";

export default function Sidebarbutton({ title, value, onClick }) {
  return (
    <div className="sideBarElement">
      <button type="button" className="btn" onClick={onClick}>
        {title}
      </button>
      <div className="sideBarBadge">{value}</div>
    </div>
  );
}
