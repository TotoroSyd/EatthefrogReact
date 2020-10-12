import React from "react";

export default function Task({ name, description, owner, date, status }) {
  return (
    <tr className="task">
      <td className="th-name">{name}</td>
      <td className="th-description">{description}</td>
      <td className="th-owner">{owner}</td>
      <td className="th-date">{date}</td>
      <td className="th-status">{status}</td>
      <th className="th-action"></th>
    </tr>
  );
}
