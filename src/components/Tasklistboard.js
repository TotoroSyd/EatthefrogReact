import React, { useContext } from "react";
// import { useTable } from "react-table";
import Task from "./Task";

import { format } from "date-fns";
import { TaskContext } from "../contexts/TaskContext"; // secondary export from Context.js
import { FilterContext } from "../contexts/FilterContext";

export default function Tasklistboard() {
  // return the value that is stored in the context. const { tasks, setTasks } - setTasks is optional in this component because I dont setTask here
  const { tasks, tasksFiltered, todayDisplay } = useContext(TaskContext);
  const { filter } = useContext(FilterContext);

  let task = [];

  if (filter === "" || filter === "all") {
    task = tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          name={task.taskname}
          description={task.taskdescription}
          owner={task.taskowner}
          // taskdate = 1909908090909
          date={format(task.taskdate, "dd-MM-yyyy")}
          status={task.taskstatus}
        />
      );
    });
  } else if (
    [
      "todo",
      "todoToday",
      "review",
      "inProgress",
      "done",
      "tmr",
      "soon",
    ].includes(filter)
  ) {
    task = tasksFiltered.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          name={task.taskname}
          description={task.taskdescription}
          owner={task.taskowner}
          // taskdate = 1909908090909
          date={format(task.taskdate, "dd-MM-yyyy")}
          status={task.taskstatus}
        />
      );
    });
  }

  // const task = tasks.map((task) => {
  //   return (
  //     <Task
  //       key={uuid()}
  //       name={task.taskname}
  //       description={task.taskdescription}
  //       owner={task.taskowner}
  //       // taskdate = 1909908090909
  //       date={format(task.taskdate, "dd-MM-yyyy")}
  //       status={task.taskstatus}
  //     />
  //   );
  // });

  return (
    <div className="task-list-board">
      <h3 className="today">{todayDisplay}</h3>
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
