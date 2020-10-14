import React, { useContext, useState } from "react";
// import { useTable } from "react-table";
import Task from "./Task";
import { TaskContext } from "./Context"; // secondary export from Context.js

export default function Tasklistboard() {
  // return the value that is stored in the context. const { tasks, setTasks } - setTasks is optional in this component because I dont setTask here
  const { tasks } = useContext(TaskContext);

  // console.log(tasks);

  const task = tasks.map((task) => {
    return (
      <Task
        key={task.key}
        name={task.taskname}
        description={task.taskdescription}
        owner={task.taskowner}
        date={task.taskdate}
        status={task.taskstatus}
      />
    );
  });

  // (
  //   <Task
  //     name="....."
  //     description="fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds fdsfsdfsdjkh kfjsdljfsjdf ljfds"
  //     owner="Phoebe"
  //     date="10-11-2020"
  //     status="To do"
  //   />
  // );

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
