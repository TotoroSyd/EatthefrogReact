import React, { useState } from "react";
// import { useTable } from "react-table";
import Task from "./Task";

export default function Tasklistboard() {
  // const [taskObj, setTaskObj] = useState({ name: 1 });
  const task = (
    <Task
      name="....."
      description="fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds"
      owner="Phoebe"
      date="10-11-2020"
      status="To do"
    />
  );

  return (
    <div className="task-list-board">
      <h3 className="today">Thursday, Sep 3, 2020</h3>
      <table className="task-table">
        <thead>
          <tr>
            <th className="th-name">Task</th>
            <th className="th-description">Description</th>
            <th className="th-owner">Owner</th>
            <th className="th-date">Date</th>
            <th className="th-status">Status</th>
            <th className="th-action"></th>
          </tr>
        </thead>
        <tbody>{task}</tbody>
      </table>
    </div>
  );
}
