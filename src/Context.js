import React, { useState } from "react";

// exporting context object
export const TaskContext = React.createContext();

// COntext wrapper component - to store state
export default function TaskProvider({ children }) {
  const defaultTask = {
    key: Date.now().toString(),
    taskname: "default",
    taskdescription: "default",
    taskowner: "Phoebe",
    taskdate: "10-11-2020",
    taskstatus: "To do",
  };

  const [tasks, setTasks] = useState([defaultTask]);

  // Share tasks state
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
