import React from "react";

export default function Subsidebarbutton({ title, value }) {
  return (
    <div className="sideBarElement">
      <button type="button" className="sub_btn">
        {title}
      </button>
      <div className="sideBarSubBadge">{value}</div>
    </div>
  );
}
