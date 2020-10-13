import React from "react";

export default function Task({ name, description, owner, date, status }) {
  const taskid = Date.now().toString();
  return (
    <tr className="task" data-task-id={taskid}>
      <td className="th-name">{name}</td>
      <td className="th-description">{description}</td>
      <td className="th-owner">{owner}</td>
      <td className="th-date">{date}</td>
      <td className="th-status">{status}</td>
      <th className="th-action">
        <a href="#" title="Edit" className="edit-btn">
          <img
            src="images/pencil-edit-button.svg"
            alt="pencil-edit-button"
            width="15"
            height="15"
          />
        </a>
        <a
          href="#deleteConfirmationModal"
          title="Delete"
          className="delete-btn"
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
