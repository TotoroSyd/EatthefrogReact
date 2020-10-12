import React from "react";
// import { useTable } from "react-table";
import Task from "./Task";

export default function Tasklistboard() {
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
        <tbody>
          <Task
            name="fdsfsdfsdjkh kfjsdljfsjdf ljfds"
            description="fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds"
            owner="Phoebe"
            date="10-11-2020"
            status="To do"
          />
          <Task
            name="fdsfsdfsdjkh kfjsdljfsjdf ljfds"
            description="fdfsdjkh kfjsdljfsjdf ljfds"
            owner="Phoebe"
            date="10-11-2020"
            status="To do"
          />
          <Task
            name="fdsfsdfsdjkh kfjsdljfsjdf ljfds"
            description="fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds ljfds ljfds ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfdsfdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds"
            owner="Phoebe"
            date="10-11-2020"
            status="To do"
          />
          <Task
            name="fdsfsdfsdjkh kfjsdljfsjdf ljfds"
            description="fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds ljfds ljfds ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfdsfdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds"
            owner="Phoebe"
            date="10-11-2020"
            status="To do"
          />
        </tbody>
      </table>
    </div>
  );
}
