import React from "react";

export default function Sidebarbutton({ title, value }) {
  return (
    <div className="sideBarElement">
      <button type="button" className="btn">
        {title}
      </button>
      <div className="sideBarBadge">{value}</div>
    </div>
  );
}
