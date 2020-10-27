import React from "react";

export default function WCard({ title, value }) {
  return (
    <div className="summary_card_parent todo">
      <h6>{title}</h6>
      <p className="summary_card_content">{value}</p>
      <a href="#accordion">
        <div className="summary_card"></div>
      </a>
    </div>
  );
}
