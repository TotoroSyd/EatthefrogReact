import React from "react";

export default function Subsidebarbutton({ title, value, onClick }) {
  return (
    <div className="sideBarElement">
      <button type="button" className="sub_btn" onClick={onClick}>
        {title}
      </button>
      <div className="sideBarSubBadge">{value}</div>
    </div>
  );
}
